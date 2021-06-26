const reviews = [
    {
        id: 1,
        name: 'Rubayat Hussain',
        job: 'Frontend Developer',
        img: 'https://scontent.fdac41-1.fna.fbcdn.net/v/t1.6435-9/159146605_476754273360889_2324960109267269366_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=174925&_nc_eui2=AeFW9g_ynqDZQHcLgac2qqTYfoctyZWLbo1-hy3JlYtujQSLZbfDU_d74HZweCuX_yru0OiFwZ0kXEAKgFDHGBDf&_nc_ohc=meqtqWq_ET0AX8x2TI9&tn=35zgxwscEFKE_x2B&_nc_ht=scontent.fdac41-1.fna&oh=a4d7613a2c58f4e1b5b5cbf527cbffbd&oe=60DA0282',
        text: "I'm Rubayat Hussain.I'm new in this sector.Actually I'm studen of class 10.But I'm very Pationate about Developing.So that I'm hare.And to be honest, I've no any experience."
    },
    {
        id: 2,
        name: 'Saiful Islam',
        job: 'Web designer',
        img: 'https://scontent.fdac41-1.fna.fbcdn.net/v/t1.6435-9/99010937_136854497975372_7640039245196820480_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=174925&_nc_eui2=AeGvPzVzrVxj59Qmszhgo8Pqcb8_A8U37DNxvz8DxTfsM2flnucBV6XD5R0stDQvaBAZDNWwPPh6RHLqwMa9tGTa&_nc_ohc=_LdKZLbHBgoAX_AkVsQ&_nc_ht=scontent.fdac41-1.fna&oh=eb2b83bb393bbd68fe6d214263d84f10&oe=60DA687A',
        text: "I'm Saiful Islam.I'm totally new in this sector of designing.But I'm passionate.I start my jouney since 3 mounths.I was came this site for my cousin Bayjid.He tryid his best to motivat me.And I hope that I can gain my goal."
    },
    {
        id: 3,
        name: 'Ashiqul Islam',
        job: 'On the way to be a Full-Stac Developer',
        img: 'https://scontent.fdac41-1.fna.fbcdn.net/v/t1.6435-9/154843476_1587942671405642_8131220315780928015_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGFaN1DDT6lImiXCxhIr03eihgWumawTj2KGBa6ZrBOPaHlLnziZmEVcDT1w-yhqgXQBi8jaBDPzx2bVHS0L4aO&_nc_ohc=5PpWhQya4L4AX86vL7U&_nc_ht=scontent.fdac41-1.fna&oh=ac00cdbaad93536f5e50ca75630fc221&oe=60D9E0A1',
        text: "I'm Ashiqul Islam.I'm very interested in this developing sector.And so I start my journey sinsce a month.I jsut learn HTML.I know many people will laugh to know my little skill.But I've strong motivation for this.And I hope that one day I will be a successful perosn in this site."
    }
];

const author = document.getElementById('author');
const img = document.getElementById('person-img');
const job = document.getElementById('job');
const name = document.getElementById('name');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentItem = 0;
window.addEventListener('DOMContentLoaded', () => {
    showPerson(currentItem);
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', () => {
    currentItem++;
    if (currentItem > reviews.length - 1 ) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click', () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});