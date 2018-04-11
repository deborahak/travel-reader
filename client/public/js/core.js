{
	setTimeout(() => document.body.classList.add('render'), 60);
	const navread = Array.from(document.querySelectorAll('.read'));
	const total = navread.length;
	const current = navread.findIndex(el => el.classList.contains('read--current'));
	const navigate = (linkEl) => {
		document.body.classList.remove('render');
		document.body.addEventListener('transitionend', () => window.location = linkEl.href);
	};
	 navread.forEach(link => link.addEventListener('click', (ev) => {
		ev.preventDefault();
		navigate(ev.target);
	}));
	document.addEventListener('keydown', (ev) => {
		const keyCode = ev.keyCode || ev.which;
		let linkEl;
		if ( keyCode === 37 ) {
			linkEl = current > 0 ? navread[current-1] : navread[total-1];
		}
		else if ( keyCode === 39 ) {
			linkEl = current < total-1 ? navread[current+1] : navread[0];
		}
		else {
			return false;
		}
		navigate(linkEl);
	});
}

/**
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2017
 */
