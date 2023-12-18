const sendRes = require("../modules/sendRes");

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

module.exports = async (req, res, next) => {
  const { username, password, passTwo } = req.body;
  
  if (!USER_REGEX.test(username)) {
    console.log("ok")
    return sendRes(
      res,
      false,
      null,
      "Username must be between 4 and 20 characters "
    );
  }
  if (!PWD_REGEX.test(password)) {
    return sendRes(
      res,
      false,
      null,
      "Password should include at least one symbol, one uppercase character, must be between 4 and 20 characters "
    );
  }
  if (password !== passTwo) {
    return sendRes(res, false, null, "Password should match");
  }

  next();
};
