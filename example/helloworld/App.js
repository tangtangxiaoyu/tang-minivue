import { h } from "../../lib/guide-mini-vue.esm.js"
import { Foo } from "./Foo.js";
window.self = null;
export const App = {
    render() {
        window.self = this;
        return h(
            'div',
            { id: "root", onClick() { console.log('click') }, onMousedown() { console.log('mousedown') } },
            [
                h("div", {}, "hi，" + this.msg),
                h(Foo,{ count:1 })
            ]
            // "hi，" + this.msg
            // [
            //     h("p", { class: 'red' }, 'p1'),
            //     h("p", { class: 'blue' }, 'p2')
            // ]
        );
    },
    setup() {
        return {
            msg: "mini-vue"
        }
    }
}