// let questions = [
//     {
//         id: 0;
//         question: 'This very popular resort city is located in the Mexican state of Quintana Roo, on what is known as the the Mayan Riviera.',
//         choices: ['Ixtapa', 'Acapulco', 'Cancun', 'Puerto Vallarta'],
//         correct: 'Cancun',
//     },
//     {
//         id: 1;
//         question: 'Which of the following geographical areas does not have a Rainforest?',
//         choices: ['Africa', 'Central America', 'North America', 'Southern Asia'],
//         correct: 'North America',
//     },
//     {
//         id: 2;
//         question: 'In which rainforest layer will you find a sloth?',
//         choices: ['Forest Floor', 'Understory', 'Canopy', 'Emergent'],
//         correct: 'Canopy',
//     },
//     {
//         id: 3;
//         question: 'What makes a spider monkey unique from other monkeys?',
//         choices: ['It has only 4 fingers and no thumb', 'It likes to eat spiders', 'It likes to hang upside-down like a spider', 'It uses its tail as an extra limb'],
//         correct: 'It has only 4 fingers and no thumb',
//     },
//     {
//         id: 4;
//         question: 'Orchids share a common pattern of how many petals?',
//         choices: [1, 2, 3, 4],
//         correct: '3',
//     },
//     {
//         id: 5;
//         question: 'Bamboo, bananas, sugar cane, rubber, ginger, vanilla, and black pepper are not found in the tropical rainforest. True or False?',
//         choices: [True, False],
//         correct: True,
//     },
//     {
//         id: 6;
//         question: 'This island nation was a playground for movie stars and mob types, until its famous Revolution in 1959. It sits in the middle of Hurricane Alley, 90 miles off the coast of Florida.',
//         choices: ['Cuba', 'Bermuda', 'Cozumel', 'Haiti'],
//         correct: 'Cuba',
//     }
// ]

// questions.forEach(question => {
//     $('.container').append(`
//     <div class="row">
//         <h5 class="question">${question.question}</h5>
//         <p>
//             <label>
//                 <input name="question-${question.id}" type="radio" checked />
//                 <span>${question.choices[0]}</span>
//                 </label>
//                 </p>
//          <p>
//             <label>
//                 <input name="question-${question.id}" type="radio" checked />
//                 <span>${question.choices[1]}</span>
//             </label>
//             </p>
//                         <p>
//                             <label>
//                                 <input name="question-${question.id}" type="radio" checked />
//                                 <span>${question.choices[2]}</span>
//                                 </label>
//                                 </p>
//                                 <p>
//                                     <label>
//                                         <input name="question-${question.id}" type="radio" checked />
//                                         <span>${question.choices[3]}</span>
//                                         </label>
//                                         </p>
//                                         <p>
//                                             <label>
//                                                 <input name="question-${question.id}" type="radio" checked />
//                                                 <span>${question.choices[4]}</span>
//                                                 </label>
//                                                 </p>
//                                                 <p>
//                                                     <label>
//                                                         <input name="question-${question.id}" type="radio" checked />
//                                                         <span>${question.choices[5]}</span>
//                                                         </label>
//                                                         </p>
//                                                         <p>
//                                                             <label>
//                                                                 <input name="question-${question.id}" type="radio" checked />
//                                                                 <span>${question.choices[6]}</span>
//                                                                 </label>
//                                                                 </p>
//                                                                 <p class="answer">${question.correct}</p>
//                                                                 </div>
//                                                                 `)
// })