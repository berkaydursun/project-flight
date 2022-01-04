const User = require('../model/User');
const Admin = require('../model/Admin');


const {
    v4: uuidv4
} = require('uuid');

const jwt = require('jsonwebtoken');
const Staff = require('../model/Staff');
const Flight = require('../model/Flight');
const secretKey = require('crypto').randomBytes(64).toString('hex');



// User Functions

exports.addUser = (req, res) => {

    User.findOne({ tc: req.body.tc })
        .then(result => {
            if (result == null) {
                const user = new User({
                    _id: uuidv4(),
                    tc: req.body.tc,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email:req.body.email,
                    password: req.body.password
                })
                user.save()
                    .then((result) => { res.status(201).json(result) })
                    .catch((err) => console.log(err))
            } else {
                res.status(403).json('Please Enter Different tc ')
            }
        })

}

exports.getUsers = (req, res) => {
    User.find().sort({ createdAt: -1 })
        .then(result => res.json(result))
        .catch(err => console.log(err));
}

exports.getSingleUser = (req, res) => {
    User.findById(req.params.id)
        .then(result => result ? res.json(result) : res.status(404).json())
        .catch(err => console.log(err));
}

exports.updateUser = (req, res) => {
    var id = req.params.id;
    User.findByIdAndUpdate({ "_id": id }, req.body).then((newUser) => {
        newUser ? res.json("Successfully Updated") : res.status(400).json('Unsuccessfull');

    }).catch((err) => {
        res.json("There is a mistake while updating");
    })
}

exports.deleteUser = (req, res) => {
    User.findOneAndRemove({ "_id": req.params.id })
        .then(result => {
            result ? res.status(204).json('Successfully delete') : res.status(400).json('Unsuccessfull')
        })
        .catch(err => {
            console.log(err);
        })

}

// Admin Functions

exports.getAdmin = (req, res) => {
    Admin.find().sort({ createdAt: -1 })
        .then(result => res.json(result))
        .catch(err => console.log(err));
}

exports.createAdmin = (req, res) => {
    Admin.findOne({ username: req.body.username })
    .then(result => {
            if (result == null) {
                const admin = new Admin({
                    _id: uuidv4(),
                    username: req.body.username,
                    password: req.body.password

                })
                admin.save()
                    .then((result) => { res.status(200).json(result) })
                    .catch((err) => console.log(err))

            }
            else {
                res.status(403).json('Please Enter Different Username');
            }

        })
}

// Staff Functions

exports.addStaff = (req, res) => {

    Staff.findOne({ tc: req.body.tc })
        .then(result => {
            if (result == null) {
                const staff = new Staff({
                    _id: uuidv4(),
                    tc: req.body.tc,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email:req.body.email,
                    password: req.body.password
                })
                staff.save()
                    .then((result) => { res.status(201).json(result) })
                    .catch((err) => console.log(err))
            } else {
                res.status(403).json('Please Enter Different tc ')
            }
        })

}

exports.deleteStaff = (req, res) => {
    Staff.findOneAndRemove({ "_id": req.params.id })
        .then(result => {
            result ? res.status(204).json('Successfully delete') : res.status(400).json('Unsuccessfull')
        })
        .catch(err => {
            console.log(err);
        })

}

exports.getStaffs = (req, res) => {
    Staff.find().sort({ createdAt: -1 })
        .then(result => res.json(result))
        .catch(err => console.log(err));
}

// Fligth Functions

exports.addFlight = (req, res) => {

    Flight.findOne({ code: req.body.code })
        .then(result => {
            if (result == null) {
                const flight = new Flight({
                    _id: uuidv4(),
                    code: req.body.code,
                    from: req.body.from,
                    to: req.body.to,
                    time:req.body.time,
                    date:req.body.date,
                    price:req.body.price,

                    
                })
                flight.save()
                    .then((result) => { res.status(201).json(result) })
                    .catch((err) => console.log(err))
            } else {
                res.status(403).json('Please Enter Different Code ')
            }
        })

}

exports.deleteFlight = (req, res) => {
    Flight.findOneAndRemove({ "_id": req.params.id })
        .then(result => {
            result ? res.status(204).json('Successfully delete') : res.status(400).json('Unsuccessfull')
        })
        .catch(err => {
            console.log(err);
        })

}

exports.getFlights = (req, res) => {
    Flight.find().sort({ createdAt: -1 })
        .then(result => res.json(result))
        .catch(err => console.log(err));
}

exports.buyFlightTicket=(req,res)=>{
   
        User.findById(req.params.id)
            .then(result =>{
                if(result){
                    result.flights=[...result.flights,{
                        _id: req.body._id,
                        code: req.body.code,
                        from: req.body.from,
                        to: req.body.to,
                        time:req.body.time,
                        date:req.body.date,
                        price:req.body.price,

                    
                    }];
                    result.save();
                    res.json(result);
                }
                else{
                    res.status(400).json('Unsuccessfull')
                }

            })
            .catch(err => console.log(err));
}






// Login Control Function

exports.login = (req, res) => {
    User.findOne({ tc: req.body.tc, password: req.body.password })
        .then(result => {
            if (result !== null) {
                const token = jwt.sign(
                    { name: req.body.tc }
                    , secretKey
                    , { expiresIn: 30 * 2, algorithm: 'HS256' }
                );
            console.log(result)
            res.status(202).json(result._id);
            } else {

                res.status(404).json('Unsuccessfull');
            }
        })
        .catch(err => {
            console.log(err);
        })
}

exports.staffLogin = (req, res) => {
    Staff.findOne({ tc: req.body.tc, password: req.body.password })
        .then(result => {
            if (result !== null) {
                const token = jwt.sign(
                    { name: req.body.tc }
                    , secretKey
                    , { expiresIn: 30 * 2, algorithm: 'HS256' }
                );
            console.log(result)
            res.status(202).json(result._id);
            } else {

                res.status(404).json('Unsuccessfull');
            }
        })
        .catch(err => {
            console.log(err);
        })
}

exports.adminLogin = (req, res) => {
    Admin.findOne({ username: req.body.username, password: req.body.password })
        .then(result => {
            if (result !== null) {
                const token = jwt.sign(
                    { name: req.body.username }
                    , secretKey
                    , { expiresIn: 30 * 2, algorithm: 'HS256' }
                );
            console.log(result)
            res.status(202).json(result);
            } else {

                res.status(404).json('Unsuccessfull');
            }
        })
        .catch(err => {
            console.log(err);
        })
}