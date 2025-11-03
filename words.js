var allWords = []
var counter = 0

/*
 * This function will be used when the user enters new text into the "words"
 * input field.  It removes all special characters from the input, converts
 * to lowercase, and splits the input string into an array of individual
 * words (separated by spaces in the input string).
 *
 * The globals `allWords` and `counter` are updated by this function.
 */
function handleNewWordsEntered(event) {
  console.log("== handleNewWordsEntered() called")
  var input = event.currentTarget.value
  console.log("== handleNewWordsEntered() called, input:", input)
  allWords = input.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '')
    .toLowerCase()
    .split(' ')
  counter = 0
  console.log(" -- allWords:", allWords)
}

var wordsInput = document.getElementById("words-input")
wordsInput.addEventListener("change", handleNewWordsEntered)

function getHighlightColor() {
  return null
}

function handleAddWordButtonClick(event) {
  console.log("== add word button clicked")
  var wordIdx = counter % allWords.length
  var word = allWords[wordIdx]
  if (word) {
    console.log(" -- word:", word)
    var highlightColor = getHighlightColor()
    var wordElem = generateWordElem(word, highlightColor)
    var button = event.currentTarget
    var container = button.parentNode.parentNode
    var wordsContainer = container.getElementsByClassName("words-container")[0]
    wordsContainer.appendChild(wordElem)
    counter++
  }
}

var addWordButtons = document.getElementsByClassName("add-word-button")
for (var i = 0; i < addWordButtons.length; i++) {
  addWordButtons[i].addEventListener("click", handleAddWordButtonClick)
}

/*
 * This function generates a DOM element representing a single word to be
 * inserted into one of the word boxes.  The word is highlighted appropriately
 * if `highlightColor` is "red", "green", or "blue".  The word is not
 * highlighted if `highlightColor` is falsy.
 */
function generateWordElem(word, highlightColor) {
	var wordElem = document.createElement('span')
  wordElem.classList.add('word')
  wordElem.textContent = word
  if (highlightColor) {
  	wordElem.classList.add('highlight')
  	wordElem.classList.add(highlightColor)
  }
  return wordElem
}
