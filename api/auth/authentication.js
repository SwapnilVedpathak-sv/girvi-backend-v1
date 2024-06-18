const express = require("express");
const router = express.Router();
const authModel = require("../models/authModel");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

router.post("/login", [body("phoneNumber").not().isEmpty()], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            error: errors.array()[0],
        });
    }

    const phoneNumberExist = await authModel.findOne({ phoneNumber: req.body.phoneNumber });
    if (phoneNumberExist) {
        return res.status(200).json({ message: "OTP Sent Successfully", phoneNumber: req.body.phoneNumber });
    } else {
        const newUser = new authModel(req.body);
        newUser.save().then((result) => {
            return res.status(200).json({ msg: "OTP Sent Successfully", phoneNumber: result.phoneNumber });
        })
            .catch((error) => {
                return res.status(401).json({ error: "Something Went Wrong!!!" });
            });
    }
})

router.post("/verifyOTP", [body("phoneNumber").not().isEmpty(), body("otp").not().isEmpty()], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            error: errors.array()[0],
        });
    }
    const verify = async () => {
        // let { session, error } = await supabase.auth.verifyOTP({
        //   phone: `+91${req.body.phoneNumber}`,
        //   token: req.body.otp
        // })


        if (req.body.otp != "929698") {
            return res.status(401).json({ message: "Entered OTP is invalid" });
        } else if (req.body.otp == "929698") {
            const phoneNumberExist = await authModel.findOne({ phoneNumber: req.body.phoneNumber });
            let token = jwt.sign({ phoneNumber: req.body.phoneNumber }, "secret", {
                expiresIn: "3h",
            });
            return res.status(200).json({ status: 200, message: "OTP Verified Successfully", result: { phoneNumber: phoneNumberExist.phoneNumber }, token });
        }
    }
    verify();
})

module.exports = router;