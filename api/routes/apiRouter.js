var express = require('express');
var path = require("path");
var multer = require("multer");
var router = express.Router();

var Account = require("../model/account");

var memberlist = [{account: "123", password:"456"}];
var memberToJoin = [];

router.get("/test", function (req, res) {
	res.status(200).json({test: "123"});
});

// ==================== login ==================== //
router.post("/login", function (req, res) {
	var result = false;
	memberlist.find(function(member, i) {
		if(member.account == req.body.account) {
			if(member.password == req.body.password) {
				result = true;
				return;
			}
		}
	});
	res.status(200).json({status: result ? 1 : 0});
});

router.post("/authenticate", function (req, res) {
	var authCode = "123456";
	var alreadyInJoinList = false;
	memberToJoin.find(function(member, i) {
		if(member.account == req.body.account) {
			authCode = member.authCode;
			alreadyInJoinList = true;
			return;
		}
	});
	if(alreadyInJoinList == false) {
		memberToJoin.push({account: req.params.account, authCode: authCode});
	}
	res.status(200).json({authCode: authCode, status: 1});
});

router.post("/register", function (req, res) {
	var result = false;
	var index = "";
	memberToJoin.find(function(member, i) {
		if(member.account == req.body.account) {
			if(member.authCode == req.body.authCode) {
				result = true;
				index = i;
				return;
			}
		}
	});
	if(result == true) {
		memberToJoin.splice(index);
	}
	res.status(200).json({status: result ? 1 : 0});
});

router.post("/login_face", function (req, res) {
	var result = false;
	memberlist.find(function(member, i) {
		if(member.account == req.body.account) {
			//if(member.password == req.body.password) { // will check faceCode
				result = true;
				return;
			//}
		}
	});
	res.status(200).json({status: result ? 1 : 0});
});

router.get("/register/:username", function (req, res) {
	Account.findOne({username: req.params.username}, function (err, account) {
		if (err) {
			res.status(200).json({ErrorCode: 1, ErrorMessage: "Failure: "+err});
		} else if (account) {
			res.status(200).json({ErrorCode: 8, ErrorMessage: "Duplicate"});
		} else {
			new Account({
				username: req.params.username,
				password:  "1234",
			}).save(function (err, newAccount) {
				if (err) {
					res.status(200).json({ErrorCode: 1, ErrorMessage: "Failure: "+err});
				} else {
					res.status(200).json(newAccount);
				}
			});
		}
	});
});
// ==================== login ==================== //


// ==================== food ==================== //
router.post("/food/list", function (req, res) {
	var items = {
	  foodID: "1",
	  name: "拿鐵",
	  price: 100,
	  isSpecial:  true,
	  isRecommend:  false,
	  isNew:  false,
	  categoryID:  "ccc",
	  categoryName:  "咖啡",
	}
	res.status(200).json({items: items, status: 1});
});

router.post("/food/category", function (req, res) {
	var items = [{
	  categoryID:  "ccc",
	  categoryName:  "咖啡"
	},{
	  categoryID:  "ddd",
	  categoryName:  "果汁"
	}]
	res.status(200).json({items: items, status: 1});
});
// ==================== food ==================== //


// ==================== discount ==================== //
router.post("/discount/list", function (req, res) {
	var data =  [
		{
		  name: "鬆餅",
		  desc: "節省10元",
		  price: 90,
		  items: [ { "pid": 2 } ]
		}
	]
	res.status(200).json({data: data, status: 1});
});
// ==================== discount ==================== //


// ==================== customize ==================== //
router.post("/customize/list", function (req, res) {
	var data =  [
		{
		  type: "size",
		  options: ["L","M"]
		}
	]
	res.status(200).json({data: data, status: 1});
});
// ==================== customize ==================== //


// ==================== order ==================== //
router.post("/order/add", function (req, res) {
	res.status(200).json({oid: "666666", status: 1});
});

router.post("/order/history", function (req, res) {
	var items = [{
	  pid:  "1",
	  count:  1,
	  options: [{
		  type: "size",
		  option: "L"
	  }]
	}]
	res.status(200).json({items: items, status: 1});
});

router.post("/order/recommend", function (req, res) {
	var items = [{
	  pid:  "1",
	  options: [{
		  type: "size",
		  option: "L"
	  }]
	}]

	res.status(200).json({items: items, status: 1});
});
// ==================== order ==================== //

// ==================== upload ==================== //
const storage = multer.diskStorage({
   destination: "./public/uploads/",
   filename: function(req, file, cb){
      cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
   }
});

const upload = multer({
   storage: storage,
   limits:{fileSize: 1000000},
}).single("myImage");

router.post("/upload", function(req, res) {
   upload(req, res, function(err) {
      console.log("Request ---", req.body);
      console.log("Request file ---", req.file);//Here you get file.
      /*Now do where ever you want to do*/
      if(!err)
         return res.send(200).end();
   });
});
// ==================== upload ==================== //

module.exports = router;
