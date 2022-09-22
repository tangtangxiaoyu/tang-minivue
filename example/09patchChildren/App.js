import ArrayToText from "./ArrayToText.js"
import TextToText from "./TextToText.js"
import TextToArray from "./TextToArray.js"
import ArrayToArray from "./ArrayToArray.js"

import { h } from "../../lib/guide-mini-vue.esm.js"
export const App = {
    name:"App",
    setup() {
        return {
        }
    },
    render() {
        return h("div",{ tId: 1 },[
            h("p",{},"主页"),
            h(ArrayToArray)
        ])
    }
}