const { nextLine } = require("@learnly/simple-reader");
function addToDoItem(arr) {
	console.log("Enter your new item:");
	let item = nextLine();
	arr.push(item);
	console.log("Item saved!");
}

function listToDo(arr) {
	console.log("Your current items:");
	for (let i = 1; i <= arr.length; i++) {
		console.log(i + ". " + arr[i - 1]);
	}
}

function deleteToDoItem(arr) {
	console.log(`Enter item number you would like to delete [1-${arr.length}]:`); //templetes strings used with `` - backticks
	let deleteItemNumber = Number(nextLine());
	if (deleteItemNumber > arr.length || deleteItemNumber <= 0 || isNaN(deleteItemNumber)) {
		console.log("invalid item number");
		return;
	}
	arr.splice(deleteItemNumber - 1, 1);
	console.log("Deleting " + deleteItemNumber);
	console.log("Deleted!");
}

module.exports = {
	addToDoItem,
	listToDo,
	deleteToDoItem,
};
