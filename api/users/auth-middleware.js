const jwt = require("jsonwebtoken")


const restricted = () => {
    return async (req, res, next) => {
        try {
           const token = req.headers.authorization

           if (!token){
               return res.status(403).json({
                   message: "Token required"
               })
           }

           jwt.verify(token, "I love Prophet Muhammad (swt)", (err, decoded) => {
               if (err){
                return res.status(401).json({
                    message: "token invalid",
                
               })
           }

           req.token = decoded
           next()

        })

        } catch(err){
            next(err)
        }
    }
}

module.exports = {
    restricted,
}

