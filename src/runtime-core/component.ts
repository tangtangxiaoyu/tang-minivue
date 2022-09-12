import { shallowReadonly } from "../reactivity/reactive";
import { emit } from "./componentEmit";
import { initProps } from "./componentProps";
import { PublicInstanceProxyHandlers } from "./componentPublicstance";

export function createComponentInstance(vnode){
    const component = {
        vnode,
        type: vnode.type,
        setupState: {},
        props:{},
        emit:()=>{}
    }
    component.emit = emit.bind(null,component) as any;
    return component
}

export function setupComponent(instance){
    initProps(instance,instance.vnode.props)
    // inptsolt
    setupStatefulComponent(instance);
}

function setupStatefulComponent(instance){
    const component = instance.type;
    instance.proxy = new Proxy({ _: instance }, PublicInstanceProxyHandlers)
    const { setup } = component;
    if(setup){
        const setupResult = setup(shallowReadonly(instance.props),{ emit: instance.emit });
        handleSetupResult(instance,setupResult);
    } 
}

function handleSetupResult(instance,setupResult){
    if(typeof setupResult === 'object'){
        instance.setupState = setupResult;
    }
    finishComponentSetup(instance);
}

function finishComponentSetup(instance){
    const component = instance.type;
    if(component.render){
        instance.render = component.render;
    }
}