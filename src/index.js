import './styles.css';
import'./notify'
import faker from 'faker'
console.log(faker);
const allTags=[
    'health',
    'science',
    'gaming',
    'sports',
    'food',
    'comedy',
    'movies',
    'popular',
    'politics',
    'family',
]

const posts = generatePosts(25)

const jsonPosts = JSON.stringify(posts)

console.log(jsonPosts);

function generatePosts(){
    const arr = []
    for (let i=0; i<count; i++){
        
    
    const obj={
        id:faker.random.uuid(),
        createDate: faker.date.recent(),
        content:faker.lorem.paragraph(5),
        author:{
            name:faker.name.firstName(),
            avatar: faker.image.avatar(),

        },
        tags: createTags()
    }
    return arr
}
}

function createTags(){
    const count = faker.random.number({min:1,max:10})
    const tags = []
    for (let i=0; i< count; i+=1){
        const tag = faker.random.arrayElement(allTags)
        if (tags.includes(tag)){
            tags.push(tag)
        }
    }
}
// createTags()