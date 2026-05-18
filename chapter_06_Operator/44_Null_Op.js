console.log(null >= 0);  // true   → >= coerces null to 0  (gotcha!) 🤯 //because comparison operators (>=, <=, >, <) convert null to a number.
console.log(null === 0);  // false  → different types (null is an object, 0 is a number)
console.log(null == 0);   // false  → null only == undefined/null (null is not equal to 0 in loose equality)

// ??  Nullish Operator
let amul = null;
let milk_required = amul ?? "nandani milk";
console.log(milk_required);  // nandani milk  (since amul is null, it uses the default value "nandani milk")

amul = "amul milk";
milk_required = amul ?? "nandani milk";
console.log(milk_required);  // amul milk  (since amul is not null, it uses the value of amul)
