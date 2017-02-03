/**
 * IrisInteger class
 * Created by DaraW on 2017-1-15
 */
import IrisMethod from "../core/iris_method";
import { warn, log } from '../util/iris_debug';
import { IrisDev } from "../util/iris_dev";

import {
        integer_sym
    } from "../util/iris_symbol";

export const IntegerOperation = {
    Add: 0,
    Sub: 1,
    Mul: 2,
    Div: 3,
    Power: 4,
    Mod: 5,

    Shr: 6,
    Shl: 7,
    Sar: 8,
    Sal: 9,
    BitXor: 10,
    BitAnd: 11,
    BitOr: 12,

    Equal: 13,
    NotEqual: 14,
    BigThan: 15,
    BigThanOrEqual: 16,
    LessThan: 17,
    LessThanOrEqual: 18
};

export class IrisInteger {

    native_class_name_define() {
        return "Integer";
    }

    native_super_class_define() {
        return IrisDev.get_class("Object");
    }

    native_super_module_define() {
        return null;
    }

    native_alloc() {
        return new IrisInteger.IrisIntegerTag(0);
    }

    native_class_define(class_obj) {
        class_obj.add_instance_method(IrisInteger, "Add", "+", 1, false, IrisMethod.MethodAuthority.Everyone);
        class_obj.AddInstanceMethod(IrisInteger.class, "Sub", "-", 1, false, IrisMethod.MethodAuthority.Everyone);
        class_obj.AddInstanceMethod(IrisInteger.class, "Mul", "*", 1, false, IrisMethod.MethodAuthority.Everyone);
        class_obj.AddInstanceMethod(IrisInteger.class, "Div", "/", 1, false, IrisMethod.MethodAuthority.Everyone);
        class_obj.AddInstanceMethod(IrisInteger.class, "Mod", "%", 1, false, IrisMethod.MethodAuthority.Everyone);
        class_obj.AddInstanceMethod(IrisInteger.class, "Power", "**", 1, false, IrisMethod.MethodAuthority.Everyone);

        class_obj.AddInstanceMethod(IrisInteger.class, "Equal", "==", 1, false, IrisMethod.MethodAuthority.Everyone);
        class_obj.AddInstanceMethod(IrisInteger.class, "NotEqual", "!=", 1, false, IrisMethod.MethodAuthority.Everyone);
        class_obj.AddInstanceMethod(IrisInteger.class, "BigThan", ">", 1, false, IrisMethod.MethodAuthority.Everyone);
        class_obj.AddInstanceMethod(IrisInteger.class, "BigThanOrEqual", ">=", 1, false, IrisMethod.MethodAuthority.Everyone);
        class_obj.AddInstanceMethod(IrisInteger.class, "LessThan", "<", 1, false, IrisMethod.MethodAuthority.Everyone);
        class_obj.AddInstanceMethod(IrisInteger.class, "LessThanOrEqual", "<=", 1, false, IrisMethod.MethodAuthority.Everyone);

        class_obj.AddInstanceMethod(IrisInteger.class, "Shr", ">>", 1, false, IrisMethod.MethodAuthority.Everyone);
        class_obj.AddInstanceMethod(IrisInteger.class, "Sar", ">>>", 1, false, IrisMethod.MethodAuthority.Everyone);
        class_obj.AddInstanceMethod(IrisInteger.class, "Shl", "<<", 1, false, IrisMethod.MethodAuthority.Everyone);
        class_obj.AddInstanceMethod(IrisInteger.class, "Sal", "<<<", 1, false, IrisMethod.MethodAuthority.Everyone);
        class_obj.AddInstanceMethod(IrisInteger.class, "BitXor", "^", 1, false, IrisMethod.MethodAuthority.Everyone);
        class_obj.AddInstanceMethod(IrisInteger.class, "BitOr", "|", 1, false, IrisMethod.MethodAuthority.Everyone);
        class_obj.AddInstanceMethod(IrisInteger.class, "BitAnd", "&", 1, false, IrisMethod.MethodAuthority.Everyone);

        class_obj.AddInstanceMethod(IrisInteger.class, "BitNot", "~", 0, false, IrisMethod.MethodAuthority.Everyone);
        class_obj.AddInstanceMethod(IrisInteger.class, "Minus", "__minus", 0, false, IrisMethod.MethodAuthority.Everyone);
        class_obj.AddInstanceMethod(IrisInteger.class, "Plus", "__plus", 0, false, IrisMethod.MethodAuthority.Everyone);

        class_obj.AddInstanceMethod(IrisInteger.class, "ToString", "to_string", 0, false, IrisMethod.MethodAuthority.Everyone);
        class_obj.AddInstanceMethod(IrisInteger.class, "ToFloat", "to_float", 0, false, IrisMethod.MethodAuthority.Everyone);

    }

    static get IrisIntegerTag() {
        return IrisIntegerTag;
    }

    static cast_operation(type, left_value, right_value) {
        let result = null;
        let need_cast; // TODO
        if (need_cast) {
            if (type != IntegerOperation.Mod) {
                let cast_left_value = (new IrisInteger.IrisIntegerTag()).to_float.call(left_value);
                let org_right_value ; // TODO
                let result_value = null;
                switch(type) {
                    case IntegerOperation.Add:
                        result_value = cast_left_value.add(org_right_value);
                        break;
                    case IntegerOperation.Sub:
                        result_value = cast_left_value.sub(org_right_value);
                        break;
                    case IntegerOperation.Mul:
                        result_value = cast_left_value.mul(org_right_value);
                        break;
                    case IntegerOperation.Div:
                        result_value = cast_left_value.div(org_right_value);
                        break;
                    case IntegerOperation.Power:
                        result_value = cast_left_value.power(org_right_value);
                        break;
                    default:
                        break;
                }
                result = IrisDev.create_float(0.0);
                result.object.native_object = result_value;
            } else {
                let cast_right_value = (new IrisFloat.IrisFloatTag()).to_integer.call(right_value);
                let org_left_value = IrisDev.get_native_objec_ref(left_value);
                let result_value = org_left_value.mod(cast_right_value);
                result = IrisDev.create_int(0);
                result.object.native_object = result_value;
            }
        } else {
            let org_left_value = IrisDev.get_native_objec_ref(left_value);
			let org_right_value = IrisDev.get_native_objec_ref(right_value);
			let result_value = null;
			switch(type) {
                case IntegerOperation.Add:
                    result_value = cast_left_value.add(org_right_value);
                    break;
                case IntegerOperation.Sub:
                    result_value = cast_left_value.sub(org_right_value);
                    break;
                case IntegerOperation.Mul:
                    result_value = cast_left_value.mul(org_right_value);
                    break;
                case IntegerOperation.Div:
                    result_value = cast_left_value.div(org_right_value);
                    break;
                case IntegerOperation.Power:
                    result_value = cast_left_value.power(org_right_value);
                    break;
                default:
                    break;
            }

			result = IrisDev.create_int(0);
            result.object.native_object = result_value;
        }

        return result;
    }

    static cmp_operation(type, left_value, right_value) {
        let cmp_result = false;
        let need_cast; // TODO
        if (need_cast) {
            let cast_left_value = (new IrisInteger.IrisIntegerTag()).to_float.call(left_value);
            let org_right_value = IrisDev.get_native_objec_ref(right_value);
            switch(type) {
                case IntegerOperation.Equal:
                    cmp_result = cast_left_value.equal(org_right_value);
                    break;
                case IntegerOperation.NotEqual:
                    cmp_result = cast_left_value.not_equal(org_right_value);
                    break;
                case IntegerOperation.BigThan:
                    cmp_result = cast_left_value.big_than(org_right_value);
                    break;
                case IntegerOperation.BigThanOrEqual:
                    cmp_result = cast_left_value.big_than_or_equal(org_right_value);
                    break;
                case IntegerOperation.LessThan:
                    cmp_result = cast_left_value.less_than(org_right_value);
                    break;
                case IntegerOperation.LessThanOrEqual:
                    cmp_result = cast_left_value.less_than_or_equal(org_right_value);
                    break;
                default:
                    break;
            }
        } else {
            let org_left_value = IrisDev.get_native_objec_ref(left_value);
			let org_right_value = IrisDev.get_native_objec_ref(right_value);
			switch(type) {
                case IntegerOperation.Equal:
                    cmp_result = cast_left_value.equal(org_right_value);
                    break;
                case IntegerOperation.NotEqual:
                    cmp_result = cast_left_value.not_equal(org_right_value);
                    break;
                case IntegerOperation.BigThan:
                    cmp_result = cast_left_value.big_than(org_right_value);
                    break;
                case IntegerOperation.BigThanOrEqual:
                    cmp_result = cast_left_value.big_than_or_equal(org_right_value);
                    break;
                case IntegerOperation.LessThan:
                    cmp_result = cast_left_value.less_than(org_right_value);
                    break;
                case IntegerOperation.LessThanOrEqual:
                    cmp_result = cast_left_value.less_than_or_equal(org_right_value);
                    break;
                default:
                    break;
            }
        }

        return cmp_result ? IrisDev.true : IrisDev.false;
    }

    static bit_operation(type, left_value, right_value) {
        if (!IrisDev.check_class(right_value, "Integer")) {
            return IrisDev.nil;
        }

        let org_left_value = IrisDev.get_native_objec_ref(left_value);
        let org_right_value = IrisDev.get_native_objec_ref(right_value);
        let result_value = null;
        switch(type) {
            case IntegerOperation.Sal:
                result_value = cast_left_value.sal(org_right_value);
                break;
            case IntegerOperation.Sar:
                result_value = cast_left_value.sar(org_right_value);
                break;
            case IntegerOperation.Shl:
                result_value = cast_left_value.shl(org_right_value);
                break;
            case IntegerOperation.Shr:
                result_value = cast_left_value.shr(org_right_value);
                break;
            case IntegerOperation.BitAnd:
                result_value = cast_left_value.bit_and(org_right_value);
                break;
            case IntegerOperation.BitOr:
                result_value = cast_left_value.bit_or(org_right_value);
                break;
            case IntegerOperation.BitXor:
                result_value = cast_left_value.bit_xor(org_right_value);
                break;
            default:
                break;
        }

        result = IrisDev.create_int(0);
        result.object.native_object = result_value;
        return result;
    }

    static add(self, parameter_list, variable_parameter_list, context, thread_info) {
        return this.cast_operation(IntegerOperation.Add, self, parameter_list[0]);
    }

    static sub(self, parameter_list, variable_parameter_list, context, thread_info) {
        return this.cast_operation(IntegerOperation.Sub, self, parameter_list[0]);
    }

    static mul(self, parameter_list, variable_parameter_list, context, thread_info) {
        return this.cast_operation(IntegerOperation.Mul, self, parameter_list[0]);
    }

    static div(self, parameter_list, variable_parameter_list, context, thread_info) {
        return this.cast_operation(IntegerOperation.Div, self, parameter_list[0]);
    }

    static mod(self, parameter_list, variable_parameter_list, context, thread_info) {
        return this.cast_operation(IntegerOperation.Mod, self, parameter_list[0]);
    }

    static power(self, parameter_list, variable_parameter_list, context, thread_info) {
        return this.cast_operation(IntegerOperation.Power, self, parameter_list[0]);
    }

    static equal(self, parameter_list, variable_parameter_list, context, thread_info) {
        return this.cmp_operation(IntegerOperation.Equal, self, parameter_list[0]);
    }

    static not_equal(self, parameter_list, variable_parameter_list, context, thread_info) {
        return this.cmp_operation(IntegerOperation.NotEqual, self, parameter_list[0]);
    }

    static big_than(self, parameter_list, variable_parameter_list, context, thread_info) {
        return this.cmp_operation(IntegerOperation.BigThan, self, parameter_list[0]);
    }

    static big_than_or_equal(self, parameter_list, variable_parameter_list, context, thread_info) {
        return this.cmp_operation(IntegerOperation.BigThanOrEqual, self, parameter_list[0]);
    }

    static less_than(self, parameter_list, variable_parameter_list, context, thread_info) {
        return this.cmp_operation(IntegerOperation.LessThan, self, parameter_list[0]);
    }

    static less_than_or_equal(self, parameter_list, variable_parameter_list, context, thread_info) {
        return this.cmp_operation(IntegerOperation.LessThanOrEqual, self, parameter_list[0]);
    }

    static shr(self, parameter_list, variable_parameter_list, context, thread_info) {
        return this.bit_operation(IntegerOperation.Shr, self, parameter_list[0]);
    }

    static sar(self, parameter_list, variable_parameter_list, context, thread_info) {
        return this.bit_operation(IntegerOperation.Sar, self, parameter_list[0]);
    }

    static shl(self, parameter_list, variable_parameter_list, context, thread_info) {
        return this.bit_operation(IntegerOperation.Shl, self, parameter_list[0]);
    }

    static sal(self, parameter_list, variable_parameter_list, context, thread_info) {
        return this.bit_operation(IntegerOperation.Sal, self, parameter_list[0]);
    }

    static bit_xor(self, parameter_list, variable_parameter_list, context, thread_info) {
        return this.bit_operation(IntegerOperation.BitXor, self, parameter_list[0]);
    }

    static bit_or(self, parameter_list, variable_parameter_list, context, thread_info) {
        return this.bit_operation(IntegerOperation.BitOr, self, parameter_list[0]);
    }

    static bit_and(self, parameter_list, variable_parameter_list, context, thread_info) {
        return this.bit_operation(IntegerOperation.BitAnd, self, parameter_list[0]);
    }

    static bit_not(self, parameter_list, variable_parameter_list, context, thread_info) {
        let self_value = IrisDev.get_native_objec_ref(self);
        let result = IrisDev.create_int(0);
        result.object.native_object = self_value.bit_not();
        return result;
    }

    static plus(self, parameter_list, variable_parameter_list, context, thread_info) {
        let self_value = IrisDev.get_native_objec_ref(self);
        let result = IrisDev.create_int(0);
        result.object.native_object = self_value.plus();
        return result;
    }

    static minus(self, parameter_list, variable_parameter_list, context, thread_info) {
        let self_value = IrisDev.get_native_objec_ref(self);
        let result = IrisDev.create_int(0);
        result.object.native_object = self_value.minus();
        return result;
    }

    static to_float(self, parameter_list, variable_parameter_list, context, thread_info) {
        let result = IrisDev.create_float(IrisDev.get_int(self));
        return result;
    }

    static to_string(self, parameter_list, variable_parameter_list, context, thread_info) {
        let result = IrisDev.create_string(IrisDev.get_native_objec_ref(self).to_string());
        return result;
    }
}

class IrisIntegerTag {
    constructor(integer) {
        this[integer_sym] = integer;
    }

    to_float() {
        return new IrisFloat.IrisFloatTag(this[integer_sym]);
    }

    to_string() {
        return this[integer_sym].toString();
    }

    add(target) {
        return new IrisIntegerTag(this[integer_sym] + target.integer);
    }

    sub(target) {
        return new IrisIntegerTag(this[integer_sym] - target.integer);
    }

    mul(target) {
        return new IrisIntegerTag(this[integer_sym] * target.integer);
    }

    div(target) {
        return new IrisIntegerTag(this[integer_sym] / target.integer);
    }

    mod(target) {
        return new IrisIntegerTag(this[integer_sym] % target.integer);
    }

    power(target) {
        return new IrisIntegerTag(Math.pow(this[integer_sym], target.integer));
    }

    shl(target) {
        return new IrisIntegerTag(this[integer_sym] >> target.integer);
    }

    sal(target) {
        return new IrisIntegerTag(this[integer_sym] >>> target.integer);
    }

    shr(target) {
        return new IrisIntegerTag(this[integer_sym] << target.integer);
    }

    sar(target) {
        return new IrisIntegerTag(this[integer_sym] << target.integer);
    }

    bit_xor(target) {
        return new IrisIntegerTag(this[integer_sym] ^ target.integer);
    }

    bit_or(target) {
        return new IrisIntegerTag(this[integer_sym] | target.integer);
    }

    bit_and(target) {
        return new IrisIntegerTag(this[integer_sym] & target.integer);
    }

    bit_not() {
        return new IrisIntegerTag(~this[integer_sym]);
    }

    equal(target) {
        return this[integer_sym] === target.integer;
    }

    not_equal(target) {
        return !this.equal(target);
    }

    big_than(target) {
        return this[integer_sym] > target.integer;
    }

    big_than_or_equal(target) {
        return this[integer_sym] >= target.integer;
    }

    less_than(target) {
        return this[integer_sym] < target.integer;
    }

    less_than_or_equal(target) {
        return this[integer_sym] <= target.integer;
    }

    plus() {
        return new IrisIntegerTag(this[integer_sym]);
    }

    minus() {
        return new IrisIntegerTag(-this[integer_sym]);
    }

    get integer() {
        return this[integer_sym];
    }

    set integer(integer) {
        this[integer_sym] = integer;
    }

}
