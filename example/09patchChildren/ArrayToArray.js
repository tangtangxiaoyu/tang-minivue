import { h,ref } from "../../lib/guide-mini-vue.esm.js"


// 1.左侧对比
// (a b) c
// (a b) d e
// const prevChildren = [
//     h("p", { key: "A" }, "A" ),
//     h("p", { key: "B" }, "B" ),
//     h("p", { key: "C" }, "C" ),
// ];
// const nextChildren = [
//     h("p", { key: "A" }, "A" ),
//     h("p", { key: "B" }, "B" ),
//     h("p", { key: "D" }, "D" ),
//     h("p", { key: "E" }, "E" ),
// ];


// 2.右侧对比
//   a (b c)
// d e (b c)
// const prevChildren = [
//     h("p", { key: "A" }, "A" ),
//     h("p", { key: "B" }, "B" ),
//     h("p", { key: "C" }, "C" ),
// ];
// const nextChildren = [
//     h("p", { key: "D" }, "D" ),
//     h("p", { key: "E" }, "E" ),
//     h("p", { key: "B" }, "B" ),
//     h("p", { key: "C" }, "C" ),
// ];


// 3.新的比老的长  -01
// (a b)
// (a b) c d
// const prevChildren = [
//     h("p", { key: "A" }, "A" ),
//     h("p", { key: "B" }, "B" )
// ];
// const nextChildren = [
//     h("p", { key: "A" }, "A" ),
//     h("p", { key: "B" }, "B" ),
//     h("p", { key: "C" }, "C" ),
//     h("p", { key: "D" }, "D" ),
// ];

// 3.新的比老的长  -02
//     (a b)
// c d (a b) 
// const prevChildren = [
//     h("p", { key: "A" }, "A" ),
//     h("p", { key: "B" }, "B" )
// ];
// const nextChildren = [
//     h("p", { key: "C" }, "C" ),
//     h("p", { key: "D" }, "D" ),
//     h("p", { key: "A" }, "A" ),
//     h("p", { key: "B" }, "B" )
// ];

// 4.老的比新的长 -01
// (a b) c d
// (a b) 
// const prevChildren = [
//     h("p", { key: "A" }, "A" ),
//     h("p", { key: "B" }, "B" ),
//     h("p", { key: "C" }, "C" ),
//     h("p", { key: "D" }, "D" )
// ];
// const nextChildren = [
//     h("p", { key: "A" }, "A" ),
//     h("p", { key: "B" }, "B" )
// ];

// 4.老的比新的长 -02
// a (b c)
//   (b c) 
// const prevChildren = [
//     h("p", { key: "A" }, "A" ),
//     h("p", { key: "B" }, "B" ),
//     h("p", { key: "C" }, "C" )
// ];
// const nextChildren = [
//     h("p", { key: "B" }, "B" ),
//     h("p", { key: "C" }, "C" )
// ];

// 5.删除老的
// a b (c d) f g
// a b (e c) f g
// const prevChildren = [
//     h("p", { key: "A" }, "A" ),
//     h("p", { key: "B" }, "B" ),
//     h("p", { key: "C", id: "prev-c" }, "C" ),
//     h("p", { key: "D" }, "D" ),
//     h("p", { key: "F" }, "F" ),
//     h("p", { key: "G" }, "G" )
// ];
// const nextChildren = [
//     h("p", { key: "A" }, "A" ),
//     h("p", { key: "B" }, "B" ),
//     h("p", { key: "E" }, "E" ),
//     h("p", { key: "C", id: "next-c" }, "C" ),
//     h("p", { key: "F" }, "F" ),
//     h("p", { key: "G" }, "G" )
// ];

// 5.1 删除老的
// a b (c e d) f g
// a b (e c) f g
// const prevChildren = [
//     h("p", { key: "A" }, "A" ),
//     h("p", { key: "B" }, "B" ),
//     h("p", { key: "C", id: "prev-c" }, "C" ),
//     h("p", { key: "E" }, "E" ),
//     h("p", { key: "D" }, "D" ),
//     h("p", { key: "F" }, "F" ),
//     h("p", { key: "G" }, "G" )
// ];
// const nextChildren = [
//     h("p", { key: "A" }, "A" ),
//     h("p", { key: "B" }, "B" ),
//     h("p", { key: "E" }, "E" ),
//     h("p", { key: "C", id: "next-c" }, "C" ),
//     h("p", { key: "F" }, "F" ),
//     h("p", { key: "G" }, "G" )
// ];


// 5.2 移动
// const prevChildren = [
//     h("p", { key: "A" }, "A" ),
//     h("p", { key: "B" }, "B" ),
//     h("p", { key: "C" }, "C" ),
//     h("p", { key: "D" }, "D" ),
//     h("p", { key: "E" }, "E" ),
//     h("p", { key: "F" }, "F" ),
//     h("p", { key: "G" }, "G" )
// ];
// const nextChildren = [
//     h("p", { key: "A" }, "A" ),
//     h("p", { key: "B" }, "B" ),
//     h("p", { key: "E" }, "E" ),
//     h("p", { key: "C" }, "C" ),
//     h("p", { key: "D" }, "D" ),
//     h("p", { key: "F" }, "F" ),
//     h("p", { key: "G" }, "G" )
// ];

// 5.3 创建新的节点
// const prevChildren = [
//     h("p", { key: "A" }, "A" ),
//     h("p", { key: "B" }, "B" ),
//     h("p", { key: "C" }, "C" ),
//     h("p", { key: "E" }, "E" ),
//     h("p", { key: "F" }, "F" ),
//     h("p", { key: "G" }, "G" )
// ];
// const nextChildren = [
//     h("p", { key: "A" }, "A" ),
//     h("p", { key: "B" }, "B" ),
//     h("p", { key: "E" }, "E" ),
//     h("p", { key: "C" }, "C" ),
//     h("p", { key: "D" }, "D" ),
//     h("p", { key: "F" }, "F" ),
//     h("p", { key: "G" }, "G" )
// ];


// 6.综合
const prevChildren = [
    h("p", { key: "A" }, "A" ),
    h("p", { key: "B" }, "B" ),
    h("p", { key: "C" }, "C" ),
    h("p", { key: "D" }, "D" ),
    h("p", { key: "E" }, "E" ),
    h("p", { key: "Z" }, "Z" ),
    h("p", { key: "F" }, "F" ),
    h("p", { key: "G" }, "G" )
];
const nextChildren = [
    h("p", { key: "A" }, "A" ),
    h("p", { key: "B" }, "B" ),
    h("p", { key: "D" }, "D" ),
    h("p", { key: "C" }, "C" ),
    h("p", { key: "Y" }, "Y" ),
    h("p", { key: "E" }, "E" ),
    h("p", { key: "F" }, "F" ),
    h("p", { key: "G" }, "G" )
];


export default {
    name:"TextToArray",
    setup() {
        const isChange = ref(false);
        window.isChange = isChange
        return {
            isChange
        }
    },
    render() {
        const self = this;
        return self.isChange === true ? h("div",{}, nextChildren) : h("div",{}, prevChildren); 
    }
}