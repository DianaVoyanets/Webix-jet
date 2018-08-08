import {JetView} from "webix-jet";

export default class Toolbar extends JetView {
	config() {
		return { 
			view: "toolbar",
			localId: "my_toolbar",
			height:50, 
			elements: [{ 
				view: "label", 
				label: "Contacts", 
				css: "toolbar_label"
			}]
		};
	}
}