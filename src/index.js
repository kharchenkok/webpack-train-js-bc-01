import './styles.css';
import posts from './data.json';
import itemTemplate from './templates/item.hbs';
import allItemTemplate from './templates/allItems.hbs'
// console.log(posts);
// console.log(itemTemplate);
console.log(allItemTemplate);

const listRef = document.querySelector('.list')

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

const obj={
    name: 'Mango',
    age: 30,
}
const gsonFromObg = JSON.stringify(obj)
console.log(gsonFromObg);
const newObj = JSON.parse(gsonFromObg)
console.log(newObj);

const options ={
    isOpen:true,
    color: 'black',
}
localStorage.setItem('key',JSON.stringify(options))
localStorage.getItem('key')
console.log(localStorage);
localStorage.removeItem('key')
