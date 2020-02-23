$(document).ready(() => {
	scss2less();
})

const scss2less = () => {
	const scss = $('.js-scss');
	const less = $('.js-less');

	scss.on('input keyup paste change', (e) => {
		let scssVal = e.currentTarget.value;

	  scssVal = scssVal.replace(/\$/g,'@')
	  scssVal = scssVal.replace(/\@mixin /g,'.')
	  scssVal = scssVal.replace(/\@include /g,'.')

	  less.html(scssVal);
	})
}