var express = require('express');
var router = express.Router();
var userModel = require('../model/userModel');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// 查询数据接口
router.get('/find', function (req, res, next) {
  userModel.find({}, function (error, docs) {
    if (!error) {
      res.send(docs);
    } else {
      res.send(error);
    }
  });
});

// 插入数据接口
router.get('/insert', function (req, res, next) {
  var userData = new userModel({
    name: '刘',
    sex: '男',
    age: 24
  });

  userData.save(function (error, doc) {
    if (!error) {
      res.send(doc);
    } else {
      console.log(error);
    }

  });
});

module.exports = router;
