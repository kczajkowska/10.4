function Phone(brand, price, color, year) {
	this.brand = brand; 
	this.price = price;
	this.color = color;
	this.year = year;
}
Phone.prototype.printInfo = function() {
	console.log(this.year + "," + "The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver", 2014);
iPhone6S.printInfo();

var SamsungGalaxyS6 = new Phone("xxx", 1500, "gold", 2015);
SamsungGalaxyS6.printInfo();

var OnePlusOne = new Phone ("One", 1000, "white", 2000);
OnePlusOne.printInfo();