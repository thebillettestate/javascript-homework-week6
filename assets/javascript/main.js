  //-----------Use (document).ready to prep up all of your JQuery--------------\\
$(document).ready(function(){ 

var students = [];
students[0] = {StudentName: "Ralph", grade: 80 };
students[1] = {StudentName: "Zach", grade: 90 };
students[2] = {StudentName: "Tony", grade: 100};
students[3] = {StudentName: "Buster", grade: 10};


for ( i=0; i<students.length; i++ )
{
    console.log(students[i].StudentName + " got " + students[i].grade + "% on the test.");
}


  $('#yearAsk').submit(function(event){
  	var yearFill = $('#txtName').val();
  	var yourAge = new Date().getFullYear() - yearFill;

  	$('#calculated-year').html("Ooooh girl, you must be " + yourAge + " years old.");
  	event.preventDefault();
  });



//Whenever you write a callback function, you must pass the argument "event" (or it could just be "e"...or anything you'd like)
  $( "#ageAsk" ).submit(function( event ) {
  	// var testValue = document.getElementById("testValue");
  	// var fieldFill = testValue.value;
  	// The above example is pure JS. The example below uses a Jquery val function. Less code - better practice.

	  var ageFill = $("#testValue").val();
	  var yearBorn = 2015 - ageFill;

	  // alert( "Woahhh dude. You must have been born in the year " + yearBorn);
	  $("#calculated-age").html("Woahhh dude. You must have been born in the year " + yearBorn + "!")
	  event.preventDefault();
	});

// Class notes go over how to validate form submissions. 


  });

