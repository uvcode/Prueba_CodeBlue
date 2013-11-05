/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'multi_fonts\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-commentcalendar' : '&#xe011;',
			'icon-commentcalendar-2' : '&#xe012;',
			'icon-commentclock' : '&#xe013;',
			'icon-commentclock-2' : '&#xe014;',
			'icon-commentfacebook' : '&#xe015;',
			'icon-commentfacebook-2' : '&#xe016;',
			'icon-commenttwitter' : '&#xf017;',
			'icon-commentcomment' : '&#xe006;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-comment[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};