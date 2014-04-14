$(document).on('pageinit', '#home', function(){  
	
	// User Login via Ajax Functionalities
	$(document).on('click', '#login', function(e) {
		var uName = $('#username').val();
		var pWord = $('#password').val();
		
		if(uName.length > 0 && pWord.length > 0) {
			navigator.notification.alert('Please wait...', null, 'Error', 'Login');
			
			if(!reachability()){
		        navigator.notification.alert('No internet connection available', null, '', 'OK');
		    }
		    else{
		    	$.ajax({
				    url        		: "http://localhost/SoapWebServiceForMobileApp/register.php?callback=myCallBack",
				    type       		: "POST",
				    crossDomain		: true,
				    data       		: {username : uName, password : pWord},
				    contentType		: "application/json; charset=utf-8",
				    dataType		: "jsonp",
				    jsonp			: "callback",
				    jsonpCallback	: "jsonpCallbackfunction",
				    success    		: function(data) {
				    	navigator.notification.alert(data, null, '', 'OK');
				    },
				    error      		: function(xhr, ajaxOptions, thrownErrorw) {
				        navigator.notification.alert('Some error occurred. Please try again later.', null, '', 'OK');           
				    }
				});
		    }
		}
		else {
			navigator.notification.alert('Please provide the required login details.', null, 'Error: Form validation', 'Login');
		}
	});
	
	// User Registration via Ajax Functionalities
	$(document).on('click', '#register', function(e) {
		var uName = $('#username').val();
		var pWord = $('#password').val();
		var cWord = $('#confirmPassword').val();
		var eMail = $('#email').val();
		
		if(uName.length > 0 && pWord.length > 0 && eMail.length > 0) {
			if(pWord == cWord) {
				navigator.notification.alert('Trying to login...', null, '', 'Login');
				
				if(!reachability()){
			        navigator.notification.alert('No internet connection available', null, '', 'OK');
			    }
			    else{
			    	$.ajax({
					    url        		: "http://localhost/SoapWebServiceForMobileApp/login.php?callback=myCallBack",
					    type       		: "POST",
					    crossDomain		: true,
					    //beforeSend 	: function() {$.mobile.loading('show');},
					    //complete   	: function() {$.mobile.loading('hide');},
					    data       		: {username : uName, password : pWord, email: eMail},
					    contentType		: "application/json; charset=utf-8",
					    dataType		: "jsonp",
					    jsonp			: "callback",
					    jsonpCallback	: "jsonpCallbackfunction",
					    success    		: function(data) {
					    	navigator.notification.alert(data, null, '', 'OK');
					    },
					    error      		: function(xhr, ajaxOptions, thrownErrorw) {
					        navigator.notification.alert('Some error occurred. Please try again later.', null, '', 'OK');        
					    }
					});
			    }
		    }
			else {
				navigator.notification.alert('Password does not match.', null, 'Form validation error!!', 'Login');
			}
		}
		else {
			navigator.notification.alert('Please provide the required login details.', null, 'Form validation error!!', 'Login');
		}
	});
});