import { h } from "../../lib/guide-mini-vue.esm.js"
window.self = null;
export const App = {
    render() {
        window.self = this;
        return h(
            'div',
            { id: "root", onClick() { console.log('click') }, onMousedown() { console.log('mousedown') } },
            "hi，" + this.msg
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