// Questions will be asked
const Questions = [{
    id: 0,
    q: "quelle est la capitale du canada?",
    a: [{ text: "Québec", isCorrect: false },
        { text: "Winnipeg", isCorrect: false },
        { text: "Ottawa", isCorrect: true },
        { text: "Montréal", isCorrect: false }
    ]

},
{
    id: 1,
    q: "Quelle est la capitale Thailand?",
    a: [{ text: "Lampang", isCorrect: false, isSelected: false },
        { text: "phuket", isCorrect: false },
        { text: "Ayutthaya", isCorrect: false },
        { text: "Bangkok", isCorrect: true }
    ]

},
{
    id: 2,
    q: "quelle est la capitale du Maroc?",
    a: [{ text: "Casablanca", isCorrect: false },
        { text: "Marrakech", isCorrect: false },
        { text: "Rabat", isCorrect: true },
        { text: "Fès", isCorrect: false }
    ]

}

]

// Set start
let start = true;

// Iterate
function iterate(id) {

// Getting the result display section
let result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const an1 = document.getElementById('an1');
const an2 = document.getElementById('an2');
const an3 = document.getElementById('an3');
const an4 = document.getElementById('an4');


// Providing option text 
an1.innerText = Questions[id].a[0].text;
an2.innerText = Questions[id].a[1].text;
an3.innerText = Questions[id].a[2].text;
an4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
an1.value = Questions[id].a[0].isCorrect;
an2.value = Questions[id].a[1].isCorrect;
an3.value = Questions[id].a[2].isCorrect;
an4.value = Questions[id].a[3].isCorrect;

let selected = "";

// Show selection for op1
an1.addEventListener("click", () => {
    an1.style.backgroundColor = "lightgoldenrodyellow";
    an2.style.backgroundColor = "lightskyblue";
    an3.style.backgroundColor = "lightskyblue";
    an4.style.backgroundColor = "lightskyblue";
    selected = an1.value;
})

// Show selection for op2
an2.addEventListener("click", () => {
    an1.style.backgroundColor = "lightskyblue";
    an2.style.backgroundColor = "lightgoldenrodyellow";
    an3.style.backgroundColor = "lightskyblue";
    an4.style.backgroundColor = "lightskyblue";
    selected = an2.value;
})

// Show selection for op3
an3.addEventListener("click", () => {
    an1.style.backgroundColor = "lightskyblue";
    an2.style.backgroundColor = "lightskyblue";
    an3.style.backgroundColor = "lightgoldenrodyellow";
    an4.style.backgroundColor = "lightskyblue";
    selected = an3.value;
})

// Show selection for op4
an4.addEventListener("click", () => {
    an1.style.backgroundColor = "lightskyblue";
    an2.style.backgroundColor = "lightskyblue";
    an3.style.backgroundColor = "lightskyblue";
    an4.style.backgroundColor = "lightgoldenrodyellow";
    selected = an4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "white";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "white";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
let id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 2) {
    id++;
    iterate(id);
    console.log(id);
}

})