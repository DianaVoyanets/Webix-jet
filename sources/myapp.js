import "./styles/app.css";
import { JetApp, EmptyRouter, HashRouter } from "webix-jet";
import "./locales/en";
import "./locales/ru";

export default class MyApp extends JetApp {
	constructor(config) {
		const defaults = {
			id 		: APPNAME,
			version : VERSION,
			router 	: BUILD_AS_MODULE ? EmptyRouter : HashRouter,
			debug 	: !PRODUCTION,
			start 	: "/top/contacts"
		};

		super({ ...defaults, ...config });
	}
}

if (!BUILD_AS_MODULE) {
	webix.ready(() => {
		webix.i18n.setLocale("en-US");
    
		let app = new MyApp();
		app.render(); 
	});
}
