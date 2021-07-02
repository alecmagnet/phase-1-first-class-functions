// function receivesAFunction(callbackFunction) {
// 	return callbackFunction();
// };
// /*
// function returnsANamedFunction(){
// 	aNamedFunction() {
// 		return('hey, does this work?');
// 	return aNamedFunction;
// 	}
// };
// */
// function aNamedFunction() {
// 	return ('did this work?')
// }
// function returnsANamedFunction() {
// 	return aNamedFunction;
// }
// function returnsAnAnonymousFunction() {
// 	return function(){
// 		return('did THIS work??')
// 	}
// }
function receivesAFunction(callBack) {
	callBack()
}

function returnsANamedFunction() {
	const namedFunction = () =>
		console.log(pthhh)
	return namedFunction;
}

// function returnsAnAnonymousFunction() {
// 	return function(){
// 		console.log('ugh')
// 	}
// }
function returnsAnAnonymousFunction() {
	return () => console.log('ugh')
}