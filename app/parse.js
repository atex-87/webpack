'use strict';
var getData = function (array){
	let isData = [];

	for (let i = 0; i < array.length; i ++) {

		let ret="";

		switch(typeof array[i]){
			case 'number':
				if(array[i]%3 === 0){
					ret+='Fizz';
				} 
				if(array[i]%5 === 0){
					ret+='Buzz';
				}
				if(ret===""){
					ret = array[i];
				}
				break;
			case 'boolean':
				ret = array[i];
				break;
			case 'string':
				!array[i].length ? ret = "string is empty" : ret = array[i];
				break;
			case null: 
				ret = "string is null" ;
				break;
			default:	
				if(Array.isArray(array[i]))
					ret = 'string is array';
				else
			 		ret = "string is " + typeof array[i];
		}

		isData[i] = ret
	}
	return isData;
}
export  {getData};
