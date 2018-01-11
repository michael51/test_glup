const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p><p>Hello world2</p>`);
console.info(dom.window);
let $ = require("jquery")(dom.window);
$("body").append("<div>TEST</div>");
console.log($("body").html());

