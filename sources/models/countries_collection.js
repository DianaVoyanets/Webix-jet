import {countries} from "models/countries";

export var countries_collection = new webix.DataCollection({
	url:  "http://localhost:8096/api/v1/countries/",
	save: "rest->http://localhost:8096/api/v1/countries/",
	data: countries
});