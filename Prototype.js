//Prototype Practice, make a Emaillist, use object constructer

function EmailList(name) {
	this.name = name
	this.list = [] //Array does not need a name
	this.addEmail = function addEmail(mail) { //function to push/add new emailadressess to the prototype
		this.list.push(mail);
	}
	this.sendEmail = function sendEmail(text) { //function to send email to whole list
		console.log("Email Content:" + "\n" + text)
		for(var i = 0; i < this.list.length; i++) {
			console.log("Sending email to:" + "\n" + this.list[i]) //Loop for array
		}
	}	
}

var one = new EmailList("Laura's list")
console.log(one.name)
one.addEmail("laurakramer91@gmail.com")
one.sendEmail("Hello Everyone")