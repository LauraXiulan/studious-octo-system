//Write a function that returns the sum of three parameters
function returnSum(one, two, three) {
	return one + two + three
}
returnSum(4,6,7)

//Return last character of a string
function lastCharacter (word) {
	return word.substring(word.length - 1)
}
lastCharacter("duck") //Should return 'k'

//Return the cube of the parameter
function returnCube (number) {
	return (number * number * number)
}
returnCube(5) //Should return 125

//Reverse a string without using the reverse function
function reverseString(reverse) {
	var backwards = "" //Make new variable, leave it empty until after for loop
	for(var i = reverse.length - 1; i >= 0; i--) { //You want to count back so use i>=0 and i--
		backwards += reverse[i]
	}
	return backwards
}
reverseString("cattywampus")

//Make a function that returns the elements of the first array as keys and the elements of the second array as values
var array1 = ["Cookie", "Pizza", "Sushi"]
var array2 = ["Monster", "Junkie", "Master"]

function joinArrays (one, two){
	var join = {}
	for(var i = 0; i < array1.length; i++) {
		join[one[i]] = two[i]
	}
	return join
}
joinArrays(array1, array2)

/*Create two arrays, one contains the object's keys, the other the object's values.
Wrap this into a function that takes in one object that contains keys and values and returns a different object that contains two keys.
The first key should be named "keys" and will have the first array as a value.
The second key should be named "values" and will have the second array as a value.*/

var food = {
	cookie: "monster",
	pizza:  "junkie",
	sushi: "master"
}

function takeObject(object) {
	var newObject = {
		keys: [],
		values: []
	}
	for(var i in object) {
		newObject.keys.push(i)
		newObject.values.push(object[i])
	} return newObject
}
