const { Router } = require('express');

const router = new Router();

router.get('/' , (req,res) => {
    res.json({ geneartion : req.app.locals.engine.generation});
})

module.exports = router;