// Automatically load the 10 min version
var text1 = 'twomin.html';
var text2 = 'tenmin.html';
var formVal = document.getElementById('formRead');

$.ajax({
	headers: { Accept: 'application/json' },
	type: 'GET',
	url: './versions/tenmin.html',
	crossDomain: true,
	beforeSend: function(xhr) {
		xhr.withCredentials = true;
	},
	success: function(data, textStatus, request) {
		$('#Fill-content').load('./versions/' + text2);
	}
});

$(document).ready(function() {
	// Add hover effect to time buttons
	$('.Reading-time').hover(function() {
		$(this).addClass('Reading-time-hover');
	});

	$('.Reading-time').mouseout(function() {
		$(this).removeClass('Reading-time-hover');
	});

	// Load 2min version
	$('#button2min').click(function() {
		$.ajax({
			headers: { Accept: 'application/json' },
			type: 'GET',
			url: './versions/twomin.html',
			crossDomain: true,
			beforeSend: function(xhr) {
				xhr.withCredentials = true;
			},
			success: function(data, textStatus, request) {
				$('#Fill-content').fadeOut(0).fadeIn().load('./versions/' + text1);
			}
		});

		// Add focus blue
		$('#button2min').addClass('Reading-time-focus');

		if ($('#button10min').hasClass('Reading-time-focus')) {
			$('#button10min').removeClass('Reading-time-focus');
		}
	});

	// Load 10min version
	$('#button10min').click(function() {
		$.ajax({
			headers: { Accept: 'application/json' },
			type: 'GET',
			url: './versions/tenmin.html',
			crossDomain: true,
			beforeSend: function(xhr) {
				xhr.withCredentials = true;
			},
			success: function(data, textStatus, request) {
				$('#Fill-content').fadeOut(0).fadeIn(800).load('./versions/' + text2);
			}
		});

		// Add focus blue
		$('#button10min').addClass('Reading-time-focus');

		if ($('#button2min').hasClass('Reading-time-focus')) {
			$('#button2min').removeClass('Reading-time-focus');
		}
	});

	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		var scrollToVid = $('#Fill-content').offset().top;
		console.log(scrollToVid);

		$(document).scroll(function() {
			var y = $(this).scrollTop();
			if (y > scrollToVid) {
				$('.Time').fadeIn();
			} else {
				$('.Time').fadeOut();
			}
		});
	});

	window.onload = initPage;

	function initPage() {
		var selectRead = document.getElementById('selectRead');
		selectRead.onchange = function() {
			$.ajax({
				headers: { Accept: 'application/json' },
				type: 'GET',
				url: './versions/twomin.html',
				crossDomain: true,
				beforeSend: function(xhr) {
					xhr.withCredentials = true;
				},
				success: function(data, textStatus, request) {
					$('#Fill-content').fadeOut(0).fadeIn().load('./versions/' + selectRead.value);
				}
			});
		};
	}

	// function jumpto(x) {
	// 	if (formVal.value == 'lol') {
	// 		$.ajax({
	// 			headers: { Accept: 'application/json' },
	// 			type: 'GET',
	// 			url: './versions/twomin.html',
	// 			crossDomain: true,
	// 			beforeSend: function(xhr) {
	// 				xhr.withCredentials = true;
	// 			},
	// 			success: function(data, textStatus, request) {
	// 				$('#Fill-content').fadeOut(0).fadeIn().load('./versions/' + text1);
	// 			}
	// 		});
	// 	}
	// }

	var body = document.getElementsByTagName('body')[0];
	var drop = document.getElementsByClassName('Dropdown')[0];
	var hamburger = document.getElementsByClassName('Navigation-hamburger')[0];
	var close = document.getElementsByClassName('Close-button')[0];
	var dropContent = document.getElementsByClassName('Dropdown-content')[0];
	var items = document.getElementsByClassName('Dropdown-content')[0];

	hamburger.addEventListener('click', function open() {
		drop.classList.add('visible');
		dropContent.classList.add('visible2');
		body.classList.add('lockScroll');
	});

	items.addEventListener('click', function minimize() {
		drop.classList.remove('visible');
		body.classList.remove('lockScroll');
	});

	close.addEventListener('click', function close() {
		drop.classList.remove('visible');
		dropContent.classList.remove('visible2');
		body.classList.remove('lockScroll');
	});

	var scroll = new SmoothScroll('a[href*="#"]', {
		speed: 90
	});

	window.onscroll = function() {
		scrollFunction();
	};

	function scrollFunction() {
		if (document.body.scrollTop > 1200 /*|| document.documentElement.scrollTop > 100*/) {
			$('#BackTop').css('display', 'flex').fadeIn();
			// document.getElementById('BackTop').style.display = 'block';
		} else {
			document.getElementById('BackTop').style.display = 'none';
		}
	}

	console.log('Time until DOMready: ', Date.now() - timerStart);
});

const progressElement = document.querySelector('.progress-bar');

const progressObserver = new ScrollProgress((x, y) => {
	progressElement.style.width = y * 100 + '%';
});
