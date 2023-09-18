require("dotenv").config();
const router = require("express").Router();
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const User = require("../models/User");
function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return emailPattern.test(email);
}
function isStrongPassword(password) {
  // Regular expressions to check for specific conditions
  const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  // Check all conditions
  return (
    hasSpecialChar &&
    hasUpperCase &&
    hasLowerCase &&
    hasNumber &&
    password.length >= 8
  );
}

router.post("/register", async (req, res) => {
  console.log(req.body)
  try {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password;
    const organization = req.body.organization;
    const emailAddress = req.body.emailAddress;
    const contactNumber = req.body.contactNumber;

    const userEmail = await User.findOne({ emailAddress: emailAddress });
    if (userEmail) {
      console.log("ran");
      throw new Error("Invalid Credentials!");
    }

    if (
      firstName.trim() === "" ||
      password.trim() === "" ||
      !isStrongPassword(password) ||
      emailAddress.trim() === "" ||
      !isValidEmail(emailAddress) ||
      organization.trim() === ""
    ) {
      console.log("ran");
      throw new Error("Invalid Credentials");
    } else {
      bcrypt.hash(password, saltRounds, async function (err, hash) {
        const newUser = new User({
          firstName: firstName,
          lastName: lastName,
          organization: organization,
          emailAddress: emailAddress,
          contactNumber: contactNumber,
          password: hash,
        });
        const response = await newUser.save();
        if (response) {
          const token = jwt.sign(
            {
              data: emailAddress,
            },
            process.env.SECRET,
            { expiresIn: 60 * 60 * 24 }
          );
          console.log(token);
          res.status(200).json({ token: token });
        } else {
          res.status(501).json({ message: "Internal Server Error!" });
        }
      });
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Invalid Credentials!" });
  }
});

router.post("/login", async (req, res) => {
  console.log(req.body);
  const emailAddress = req.body.emailAddress;
  const password = req.body.password;
  try {
    const user = await User.findOne({ emailAddress: emailAddress });
    if (!user) {
      throw new Error("No Such User Exists!");
    } else {
      bcrypt.compare(password, user.password, function (err, result) {
        if (err) {
          res.status(501).json({ message: "Internal Server Error!" });
        } else {
          if (result) {
            const token = jwt.sign(
              {
                data: emailAddress,
              },
              process.env.SECRET,
              { expiresIn: 60 * 60 * 24 }
            );
            console.log(token);
            res.status(200).json({ token: token });
          } else {
            throw new Error("Invalid Credentials!");
          }
        }
      });
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: err });
  }
});

module.exports = router;
