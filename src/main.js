console.log("hi");
const div = dom.create("<div></div>");
console.log(div);

dom.after(test, div);
const div1 = dom.find("#test>.red")[0];
console.log(div1);

dom.style(div1, "color", "red");

const divList = dom.find(".red");
dom.each(divList, (n) => console.log(n));
