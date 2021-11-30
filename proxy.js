// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
//
const target = {
  message1: "hello",
  message2: "everyone"
};

const handler1 = {};

const proxy1 = new Proxy(target, handler1);

console.log("=== Proxy 1")
console.log(proxy1.message1)
console.log(proxy1.message2)
console.log()


const handler2 = {
  get: function(target, prop, receiver) {
    return "world";
  }
};

console.log("=== Proxy 2")
const proxy2 = new Proxy(target, handler2);
console.log(proxy2.message1)
console.log(proxy2.message2)
console.log()


const handler3 = {
  get: function(target, prop, receiver) {
    if (prop === "message2") {
        return "world"
    }
    // Calls the get method of the Reflect class. arguments[0] is the target object, arguments[1] is the property we are "getting", argument 3 is a "getter".
    return Reflect.get(...arguments);
  }
};

console.log("=== Proxy 3")
const proxy3 = new Proxy(target, handler3);
console.log(proxy3.message1)
console.log(proxy3.message2)
console.log()
