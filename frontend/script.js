const firstPerson = {
    name: "Peter",
    sex: "male"
}

const secondPerson = {
    name: "Sarah",
    sex: "Female"
}

function detectSex(person) {
    console.log(person);
    if (person.sex === "Female") {
        return "This person is a female"
    } else if(person.sex === "male") {
        return "This person is a male"
    } else{
        return "This person's sex is not female nor male"
    }
}

console.log(detectSex(firstPerson));
console.log(detectSex(secondPerson));

console.log(detectSex({
    name: "Matyi",
    sex: "Male"
}));