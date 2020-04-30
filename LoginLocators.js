function LogLocators(){
	this.addUsername=element(by.xpath('(//a[@href="/user/submit"])[2]')),
	this.email=element(by.css('input[placeholder="Email"]')),
	this.password=element(by.css('input[placeholder="Password"]')),
	this.submit=element(by.css('button[type="submit"]'))
}
module.exports=new LogLocators();