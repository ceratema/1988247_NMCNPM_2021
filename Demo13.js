"use strict";
//PROMISE FUNTION
console.clear();

function Step_1() {
  setTimeout(() => {
    //? --> CALL-BACK function: duoc goi la 
    console.log("=> Step 1");
  }, 1000);
}
//do nhu vay nen ham step 1 chua xong ma step 2 da chay xong truoc step 1/
const Step_2 = () => {
  console.log("=> Step 2");
};
//theo nhu vay thi step 1 phai chay truoc step 2.
function main() {
  Step_1();
  Step_2();
}

// main();

//! ---------------------------------
//? Promise
//no goi lai ham va hua giai quyet theo 2 cach la resolve hoac reject.
const Step_3 = () => {
  return new Promise((resolve, reject) => {//cai resolve co the de re khong quan trong 
    setTimeout(() => {
      console.log("=> Step 3");
      return resolve("Step_3 is completed");
    }, 500);
  });
};

const Step_4 = () => {
  console.log("=> Step 4");
};
//neu co doan nay thi step 3 chay xong moi toi step 4
Step_3()
  .then((success) => {
    console.log(success);
  })
  .then(() => {
    Step_4();
  });
//No promise neu ham step 3 chay xong thi ham step 4 moi chay.
//! ---------------------------------
const div = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b != 0) return resolve(a / b);
    else return reject("Error: Div by Zero");
  });
};
//no chay xong step 3 , step4 roi moi doan code sau
Promise.all([Step_3, Step_4]).then(() => {
  console.log("--------------------")
  div(3, 4).then((data) => console.log(`Result is: ${data}`));
  div(3, 0)
    .then((data) => {
      console.log(`Result is: ${data}`);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("Function is Completed");
    });
});
