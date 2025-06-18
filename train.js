//       TASK-E

function getReverse(text) {
  let result = text.split("").reverse().join("");
  console.log(result);
}

getReverse("hello");

//       TASK-D
// function checkContent(text1, text2) {
//   let result1 = text1.split("");
//   let result2 = text2.split("");

//   result1.sort();
//   result2.sort();

//   return result1.join() == result2.join();
// }

// const result = checkContent("mitgroup", "gmtiprou");

// console.log(result);

// console.log(checkContent("hello", "world"));
// console.log("====");

//       TASK-C
// const moment = require("moment");
// class Shop {
//   non;
//   lagmon;
//   cola;
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }

//   qoldiq() {
//     console.log(
//       `hozir ${moment().format("HH:mm")} da ${this.non}ta non, ${
//         this.lagmon
//       }ta lagmon, ${this.cola}ta cola mavjud.`
//     );
//   }

//   sotish(name, amount) {
//     if (name === "non") {
//       this.non -= amount;
//     } else if (name === "lagmon") {
//       this.lagmon -= amount;
//     } else if (name === "cola") {
//       this.cola -= amount;
//     } else {
//       console.log("bunday mahsulot mavjud emas");
//     }
//   }

//   qabul(name, amount) {
//     if (name === "non") {
//       this.non += amount;
//     } else if (name === "lagmon") {
//       this.lagmon += amount;
//     } else if (name === "cola") {
//       this.cola += amount;
//     } else {
//       console.log("bunday mahsulot mavjud emas");
//     }
//   }
// }
// const shop = new Shop(6, 8, 4);
// shop.qoldiq();
// console.log("mahsulotlarimizni  yangilan royhati");
// shop.sotish("non", 4);
// shop.sotish("lagmon", 4);

//shop.qoldiq();

//shop.qabul("lagmon", 5);
/*       TASK A      */
// function countDigits("ad2a54y79wet0sfgb9") {
//   const result = misra.split();
//   const lastResult = result.filter((e) => e === alfabit);
//   console.log(`${misra} ning ichida ${alfabit} dan ${lastResult.length}ta bor`);
// }
// countLetter("e", "enginee");

/*       TASK B      */
// function countDigits(text) {
//   const result = text.split("");
//   const lastResult = result.filter((ele) => {
//     return ele >= 0 && ele !== " ";
//   });
//   console.log(`${text} ning ichida raqamlar ${lastResult.length}ta bor`);
// }
// countDigits("ad2 a54f05y79w");

// const { listen } = require("./app");

// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba boling", // 0-20
//   "to'gri boshliq tanlang va koproq hato qiling", //20-30
//   "o'zingizga ishlashingizni boshlang", //30-40
//   "siz kuchli bolgan narsalarni qiling", //40-50
//   "yoshlarga investitsiya qiling", //50-60
//   "endi dam oling , foydasi yoq endi", //60
// ];

/*  21 lesson: NodeJS event loop va Calback functionlar  */

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }

// maslahatBering(10, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   console.log("javob:", data);
// });    Jack Ma maslahatlar  javob: yaxshi talaba boling korsatdi

// maslahatBering(25, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   console.log("javob:", data);
// });           /*Jack Ma maslahatlari javob: to'gri boshliq tanlang va koproq hato qiling*/

// maslahatBering("salom", (err, data) => {
//   if (err) console.log("ERROR:", err);
//   console.log("javob:", data);
// }); /* Jack Ma maslahatlari  ERROR: insert a number javob: null */

// maslahatBering("salom", (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// }); /* Jack Ma maslahatlari ERROR: insert a number javob: null ERROR: insert a number */

// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// }); /* Jack Ma maslahatlari   passed here 0  passed here 1 javob: endi dam oling , foydasi yoq endi*/
// console.log("passed here 1");

/* 22 lesson: Asynchronous functionlarni qo'llash  */

/*biz hozirgacha ishlatgan functionlar synchronous bolib imedetli yani yozish bilan darhol ishga tushib javob qaytaradigan edi .*/

/*                          difin async function                                   */

/* 
async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("insert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return list[5];
    // setTimeout(function () {
    //   callback(null, list[5]);
    // }, 5000);
  }
}

*/

// console.log("passed here 0");
// maslahatBering(25)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log(
//   "passed here 1"
// ); /* Bu yerda passed here 0 , passed here 1 va async function ishga tushdi va event loop orqali ishlab single threadni bant qilmaydi*/

/*        call : then/catch */
// console.log("passed here 0");
// maslahatBering(65)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");

/*        asyn await */
// async function run() {
//   let javob = await maslahatBering(20);
//   console.log(javob);
//   javob = await maslahatBering(30);
//   console.log(javob);
//   javob = await maslahatBering(42);
//   console.log(javob);
// }
// run();

/* javob :
[nodemon] starting `node train.js`
Jack Ma maslahatlari
yaxshi talaba boling
to'gri boshliq tanlang va koproq hato qiling
siz kuchli bolgan narsalarni qiling
 */

/*     Promise  uslubida */

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolove, reject) => {
//       setTimeout(() => {
//         resolove(list[5]);
//       }, 5000);
//     });
//   }
// }

// async function run() {
//   let javob = await maslahatBering(66);
//   console.log(javob);
//   javob = await maslahatBering(30);
//   console.log(javob);
//   javob = await maslahatBering(42);
//   console.log(javob);
// }
// run();

/*     Promise setInterval uslubida */

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolove, reject) => {
//       setInterval(() => {
//         resolove(list[5]);
//       }, 1000);
//     });
//   }
// }

// async function run() {
//   let javob = await maslahatBering(66);
//   console.log(javob);
// }
// run();

/*  bu usulda faqat birmarta javob keladi :endi dam oling , foydasi yoq endi */

/* Callback uslibida setInterval  */

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 100000);
//   }
// }

// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });
// console.log("passed here 1");

/*  javob: endi dam oling , foydasi yoq endi  qayta qayta ishga tushyabdi*/

// function countLetter(alfabit, misra) {
//   const result = misra.split("");
//   const lastResult = result.filter((e) => e === alfabit);
//   console.log(`${misra} ning ichida ${alfabit} dan ${lastResult.length}ta bor`);
// }
// countLetter("e", "enginee");

// console.log("===== PRACTICE =====");

// // DEFINE
// function qoldiqliBolish(a, b, callback) {
//   if (b === 0) {
//     callback("Mahraj nolga teng emas", null);
//   } else {
//     callback(null, a % b);
//   }
// }

// // CALL
// qoldiqliBolish(10, 6, (err, data) => {
//   if (err) console.log("Error:", err);
//   else {
//     console.log("data:", data);
//   }
// });
