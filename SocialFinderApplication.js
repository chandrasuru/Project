
describe('SocialFinder App',function() {  
	var obj=require(".\\RegistrationLocators.js");
	var loginObj=require(".\\LoginLocators.js");
	const using=require('jasmine-data-provider');
	var d=require(".\\RegistrationData.js");
	var loginData=require(".\\LoginData.js");
	var EC = protractor.ExpectedConditions;
	beforeEach(function() {
		browser.waitForAngularEnabled(false);
		obj.getURL();
		obj.addUsername.click();
	})
	using(d.Datadriven, function (data,description) {
	it('Register into the Application '+description,function(){
		obj.createUser.click();
		browser.wait(EC.visibilityOf(obj.firstName), 5000);
		obj.firstName.sendKeys(data.firstName);
		obj.email.sendKeys(data.email);
		obj.password.sendKeys(data.password);
		obj.confirmPass.sendKeys(data.password);
		obj.submit.click();
		browser.wait(EC.visibilityOf(obj.yourUserName), 5000);
		expect(obj.yourUserName.getText()).toBe("Your Username");
		
	})
	})
	
	using(loginData.Datadriven, function (data,description) {
	it('Login into the Application '+description,function() {
		browser.wait(EC.visibilityOf(loginObj.email), 5000);
		loginObj.email.sendKeys(data.email);
		loginObj.password.sendKeys(data.password);
		loginObj.submit.click();
		browser.wait(EC.visibilityOf(obj.yourUserName), 5000);
		expect(obj.yourUserName.getText()).toBe("Your Username");
	})})
})