// CW 1

// let arr = [2, -5, 0, -4, 7, 3, 9, -1, 0, -8, 4];
//     alert(arr.filter(item => item > 0));
//     alert(arr.filter(item => item < 0));

// CW 2

// let min = 9;
// let max = 0;
// let sum = 0;
// let arr = [4,3,1,8,4,7,4,6,2,5,7,9,5,3,2,7];
// for(let i = 0; i < arr.length; i++)
// 	if(arr[i] < min)
// 		min = arr[i];
// 	else if(arr[i] > max)
// 		max = arr[i];
// for(let j = arr.indexOf(min) + 1; j < arr.indexOf(max); j++) {
// 	sum = sum + arr[j];
// }
// alert(sum);

// CW 3

// let car = {
// 	model: "Audi",
// 	color: "red",
// 	transmission: "manual",
// 	fuelType: "diesel",
// 	maxSpeed: 220,
// 	fuelTank: 65,
// 	owner: "Vasya"
// }

// function allProps() {
// 	console.log();
// }

// function maxSpeed() {
// 	for(let key in car) {
// 		alert(`Maximum speed of ${car.model} is ${car.maxSpeed} kilometers per hour`)
// 	}
// }

// function changeOwner() {
	// let newOwner = prompt('Please enter the new owner');
	// car.owner = newOwner;
	// alert(`Car owner is ${car.owner}`);
// }

// allProps();
// maxSpeed();
// changeOwner();




// HOMEWORK

// HW 1

// let animal = {
// 	name: "antelope",
// 	weight: "8 kg", 
// 	age: "3 years",
// 	avgSpeed: "20 km/h"
// }

// function getInfo() {
//      for (let key in animal) {
//        	console.log(`${key} : ${animal[key]}`);

//            } 
//        }
//  getInfo();

// function getTime() {
// 	let avgSpeed = parseInt(animal.avgSpeed);
// 	let t = 1000 / avgSpeed;
// 	let d = +Math.floor(t / 12);
// 	let h = (t % 12).toFixed(0);
// 	alert(`${animal.name} needs ${d} days and ${h} hours to cover 1000 kilometers distance`);
// }
// getTime();

// function giveName() {
// 	animal.name = animal.name + " impala";
// 	alert(`animal name ${animal.name}`);
// }
// giveName();

// HW 2

// let x = +prompt("enter value for sideA");
// let y = +prompt("enter value for sideB");
// let object = {
// 	name: 'figure',
// 	sideA: x,
// 	sideB: y,
// }

// function getSquare() {
// 	alert(`squere of the object is ${object.sideA * object.sideB}`);
// }

// function getPerim() {
// 	alert(`perimeter of the object is ${2 * (object.sideA + object.sideB)}`);
// }

// function insThirdSide() {
// 	object.sideC = +prompt("enter value for sideC");
// }

// function changeName() {
// 	object.name = object.name + " 3D"
// }

// function changeScale() {
// 	object.sideA = object.sideA / 100;
// 	object.sideB = object.sideB / 100;
// 	object.sideC = object.sideC / 100;
// }

// getSquare();
// getPerim();
// insThirdSide();
// changeName();
// changeScale();


// function getInfo() {
//      for (let key in object) {
// console.log(`${key}: ${object[key]}`);
// }
// }
// getInfo();

// HW 3

// let shopList = {
// 	tomato: {
// 		count: 5,
//     	price: 50,
//     	buy: false,
// 	    outOfstore: true
// 	},
// 	potato: {
// 		count: 10,
//     	price: 10,
//     	buy: true,
//     	outOfstore: false
// 	},
// 	cucumber: {
// 		count: 3,
//     	price: 40,
//     	buy: false,
//     	outOfstore: false
// 	},
// 	onion: {
// 		count: 2,
//     	price: 15,
//     	buy: true,
//     	outOfstore: true
// 	},
// 	cabbage: {
// 		count: 4,
//     	price: 20,
//     	buy: false,
//     	outOfstore: true
// 	},
// }

// function inShop() {
// let existGoods = [];
// let absentGoods = [];
// for(key in shopList) {
// 	if(shopList[key].outOfstore === true) {
// 		absentGoods.push(key);
// 	}
// 	else {
// 		existGoods.push(key);
// 	}
// }
// alert(`Available goods are ${existGoods}`);
// alert(`Unavailable goods are ${absentGoods}`);
// }

// function getPurchase() {
// let purchase = [];
// for(key in shopList) {
// 	if(shopList[key].buy === true) {
// 		purchase.push(key);
// 	}
// }
// alert(`We bought: ${purchase}`);
// }

// function spentSum() {
// 	let sum = 0;
// 	for(key in shopList) {
// 		if(shopList[key].buy === true) 
// 			sum = sum + (shopList[key].count * shopList[key].price);
			
// 		}
// 		alert(`We spent ${sum} on shopping`);
// }

// function addCount() {
// 	let item = prompt('Which item do you want to add?');
// 	let x = +prompt('How much do you want to add?');
// 	shopList[item].count = shopList[item].count + x;
// 	console.log(shopList);
// }

// function reduceCount() {
	// let item = prompt('Which item do you want to reduce?');
	// let y = +prompt('How much do you want to subtract?');
	// if((shopList[item].count - y) > 0) {
	// shopList[item].count = shopList[item].count - y;
	// }
	// else {
	// 	alert(`You do not have enough of ${item}`)
	// }
	// console.log(shopList);
// }

// inShop();
// getPurchase();
// spentSum();
// addCount();
// reduceCount();

// HW 4

// let stuff = [
// 	{name: "Yura", age: 55, hobby: ["films", "games", "hiking"], type: "Admin"}, 
// 	{name: "Vasya", age: 32, hobby: ["films", "climbing", "sailing"], type: "User"}, 
// 	{name: "Igor", age: 48, hobby: ["running", "games", "cycling"], type: "Admin"},
// 	{name: "Stepan", age: 29, hobby: ["reading", "games", "skiing"], type: "User"}
// ];

// let admins = [];
// for(let i = 0; i < stuff.length; i++) {
// 	if(stuff[i].type === "Admin")
// 		admins.push(stuff[i].name);
// }
// alert(admins);

// function getAdmins() {
// let admins = [];
// for(let i = 0; i < stuff.length; i++) {
// 	if(stuff[i].type === "Admin")
// 		admins.push(stuff[i].name);
// }
// alert(admins);
// }

// function getAvgAge() {
// let sum = 0;
// let count = 0;
// stuff.forEach(element => { 
// 	sum += element.age;
// 	count++;
// });
// 	let avgAge = sum / count;

// alert(avgAge);
// }


// something went wrong and i can't catch)!!!!

// let allHobbies = [];
// stuff.forEach(element => {
// 	allHobbies.push(element.hobby);
// });
// let unique = [];
// let x = 0;
// for(let i = 0; i < allHobbies.length; i++) {
// 		for(let j = 0; j < allHobbies.length; j++) {
// 		if((allHobbies[i] == allHobbies[j]) && (i != j)) {
// 			x++
// 		}
// 			if(x == 0) {
// 			unique.push(allHobbies[i])
// 		};
// 	}
// }
// alert(`Unique hobbies are: ${unique}`);