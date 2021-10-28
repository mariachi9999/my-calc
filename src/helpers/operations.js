const operations = {
  "percentage" : (a)=> a/100,
  "Backspace": (a)=>a=0,
  "delete_result2": (a)=>a=0,
  "Delete": (a,b)=>{return a=b=0},
  "divide_itself": (a)=>1/a,
  "power_squared": (a)=>a**a,
  "square_root": (a)=>Math.sqrt(a),
  "/": (a,b)=>a/b,
  "*": (a,b)=>a*b,
  "-": (a,b)=>a-b,
  "+": (a,b)=>a+b,
  "plus_minus": (a)=>a*(-1),
  "to_float": (a)=> Number.isInteger(a) ? parseFloat(`${a}.`) : a ,
  "Enter": "="
}

export default function formulas(){return operations}