const express = require("express")
const router = express.Router()
const userModel = require("../models/user.js");
const requestModel = require("../models/request.js")



const { userlogin, usersignup, adminsignup, adminlogin } = require("../controller/auth")

const { auth, isStudent, isAdmin } = require("../middleware/auth")


// router.post("/login", login)
router.post("/signup", usersignup)
router.post("/userlogin", userlogin)
router.post("/adminsignup", adminsignup)
router.post("/adminlogin", adminlogin)

//protected route

router.get("/test", auth, (req, res) => {
    res.status(200).json({
        success: true,
        message: "the user is authentic"
    })
})

router.get("/student", auth, (req, res) => {
    res.status(200).json({
        success: true,
        message: "welcome to the protected route for the student"
    })
})

router.get("/admin", auth, (req, res) => {
    res.status(200).json({
        success: true,
        message: "welcome to the protected route for the Admin"
    })
})

router.get("/Hii", auth, (req, res) => {
    // res.send("hii");
    res.status(200).json({
        success: true,
        message: "welcome to the protected route for the Admin"
    })
})

router.post("/check", auth, (req, res) => {
    let currentUser = req.user;
    res.send(currentUser);
})

router.post("/student/request/regularpass", auth, async(req, res) => {
    const {email, passPurpose, passDate, passType } = req.body;

    // console.log(passType);
    if(!(email === req.user.email)){
        res.status(401).json({message : "Invalid email Id"});
    }

    const currentUser = await userModel.findOne({email: email});

    // console.log(currentUser);
    
    try{
        const request = await requestModel.create({
            date: passDate,
            purpose: passPurpose,
            pass_type: passType,
            user : currentUser._id
        })
        currentUser.requests.push(request._id);
        await currentUser.save();
    }catch(err){
        console.log(err, "request saving error");
    }
    
    
})

router.get("/student/userhistory",auth, async (req, res) => {

    // const requestHistory = await requestModel.find(req.user._id.equals(user));
    // console.log(req.user);
    const currentUser = await userModel.findOne({
        _id : req.user.id
      })
      .populate('requests');

    // console.log(currentUser);
    res.send(currentUser);
});

router.get("/admin/requests",auth, async (req, res) => {

    const requests = await requestModel.find({status : "Pending"})
    .populate('user');
    
    res.send(requests);
});

router.post("/admin/handle_accept", async(req, res) => {
    const { id } = req.body;

    const currentRequest = await requestModel.findOne({
        _id : id
      })

    currentRequest.status = "Approved";
    await currentRequest.save();

    const requests = await requestModel.find({status : "Pending"})
    .populate('user');
    
    res.send(requests);

    // console.log(currentRequest);
})


router.post("/admin/handle_refuse", async(req, res) => {
    const { id } = req.body;

    const currentRequest = await requestModel.findOne({
        _id : id
      })

    currentRequest.status = "Reject";
    await currentRequest.save();

    const requests = await requestModel.find({status : "Pending"})
    .populate('user');
    
    res.send(requests);

    // console.log(currentRequest);
})


router.get("/admin/accepted",auth, async (req, res) => {

    const requests = await requestModel.find({status : "Approved"})
    .populate('user');
    
    res.send(requests);
});

router.get("/admin/rejected",auth, async (req, res) => {

    const requests = await requestModel.find({status : "Reject"})
    .populate('user');
    
    res.send(requests);
});

module.exports = router