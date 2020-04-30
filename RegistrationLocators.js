function Locators(){
	this.addUsername=element(by.xpath('(//a[@href="/user/submit"])[2]')),
	this.createUser=element(by.xpath('(//a[@href="/auth/register"])[2]')),
	this.firstName=element(by.css('input[placeholder="First Name"]')),
	this.email=element(by.css('input[placeholder="Email"]')),
	this.password=element(by.css('input[placeholder="Password"]')),
	this.confirmPass=element(by.css('input[placeholder="Password Confirmation"]')),
	this.submit=element(by.css('button[type="submit"]')),
	this.yourUserName=element(by.css('a[class="nav-link active nuxt-link-active"]')),
	this.getURL=function()
	{
		browser.get('https://socialfinder.app/');
		browser.waitForAngularEnabled(false);
	};
}
module.exports=new Locators();