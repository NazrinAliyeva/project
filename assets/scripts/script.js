const year=document.querySelector('.year')
let date= new Date()
year.innerHTML=date.getFullYear()
const cardWrapper=document.querySelector('.card-wrapper')
let elements=[
    {
        id:1,
        link:'https://teclado.com/30-days-of-python/',
        linkName:'30 Days of Pyhton',
        name:"Pyhton",
        condition:'Done',
        stack:['numpy']
    },
    {
        id:2,
        link:'https://30dayjavascript.js.org/',
        name:'JavaScript',
        linkName:'30 Days of JavaScript',
        condition:'OnGoing',
        stack:['React,Vue,Angular']
    },
    {
        id:3,
        link:'https://codedamn.com/challenge/30-days-of-html-css',
        name:'HTML & CSS',
        linkName:'30 Days of HTML & CSS',
        condition:'Coming',
        stack:['numpy']
    },
    {
        id:4,
        link:'https://codedamn.com/challenge/30-days-of-react',
        name:'React',
        linkName:'30 Days of React',
        condition:'Coming',
        stack:['numpy']
    },
    {
        id:5,
        link:'https://www.newline.co/courses/30-days-of-react-native',
        name:'ReactNative',
        linkName:'30 Days of ReactNative',
        condition:'Coming',
        stack:['numpy']
    },
    {
        id:6,
        link:'https://sparkdatabox.com/blog/learn-full-stack-development-in-30-days/',
        name:'FullStack',
        linkName:'30 Days of FullStack',
        condition:'Coming',
        stack:['numpy']
    },
    {
        id:7,
        link:'https://stories.thedataproject.net/',
        name:' Data Analysis',
        linkName:'30 Days of Data Analysis',
        condition:'Coming',
        stack:['numpy']
    },
    {
        id:8,
        link:'https://www.kaggle.com/thirty-days-of-ml',
        name:'Machine Learning',
        linkName:'30 Days of Machine Learning',
        condition:'Coming',
        stack:['numpy']
    }

]
elements.forEach((element)=>{
    let card=document.createElement('div')
    
    card.classList.add('card')
    card.innerHTML= `
    <a href="${element.link}" target="_blank" class="name">${element.linkName}</a>

    <span class="stack">
    <img src="./assets/images/play.png" alt="" class='btn'>
    ${element.name}</span>
    <span class="condition">${element.condition}</span>

    `
// const btn=document.querySelector('.btn')
// btn.addEventListener('click',function(){
  
//     stack.forEach((stackElem)=>{
//         let box=document.createElement('div')
//         box.classList.add('box')
//         box.innerHTML=`
//         <p>${stack.stackElem}</p>
        
//         `
//         cardWrapper.appendChild(Bo)
//     })
// })
    if(element.condition=='Done'){
card.style.background='rgb(104, 196, 104)'
    }
    else if(element.condition=='OnGoing'){
card.style.background='rgb(204, 219, 117)'

    }
    else{
        card.style.background='rgb(219, 117, 117)';
    }
    cardWrapper.appendChild(card)

    
}

)
let timer=document.querySelector('.timer')
timer.innerHTML=date