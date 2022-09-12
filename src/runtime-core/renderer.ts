import { ShapeFlage } from "../shared/ShapeFlage";
import { createComponentInstance, setupComponent } from "./component";

export function render(vnode,container){
    patch(vnode,container)
}

function patch(vnode: any, container: any) {
    const { shapeFlage } = vnode;
    if(shapeFlage & ShapeFlage.ELEMENT){
        processElement(vnode,container);
    }else if(shapeFlage & ShapeFlage.STATEFUL_COMPONENT){
        processComponent(vnode,container);
    }
}

function processElement(vnode,container){
    mountElement(vnode,container);
}

function processComponent(vnode: any, container: any){
    mountComponent(vnode,container);
}

function mountElement(vnode,container){
    const el = (vnode.el = document.createElement(vnode.type));
    const { children, props, shapeFlage } = vnode;
    if(shapeFlage & ShapeFlage.TEXT_CHILDREN){
        el.textContent = children;
    }else if(shapeFlage & ShapeFlage.ARRAY_CHILDREN){
        mountChildren(children,el)
    }
    for (const key in props) {
        const val = props[key];
        const isOn = (key:string)=> /^on[A-Z]/.test(key); 
        if(isOn(key)){
            const event = key.slice(2).toLowerCase();
            el.addEventListener(event,val); 
        }else{
            el.setAttribute(key,val);
        }
    }
    container.append(el);
}

function mountChildren(children,container){
    children.forEach(v=>{
        patch(v,container);
    })
}

function mountComponent(initialVnode,container){
    const instance = createComponentInstance(initialVnode);
    setupComponent(instance);
    setupRenderEffect(instance, initialVnode, container);
}

function setupRenderEffect(instance, initialVnode, container){
    const { proxy } = instance;
    const subTree = instance.render.call(proxy);
    patch(subTree,container);
    initialVnode.el = subTree.el;
}

