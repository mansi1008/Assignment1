/*
	Name: Mansi Mehindru
	Student ID: 301108725
	Date: 2020-10-26
*/

var express = require('express');
var router = express.Router();
var myname="Mansi Mehindru";

router.get('/', function(req, res) {
    res.render('pages/index',{page_title:`${myname} - Web Developer`});
});

router.get('/services', function(req, res) {
    res.render('pages/services',{page_title:`${myname} - Services`});
});

router.get('/projects', function(req, res) {
    res.render('pages/projects',{page_title:`${myname} - Projects`});
});

router.get('/aboutme', function(req, res) {
    res.render('pages/aboutme',{page_title:`${myname} - About Me`});
});

router.get('/contact', function(req, res) {
    res.render('pages/contact',{page_title:`${myname} - Contact`});
});

module.exports = router;