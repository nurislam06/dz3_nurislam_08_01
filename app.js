// ---------------------------Задание-1------------------------


const con = (num1 , num2) => {
  if(num1 < num2){
    console.log('первое число меньше')
}
else if (num1  > num2){
    console.log('второе число меньше')
}else{
  console.log('числф равны')
}
}

let number1 =prompt('ведите первое число');
let num1 = Number(number1)

let number2 = prompt('ведите второе число');
let num2 = Number(number2)

con(num1, num2)

// ------------------Задание-2------------------------------


const twoMass = (arr1,arr2) => {
  if(arr1.length > arr2.length){
   console.log('первый массив больше второго')
}
  else if(arr1.length < arr2.length){
    console.log('второй массив больше первого')
  }
  else{
    console.log('массивы равны')
  }
}

const arr1 =  [1,2,3,4,5,6,7];
const arr2 = [1,2,3,4,5,];


twoMass(arr1,arr2)




// ------------------------------- задание-3---------------------------------------------


const countChar = (mass) =>{
  console.log('длинна аргумента' + mass.length+'символов')
}
let mass = prompt('ведите строку');

countChar(mass);

// --------------------------------------------------------
