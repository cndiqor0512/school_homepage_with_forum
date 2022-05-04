const request = require('request')
const bodyParser = require('body-parser')
var express = require('express');
const {path} = require('express/lib/application');
var router = express.Router();


const options = {
    uri: "http://localhost:8080/api/main"
}
const options_board_class = {
    uri: "http://localhost:8080/api/board/type/class"
}
const options_board_school = {
    uri: "http://localhost:8080/api/board/type/school"
}
const options_board_club = {
    uri: "http://localhost:8080/api/board/type/club"
}
const options_calendar = {
    uri: "http://localhost:8080/api/calendar"
}
const options_community = {
    uri: "http://localhost:8080/api/community"
}
const options_food = {
    uri: "http://localhost:8080/api/food"
}
const options_notice = {
    uri: "http://localhost:8080/api/notice"
}

/* GET home page. */

router.get('/main', function (req, res, next) {

    request(options, function (err, response, body) {
        //callback
        console.log(body);
        res.render("main", {data: JSON.parse(body)});
    })

})

router.get('/class', function (req, res, next) {

    request(options_board_class, function (err, response, body) {
        //callback
        console.log(body);
        res.render("board_class", {data: JSON.parse(body)});
    })

})

router.get('/school', function (req, res, next) {

    request(options_board_school, function (err, response, body) {
        //callback
        console.log(body);
        res.render("board_school", {data: JSON.parse(body)});
    })

})

router.get('/club', function (req, res, next) {

    request(options_board_club, function (err, response, body) {
        //callback
        console.log(body);
        res.render("board_club", {data: JSON.parse(body)});
    })

})

router.get('/calendar', function (req, res, next) {

    request(options_calendar, function (err, response, body) {
        //callback
        console.log(body);
        res.json(JSON.parse(body));
    })

})

router.get('/community', function (req, res, next) {

    request(options_community, function (err, response, body) {
        //callback
        console.log(body);
        res.render("community", {data: JSON.parse(body)});
    })

})

router.get('/food', function (req, res, next) {

    request(options_food, function (err, response, body) {
        //callback
        console.log(body);
        res.json(JSON.parse(body));
    })

})

router.get('/notice', function (req, res, next) {

    request(options_notice, function (err, response, body) {
        //callback
        console.log(body);
        res.render("notice", {data: JSON.parse(body)});
    })

})
router.get('/class/text/:id', function (req, res, next) {
    //callback
    request(options_board_class, function (err, response, body) {
        console.log(req.params);
        res.render("class_text", {id: req.params.id, data: JSON.parse(body)})

    })

})

router.get('/club/text/:id', function (req, res, next) {
    //callback
    request(options_board_club, function (err, response, body) {
        console.log(req.params);
        res.render("club_text", {id: req.params.id, data: JSON.parse(body)})

    })

})

router.get('/school/text/:id', function (req, res, next) {
    //callback
    request(options_board_school, function (err, response, body) {
        console.log(req.params);
        res.render("school_text", {id: req.params.id, data: JSON.parse(body)})

    })

})

router.get('/community/text/:id', function (req, res, next) {
    //callback
    request(options_community, function (err, response, body) {
        console.log(req.params);
        res.render("community_text", {id: req.params.id, data: JSON.parse(body)})

    })

})

router.get('/notice/text/:id', function (req, res, next) {
    //callback
    request(options_notice, function (err, response, body) {
        console.log(req.params);
        res.render("notice_text", {id: req.params.id, data: JSON.parse(body)})

    })

})


module.exports = router;

