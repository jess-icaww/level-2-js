// ARRAYS & OBJECTS BASICS —
// -----------------------------------------

// -------- TASK 1 — CREATE A SIMPLE ARRAY --------

// STEP 1: Create an array called favoriteFruits with at least 3 fruits.
// STEP 2: Log the entire array.
// STEP 3: Log the first and second items using indexes.
let favoriteFruits = ["banana", "apple", "grape"];
console.log(favoriteFruits);
console.log(favoriteFruits[0], favoriteFruits[1]);

// -------- TASK 2 — MODIFY AN ARRAY --------

// STEP 4: Add a new fruit to the array (basic: favoriteFruits[3] = "...").
// STEP 5: Update one existing fruit (change its value).
// STEP 6: "Remove" a fruit by setting it to null or an empty string.
// STEP 7: Log the updated array.
favoriteFruits[3] = "pear";
favoriteFruits[0] = "mango";
favoriteFruits[3] = "";
console.log(favoriteFruits);
// -------- TASK 3 — CREATE A SIMPLE OBJECT --------

// STEP 8: Create an object called student with:
//         name, age, isEnrolled (boolean)
// STEP 9: Log the object.
// STEP 10: Log individual properties (student.name, student.age)
let student = {
    name: "Jessica",
    age: "22",
    isEnrolled: true
};
console.log(student);
console.log(student.name, student.age, student.isEnrolled);

// -------- TASK 4 — MODIFY OBJECT PROPERTIES --------

// STEP 11: Update the student's age.
// STEP 12: Add a new property called favoriteColor.
// STEP 13: Log the updated object.
student.age = "23";
student.favoriteColor = "Maroon";
console.log(student);