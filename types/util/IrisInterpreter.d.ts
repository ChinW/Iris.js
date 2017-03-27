import { IrisValue } from "../core/IrisValue";
import { IrisMethod } from "../core/IrisMethod";
import { IrisModule } from "../core/IrisModule";
import { IrisClass } from "../core/IrisClass";
import { IrisInterface } from "../core/IrisInterface";
import { IrisNativeClassBase } from "../interface/IrisNativeClassBase";
export declare class IrisInterpreter {
    method_class_generated: boolean;
    private constances;
    private global_values;
    private main_methods;
    private _nil;
    readonly nil: IrisValue;
    private _true;
    readonly true: IrisValue;
    private _false;
    readonly false: IrisValue;
    constructor();
    add_main_method(name: string, method: IrisMethod): void;
    get_main_method(name: string): IrisMethod | undefined;
    add_constance(name: string, value: IrisValue): void;
    get_constance(name: string): IrisValue | undefined;
    add_global_value(name: string, value: IrisValue): void;
    get_global_value(name: string): IrisValue | undefined;
    get_module(full_path: string): IrisModule | undefined;
    get_module(full_path: string[]): IrisModule | undefined;
    get_class(full_path: string): IrisClass | undefined;
    get_class(full_path: string[]): IrisClass | undefined;
    get_interface(full_path: string): IrisInterface | undefined;
    get_interface(full_path: string[]): IrisInterface | undefined;
    regist_class(class_obj: IrisNativeClassBase): boolean;
    initialize(): boolean;
    shut_down(): boolean;
}
declare const IrisIntpr: IrisInterpreter;
export { IrisIntpr };