
const jwt = require("jsonwebtoken");

const middleware = (req, res, next) => {
  let token = req.headers.authorization;
  console.log("middleware validated");
  if (!token) {
    res.status(401).send("Unauthorized");
  } else {
    try {
      // remove 'Bearer' prefix to validate pure token value
      const decoded = jwt.verify(
        token.replace("Bearer", "").trim(),
        "codecamp_very_$secr3T!"
      );
      console.log(decoded, new Date(), req.method, req.url);

      next();
    } catch (e) {
      res.status(401).send("Unauthorized");
    }
  }
};
module.exports = middleware;