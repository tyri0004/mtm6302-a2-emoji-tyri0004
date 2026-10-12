
// THE PLAN:

// CREATE an array of at least 12 emoji codes

// FIND the gallery container

// DEFINE showEmojis(count)
    // DEFAULT count to the array's length

    // CLEAR the existing gallery

    // REPEAT count times, starting at array index zero
        // READ the emoji code at the current index
        // CREATE a card containing the emoji and its code
        // ADD the card to the gallery

// CALL showEmojis() to display all emojis

// Array of emojis
const emojiCodes = [
    129409, 
    128640, 
    129412, 
    129327, 
    129313, 
    128126, 
    129302, 
    128123, 
    129414, 
    129498, 
    128584, 
    129392  
];

const $gallery = document.getElementById('gallery');

// function to show emojis within gallery
function showEmojis(count = emojiCodes.length){

    $gallery.innerHTML = '';

    // loops throught the first coount of emojis
    for (let index = 0; index < count; index++){
        const code = emojiCodes[index];

        // gets the emoji code
        const emoji = String.fromCodePoint(code);

        // creates the card
        const $card = document.createElement('div');
        $card.classList.add('emoji-card');

        // creates emoji element
        const $emoji = document.createElement('p')
        $emoji.classList.add('emoji');
        $emoji.textContent = emoji; 

        // creates code element
        const $emojiCode = document.createElement('p');
        $emojiCode.classList.add('emoji-code');
        $emojiCode.textContent = code;

        // adds emoji and code to card
        $card.appendChild($emoji);
        $card.appendChild($emojiCode)

        // adds card to gallery
        $gallery.appendChild($card);

    }
}

// display emojis
showEmojis();