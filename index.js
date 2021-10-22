// Description
// This is the first try at a common program built by new developers, the todo list. You'll have to use everything we've covered so far in JS to tackle this challenge

// Instructions
// - Use this starting template, you'll find two objects with data for you to use => https://codesandbox.io/s/todo-lists-tr122?from-embed=&file=/index.js (the data is in data.js)
// - Do not code your solution in CodeSandbox
// - Create an alert that lists all users, with their ids, names and what city they're from
// - Prompt the user for a user id
// - Display an alert with the username and all the todos titles that belong to that user 

// Tips
// - The user id creates an identifiable relationship with the todos
// - Sometimes it's good to map some values into a new data structure

// Challenge
// After you select a user, add the option to either show the todos or add a new todo to the list

// Challenge 2
// Now that you can add a todo, add the option to either delete or update a todo. Add also the option to repeatedly choose a different user, or to finish the program

// Origininal challenge

for (i = 0; i < users.length; i++) {
    let allUsers = [(users[i].id), (users[i].name), (users[i].address.city)];
    console.log(allUsers);
}; 


const noticeID = prompt("Please enter your user Id");
let todosList = [];

for (i = 1; i <= todos.length; i++) {
    if ( todos[i-1].userId == (Number(noticeID)) ) {
      todosList == todosList.push(todos[i-1].title);        
    } 
}

for (i = 1; i <= users.length; i++) {
    if ( users[i-1].id == (Number(noticeID)) ) {
      todosList += todosList.unshift(users[i-1].username);
    }
}
console.log(todosList);

const finish = alert(todosList);


