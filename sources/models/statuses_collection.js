import {statuses} from "models/statuses";

export var statuses_collection = new webix.DataCollection({
	url: "http://localhost:8096/api/v1/statuses/",
	save: "rest->http://localhost:8096/api/v1/statuses/",
	data: statuses
});