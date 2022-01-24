// Seth Khan - Cesar Cipher

// Establish a variable containing the alphabet
var alpha = "abcdefghijklmnopqrstuvwxyz";

// Message to encrypt
var message = "we attack at dawn";

// Function to encode the message
function encode(message){
    let result = "";
    // Itterate through the message and shift the lettres by 3 forward.
    for (let i = 0; i < message.length; i++){
        let index = alpha.indexOf(message[i + 3]);
        result += message[index];
    }
    return result;
}

// Function to decode the message
function decode(message){
    let result = "";
    // Itterate through the message and shift the lettres by 3 backword.
    for (let i = 0; i < message.length; i++){
        let index = message.indexOf(message[i - 3]);
        result += alpha[index];
    }
    return result;
}

encode(message);
decode(message);