import { Router } from 'express';
var router = Router();

/* GET /about page. */
router.get('/', function(req, res, next) {

  if (!req.session || req.session.user === undefined || req.session.user.Type === 'user') {
    res.render("homepage", { User: (req.session.user === undefined ? "" : req.session.user) });
  } else {
    res.render("noaccess", { user: (req.session.user === undefined ? "" : req.session.user) });
  }

   // res.render("homepage");
});


/* GET /about/test page. */
router.get('/test', function(req, res, next) {
    res.send('Test Route');
  });

export default router;