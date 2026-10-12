
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
]

const $gallery = document.getElementById('gallery')