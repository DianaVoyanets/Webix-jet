import {JetView} from "webix-jet";


export default class Settings extends JetView{
	config() {
		var settingsToolbar = {
			view: "toolbar",
			height: 50,
			elements: [
				{view: "label",label:webix.i18n.settings.Settings,css: "settings_label"}
			]
		};
		return {
			rows:[
				settingsToolbar,
				{   
					view: "combo",
					id:"combo",
					label:webix.i18n.settings.Language,
					value: "English",
					options:["English","Russian"],
					on: {
						"onChange":function(id) {
							if(id == "Russian") {
								webix.i18n.setLocale("ru-RU");
							}
							else  webix.i18n.setLocale("en-US");
						}
					}
				}
			]
		}; 
	}
}




