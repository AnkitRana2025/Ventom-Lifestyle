import { body, validationResult } from "express-validator";

export const registerValidator = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Enter valid email address"),

  body("username")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isString()
    .withMessage("Name must be a string")
    .isLength({ min: 2, max: 50 })
    .withMessage("Name length must be 2 to 50 characters"),

  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password is required")
    .isString()
    .withMessage("Password must be a string")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Invalid request",
        errors: errors.array(),
      });
    }

    next();
  },
];

export const loginValidator = [
  body("email")
  .notEmpty().withMessage("Email is required").bail()
  .isString().withMessage("Email must be string value").bail().trim()
  .isEmail().withMessage("Enter a valid email address"),

  body("password")
  .notEmpty().withMessage("Password is required").bail()
  .isString().withMessage("Password must be a string value").bail().trim()
  .isLength({min:6}).withMessage("Password at least 6 character long"),

  (req,res, next)=>{
    const errors = validationResult(req)

    if(!errors.isEmpty()){
      return res.status(400).json({
        message: "invalid data",
        errors: errors.array()
      })
    }
    next()
  }
]