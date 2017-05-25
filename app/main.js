
import {getData} from './parse';
import bilds from './output';

let arr = [1, 2, 3, null, undefined, 'a', 'b', 'c', '', true, false, 31, 42, 53,  , function () { }, {}, [], 15, 55, 4];

 function init (data) {
	let	wr = document.createElement('div')
	 wr.className = 'wr';
	let children = bilds(getData(data));
	for (var j = 0; j < children.length; j ++) {
		wr.appendChild(children[j]);
		}
	document.body.appendChild(wr);
}

init(arr);