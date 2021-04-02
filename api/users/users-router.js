const router = require("express").Router()
const model = require("./users-model")
const { restricted } = require("./auth-middleware")


router.get("/", restricted(), async (req, res, next) => {

    try {
    const users = await model.find()

    res.json(users)

    } catch(err){
        next(err)
    }
})

router.get("/:id", restricted(), async (req, res, next)=> {
    try {
      
       const user = await model.findById(req.params.id)

       res.json(user)

    } catch(err){
        next(err)
    }
})

router.put("/:id", restricted(), async(req, res, next)=> {
    try {

        const user = await model.update(req.params.id, req.body)

        res.status(204).json(user)

    } catch(err){
        next(err)
    }
})

router.delete("/:id", restricted(), async(req, res, next)=> {
    try {

        const user = await model.remove(req.params.id)

        if (user > 0) {
            res.status(200).json({
                message: "The user has been nuked",
            })
        } else {
            res.status(404).json({
                message: "The user could not be found",
            })
        }

    } catch(err){
        next(err)
    }
})

module.exports = router