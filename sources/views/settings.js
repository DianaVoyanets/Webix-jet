import {JetView} from "webix-jet";

export default class DataView extends JetView{
	config() {
		return { view: "segmented",options: ["Eng","Rus"],width: 500 };
	}
}