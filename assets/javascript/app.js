let questions = [
    {
        id: 0,
        question: 'This very popular resort city is located in the Mexican state of Quintana Roo, on what is known as the the Mayan Riviera.',
        choices: ['Ixtapa', 'Acapulco', 'Cancun', 'Puerto Vallarta'],
        correct: 'Cancun',
    },
    {
        id: 1,
        question: 'Which of the following geographical areas does not have a Rainforest?',
        choices: ['Africa', 'Central America', 'North America', 'Southern Asia'],
        correct: 'North America',
    },
    {
        id: 2,
        question: 'In which rainforest layer will you find a sloth?',
        choices: ['Forest Floor', 'Understory', 'Canopy', 'Emergent'],
        correct: 'Canopy',
    },
    {
        id: 3,
        question: 'What makes a spider monkey unique from other monkeys?',
        choices: ['It has only 4 fingers and no thumb', 'It likes to eat spiders', 'It likes to hang upside-down like a spider', 'It uses its tail as an extra limb'],
        correct: 'It has only 4 fingers and no thumb',
    },
    {
        id: 4,
        question: 'Orchids share a common pattern of how many petals?',
        choices: ['1', '2', '3', '4'],
        correct: '3',
    },
    {
        id: 5,
        question: 'Bamboo, bananas, sugar cane, rubber, ginger, vanilla, and black pepper are not found in the tropical rainforest. True or False?',
        choices: ['True', 'False'],
        correct: 'True',
    },
    {
        id: 6,
        question: 'This island nation was a playground for movie stars and mob types, until its famous Revolution in 1959. It sits in the middle of Hurricane Alley, 90 miles off the coast of Florida.',
        choices: ['Cuba', 'Bermuda', 'Cozumel', 'Haiti'],
        correct: 'Cuba',
    }
]

questions.forEach(question => {
    $('.container').append(`
    <div class="row">
        <h5 class="question">${question.question}</h5>
        <p>
            <label>
                <input class="choice" data-choice="${question.choices[0]}"  name="question-${question.id}" type="radio"/>
                <span class = "quizAnswer">${question.choices[0]}</span>
                </label>
                </p>
         <p>
            <label>
                <input class="choice" data-choice="${question.choices[1]}" name="question-${question.id}" type="radio"/>
                <span class = "quizAnswer">${question.choices[1]}</span>
            </label>
        </p>
        <p>
            <label>
                <input class="choice" data-choice="${question.choices[2]}" name="question-${question.id}" type="radio"/>
                <span class = "quizAnswer">${question.choices[2]}</span>
                </label>
        </p>
        <p>
            <label>
                <input class="choice" data-choice="${question.choices[3]}" name="question-${question.id}" type="radio"/>
                <span class = "quizAnswer">${question.choices[3]}</span>
            </label>
        </p>
        <p class="answer-${question.id}" id="answerReveal" style="visibility: hidden">${question.correct}</p>
    </div>
`)
})

var qChoice0
var qChoice1
var qChoice2
var qChoice3
var qChoice4
var qChoice5
var qChoice6

$(document).on('click', '.choice', function () {
    let temp = $(this).attr('name').split('-')
    let qId = temp[1]
    window[`qChoice${qId}`] = $(this).attr('data-choice')
})

$('.finishQuiz').on('click', function () {
    finishGame()
})

function finishGame() {
    clearInterval(gameTimer)
    count = 0
    for (let i = 0; i < questions.length; i++) {
        $(`.answer-${i}`).css('visibility', 'visible')
        if (window[`qChoice${i}`] === questions[i].correct) {
            count++
        }
    }
    if (count === 7) {
        alert('You win!')
    } else {
        alert('Try again!')
    }

}

function timeConversion(t) {
    var minutes = Math.floor(t / 60)
    var seconds = t - (minutes * 60)

    if (seconds < 10) {
        seconds = '0' + seconds
    }
    if (minutes === 0) {
        minutes = '00'
    } else if (minutes < 10) {
        minutes = '0' + minutes
    }
    return minutes + ':' + seconds
}

let time = 120
$('.time').html('02:00')

let gameTimer = setInterval(function () {
    time--
    if (time > 0) {
        $('.time').html(timeConversion(time))
    } else {
        $('.time').html('00:00')
        finishGame()
    }
}, 1000)
