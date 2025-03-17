import PromptSync from 'prompt-sync';
const prompt = PromptSync();

function palindrome(s){
    for(let i=0;i<s.length/2; i++){
        if (s.charAt(i)!=s.charAt(s.length-1-i)){
            return false;
        }
    }
    return true;
}

const str = prompt("Enter a string : ");

console.log(`${str} is Palindrome : ${palindrome(str)}`);