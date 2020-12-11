window.onload = function() {

	$(function(){
		var $gallery = $('.gallery a').simpleLightbox();
		});
 
var dogCover=['img/cat1.jpg','img/cat2.jpg','img/dog3.jpg'];

function changeDog(){

	for (var i=0; i < dogCover.length; i++) {
		(function(ind) {
		   	setTimeout(function(){
		   		
				document.getElementById("cover-top").style.backgroundImage="url('" + dogCover[ind] + "')"
				document.getElementsByClassName("next")

			}, 3000*ind);
	    })(i);
	}
}
changeDog()
	setInterval(function(){
		changeDog()
	},3000*dogCover.length) 

var f=document.createElement("form");
f.setAttribute('action',"obrada.php");
f.setAttribute('method',"get");

var item1 = document.createElement("input"); 
item1.setAttribute('type',"text");
item1.setAttribute('id',"fullName");
item1.setAttribute('placeholder',"Full Name");
item1.setAttribute('class',"formItem");

var item1Span = document.createElement("span"); 
item1Span.setAttribute('id',"error-name");
item1Span.setAttribute('class',"all-error");

var item2 = document.createElement("input"); 
item2.setAttribute('type',"text");
item2.setAttribute('id',"email");
item2.setAttribute('placeholder',"E-mail");
item2.setAttribute('class',"formItem");

var item2Span = document.createElement("span"); 
item2Span.setAttribute('id',"error-mail");
item2Span.setAttribute('class',"all-error");

var item3 = document.createElement("input"); 
item3.setAttribute('type',"text");
item3.setAttribute('id',"petName");
item3.setAttribute('placeholder',"Pet Name");
item3.setAttribute('class',"formItem");

var item3Span = document.createElement("span"); 
item3Span.setAttribute('id',"error-petName");
item3Span.setAttribute('class',"all-error");

var genderSpan = document.createElement("span"); 
genderSpan.setAttribute('id',"radio-text");
genderSpan.innerHTML="Your pet gender"

var gender=["Select","Male","Femail"];
var genderList = document.createElement("select");
genderList.id = "list";

for (var i = 0; i < gender.length; i++) {
    var option = document.createElement("option");
    option.value = gender[i];
    option.text = gender[i];
    genderList.appendChild(option);
}

var item4Span = document.createElement("span"); 
item4Span.setAttribute('id',"error-petGender");
item4Span.setAttribute('class',"all-error");


var item5 = document.createElement("textarea"); 
item5.setAttribute('cols',"50");
item5.setAttribute('rows',"4");
item5.setAttribute('id',"message");
item5.setAttribute('placeholder',"Message");
item5.setAttribute('class',"formItem");

var item6 = document.createElement("input"); 
item6.setAttribute('type',"button");
item6.setAttribute('id',"button-submit");
item6.setAttribute('value',"SUBMIT");


document.getElementById('contact-form').appendChild(f);
document.getElementById('contact-form').appendChild(item1);
document.getElementById('contact-form').appendChild(item1Span);
document.getElementById('contact-form').appendChild(item2);
document.getElementById('contact-form').appendChild(item2Span);
document.getElementById('contact-form').appendChild(item3);
document.getElementById('contact-form').appendChild(item3Span);
document.getElementById('contact-form').appendChild(genderSpan);
document.getElementById('contact-form').appendChild(genderList);
document.getElementById('contact-form').appendChild(item4Span);
document.getElementById('contact-form').appendChild(item5);
document.getElementById('contact-form').appendChild(item6);	
document.getElementById('button-submit').addEventListener('click',check);

}

function check(){
	var gender=document.getElementById("list")
	var genderSelected=gender.options[gender.selectedIndex].text;
	if (genderSelected=="Select") {
		document.getElementById("error-petGender").innerHTML="please select one gender"
	}
	else{
		document.getElementById("error-petGender").innerHTML=""
	
	}
	
	var reName=/^[A-Z][a-z]{2,}(\s[A-Z][a-z]{2,})+$/;
	var FullName=document.getElementById('fullName');
	if (!reName.test(FullName.value) || FullName.length==0) {
		FullName.classList.add("error");
		document.getElementById("error-name").innerHTML="please retry with a correct format"	
	}
	else{
		FullName.classList.remove("error")
		document.getElementById("error-name").innerHTML=""
	}

	var reMail=/^[a-z]{2,}[\.\$\%\!\?\.\#\^\\\/]*[A-z0-9]*[\.\$\%\!\?\.\#\^\\\/]*[A-z0-9]*[@][a-z]{2,}\.[a-z]{2,}$/;
	var Mail=document.getElementById('email');
	if (!reMail.test(Mail.value) || Mail.length==0) {
		Mail.classList.add("error");
		document.getElementById("error-mail").innerHTML="please retry with a correct format";
	}
	else{
		Mail.classList.remove("error")
		document.getElementById("error-mail").innerHTML=""
	}


	var rePet=/^[A-Z][a-z]{2,}$/;
	var Pet=document.getElementById('petName');
	if (!rePet.test(Pet.value) || Pet.length==0) {
		Pet.classList.add("error");
		document.getElementById("error-petName").innerHTML="please retry with a correct format";
	}
	else{
		Pet.classList.remove("error")
		document.getElementById("error-petName").innerHTML=""
	}
	
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

$(document).ready(function () {


	$("#mainMeni li ul").hide()
	$("#mainMeni li").hover(
		function(){
			$(this).find('ul').stop(true,true).slideDown()
			$("#mainMeni li ul").addClass("drop")
		}

		,function(){
			$(this).find('ul').stop(true,true).fadeOut()
		})

  $("#mainMeni1").hide();
  $("#bars").click(function(){
  	$("#mainMeni1").toggle('slow')
  })
  
  $(".link-about").click(function() {
  $('html, body').animate({
    scrollTop: $("#about-section").offset().top
  }, 1000)
}); 
 
    $(".link-contact").click(function() {
  $('html, body').animate({
    scrollTop: $("#contact-section").offset().top
  }, 2000)
});


  $(".link-professionals").click(function() {
  $('html, body').animate({
    scrollTop: $("#professionals-section").offset().top
  }, 2000)
});

    $("#myBtn").click(function() {
  $('html, body').animate({
    scrollTop: $("#verdeTitle").offset().top
  }, 2000)
});

    $('.service').hover(
    	function(){
    		$(this).addClass('pop');
    		
    	},
    	
    	function(){
    		$(this).removeClass('pop');
    
    	});

$('.sec').hide()

var secHidden = true;

$("#sledeca").click(function() {

        if( secHidden == true) {
        	$(".allpic.first").hide();
        	$(".allpic.sec").show();
        	secHidden = false
        } else {
        	secHidden = true;
        	$(".allpic.first").show();
        	$(".allpic.sec").hide();
        }
        
    });
$("#site-title h1").hover(function(){
	$(this).css('color','#3e9c12')
},function(){
	$(this).css('color','#0f0f0f')
})
$("#meni ul li").hover(function(){
	$(this).css('color','#3e9c12')
},function(){
	$(this).css('color','#5e5864')
})

$(".social a i").hover(function(){
	$(this).css('background-color','#3e9c12')
},function(){
	$(this).css('background-color','#27282d')
})

$('#copyright a').hover(
	function(){
		$(this).css('color','#3e9c12')
	}
	,function(){
		$(this).css('color','#27282d')
})

});

