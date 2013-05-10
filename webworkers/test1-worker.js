this.importScripts('test1-likes.js', 'test1-functions.js');

function getLike(data) {
	return likes[data] || 'Not sure..';
}

this.addEventListener('message', function(event) {
	this.postMessage('Now (' + getDate() + ') I like ' + getLike(event.data));
});