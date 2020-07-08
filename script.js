// create a button
// write a function that chnages screen
// target the screen

let screen = document.querySelector('.screen');
let allButtonArray = document.querySelectorAll('li')


let currentText = '';



function addAllListeners(param){
    for(let i =0; i < param.length; i++){
        param[i].addEventListener('click',change)
        console.log(param[i]);
    }
}

addAllListeners(allButtonArray)

function change(param){
    if(param === undefined){
        screen.innerHTML = 'Do Math';
    } else {
        currentText = currentText + param.target.innerHTML;
        screen.innerHTML = currentText;
    }   
   
}
 

console.log(currentText);



// Declare a fucntion and give it a name pass through a parameter]
// Assign a variable thats equal to the parameter of our string that splits at the addition sign with turns our string into an array. 
// Declared a for loop to iterate through the array or numbers given the length of the array.
// declaring the sum and add the variable sum to our parsient which is invoked with our array called nums[i]
// we return the sum
// console log 

function add(strParam){
    let nums = strParam.split('+');
    let sum = 0;
    for(i = 0; i < nums.length ; i++){
        sum = sum + parseInt(nums[i]); 
    }
    return sum;
}

// console.log(add("-7+8.2")) //future handles decimals 
// console.log(add("9+10"))

// console.log(add('2+3')) //returns 5


// Declare a fucntion and give it a name pass through a parameter]
// Assign a variable thats equal to the parameter of our string that splits at the subtraction sign with turns our string into an array. 
// assign a variable that tells our function to substract a specific index being 0 and 1
//return sub
//console.log

function subtract(strParam){
    let nums = strParam.split('-')
   
    let sub = parseInt(nums[0]) - parseInt(nums[1]);
    return sub

}

// console.log(subtract("1-8"))
// console.log(subtract('5-3')) //returns 2

// declare a fucntion and give it a name pass through a parameter]
// assign a variable thats equal to the parameter of our string that splits at the * sign with turns our string into an array. 
// assign a variable that tells our function to multiply a specific index being 0 and 1
// return the sum
// console log 

function multiply(strParam){
    let nums = strParam.split('*')

    let answer = parseInt(nums[0]) * parseInt(nums[1]);
    return answer
    
}

 //console.log(multiply("9*7"))
//console.log(multiply('2*3')) //returns 6


// declare a fucntion and give it a name pass through a parameter
// assign a variable thats equal to the parameter of our string that splits at the / sign with turns our string into an array. 
// assign a variable that tells our function to divide a specific index being 0 and 1
// // return the quo
// // console log 

function divide(strParam){
    let nums = strParam.split('/')
    
    let quo = parseInt(nums[0]) / parseInt(nums[1]);
    return quo

}

// console.log(divide("14.4/7.2"))
// console.log(divide('6/3')) //returns 2

// Next steps, create a function which calls the apporpriate function based on the operator sign.


function whichOpp(screentext){
    //console.log(screentext)
    
    if(screentext.indexOf("*") > -1){
         return multiply(screentext)
        
    }  else if(screentext.indexOf("/")> -1){
        return divide(screentext)
    } else if(screentext.indexOf("+")> -1){
        return add(screentext)
    }  else if(screentext.indexOf("-")> -1){
        return subtract(screentext)
    }


}


console.log(whichOpp("8-7"))
console.log(whichOpp("2+8"))
console.log(whichOpp("2*3"))
console.log(whichOpp("21/7"))