const prompt = require(`prompt-sync`)();

const name = prompt("Enter Name : ");
const grade = parseInt(prompt("Enter Grade : "));
const subjects = prompt("Enter subjects : ").split(',').map(sub=>sub.trim());

const Student = {
    name : name,
    grade : grade,
    subjects : subjects,
    displayInfo : function(){
        console.log(` Student's Details `);
        console.log(`Name : ${this.name}`);
        console.log(`Grade : ${this.grade}`);
        console.log(`Subjects : ${this.subjects.join(" , ")}`);
    }
};
                                                    
Student.displayInfo();
console.log(`Passed : ${Student.passed = Student.grade >= 40}`);

console.log("Complete Student Objects :- ");
for(let key in Student){
    if (typeof Student[key] !== "function")
        console.log(`${key} : ${typeof Student[key] === 'object' ? 
        JSON.stringify(Student[key]) : Student[key]}`);
}
