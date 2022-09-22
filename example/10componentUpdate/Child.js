import { h,ref } from "../../lib/guide-mini-vue.esm.js"

export default {
    name:"child",
    setup(props,{ emit }){},
    render(proxy){
        return h("div",{}, "child-props-msg" + this.$props.msg);
    }
}