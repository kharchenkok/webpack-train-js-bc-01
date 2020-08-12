import './styles.css';

// import posts from './data.json';
// import itemTemplate from './templates/item.hbs';
// import allItemTemplate from './templates/allItems.hbs'
// // console.log(posts);
// // console.log(itemTemplate);
// console.log(allItemTemplate);

// const listRef = document.querySelector('.list')

// ===========генерація кожного обєкту окремо========================
// const items = itemTemplate(posts)
// console.log(items);
// listRef.insertAdjacentHTML('afterbegin', items)

// ===============генерація всіх обєктів ==============================
// function generatePosts (posts){
//     const item = posts.map((post)=> allItemTemplate(post)).join('');
//     listRef.insertAdjacentHTML('afterbegin', item)
// }
// generatePosts(posts)

// const obj={
//     name: 'Mango',
//     age: 30,
// }
// const gsonFromObg = JSON.stringify(obj)
// console.log(gsonFromObg);
// const newObj = JSON.parse(gsonFromObg)
// console.log(newObj);

// const options ={
//     isOpen:true,
//     color: 'black',
// }
// localStorage.setItem('key',JSON.stringify(options))
// localStorage.getItem('key')
// console.log(localStorage);
// localStorage.removeItem('key')
// ======================================================
// const checkbox = document.querySelector('.checkbox');
// const body = document.querySelector('body');
// // console.log(checkbox);
// let userThemeDark = 'checkbox-dark';
// let userThemeLight = 'checkbox-ligth';

// // checkUserTheme();
// let changeTheme = function (e) {
//     console.log(e.target.checked);
//     if (e.target.checked) {
//         body.classList.add(userThemeDark);
//         localStorage.setItem('userTheme', 'userThemeDark');
//     } else {
//         body.classList.add(userThemeLight);
//         body.classList.remove(userThemeDark);
//         localStorage.setItem('userTheme', 'userThemeLight');
//     }
// };
// function checkUserTheme() {
//   let userCurrentTheme = localStorage.getItem('userTheme');
//   console.log(userCurrentTheme);
//   if (userCurrentTheme) {
//     console.log(userCurrentTheme);
//     body.classList.add(userCurrentTheme);
//   }

// };

// checkbox.addEventListener('change', changeTheme);
// ====================================================
// const showInTime = function(t){
// const setT = setTimeout(()=>{
//   t+=100;
//   if (t<1000){
//     console.log('швидше', t);

//   }else {
//     console.log('ok', t);
//   }
//   return t<1500 ? showInTime(t) : ''
// },t)
// }
// showInTime(0)
// =========================================================
// const startBtn = document.querySelector('.start');
// const stopBtn = document.querySelector('.stop');
// const numbCounter = document.querySelector('.counter');
// console.log(startBtn);
// console.log(stopBtn);
// console.log(numbCounter);
// let counter = 0;
// let timer;
// const startCounter = function () {
//   timer = setInterval(() => {
//     counter += 1;
//     numbCounter.textContent = counter;
//     startBtn.disabled = true;
//     stopBtn.disabled = false;
//   }, 1000);
// };

// const stopCounter = function (e) {
//   clearInterval(timer);
//   startBtn.disabled = false;
//   numbCounter.textContent = counter;
//     stopBtn.disabled = false;

//     if ((e.target.textContent = 'reset')) {

//       numbCounter.textContent = 0;
//     }
//     stopBtn.textContent = 'reset';
// };

// startBtn.addEventListener('click', startCounter);
// stopBtn.addEventListener('click', stopCounter);

// ===============================проміси============================
// const toShowDelay = function (delay) {
//   const promise = new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(resolve(delay)); //повертає андерфайн, не можна витягнут результат з проміса напряму
//     }, delay);
//   });
//   console.log(delay);
//   return promise;
// };
// const logger = (ms) => console.log(`Функція виконана з відстрочкою в ${ms}`);
// toShowDelay(0).then(logger)
// toShowDelay(5000).then(logger)
// toShowDelay(4000).then(logger)
// toShowDelay(3000).then(logger)
// console.log(toShowDelay(0));
// ================================================
// const students = [
//   {
//     name:'user1',
//     student: true,
//     age: 24
// },
// {
//   name:'user2',
//   student: true,
//   age: 22
// },
// {
//   name:'user3',
//   student: false,
//   age: 23
// },
// ]

// const updateStudentsStatus = function(arr, name){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       const newStudent = arr.find(elem =>{
//         if(elem.name===name){
//           elem.student ? elem.student=false : elem.student=true
//           resolve (elem);

//         }else{
//           reject(`такого студента нет`)

//         }
//       });
//     }, 0)
//   })
// }

// function toShowStudent(student){
//   console.log(student);
// }

// updateStudentsStatus(students, 'user1').then(toShowStudent)
// updateStudentsStatus(students, 'user4').then(toShowStudent).catch( error => console.log(error))

// =================================================================
// const students = [
//   {
//     name:'user1',
//     student: true,
//     age: 24
// },
// {
//   name:'user2',
//   student: true,
//   age: 22
// },
// {
//   name:'user3',
//   student: false,
//   age: 23
// },
// ]

// const toSearchStudent = function(arr, min,max){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//      const newArr =  arr.filter(elem => elem.age>=min&&elem.age<=max)
//      if(newArr.length){
//        resolve(newArr)
//      }else{
//        reject(`нет таких студентов`)
//      }
//     },0)
//   })
// }

// const toShowStudents = function(param){
//   console.log(param);
// }

// const greeting = function(){
//   console.log('hello');
// }

// toSearchStudent(students, 22,23).then(toShowStudents).finally(greeting)
// // toSearchStudent(students, 30,31).then(toShowStudents).catch(error => console.log(error)).finally(greeting)
// toSearchStudent(students, 30,31).then(toShowStudents).catch(error => console.error(error)).finally(greeting)

// ============================================

const product1 = {
  id: 1,
  price: 100,
  count: 2,
};
const product2 = {
  id: 2,
  price: 200,
  count: 5,
};
const product3 = {
  id: 3,
  price: 300,
  count: 7,
};
const product4 = {
  id: 4,
  price: 400,
  count: 10,
};

// const toGetSumm = function (obj, num) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (obj.count >= num) {
//         res(obj.price * num);
//       } else {
//         rej(`у цього продукту ${obj} одиниць товару${obj.count}`);
//       }
//     }, 0);
//   });
// };
// const log = function (sum) {
//   console.log(`Сума замовлення ${sum}`);
// };

// toGetSumm(product1, 2).then(log);
// const toGetSumm = function (obj) {
//   let num = Math.floor(Math.random()*(10-1)+1)
//   let ms = Math.floor(Math.random()*(3000-1000+1)+1000)
//     return new Promise((res, rej) => {
//       setTimeout(() => {
//         if (obj.count >= num) {
//           res({sum:obj.price * num, delay:ms});
//         } else {
//           rej(obj);
//         }
//       }, ms);
//     });
//   };
//   const sucsessLog = function ({sum, delay}) {
//       console.log(`Сума замовлення ${sum}, замовлення буде виконано через ${delay} мілісекунд`);
//     };
//     const errLog = function({id,count}){
//       console.log(`В об'єкті ${id} залишилось ${count} одиниць`);
//     }

//     toGetSumm(product4,1000).then(sucsessLog).catch(errLog)
//     toGetSumm(product3,3000).then(sucsessLog).catch(errLog)
// ===============================================================================
// Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.
// Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд,
//  так чтобы мы могли добавить к нему .then:

// function delay(ms) {
//   return new Promise(res =>{
//     setTimeout(()=>{
//       res ()
//     },ms)
//   })
// }

// delay(3000).then(() => alert('выполнилось через 3 секунды'));

// ==============================pokemon========================================

const checkPokemon = function (name, number) {
  let promise = new Promise((res, rej) => {
    let f = fetch(`https://pokeapi.co/api/v2/pokemon/${name || number || ''}`);
    f ? res(f) : '';
    // f&& res(f)
  });
  return promise;
};
checkPokemon('kiwi','')
  .then(data => data.json())
  .then(data => console.log(data))
  .catch(err => console.error('Немає такого покемону'));
