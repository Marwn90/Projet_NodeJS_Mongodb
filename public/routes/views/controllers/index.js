const Register = require('../models/Register');

const getIndex = (req, res) => {
    Register.find({}, (err, Registers) => {
        if(err) console.log(err);
        console.log(Registers);
        res.render('index', {
           registers: registers 
        });
    })
}

const postIndex = (req, res) => {
    const newRegister = new Register({
       title: req.body.title
    });
    newRegister.save((err) => {
        if(err) console.log(err);
        res.redirect('/');
    });
   
}

module.exports = {
    getIndex: getIndex,
    postIndex: postIndex
}