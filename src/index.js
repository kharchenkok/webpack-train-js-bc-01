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
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const numbCounter = document.querySelector('.counter');
console.log(startBtn);
console.log(stopBtn);
console.log(numbCounter);
let counter = 0;
let timer;
const startCounter = function () {
  timer = setInterval(() => {
    counter += 1;
    numbCounter.textContent = counter;
    startBtn.disabled = true;
    stopBtn.disabled = false;
  }, 1000);
};

const stopCounter = function (e) {
  clearInterval(timer);
  startBtn.disabled = false;
  numbCounter.textContent = counter;
    stopBtn.disabled = false;
    
    if ((e.target.textContent = 'reset')) {
      
      numbCounter.textContent = 0;
    }
    stopBtn.textContent = 'reset';
};

startBtn.addEventListener('click', startCounter);
stopBtn.addEventListener('click', stopCounter);
