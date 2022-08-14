import { readonly } from "../reactive";

describe('readonly',()=>{
    it('happy path',()=>{
        const original = { foo:1, bar : { name : 2 }};
        const wrapped = readonly(original);
        expect(original).not.toBe(wrapped);
        expect(wrapped.foo).toBe(1);
    })

    it('warn when call set',()=>{
        console.warn = jest.fn();
        const user = readonly({
            age: 10
        })
        user.age = 11;
        expect(console.warn).toBeCalled();
    })
})