//debouncoing in
let counter = 0;
const getData = () => {
  //calls an api and gets data
  console.log("Fetching ....", counter++);
};

const debounce = function (fn, delay) {
  let timer;
  return function () {
    let context = this,
      args = arguments;

    clearTimeout(timer); 
    timer = setTimeout(() => {
      fn.apply(context, arguments);
    }, delay);
  };
};
// const betterFunction = debounce(getData, 300);
// const debounce = function (fn, delay) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer); 
//     timer = setTimeout(() => {
//       fn.apply(this,args ); 
//     }, delay);
//   };
// };
// const betterFunction = debounce(getData, 300);
