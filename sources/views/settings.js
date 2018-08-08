import {JetView} from "webix-jet";
import {data} from "models/records";

export default class DataView extends JetView{
	config() {
		return { template:"Settings" };
	}
}