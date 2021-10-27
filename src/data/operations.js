const operations = {
  "percentage" : (a)=> a/100,
  "delete_result1": (a)=>a=0,
  "delete_result2": (a)=>a=0,
  "delete_result3": (a,b)=>{return a=b=0},
  "divide_itself": (a)=>1/a,
  "power_squared": (a)=>a**a,
  "square_root": (a)=>Math.sqrt(a),
  "divide": (a,b)=>a/b,
  "multiply": (a,b)=>a*b,
  "rest": (a,b)=>a-b,
  "add": (a,b)=>a+b,
  "plus_minus": (a)=>a*(-1),
  "to_float": (a)=> Number.isInteger(a) ? parseFloat(`${a}.`) : a ,
}

export default function formulas(){return operations}