


// export const sub = (a, b) => { 
//     return a - b;
// };

// // function sub (){
// //     return 
// // }


/* export const sum =(a, b)=>{
    return a + b;
}; */

// export const calculate = ({inputa, inputb, operator}) => {
const calculate = (inputA, inputB, operator) => {
    if (operator === "sum") {
        return inputA + inputB;
    } else if (operator === "sub") {
        return inputA - inputB;
    } else if (operator === "mul") {
        return inputA * inputB;
    } else if (operator === "div") {
        return inputA / inputB;
    }
};
export default calculate;


/* export const calculate = (inputa,inputb, oprator)=>{
    let vala = parseFloat(inputa);
    let valb = parseFloat(inputb);
    switch(oprator){
        case "0":
            return inputa + inputb
            break;
        case "1":
            return inputa - inputb
            break;
        case "2":
            return inputa * inputb
            break;
        case "3":
            if(inputb === 0) { return 0 }
            return inputa / inputb
            break;
        default:
            //console.log("default");
            return inputa + inputb
    }
}; */

/* $("button").on("click",function(){
    var bVal = $(this).text();

    // When AC button has been pressed
    if(bVal == "AC"){
        calc.memory = "";
        calc.current = "";
        calc.result = 0;
    }
};
 */