const express = require("express")
const router = express.Router()
const userModel = require("../models/user.js");



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

router.get("/student", auth, isStudent, (req, res) => {
    res.status(200).json({
        success: true,
        message: "welcome to the protected route for the student"
    })
})

router.get("/admin", auth, isAdmin, (req, res) => {
    res.status(200).json({
        success: true,
        message: "welcome to the protected route for the Admin"
    })
})

// router.get(".temp", (req, res) => {
//     const user = userModel.create({

//     })
// })


module.exports = router