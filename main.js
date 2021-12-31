function send(event, php) {
	console.log('Отправка запроса');
	event.preventDefault ? event.preventDefault() : (event.returnValue = false);
	var req = new XMLHttpRequest();
	req.open('POST', php, true);
	req.onload = function () {
		if (req.status >= 200 && req.status < 400) {
			json = JSON.parse(this.response); // internet explorer 11
			console.log(json);

			// ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
			if (json.result == 'success') {
				// Если сообщение отправлено
				alert('Сообщение отправлено');
			} else {
				// Если произошла ошибка
				alert('Ошибка. Сообщение не отправлено');
			}
			// Если не удалось связаться с php файлом
		} else {
			alert('Ошибка сервера. Номер: ' + req.status);
		}
	};

	// Если не удалось отправить запрос. Стоит блок на хостинге
	req.onerror = function () {
		alert('Ошибка отправки запроса');
	};
	req.send(new FormData(event.target));
}
new WOW().init();

$('.wrapper-slider').slick({
	dots: true,
	autoplay: true,
	autoplaySpeed: 1000,
	lazyLoad: true,
	adaptiveHeight: true,
});
$('.slider_reviews').slick({
	dots: true,
	autoplay: true,
	autoplaySpeed: 1000,
	lazyLoad: true,
	slidesToScroll: 1,
	adaptiveHeight: true,
});
let test = $('.form-input');
$('#responsiveTabsDemo').responsiveTabs({
	startCollapsed: 'accordion',
});
