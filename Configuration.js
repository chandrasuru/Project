var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
		seleniumAddress : 'http://localhost:4444/wd/hub',
		chromeOnly: true,
		directConnect: true,
		specs: ['SocialFinderApplication.js'],
		onPrepare:function(){
			browser.driver.manage().window().maximize();
			browser.waitForAngularEnabled(false);
			jasmine.getEnv().addReporter(
					new Jasmine2HtmlReporter({
						savePath: 'target/screenshots'
					})
			);
		},
		suites :{
			Smoke:['Alerts.js','Dropdown.js'],
			Regression :'ElementBasics.js'
		},
		jasmineNodeOpts: {
			showColors: true, // Use colors in the command line report.
		}

};