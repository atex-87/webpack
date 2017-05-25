export default function bilds (data) {
	var items = [];

	for (var i = 0; i < data.length; i ++) {
		var item = document.createElement('div'),
		span = document.createElement('span');
		item.className = 'item';
		span.innerText = data[i];
		item.appendChild(span);
		items[i] = item;
	}
	console.log(items);
	return items;
}