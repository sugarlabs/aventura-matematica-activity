var math_table_range = 12;
var math_table_minimumrange = 6;
var math_table_maxrange = 12;
var mathtable_columnvalues = new Array(4);
var mathtable_rowvalues = new Array(4);

/*====================================================
Function that initialises the math_table
=====================================================*/
function initialise_math_table(){

if(level_operator == "/")
  level_operator = "*";

//Reset the input fields
for(var i=1; i<=10; i++){
document.getElementById("multi_table_input_" + i).value = "";
}

//Initialise the first td of the table
document.getElementById("mathtable_operator").innerHTML = level_operator;

//Initialise the row "headers"
for(var i = 1; i<=3; i++){
var rowheader = document.getElementById("multi_table_row_header" + i);

do{
//Get a random value inside a range
var rowvalue = Math.floor(Math.random() * (math_table_maxrange - math_table_minimumrange) + math_table_minimumrange);	

var exists = false;	//Used to make the exercise unique
var ok = true;		//Used for making sure that numbers are not negative

for(var j=0; j<mathtable_rowvalues.length; j++){
  if(mathtable_rowvalues[j] == rowvalue){
  	exists = true;
	break;
  }
}

}
while(exists == true);

mathtable_rowvalues[i] = rowvalue;
rowheader.innerHTML = rowvalue;
}

//Initialise the four Headers of each Column
for(var i = 1; i<=4; i++){
var columnheader = document.getElementById("multi_table_col_header" + i);

do{

var columnvalue = Math.floor(Math.random() * math_table_range) + 1;

var exists = false;
var ok = true;

for(var j = 0; j< mathtable_columnvalues.length; j++){	
  if(mathtable_columnvalues[j] == columnvalue){		//Check if this header already exists
  	exists = true;
	break;
  }
}

if(!exists){	
for(var k = 0; k< mathtable_rowvalues.length; k++){
  if(mathtable_rowvalues[k] - columnvalue < 0){		//Check if the result of the substraktion of the two numbers is below zero
	ok = false;
	break;
  }
 }
}
}
while(exists || !ok);

mathtable_columnvalues[i] = columnvalue;	//Add the value to the already used values
columnheader.innerHTML = columnvalue;		//Set the value to the column header
}



//Initialise the first two fields
for(var i = 1; i<= 2; i++){
var result = document.getElementById("multi_table_td_" + i);

var firstnumber = parseInt(document.getElementById("multi_table_row_header" + result.getAttribute("row")).innerHTML);
var secondnumber = parseInt(document.getElementById("multi_table_col_header" + result.getAttribute("column")).innerHTML);

result.innerHTML = operators[level_operator](firstnumber, secondnumber);		//The level_operator variable is set in the selectionscreen.js
} // End for

}

/*=============================================================
Function for controling the inputs
============================================================*/
function control_math_table_inputs(){

sound_buttonclicked.play();

var correct = true;

for(var i=1; i<=10; i++){	//10 Because there are ten input elements

var inputelement = document.getElementById("multi_table_input_" + i);

var firstnumber = parseInt(document.getElementById("multi_table_row_header" + inputelement.getAttribute("row")).innerHTML);
var secondnumber = parseInt(document.getElementById("multi_table_col_header" + inputelement.getAttribute("column")).innerHTML);


if(parseInt(inputelement.value) != (operators[level_operator](firstnumber,secondnumber))){		//The level_operator variable is set in the selectionscreen.js
correct = false;
break;
}

}//End for loop

//Call the Function that is responsible for drawing the bananas 
checksalmonfields(correct);		//Call the checksalmonfields located in the mainscript.js with a boolean as parameter

}

/*=======================================================
Function that plays the sound if you click on an input field
========================================================*/
function mathtable_inputonclick(){
sound_golfsound.play();
}


