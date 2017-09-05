const express = require("express");
const app = express();
const yelp = require("yelp-fusion");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const YELP_API_KEY = "td2RSrKBQrd8lw4fm911Jg";
const YELP_SECRET =
	"Ort6WXlVvE3NdPsuAUP9JJFhmPxV5DVIGEJ6ai7xNIe2ozFyJlaZ7IbIwciYFtf1";
const YELP_ACCESS_TOKEN =
	"donuOalT_5_5rg7UuD1Fku2SeIqFRLaYUKCANaudNLckbxkTk3NhrnRb2Bt-Cb9J0rTS0gCVRpDho8Uysb_LkDO8vW9ursXzosDzTe5uCtC93FkT610wEO4Kfx6eWXYx";

const client = yelp.client(YELP_ACCESS_TOKEN);

app.use(express.static(path.resolve("..", "dist")));

app.post("/search", (req, res) => {
	client
		.search({
			term: req.body.term,
			location: req.body.zipcode,
			limit: 4
		})
		.then(response => {
			res.end(JSON.stringify(response.jsonBody.businesses));
		})
		.catch(e => {
			console.log(e);
		});
});

app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

app.listen("5000", () => {
	console.log("listening on 5000");
});
