let data;
data = 0;
data = "";
data = " ";
data = "0";
data = true;
data = false;
data = null;
data = undefined;
console.log("value of data", data);
if (data) {
  console.log(data, " is truthy");
} else {
  console.log(data, " is falsy");
}
// if i need to capture to falsy value to go inside if block
if(!data){
console.log('insite with a falsy value')
}
// capture all positive value
// double not !!
// capture any value to boolean (true, false)
if(!!data===true){
console.log('only true inside the double not')
}