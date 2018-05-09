let Mock = require('mockjs');

var Random = Mock.Random;

module.exports = function () {
    var data = {};
    data.userInfo = {
        'name': Random.cname(),
        'avatar': Random.image('200x100', '#02adea', 'Hello')
    };
    return data;
}