

// var students = ["Ralph", "Zach", "Tony"];
// var grades = ["80", "90", "100"];

// console.log( students[0][0] + " got " + students[0][1] + "% on the test.");
// console.log( students[1][0] + " got " + students[1][1]  + "% on the test."); 
// console.log( students[2][0] + " got " + students[2][1]  + "% on the test."); 


//----The above was the long way of logging everything. Use a loop intead. -------\\

var students = [];
students[0] = [ "Ralph", "80" ];
students[1] = [ "Zach", "90" ];
students[2] = ["Tony", "100"];
students[3] = ["Buster", "10"]


for ( i=0; i<students.length; i++ )
{
    console.log( students[i][0] + " got " + students[i][1] + "% on the test.");
}


 function tellAge(){
  var txtName = document.getElementById("txtName");
  // var txtOutput = document.getElementById("txtOutput");
  var name = txtName.value;
  alert("Ooooh girl, you must be " + (2015 - name) + " years old.");
  }

  //-----------Use (document).ready to prep up all of your JQuery--------------\\
$(document).ready(function(){ 

  $( "#target" ).submit(function( event ) {
  	var testValue = document.getElementById("testValue");
  	var fieldFill = testValue.value;

	  alert( "Woahhh dude. You must have been born in the year " + (2015 - fieldFill));
	  event.preventDefault();
	});



  });

