const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('Welcome'));
router.post('/posts', controllers.sendEmail);
router.get('/posts', controllers.getAllMessges);

module.exports = router;