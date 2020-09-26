//// MODULE ////
function isAlpha(ch){
  if(typeof ch === "string" && ch.length === 1 && (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z" || ch == " ")) return true;
  else return false;
}

function fullname_validation(fullname){
	//IS EMPTY
	if(fullname == null || fullname.length == 0) return "";

	if(fullname.length > 20) return "Fullname cannot be longer than 20 character!";

	//ONLY CONTAIN ALPHABET
	var length = fullname.length;
	for(var i = 0; i < length; i++){
		if(isAlpha(fullname[i]) == false) return "Fullname only contain alphabet!";
	}

	//ALL VALIDATION PASSED
	return true;
}

function email_validation(email){
	//IS EMPTY
	if(email == null || email.length == 0) return "";

	if(email.length > 30) return "Email cannot be longer than 30 character!";

	if(email.includes("@") == false) return "Invalid email format!";
	if(email.includes(".") == false) return "Invalid email format!";
	if(email.includes(" ") == true) return "Invalid email format!";

	//ALL VALIDATION PASSED
	return true;
}

function password_validation(password){
	//IS EMPTY
	if(password == null || password.length == 0) return "";

	if(password.length > 20) return "Password cannot be longer than 20 character!";
	if(password.length < 6) return "Password must be longer than 6 character!";

	//ALL VALIDATION PASSED
	return true;
}

function gender_validation(gender){
	if(gender == "male" || gender == "female") return true;
	else return false;
}

function disable_register(){
	$("#register").prop('disabled', true); 
}

function enable_register(){
	$("#register").prop('disabled', false); 
}

function term_validation(term){
	if(term == "on") return true;
	else return "Agree with term and conditions to register!";
}

//// FUNCTION ////
function register_validation(fullname, email, password, gender, term){
	var valid = true;
	//Fullname
	var status = fullname_validation(fullname);
	if(status != true){
		valid = false;
		disable_register();
		$("#fullname_msg").html(status)
	}else{
		$("#fullname_msg").html("")
	}

	//Email
	var status = email_validation(email);
	if(status != true){
		valid = false;
		disable_register();
		$("#email_msg").html(status)
	}else{
		$("#email_msg").html("")
	}

	//Password
	var status = password_validation(password);
	if(status != true){
		valid = false;
		disable_register();
		$("#password_msg").html(status)
	}else{
		$("#password_msg").html("")
	}

	//Gender
	var status = gender_validation(gender);
	if(status != true){
		valid = false;
		disable_register();
	}

	//Term
	var status = term_validation(term);
	if(status != true){
		valid = false;
		disable_register();
		$("#term_msg").html(status)
	}else{
		$("#term_msg").html("")
	}

	if(valid == true) enable_register();
}

$( document ).ready(function() {
	var fullname;
	var email;
	var password;
	var gender;
	var term;
	disable_register();
    $("#fullname").keyup(function () {
    	fullname = $("#fullname").val();
    	register_validation(fullname, email, password, gender, term);
    });

    $("#email").keyup(function () {
    	email = $("#email").val();
    	register_validation(fullname, email, password, gender, term);
    });

    $("#password").keyup(function () {
    	password = $("#password").val();
    	register_validation(fullname, email, password, gender, term);
    });

	$('input[name="gender"]').change(function () {
    	gender = $('input[name="gender"]:checked').val();
    	register_validation(fullname, email, password, gender, term);
    });

    $("#term").change(function () {
    	term = $("#term:checked").val();
    	register_validation(fullname, email, password, gender, term);
    });

    $('form').submit( function(event) {
	    var form = this;
	    $("#register_msg").html("Successfully Registered!");
	    setTimeout( function () { 
	        form.submit();
	    }, 3000);

	    event.preventDefault();
	}); 
});