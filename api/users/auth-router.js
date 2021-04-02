const router = require("express").Router();
const model = require("./users-model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")




router.post("/register", async (req, res, next) => {
    
    try {
    const { username, phoneNumber, password } = req.body

    if (!username || !phoneNumber || !password){
        return res.status(501).json({
          message: "username, phoneNumber and password required",
        })
      }
    const user = await model.findBy({ username }).first()
  
      if (user){
        return res.status(409).json({
          message: "Username taken",
        })
      }
  
    const newUser = await model.add({
      username,
      phoneNumber,
      password: await bcrypt.hash(password, 5)
  
    })
  
    res.status(201).json(newUser)
  
   } catch(err){
        next(err)
    }
  
  });


  router.post("/login", async(req, res, next)=> {
      try {

        const { username, password } = req.body

        if (!username || !password){
            return res.status(501).json({
              message: "username and password required",
            })
          }

          const user = await model.findBy( {username}).first()

          const passwordValid = await bcrypt.compare(password, user ? user.password : "")

          if (!user || !passwordValid) {
            return res.status(401).json({
              message: "Invalid credentials",
            })
          }

          const token = jwt.sign({
              userID: user.id,
              userPhone: user.phoneNumber,
          }, "I love Prophet Muhammad (swt)")

          res.json({
              message: `Welcome ${user.username}`,
              token: token
              
          })


      } catch (err){
          next(err)
      }
  })

module.exports = router