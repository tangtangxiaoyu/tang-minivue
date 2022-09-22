import Child from "./Child.js"
import { h,ref } from "../../lib/guide-mini-vue.esm.js"

export const App = {
    name:"App",
    setup() {
        const msg = ref("msg123");
        const count = ref(1);
        window.msg = msg;
        const changeChildProps = ()=>{
            msg.value = "msg456";
        }
        const changeCount = ()=>{
            count.value++;
        }
        return {
            msg,count,changeCount,changeChildProps
        }
    },
    render() {
        return h("div",{ tId: 1 },[
            h("p",{},"主页"),
            h(
                "button",
                {
                    onClick: this.changeChildProps
                },
                "changeChildProps"
            ),
            h(Child,{ msg: this.msg }),
            h(
                "button",
                {
                    onClick: this.changeCount
                },
                "changeCount"
            ),
            h("p",{}, "count:"+this.count)   
        ])
    }
}