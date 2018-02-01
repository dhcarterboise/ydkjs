console.log("YDKJS");

init();

var ga = 1;
let gb = 2;

function init() {

	console.log("init...");
	run();
}	

function run() {

	loop1();
	loop2();

	a = 2;
	var a; 
	console.log("a = " + a);

	function loop1() {

		for(var i = 0; i<10; i++) 
  			console.log(i)
		console.log(i)

	}

	function loop2() {

		for(let  j= 0; j<10; j++) 
  			console.log(j)
		//console.log(j)

	}


};