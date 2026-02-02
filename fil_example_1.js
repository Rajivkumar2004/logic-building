const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

for (const key in person) {
    console.log(`values are ${key}`);
}