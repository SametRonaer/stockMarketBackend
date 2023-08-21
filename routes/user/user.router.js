const express = require("express");
const { getUserPortfolio } = require("./user.controller");

const userRouter = express.Router();

userRouter.get(`/portfolio`, getUserPortfolio);

module.exports = {userRouter};