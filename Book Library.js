//Book object
var book1 = {
	title: "A Wizard's Life", 
	body: ["Jeremy was a very smart wizard.", "He already read the first three chapters beforehand.", "Therefore he knew that 'Wingardium Leviosa' could make things float."]
};

function bookValues(book) {
	console.log("Title: " + book1.title); //Print out title
	for (var i = 0; i < book1.body.length; i++) {
		console.log("Page " + (i + 1) + ": " + book1.body[i]) //Print out all values of the body (array)
	}
}

bookValues(book1);
