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
router.post('/insert', function (req, res, next) {
  var userData = new userModel(req.body);

  userData.save(function (error, doc) {
    if (!error) {
      res.send(doc);
    } else {
      console.log(error);
    }

  });
});

// 删除数据接口
router.post('/delete', function (req, res, next) {
  userModel.remove(req.body, function (error, result) {
    if (!error) {
      res.send(result)
    } else {
      res.send(error)
    }

  });
});

// 查询单条数据接口
router.post('/findSingle', function (req, res, next) {
  userModel.findOne(req.body, function (error, doc) {
    if (!error) {
      res.send(doc)
    } else {
      res.send(error)
    }

  });
});

// 更新数据接口
router.post('/update', function (req, res, next) {
  userModel.update({
    '_id': req.body._id
  }, req.body, function (error, result) {
    if (!error) {
      res.send(result)
    } else {
      res.send(error)
    }

  });
});

module.exports = router;
