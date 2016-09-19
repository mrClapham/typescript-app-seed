let stringUtils = require( "../src/js/utils/StringHelper.ts").default

describe("A bogus test", ()=>{
    it("Should work", ()=>{
        expect(true).toEqual(true);
    })
});

describe("StringHelpers", ()=>{
    it("Should reverse a string", ()=>{
expect(stringUtils.reverse("Hello")).toEqual("olleH");
    })
})