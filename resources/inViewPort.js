var el = arguments[0];

var rect = el.getBoundingClientRect();

return rect.bottom > 0 &&
	rect.right > 0 &&
	rect.left < (window.innerWidth || document. documentElement.clientWidth) /*or $(window).width() */ &&
	rect.top < (window.innerHeight || document. documentElement.clientHeight) /*or $(window).height() */;