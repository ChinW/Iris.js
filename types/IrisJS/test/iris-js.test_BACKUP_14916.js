import DummyClass from '../src/iris-js';
/**
 * Dummy test
 */
describe('Dummy test', () => {
    it('works if true is truthy', () => {
        expect(true).toBeTruthy();
    });
    it('DummyClass is instantiable', () => {
        expect(new DummyClass()).toBeInstanceOf(DummyClass);
    });
});
//# sourceMappingURL=iris-js.test.js.map