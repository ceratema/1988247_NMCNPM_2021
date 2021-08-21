'use strict'

console.clear();

//? Promise
const Step_3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("=> Step 3");
      return resolve("Step_3 is completed");
    }, 500);
  });
};

const Step_4 = () => {
  console.log("=> Step 4");
};
//binh thuong no se chay step 4 xong moi chay step 3, nhung co doan code nay thi step 3 xong oi toi step 4
//don gian hon nhieu then them tam lum
const main = async () => {
  await Step_3();
  Step_4();
}

main();