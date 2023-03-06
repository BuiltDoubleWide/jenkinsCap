const e = require('express');
const config = require('../config')

exports.index = (req, res) => {
    res.render('index',{
        'title': "Welcome to The Boxing Co",
        "config": config
    });
}

exports.features = (req, res) => {
    res.render('features',{
        'title': "Our product is the best, why? It's custom made for YOU!",
        "config": config
    });
}

exports.order = (req, res) => {
    res.render('order',{
        'title': "Order now!",
        "config": config
    });
}

exports.submittedData = (req, res) => {
    let person = {
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        number: req.body.number,
    }

    res.render('submitted', {
        title: 'Thank you!',
        "config":config,
        "person":person,
    })
}