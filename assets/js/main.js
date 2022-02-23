//for i= StartYear; i<startyear2 ; if date = 13 + fri -> Print
//intervall? reiner for loop?
//für jedes i++ -> dateTime addDays?

let days = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']

let date1 = new Date('2022. 1. 1');
console.log(date1);
date1.setDate(date1.getDate() + 1);
console.log(date1);
// let year = date.getFullYear();
// console.log(year);
let day = days[date1.getDay()];
console.log(day);




let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'Dezember'];

findFriday13 = (startDate) => {
    let h1 = document.createElement('h1');
    let ul = document.createElement('ul');
    let div = document.createElement('div');
    let counter = 0;
    document.body.appendChild(div);
    let dateStart = new Date(`'${startDate}. 1. 1.'`)
    let dateEnd = new Date(`'${startDate + 1}. 1. 1.'`)
    console.log(dateStart);
    console.log(dateEnd);
    let date = dateStart;
    console.log(date);
    for (let i = 0; date < dateEnd; i++) {
        console.log(i);
        date.setDate(date.getDate() + 1);
        let weekDay = days[date.getDay()];
        let dag = date.getDate();
        console.log(dag);
        console.log(weekDay);
        console.log(date);
        if (dag === 13 && weekDay == 'Fr') {
            counter++;
            h1.textContent = `Das Jahr ${startDate} hat ${counter} Unglückstage.`;
            div.appendChild(h1);
            div.appendChild(ul);
            let li = document.createElement('li');
            let fullDate = `${weekDay}, ${date.getDate()}th ${months[date.getMonth()]} ${date.getFullYear()}  `
            li.textContent = fullDate;
            ul.appendChild(li);

        }
    }
}

// }

findFriday13(2020);
findFriday13(2016);
findFriday13(2015);
