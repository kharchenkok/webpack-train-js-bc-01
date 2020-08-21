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

// const product1 = {
//   id: 1,
//   price: 100,
//   count: 2,
// };
// const product2 = {
//   id: 2,
//   price: 200,
//   count: 5,
// };
// const product3 = {
//   id: 3,
//   price: 300,
//   count: 7,
// };
// const product4 = {
//   id: 4,
//   price: 400,
//   count: 10,
// };

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

// const checkPokemon = function (name, number) {
//   let promise = new Promise((res, rej) => {
//     let f = fetch(`https://pokeapi.co/api/v2/pokemon/${name || number || ''}`);
//     f ? res(f) : '';
//     // f&& res(f)
//   });
//   return promise;
// };
// checkPokemon('kiwi','')
//   .then(data => data.json())
//   .then(data => console.log(data))
//   .catch(err => console.error('Немає такого покемону'));

// ======================================запити=================================================
// function fetchArticles() {
//   let query = 'bitcoin';
//   const apiKey = '6d98310b3edb4395ac3a2f5e92e95b0c';
//   const url = `http://newsapi.org/v2/everything?q=${query}&from=2020-07-13&sortBy=publishedAt&apiKey=${apiKey}`;
//   const options = {
//     headers: {
//       Authorization: apiKey,
//     },
//   };
//   return fetch(url, options) //повертає проміс
//     .then(res => res.json()) //обробляє отримані дані в джейсон формат
//     .then(data => {
//       console.log(data);
//       let title =data.articles[0].title
//       let path =data.articles[0].url
//       // const a= createLink(path, title)
//       deployElements(createLink,path,title)
      
//     })
//   }
  
//   function createLink(a,b){
//     const link=document.createElement('a')
//     link.setAttribute('href', a)
//     link.textContent=b
//     return link
//   }
//   const postsContainer = document.getElementById('posts')
//   function deployElements(cb1, a,b){
//     const el = cb1(a,b)
//     postsContainer.append(el)


// }
// fetchArticles();

// ==========================запити курси валют===============================
// const conteiner = document.querySelector('.currency-list')
// function fetchExchangeRate () {
//   const url = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11'
//   return fetch(url).then(res => res.json()).then(data => data.forEach(elem => conteiner.innerHTML += `<li>ccy:${elem.ccy}; base_ccy: ${elem.base_ccy}; buy: ${elem.buy}; sale: ${elem.sale} </li>`  ) )
  
// }

// fetchExchangeRate()

// ===========================запити відділення==================================
// const conteiner = document.querySelector('.branches-list')

// function fetchBankBranches(){
//   let city = 'Днепропетровск'
//   let street = 'Титова'
//   const url = `https://api.privatbank.ua/p24api/pboffice?json&city=${city}address=${street}`
//   return fetch(url).then(res=>res.json()).then(data => {
//     console.log(data);
//     // data.forEach(elem => conteiner.innerHTML += ``)
//   })
// }
// fetchBankBranches()

// ===========================запити новини=======================================
// const postsContainer = document.getElementById('posts')
// function fetchArticles() {
//     let query = 'bitcoin';
//     const apiKey = '6d98310b3edb4395ac3a2f5e92e95b0c';
//     const url = `http://newsapi.org/v2/everything?q=${query}&from=2020-07-13&sortBy=publishedAt&apiKey=${apiKey}`;

//     let altUrl = 'data:image/jpeg;base64,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'
//     return fetch(url) //повертає проміс
//       .then(res => res.json()) //обробляє отримані дані в джейсон формат
//       .then(data => {
//         console.log(data);
//         data.articles.map(elem => postsContainer.innerHTML+=`<li class = "news-item"><h2>${elem.title}</h2><img src = ${elem.urlToImage||altUrl} width="250"></li>`)
        
        
//       })
//     }
    
//   //   function createLink(a,b){
//   //     const link=document.createElement('a')
//   //     link.setAttribute('href', a)
//   //     link.textContent=b
//   //     return link
//   //   }
//   //   const postsContainer = document.getElementById('posts')
//   //   function deployElements(cb1, a,b){
//   //     const el = cb1(a,b)
//   //     postsContainer.append(el)
  
  
//   // }
//   fetchArticles();


// ============================17-08-2020=================================================
