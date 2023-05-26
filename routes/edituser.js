import { Router } from 'express';
import session from 'express-session';
var router = Router();


/* GET /about page. */
router.get('/', function(req, res, next) {
    res.render("edituserr",{ user: (req.session.user === undefined ? "" : req.session.user) });
});

/* GET /about/test page. */
router.get('/test', function(req, res, next) {
    res.send('Test Route');
  });

export default router;