const sendRes = require("../modules/sendRes");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const usersData = [];

module.exports = {
  registerUser: async (req, res) => {
    const { username, password } = req.body;

    const userInArray = usersData.find((u) => u.username === username);

    if (!userInArray) {
      const hash = await bcrypt.hash(password, 4);
      const userReg = {
        userID: uuidv4(),
        username: username,
        password: hash,
      };

      usersData.push(userReg);

      sendRes(res, true, null, "You registered successfully");
    } else {
      return sendRes(res, false, null, "User is all ready existing");
    }
  },
  loginUser: async (req, res) => {
    const { username, password, user } = req.body;

    if (user) return sendRes(res, false, null, "You are already logged in");

    const isUserLoggedIn = usersData.some((u) => u.username === username && u.loggedIn);
    if (isUserLoggedIn) {
      return sendRes(res, false, null, "User is already logged in from another session");
    }

    const userData = usersData.find((u) => u.username === username);

    if (!userData) return sendRes(res, false, null, "This user does not exist");

    const samePassword = await bcrypt.compare(password, userData.password);
    if (!samePassword) return sendRes(res, false, null, "Password is incorrect");

    userData.loggedIn = true;

    const userWithoutPassword = {
      userID: userData.userID,
      username: userData.username,
    };

    const secretKey = process.env.JWT_SECRET || "#l$D524!Z%g8h6l*5)56GBsa9";

    const token = jwt.sign({ username: userData.username }, secretKey, { expiresIn: '24h' });

    sendRes(res, true, { user: userWithoutPassword, token }, "You logged in successfully");
  },
  autologin: async (req, res) => {
    const { user } = req.body;

    if (!user) return sendRes(res, false, null, "no auth token");

    const newUser = usersData.find((u) => u.username === user.username);
    if (!newUser) return;

    const userWithoutPassword = {
      userID: newUser.userID,
      username: newUser.username,
    };

    sendRes(res, true, { user: userWithoutPassword }, null);
  }
};
