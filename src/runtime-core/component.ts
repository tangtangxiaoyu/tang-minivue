import { proxyRefs } from "../reactivity";
import { shallowReadonly } from "../reactivity/reactive";
import { emit } from "./componentEmit";
import { initProps } from "./componentProps";
import { PublicInstanceProxyHandlers } from "./componentPublicInstance";
import { initSlots } from "./componentSlots";

export function createComponentInstance(vnode,parent){
    console.log("createComponentInstance",parent);
    const component = {
        vnode,
        next: null,
        type: vnode.type,
        setupState: {},
        props:{},
        slots:{},
        subTree:{},
        provides: parent ? parent.provides : {},
        parent,
        isMounted: false,
        emit:()=>{},
    }
    component.emit = emit.bind(null,component) as any;
    return component
}

export function setupComponent(instance){
    initProps(instance,instance.vnode.props)
    initSlots(instance,instance.vnode.children);
    setupStatefulComponent(instance);
}

function setupStatefulComponent(instance){
    const component = instance.type;
    instance.proxy = new Proxy({ _: instance }, PublicInstanceProxyHandlers)
    const { setup } = component;
    if(setup){
        setCurrentInstance(instance);
        const setupResult = setup(shallowReadonly(instance.props),{ emit: instance.emit });
        setCurrentInstance(null);
        handleSetupResult(instance,setupResult);
    } 
}

function handleSetupResult(instance,setupResult){
    if(typeof setupResult === 'object'){
        instance.setupState = proxyRefs(setupResult);
    }
    finishComponentSetup(instance);
}

function finishComponentSetup(instance){
    const component = instance.type;
    if(component.render){
        instance.render = component.render;
    }
}


let currentInstance = null;
export function getCurrentInstance(){
    return currentInstance
}

function setCurrentInstance(instance) {
    currentInstance = instance;
}