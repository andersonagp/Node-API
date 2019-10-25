const express = require('express');

const user = require('../model/user');

const router = express.Router();

router.post('/create',  async(req, resp) => {

    try {
    
        const userCreated = await user.create(req.body);
        return resp.status(201).send({userCreated});
    
    } catch (error) {
        return res.status(500).send({message: 'error on server'});
    }
});

module.exports = app => app.use('/auth', router);