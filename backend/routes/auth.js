const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    obj = {
        a: 'Ayesha',
        number: 28092002
    }
    res.json(obj);
});

module.exports = router