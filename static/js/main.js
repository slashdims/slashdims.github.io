
$(document).ready(function () {
	svg4everybody({});
});
function cislo(){
	if (event.keyCode < 48 || event.keyCode > 57)
	event.returnValue= false;
}

// Map
function initMap() {

var centerLatLng = new google.maps.LatLng(61.782450, 34.383180);
var mapOptions = {
	center: centerLatLng,
	zoom: 17.3,
	disableDefaultUI: true,
	styles: [
		{
			"featureType": "poi.park",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#d59658"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#ffffff"
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "road.highway.controlled_access",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#ffffff"
				}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#ffffff"
				},
				{
					"weight": 6.5
				}
			]
		}
	]

};

var map = new google.maps.Map(document.getElementById("map"), mapOptions);

var myMarker = new google.maps.Marker({ 
	position: new google.maps.LatLng(61.782510, 34.384360), 
	map: map,
	draggable: false,
	animation: google.maps.Animation.DROP, 
		icon: "static/img/content/maps-and-flags.svg" 
}); 

}
$(window).load(function(){
	$('.services-slider').bxSlider({
				mode: 'horizontal',
				speed: 500,
				pause: 500,
				touchDrag: false,
				adaptiveWidth: true,
				responsive: true,
				keyboardEnabled: true,
				nextSelector: '#pronext',
				prevSelector: '#proprev',
				pagerCustom: '#bx-pager',
				prevText: '',   
				nextText: '',
				minSlides: 1,
				maxSlides: 1,
				slideWidth: 600,
				slideMargin: 5
		
			});
		});  
$(window).load(function(){
	$('.services-slider').bxSlider({
				mode: 'horizontal',
				speed: 500,
				pause: 500,
				touchDrag: false,
				adaptiveWidth: true,
				responsive: true,
				keyboardEnabled: true,
				nextSelector: '#pronext',
				prevSelector: '#proprev',
				pagerCustom: '#bx-pager',
				prevText: '',   
				nextText: '',
				minSlides: 1,
				maxSlides: 1,
				slideWidth: 600,
				slideMargin: 5
		
		});
});   
google.maps.event.addDomListener(window, "load", initMap);

$(document).ready(function () {
	window.onscroll = (function(){
		let $sections = $('.section');
		$sections.each(function(i,el){
			let top = $(el).offset().top - 100;
			let bottom = top +$(el).height();
			let scroll = $(window).scrollTop();
			let id = $(el).attr('id');
			if( scroll > top && scroll < bottom){
				$('a.active1').removeClass('active1');
				$('a[href="#'+id+'"]').addClass('active1');
			}
			
		})
	});

 $('.nav-list__link, .btn, .consult').on('click', function(e){
	e.preventDefault();
	let scroll_el = $(this).attr('href'),
			scroll    = $(scroll_el).offset().top;
	
		$('html, body').animate({
			scrollTop: scroll - 74
		}, 800);
		
	});

});
$('#contacts').on('click', function(e){
	e.preventDefault();
	let scroll_el = $(this).attr('href'),
			scroll    = $(scroll_el).offset().top;

		$('html, body').animate({
			scrollTop: scroll + 2800
		}, 800);
		
	});
//Add class
$(document).ready(function() {
$(window).scroll(function() {    
	var scroll = $(window).scrollTop();

	if (scroll >= 300) {
		$(".fixed").addClass("scrolled");
	} else {
		$(".fixed").removeClass("scrolled");
	}
});
});



// Read more...
$(document).ready(function () {
$(".content").hide();

$(".toggle").on("click", function (e) {
		
		var $this = $(this).prev('.content');
		var $text = $(this);
		$this.slideToggle('fast', function () {
				if ($(this).is(':visible')) {
						$text.text('Скрыть');
				} else {
						$text.text('Читать далее...');
				}
		});

});
});

//Mobile-menu
$(document).ready(function () {
	$('.sandwich').click(function(){
	$('.mobile').slideToggle(300, function(){
		if($(this).css('display') === 'none'){
			$(this).removeAttr('style')
		}
	});
	

$(".mobile-nav__link").click(function() {
	var elementClick = $(this).attr("href")
	var destination = $(elementClick).offset().top;
	jQuery("html:not(:animated),body:not(:animated)").animate({
		scrollTop: destination
	}, 1000);
	return false;
		})
	});
});
$(window).resize(function () {
    if($(window).width() >= 920){
		if($('.mobile').css('display') === 'block'){
			$('.mobile').removeAttr('style')
		}
    };
});
// $(window).resize(function(){
// 	window.setTimeout('location.reload()', 500);
// });

//Popup overlay
let popup = document.querySelector('.overlay')

let popupClose = document.querySelector('.popup-close')
console.log(popup)

document.body.addEventListener('submit', (e) => {  
	popup.style.display = 'block';
	e.preventDefault();
	for(let i = 0; i < input.length; i++){
							input[i].value = '';
	}
});


popup.addEventListener('click', (e)=>{
	popup.style.display = 'none'; 
});
popupClose.addEventListener('click', (e)=>{
	popup.style.display = 'none'; 
});
//Popup form
let pop = document.querySelector('.overlay')
input = document.querySelectorAll('input');
document.body.addEventListener('.general-button', (e) => {  
	popup.style.display = 'block';
	e.preventDefault();
	for(let i = 0; i < input.length; i++){
							input[i].value = '';
	}
});

//form

document.body.addEventListener('submit', (e) => { 
let target = e.target;
e.preventDefault();

 
});
$(document).ready(function() {
$('#form').submit(function(e) { 
	e.preventDefault(); 
	$.ajax({
		type: "POST",
		url: "mail.php",
		data: $(this).serialize()
	}).done(function() {
		console.log('Ок');
		$(this).find('input').val('');
		$('#form').trigger('reset');
	});
	return false;
});
});

document.body.addEventListener('submit', (e) => {  
	e.preventDefault();
for(let i = 0; i < input.length; i++){
			input[i].value = '';
}
});
$(function(){
		$('#formID').validate({
			rules:{
	
				name:{
						required: true,
						minlength: 2,
						maxlength: 30,
				},
	
				phone:{
						required: true,
						minlength: 5,
						maxlength: 30,
				},
				tema:{
					required: true,
					minlength: 6,
					maxlength: 40,
			}
	 },
		 messages: {
			name: {
			required: "Поле 'Имя' обязательно к заполнению",
			minlength: "Введите не менее 2-х символов в поле 'Имя'"
		},
			phone: {
			required: "Поле 'Телефон' обязателен к заполнению",
			minlength: "Введите не менее 5-х символов в поле 'Телефон"
			},
			tema: {
				required: "Опишите вашу задачу",
				minlength: "Введите не менее 6-х символов в поле 'Тема"
			},
		 }
		});
	 }); 
	
	 $('.reviews-slider').slick( {
		arrows: false, 
		// slidesToShow: 3,
		// slidesToScroll: 3
	 }
	);
	$('#next').on('click', function() {
		$('.reviews-slider').slick('slickNext');
	});
	$('#prev').on('click', function() {
		$('.reviews-slider').slick('slickPrev');
	});	
	$('.mobile-slider').slick({
		arrows: false
		}
	);

	$(document).ready(function(){
		$("#formID").submit(function() { //устанавливаем событие отправки для формы с id=form
				var form_data = $(this).serialize(); //собераем все данные из формы
				$.ajax({
				type: "POST", //Метод отправки
				url: "/mail.php", //путь до php фаила отправителя
				data: form_data ,
				success: function() {
					   //код в этом блоке выполняется при успешной отправке сообщения
					   alert("Ваше сообщение отправлено!");
				}
		});
	}); 
});
