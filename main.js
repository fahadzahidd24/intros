const persons = [
    {
        'name': 'Elon Musk',
        'src' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg',
        'desc' : 'Elon Reeve Musk FRS is a business magnate and investor. He is the founder, CEO and chief engineer of SpaceX; angel investor, CEO and product architect of Tesla, Inc.; owner and CEO of Twitter, Inc.; founder of The Boring Company; co-founder of Neuralink and OpenAI; and president of the philanthropic Musk Foundation. ',
        'project':'Space X'
    },
    {
        'name': 'Jeff Bezos',
        'src' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Jeff_Bezos_visits_LAAFB_SMC_%283908618%29_%28cropped%29.jpeg/640px-Jeff_Bezos_visits_LAAFB_SMC_%283908618%29_%28cropped%29.jpeg',
        'desc' : 'Jeffrey Preston Bezos is an American entrepreneur, media proprietor, investor, and commercial astronaut. He is the founder, executive chairman, and former president and CEO of Amazon.',
        'project':'Amazon'
    },
    {
        'name': 'Mark Zuckerberg',
        'src' : 'https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg',
        'desc' : 'Mark Elliot Zuckerberg is an American business magnate, internet entrepreneur, and philanthropist. He is known for co-founding the social media website Facebook and its parent company Meta Platforms, of which he is the chairman, chief executive officer, and controlling shareholder.',
        'project':'Facebook'
    }
]
const next = document.querySelector('.next');
const previous = document.querySelector('.previous');
const imgSrc = document.querySelector('img');
const name = document.querySelector('.name');
const project = document.querySelector('.project');
const desc = document.querySelector('.desc');
let i = 0;
document.addEventListener('DOMContentLoaded',()=>{
    imgSrc.src = persons[i].src;
    name.textContent = persons[i].name;
    project.textContent = persons[i].project;
    desc.textContent = persons[i].desc;
})
next.addEventListener('click',()=>{
    i++;
    if(i>=persons.length)
        i = 0;

    imgSrc.src = persons[i].src;
    name.textContent = persons[i].name;
    project.textContent = persons[i].project;
    desc.textContent = persons[i].desc;
})
previous.addEventListener('click',()=>{
    i--;
    if(i<0)
        i = persons.length - 1;

    imgSrc.src = persons[i].src;
    name.textContent = persons[i].name;
    project.textContent = persons[i].project;
    desc.textContent = persons[i].desc;
})
