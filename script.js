
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
    
    for (let index = 0; index < count; index++){
        const code = emojiCodes[index];

        const emoji = String.fromCodePoint(code);

        const $card = document.createElement('div');
        $card.classList.add('emoji-card');

        const $emoji = document.createElement('p')
        $emoji.classList.add('emoji');
        $emoji.textContent = emoji; 

        const $emojiCode = document.createElement('p');
        $emojiCode.classList.add('emoji-code');
        $emojiCode.textContent = code;

        $card.appendChild($emoji);
        $card.appendChild($emojiCode)

        $gallery.appendChild($card);

    }
}

// display emojis
showEmojis();