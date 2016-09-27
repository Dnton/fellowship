console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  var middleEarth = document.createElement('section')
  middleEarth.id = 'middle-earth'
  console.log(middleEarth)
  body.appendChild(middleEarth)
  // add each land as an article tag

  for (var i = 0; i < lands.length; i++) {
    var thelands = document.createElement('article')
    // middleEarth.appendChild(thelands)
    document.querySelector('#middle-earth').appendChild(thelands)
    document.querySelectorAll('article')[i].innerHTML = '<h1>' + lands[i] + '</h1>'
  }
   // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
var hobbitList = document.createElement('ul')

var hobbitArticle = document.querySelector('article')
hobbitArticle.appendChild(hobbitList)
console.log(hobbitArticle)
  for (var i = 0; i < hobbits.length; i++) {
    var hobbitName = document.createElement('li')
    hobbitName.innerHTML = hobbits[i]
    hobbitName.className = 'hobbit'
    hobbitList.appendChild(hobbitName)
  }
}

makeHobbits();


// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var onering = document.createElement('div')
  onering.id = 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  onering.className = 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  onering.addEventListener('click', nazgulScreech)
  // add the ring as a child of Frodo
  var frodo = document.querySelector('li')
  frodo.appendChild(onering)
}
keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  var companions = document.createElement('aside')
  // attach an unordered list of the 'buddies' in the aside
  var fellows = document.createElement('ul')
  // insert your aside as a child element of rivendell
  var rivendell = document.querySelector('article:nth-child(2)')
  rivendell.appendChild(companions)
  companions.appendChild(fellows)
  for (var i = 0; i < buddies.length; i++) {
    var buddiesList = document.createElement('li')
    buddiesList.innerHTML = buddies[i]
    fellows.appendChild(buddiesList)
  }

}

makeBuddies()


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var aside = document.querySelector('aside')
  var list = aside.querySelector('ul')
  var fellows4 = list.querySelector('li:nth-child(4)')
  fellows4.textContent = 'Aragorn'
}
beautifulStranger()

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var adventure = document.querySelector('ul')
  var rivendell = document.querySelector('article:nth-child(2)')
  rivendell.appendChild(adventure)

}
leaveTheShire()


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var fellowship = document.createElement('div')
  fellowship.className = 'the-fellowship'
  var rivendell = document.querySelector('article:nth-child(2)')
  rivendell.appendChild(fellowship)
  // add each hobbit and buddy one at a time to 'the-fellowship'
// var hobbitsAll = document.querySelectorAll('ul').remov
// var huntingBuddies = document.querySelector('aside')
// var buddiesFound = huntingBuddies.querySelector('ul')
// var buddiesMoved = buddiesFound.querySelectorAll('li').removeChild('li')
// fellowship.appendChild(buddiesMoved)
// var hobbitsAll = document.querySelectorAll('hobbits')
// for (var i = 0; i < hobbits.length; i++) {
//   fellowship.appendChild(hobbitsAll[i])
// }
// for (var j = 0; )
  // after each character is added make an alert that they have joined your party


}
forgeTheFellowShip()

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  var gandalfParty = document.querySelector('aside')
  var narrowParty = gandalfParty.querySelector('ul')
  var theWhite = narrowParty.querySelector('li:nth-child(1)')
  theWhite.textContent = "Gandalf the White"
  // apply style to the element
  theWhite.style.backgroundColor = 'white'
  theWhite.style.border = '1px solid grey'
  // make the background 'white', add a grey border
}
theBalrog()

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  var doom = document.createElement(div)
  doom.id = 'mount-doom'
  var mordor = document.querySelector('article:nth-child(3)')
  mordor.appendChild(doom)
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var smeagol = document.createElement('div')
  smeagol.id = 'gollum'
  var mordor = document.querySelector('article:nth-child(3)')
  morder.appendChild(smeagol)

  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
