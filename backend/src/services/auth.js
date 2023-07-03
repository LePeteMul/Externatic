const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (req, res, next) => {
  argon2
    .hash(req.body.password, hashingOptions)
    .then((hashedPassword) => {
      req.body.password = hashedPassword;

      next();
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
};

const verifyPassword = async (req, res, next) => {
  const { password } = req.body;
  const { password: hashedPassword } = req.user;

  if (!hashedPassword || !password) {
    return res.status(400).send("Invalid request at step 1 of verifyPassword");
  }

  const isVerified = await argon2.verify(hashedPassword, password);

  if (isVerified) {
    const payload = { sub: req.user.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    req.token = token;
    res.status(200).send(token);
    return next();
  }
  return res.status(401).send("verify password, error at step 2");
};

const verifyToken = (req, res, next) => {
  try {
    const authorizationHeader = req.get("Authorization");

    if (!authorizationHeader) {
      throw new Error("Authorization header is missing kikokiko");
    }

    const [type, token] = authorizationHeader.split(" ");

    if (type !== "Bearer") {
      throw new Error("Authorization header has an incorrect type");
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    req.payload = payload;

    console.info("Got It user");
    next();
  } catch (err) {
    console.error(err);

    if (err.name === "Json Web Token Error") {
      res.status(401).send("verify token, Invalid token");
    } else if (err.name === "Token Expired Error") {
      res.status(401).send("verifytoken, Token has expired");
    } else {
      res.status(401).send("verifytoken error, unauthorized");
    }
  }
};

module.exports = {
  hashPassword,
  verifyPassword,
  verifyToken,
};
