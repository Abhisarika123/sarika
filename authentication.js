const jwt = require('jsonwebtoken');
let secretKey = '4646^%&*^**hjhhjg^&%&^%^&%^565trt';

const authenticate = (req, res, next) => {
    let token = req.headers.authorization;
    if (!token)
        return res.status(403).json('A Token is required for authentication')
    try {
        let decode = jwt.verify(token, secretKey);
        req.userData = decode;
        next();
    } catch (error) {
        return res.status(401).json('Invalid Token')
    }
}

const generateToken = (userData, secretKey, expiresIn) => {
    let token = jwt.sign(userData, secretKey, expiresIn);
    return token;
}

module.exports = {
    authenticate,
    generateToken
}