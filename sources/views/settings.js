import {JetView} from "webix-jet";
import Toolbar  from "views/toolbar";


export default class DataView extends JetView{
	config() {
		return {
			rows:[
				Toolbar,
				{ view: "select",label: "Language",options: ["Eng","Rus"],width: 500 }
			]
		};
		
	}
}