import { h,provide,inject } from "../../lib/guide-mini-vue.esm.js"
const Provider = {
    name: "Provider",
    setup(){
        provide("foo","fooVal");
        provide("bar","barVal");
    },
    render(){
        return h("div",{},[ h("p",{},"Provider1"), h(ProviderTwo) ])
    }
}

const ProviderTwo = {
    name: "ProviderTwo",
    setup(){
        provide("foo","新的foo");
        const foo = inject("foo");
        return {
            foo
        }
    },
    render(){
        return h("div",{},[ h("p",{},"Provider2 中的foo："+this.foo), h(Consumer) ])
    }
}

const Consumer = {
    name:"Consumer",
    setup(){
        const foo = inject("foo");
        const bar = inject("bar");
        // const baz = inject("baz","bazDefault");
        const baz = inject("baz",()=> 'bazDefault1');
        return {
            foo,
            baz,
            bar
        }
    },
    render(){
        return h("div",{}, `Consumer: ${this.foo} - ${this.bar} - ${this.baz}`)
    }
}

export default {
    name: "App",
    setup(){},
    render(){
        return h("div", {}, [ h("p",{}, "Provider"), h(Provider) ])
    }
}