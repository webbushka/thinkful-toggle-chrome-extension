chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.action === "toggleAnswers")
		addButton(0);
});

function addButton(attempts) {
	if (attempts > 100) return console.error('Thinkful Toggle - The page loaded too slowly');
	attempts++;

	var code = $('pre');

	if (code.length) {
		$('pre').each(function (el) {
			var self = $(this);
			if (self.data('ta')) return;
			self.before(getButton()).data('ta', true).hide();
		});
	}
	else {
		setTimeout(function () {
			addButton(attempts);
		}, 500);
	}
}

function getButton() {
	return $('<div />', {
		'class': 'button-container',
		'css': {
			float: 'none'
		}
	}).append($('<button />', {
		text: 'Toggle Answer',
		click: function (e) {
			e.preventDefault();
			var pre = $(this).parent().next('pre'),
				visible = pre.is(':visible');
			if (visible) pre.hide();
			else pre.show();
		}
	}));
}