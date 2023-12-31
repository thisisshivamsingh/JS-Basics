//without Throttling
// const expensive = () => {
//   console.log("Expensive....");
// };

// window.addEventListener("resize", expensive);

//With Throttling
const expensive = () => {
  console.log("Expensive...");
};

const throttle = (func, limit) => {
  let flag = true;
  return function () {
    if (flag) {
      func();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

//   const throttle1 = (func, limit) => {
//     let flag = true;
//     return function () {
//         let context =this,
//             args = arguments
//       if (flag) {
//         func.apply(context,args);
//         flag = false;
//         setTimeout(() => {
//           flag = true;
//         }, limit);
//       }
//     };
//   };

const betterExpensive = throttle(expensive, 1000);
window.addEventListener("resize", betterExpensive);
