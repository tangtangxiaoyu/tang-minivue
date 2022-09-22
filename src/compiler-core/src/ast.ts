import { CREATE_ELEMENT_VNODE } from "./runtimeHelpers";

export const enum NodeTypes {
    INTERPOLATION,
    ELEMENT,
    SIMPLE_EXPRESSION,
    TEXT,
    ROOT,
    COMPOUND_EXPRESSION
} 

export function createVNodeCall(context,tag, props, children){
    context.helper(CREATE_ELEMENT_VNODE);
    return {
        type: NodeTypes.ELEMENT,
        tag,
        props,
        children
    }
}