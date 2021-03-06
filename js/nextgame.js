var pattern1 = ["rectblue", "circleyellow", "circlegreen", "rectblue", "circleyellow", "circlegreen", "rectblue", "circleyellow", "circlegreen", "rectblue"];
var pattern2 = ["circleblue", "circleyellow", "circlegreen", "circleblue", "circleyellow", "circlegreen", "circleblue", "circleyellow", "circlegreen", "circleblue"];
var pattern3 = ["rectblue", "rectblue", "circleyellow", "circlegreen", "rectblue", "rectblue", "circleyellow", "circlegreen", "rectblue", "rectblue"];
var pattern4 = ["rectgreen", "circleblue", "rectgreen", "circleblue", "rectgreen", "circleblue", "rectgreen", "circleblue", "rectgreen", "circleblue"];
var pattern5 = ["circleyellow", "circleblue", "circlegreen", "circleyellow", "rectblue", "circleyellow", "circleblue", "circlegreen", "circleyellow", "rectblue"];
var pattern6 = ["rectblue", "circlegreen", "circleyellow", "rectgreen", "rectblue", "circlegreen", "circleyellow", "rectgreen", "rectblue", "circlegreen"];
var pattern7 = ["circleyellow", "circlegreen", "rectblue", "circleyellow", "circlegreen", "rectblue", "circleyellow", "circlegreen", "rectblue", "circleyellow"];
var pattern8 = ["circleblue", "circlegreen", "rectyellow", "circleyellow", "circleblue", "circlegreen", "rectyellow", "circleyellow", "circleblue", "circlegreen"];

var solution = new Array(10);

var pattern;
var pattern_drawn;
var numberofpatterns = 8;

var pattern1_drawn = 4;
var pattern2_drawn = 4;
var pattern3_drawn = 5;
var pattern4_drawn = 3;
var pattern5_drawn = 4;
var pattern6_drawn = 5;
var pattern7_drawn = 4;
var pattern8_drawn = 5;

var patternnumber;

var next_x = -80;
var next_y = 140;
var aftercircle = false;
var drawncounter = -1;
var colors = ["blue","yellow","green"];

/*================================================
Function that draws the nextsvg exercise
================================================*/
function nextsvg_drawexercise(){

//Clean the svg element
cleannextgamesvg();

//Choose the pattern
patternnumber = Math.floor(Math.random() * numberofpatterns) + 1;
nextsvg_drawelements();
}

function nextsvg_drawelements(){

//Draw the text
nextsvg.append("text").
      			attr("x", 20)
      			.attr("y", 40)
      			.text("Cuenta el número de veces que aparece cada forma")
      			.attr("font-family", "Chalkboard")
      			.attr("font-size", "30px")
      			.attr("fill", "black");

selectsvg.append("text").
      			attr("x", 20)
      			.attr("y", 40)
      			.text("Cuenta el número de veces que aparece cada forma")
      			.attr("font-family", "Chalkboard")
      			.attr("font-size", "30px")
      			.attr("fill", "black");


switch(patternnumber){
case 1:
  pattern = pattern1;
  pattern_drawn = pattern1_drawn;
break;
case 2:
  pattern = pattern2;
  pattern_drawn = pattern2_drawn;
break;
case 3:
  pattern = pattern3;
  pattern_drawn = pattern3_drawn;
break;
case 4:
  pattern = pattern4;
  pattern_drawn = pattern4_drawn;
break;
case 5:
  pattern = pattern5;
  pattern_drawn = pattern5_drawn;
break;
case 6:
  pattern = pattern6;
  pattern_drawn = pattern6_drawn;
break;
case 7:
  pattern = pattern7;
  pattern_drawn = pattern7_drawn;
break;
case 8:
  pattern = pattern8;
  pattern_drawn = pattern8_drawn;
break;
}


//Drawing the exercise part
//=======================================================================================

next_x = -60;
next_y = 120;

var drawingcolor;

//Go through all the elements of the selected pattern and get its color and draw the elements with the color
for(var i = 0; i < pattern_drawn; i++){

if(pattern[i].indexOf("blue") >= 0){
  drawingcolor = "blue";
}

if(pattern[i].indexOf("yellow") >= 0){
  drawingcolor = "yellow";
}

if(pattern[i].indexOf("green") >= 0){
  drawingcolor = "green";
}

if(pattern[i].indexOf("rect") >= 0){
   drawnextelement(drawingcolor, true);
}
else
{
  drawnextelement(drawingcolor, false);
}

}

}

/*================================================================
 Drawing the Selection part
================================================================*/
function nextsvg_drawselections(){
var x = 85;
var y = 150;

//Draw the rectangles
for(var i = 0; i < colors.length; i++){

  selectsvg.append("rect").attr("onclick", "drawfigure($(this).attr('form'),$(this).attr('fill'))")
                            .attr("x", x)
                            .attr("y", y)
                            .attr("width", 100)
                            .attr("height", 100).attr("form", "rect")
			    .attr("fill", colors[i]).attr("stroke","black");

  x = x + 185;
}

x = 690;
y = 200


//Draw the circles
for(var i = 0; i < colors.length; i++){

  selectsvg.append("circle").attr("onclick", "drawfigure($(this).attr('form'),$(this).attr('fill'))")
                         .attr("cx", x)
                         .attr("cy", y)
                         .attr("r", 50).attr("form","circle")
			 .attr("fill", colors[i]).attr("stroke","black");

  x = x + 185;
 }
}//End of function nextsvg_drawselections

/*================================================================================================
Function for drawing the next element
==============================================================================================*/
function drawnextelement($drawingcolor, $rect){

drawncounter++;	//Checks how many elements are drawn

if($rect){
next_y = 120;	//If it is a rect we need another y coordinate

if(aftercircle == false){
next_x = next_x + 116;	//If the next elements comes after a rect we need another x coordinate
}
else
{
next_x = next_x + 76;
}

//Draw the rect
nextsvg.append("rect")
                            .attr("x", next_x)
                            .attr("y", next_y)
                            .attr("width", 80)
                            .attr("height", 80).attr("form", "rect")
			    .attr("fill", $drawingcolor).attr("stroke","black");

//Add the drawn form to the solution array
solution[drawncounter] = "rect" + $drawingcolor;

//Say that the next form is not after a circle
aftercircle = false;

}
else
{

next_y = 160;

if(aftercircle == false){
next_x = next_x + 156;		//If it is after a rectangle we need another x coordinate
}
else{
next_x = next_x + 116;
}

//Draw the circle
nextsvg.append("circle")
                         .attr("cx", next_x)
                         .attr("cy", next_y)
                         .attr("r", 40).attr("form","circle")
			 .attr("fill", $drawingcolor).attr("stroke","black");

//Add the drawn form to the solution
solution[drawncounter] = "circle" + $drawingcolor;

aftercircle = true;		//Say that the next form is drawn after a circle
}



//Do the correction of the exercise

if(drawncounter == 9){		//9 because it begins with zero at the first iteration
 
 var formiscorrect = true;

 //Check if everything is correct
 for(var i=0; i < solution.length; i++){
	if(solution[i] != pattern[i]){
		formiscorrect = false;
		break;
	}

 }

 checkpinkfields(formiscorrect);

}

}

/*========================================================
Function for handling the click on an element
==========================================================*/
function drawfigure($form, $color){

sound_pencil.play();

if($form == "rect"){
  drawnextelement($color, true);
}
else
{
  drawnextelement($color, false);
}

}


/*================================================
Function to remove everything from the first svg
==============================================*/
function cleannextgamesvg(){
drawncounter = -1;
$("#nextgamesvg").empty();
}

/*============================================
Function that is called if the reset button is clicked
=============================================*/
function correct_nextgame(){

cleannextgamesvg();	//Clean the elements
nextsvg_drawelements(); //Redraw the exercise

}







