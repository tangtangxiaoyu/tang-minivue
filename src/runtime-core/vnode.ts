import { ShapeFlage } from "../shared/ShapeFlage"

export function createVNode( type,props?,children?){
    const vnode = {
        type,
        props,
        children,
        shapeFlage: getShapeFlage(type),
        el:null
    }
    if(typeof children === "string"){
        vnode.shapeFlage |= ShapeFlage.TEXT_CHILDREN
    }else if(Array.isArray(children)){
        vnode.shapeFlage |= ShapeFlage.ARRAY_CHILDREN
    }
    return vnode
}

function getShapeFlage(type){
    return typeof type === "string" ? ShapeFlage.ELEMENT : ShapeFlage.STATEFUL_COMPONENT
}