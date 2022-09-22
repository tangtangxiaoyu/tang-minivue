import { h, ref, proxyRefs } from "../../lib/guide-mini-vue.esm.js"
export const App = {
    name:"App",
    setup() {
        const count = ref(0);

        const onClick = ()=>{
            count.value++;
            console.log(count.value);
        }

        const props = ref({
            foo: "foo",
            bar: "bar"
        })

        const onChangeFun1 = ()=>{
            props.value.foo = "new value"
        }

        const onChangeFun2 = ()=>{
            props.value.foo = undefined
        }

        const onChangeFun3 = ()=>{
            props.value = {
                foo: "foo"
            }
        }


        return {
            count,onClick,onChangeFun1,onChangeFun2,onChangeFun3,props
        }
    },
    render() {
        // return h("div",{ id: "root" }, [
        //     h("div",{}, "count:" + this.count ),
        //     h("button",{ onClick: this.onClick }, "+1"),
        // ])
        return h("div",{ id: "root", ...this.props },[
            h("button",{ onClick: this.onChangeFun1 }, "new value"),
            h("button",{ onClick: this.onChangeFun2 }, "undefined"),
            h("button",{ onClick: this.onChangeFun3 }, "delete"),
        ])
    }
}