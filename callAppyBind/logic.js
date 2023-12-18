let name = {
  firstName: "vibhor",
  lastName: "soni",
  state: "rajasthan",
  //we cannot put method like this we can declare it outside so that we can use it whatever tme we want
  //   printFullName: function () {
  //     console.log(this.firstName + " " + this.lastName);
  //   },
};

let printFullName = function (hometown) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " from " +
      hometown +
      " from " +
      this.state
  );
};

printFullName.call(name, "kota");

let name2 = {
  firstName: "sachin",
  lastName: "lodu",
  state: "up",
  //one method to copy the printfullname method and get the first and last name
  //but we are not going to do this, to sort out this call method came into picture
};
//using call method we can do function borrowing ,
//we can borrow functionfrom other object and use it with data of other object

printFullName.call(name2, "mumbai");
//apply method instead of passing the arguments individually in the call method, in apply method we pass thearguments in a array list
printFullName.apply(name2,["Mumbai","Maharashtra"])


//bind method
//it is exactly same as call method but the only difference is instead of 
//directly calling this method over here the binds method binds this

//bind method it will create the copy of printfullNAME AND it will bind that to name2 object and will returna function 
let printMyName = printFullName.bind(name2,"Mumbai","Maharashtra")

