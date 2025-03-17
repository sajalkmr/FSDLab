import PromptSync from 'prompt-sync';

const prompt=PromptSync();
const userinput = prompt('Enter a string : ');

console.log('Length of the string : ',userinput.length);

const extracted = userinput.includes('JavaScript')?
userinput.substring(userinput.indexOf('JavaScript'),
userinput.indexOf('JavaScript')+10) : 'Not Found';

console.log(`Extracted Word : ${extracted}`);

const newString = userinput.replace('JavaScript','Python');
console.log(`Modified String : ${newString}`);
