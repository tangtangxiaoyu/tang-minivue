import { transformExpression } from "../../transforms/transformExpression";
import { transformElement } from "../../transforms/transformElement";
import { generate } from "../src/codegen";
import { baseParse } from "../src/parse"
import { transform } from "../src/transform";
import { transformText } from "../../transforms/transformText";

describe("codegen",()=>{
    it("string",()=>{
        const ast = baseParse("hi");
        transform(ast);
        const { code } = generate(ast);
        expect(code).toMatchSnapshot();
    })


    it("interpolation",()=>{
        const ast = baseParse("{{message}}");
        transform(ast,{ nodeTransforms:[transformExpression] });
        const { code } = generate(ast);
        expect(code).toMatchSnapshot();
    })

    it("element",()=>{
        const ast:any = baseParse("<div>hi,{{message}}</div>");
        transform(ast,{ nodeTransforms:[transformExpression,transformElement,transformText] });
        const { code } = generate(ast);
        expect(code).toMatchSnapshot();
    })
})

