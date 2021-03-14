const num1 = 2, num2 = 31, num3 = num1 + num2, num4 = 29;
const multiply = num1 * num2;
const random = Math.floor(Math.random()*100);
const mod = num3 % num4;
const max = Math.max(Math.min(num1,num2,num3,num4),mod,random / 100,num1*10);
console.log(max);