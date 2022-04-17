const { nextLine } = require("@learnly/simple-reader");
function addToDoItem () {
    console.log("Enter your new item:");
    let item = nextLine();
    toDoList.push(item);
    console.log("Item saved!");
}

function listToDo () {
    console.log("Your current items:");
    for(let i=1; i<=toDoList.length; i++) {
        console.log(i+". "+toDoList[i-1]);
    }
}

function deleteToDoItem () {
    console.log(`Enter item number you would like to delete [1-${toDoList.length}]:`);              //templetes strings used with `` - backticks 
    let deleteItemNumber = Number(nextLine());
    if(deleteItemNumber>toDoList.length || deleteItemNumber <= 0 || isNaN(deleteItemNumber)) {
        console.log("invalid item number");
        return;
    }
    toDoList.splice(deleteItemNumber-1, 1);
    console.log("Deleting "+deleteItemNumber);
    console.log("Deleted!");
}

module.exports = {
    addToDoItem,
    listToDo,
    deleteToDoItem
}