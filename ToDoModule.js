const { nextLine } = require("@learnly/simple-reader");
const { addToDoItem, listToDo, deleteToDoItem } = require("./todofunctions");
const fs = require("fs");

let Oper = ["add", "list", "delete", "exit"];

try {
	toDoList = fs.readFileSync("todolist.txt", "utf-8").split(",");
} catch (err) {
	console.log("List is empty, nothing to read");
	toDoList = [];
}

while (true) {
	console.log("What operation would you like to perform? One of [add, list, delete, exit]");
	OperationInput = nextLine();
	if (Oper.includes(OperationInput)) {
		//array.includes
		console.log(OperationInput + " operation selected...");
	} else {
		console.log("invalid operation");
		continue;
	}
	if (OperationInput == "exit") {
		try {
			fs.writeFileSync("todolist.txt", toDoList.toString());
		} catch (err) {
			console.log("Something went wrong while writing content: " + err);
		}

		console.log("Goodbye!");
		break;
	}
	if (OperationInput == "add") {
		addToDoItem();
	}
	if (OperationInput == "list") {
		listToDo();
	}
	if (OperationInput == "delete") {
		if (toDoList.length == 0) {
			console.log("no available items");
			continue;
		}
		listToDo();
		deleteToDoItem();
	}
}
