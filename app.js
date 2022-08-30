/* Coded by 
	 Name	: Nasir Raza
	 Roll #	: KH01210813250
*/

// Creating Constructor

function StudentRecord(fName, lName, fatherName, rollNo, course, age, edu, inst) {
    this.fName = fName;
    this.lName = lName;
    this.fatherName = fatherName;
    this.rollNo = rollNo;
    this.course = course;
    this.age = age;
    this.edu = edu;
    this.inst = inst;
}

// Creating empty array and pushing students data into array
var studentRecordArr = [];

studentRecordArr.push(new StudentRecord("Imran", "Khan", "Riaz Khan", "KH01256783250", "Video Editing & Animation", 30, "Intermediate", "SMIT"));

studentRecordArr.push(new StudentRecord("Salman", "Khan", "Faisal Ahmed", "KH01210814567", "Digital Marketing", 29, "Graduate", "SMIT"));

studentRecordArr.push(new StudentRecord("Nasir", "Raza", "Akhtar Raza", "KH01210813250", "Web and Mobile Application Design", 43, "Graduate", "SMIT"));

studentRecordArr.push(new StudentRecord("Athar", "Ali", "Ali Raza", "KH01215678250", "Graphics Design", 23, "Matric", "SMIT"));

studentRecordArr.push(new StudentRecord("Ali", "Khan", "Mazhar Khan", "KH01298763250", "Artificial Intelligence", 27, "Intermediate", "SMIT"));



var div = document.getElementById("std-rec")

// Creating table
var table = document.createElement('table')

// Creating table caption and set its value
var tc = table.createCaption()
var t = document.createTextNode("Student Records")
tc.appendChild(t)

// Creating empty row and add to table
var tr = document.createElement('tr')
table.appendChild(tr)

//Creating header row  
for (var stdRec in studentRecordArr[0]) {
    var td = document.createElement('td')
    var t = document.createTextNode(stdRec)

    console.log(t)
    if (t === "fName") {
        console.log("inside if");
        t = "First Name";
    }
    else if (t === "lName") {
        console.log("inside if");
        t = "Last Name";
    }
    tr.appendChild(td)
    td.appendChild(t)
}

//Creating Student records rows  

for (var i = 0; i < studentRecordArr.length; i++) {
    var tr = document.createElement('tr')
    for (var stdRec in studentRecordArr[i]) {
        console.log(stdRec, studentRecordArr[i][stdRec]);
        var td = document.createElement('td')
        var t = document.createTextNode(studentRecordArr[i][stdRec])
        
        table.appendChild(tr)
        tr.appendChild(td)
        td.appendChild(t)
    }
}

// Adding table o div

div.appendChild(table)

// Creating Constructor

function FoodDeals(item1, item2, item3, price) {
    this.item1 = item1;
    this.item2 = item2;
    this.item3 = item3;
    this.price = price;
}

// Creating empty array and pushing food deals data into array
var foodDealsArr = [];

foodDealsArr.push(new FoodDeals("1 Zinger Burger", "1 Chicken Roll", "Pepsi 1 liter", "Price Before: 400 Rs. After: 350 Rs."));

foodDealsArr.push(new FoodDeals("2 Zinger Burger", "2 Chicken Roll", "Pepsi 1.5 liters", "Price Before: 800 Rs. After: 750 Rs."));

foodDealsArr.push(new FoodDeals("3 Zinger Burger", "3 Chicken Roll", "Pepsi 2.25 liters", "Price Before: 1250 Rs. After: 1150 Rs."));


var div = document.getElementById("food-list")

//Creating list   
var ol = document.createElement('ol')

for (var i = 0; i < foodDealsArr.length; i++) {
    var oli = document.createElement('li')
    var t = document.createTextNode("Deal - " + (i + 1))
    oli.appendChild(t)
    ol.appendChild(oli)
    var ul = document.createElement('ul')
    for (var foodItem in foodDealsArr[i]) {
        console.log(foodItem, foodDealsArr[i][foodItem]);
        
        var uli = document.createElement('li')
        var t = document.createTextNode(foodDealsArr[i][foodItem])
        
        uli.appendChild(t)
        ul.appendChild(uli)
        
    }
    oli.appendChild(ul)
}

// Adding heading / list in div
var h = document.createElement('h1')
var t = document.createTextNode("Ordered / Unordered List")
h.appendChild(t)
div.appendChild(h)
div.appendChild(ol)