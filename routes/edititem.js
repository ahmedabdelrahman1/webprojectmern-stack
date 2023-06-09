import { Router } from 'express';
import session from 'express-session';
import product1 from '../models/product_schema.js'
import { __filename } from '../app.js';
import { __dirname } from '../app.js';
import path from 'path';
var router = Router();


/* GET /about page. */
router.get('/edititem/:id', function(req, res, next) {
  
    product1.findById(req.params.id)
    .then(result=>{
      if (req.session && req.session.user && req.session.user.Type === 'admin') {
      console.log(req.params.id);
      console.log(result);
      res.render("edititem",{item: result , user: (req.session.user === undefined ? "" : req.session.user) });
    }
    else{
      res.render("noaccess",{ user: (req.session.user === undefined ? "" : req.session.user) })
    }
    })
    .catch((err)=>{
      console.log(err);
    });
    
});

router.post('/edititem/:id', function(req, res, next) {
  if (req.session && req.session.user && req.session.user.Type === 'admin'){
    let imgFile;
    let uploadPath;
    console.log(__dirname + '/public/images/');
    console.log(req.files);
  
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }
    
    imgFile = req.files && req.files.image;
    uploadPath = __dirname + '/public/images/' +  req.body.title + path.extname(imgFile.name)
    console.log(uploadPath)
    console.log(req.body)
    // Use the mv() method to place the file somewhere on your server
    imgFile.mv(uploadPath, function (err) {
      if (err) {
        return res.status(500).send(err);
      }
  
      const id = req.params.id
      
      const pro = ({
        title: req.body.title,
        brand: req.body.brand,
        Price: req.body.Price, // corrected 'Price' to 'price'
        image: req.body.title + path.extname(imgFile.name),
        description: req.body.description, // corrected 'descrption' to 'description'
        category: req.body.category
      });
  
      
      
      product1.findByIdAndUpdate(id,pro)
        .then(result => {
          if (req.session && req.session.user && req.session.user.Type === 'admin') {
            console.log(result)
          res.redirect('/inventory',{ user: (req.session.user === undefined ? "" : req.session.user) });
        } else {
          res.render("noaccess", { user: req.session.user || '' });
        }
        })
        .catch(err => {
          console.log(err);
        });
    });
  }
  else{
    res.render("noaccess",{ user: (req.session.user === undefined ? "" : req.session.user) })
  }
});

/* GET /about/test page. */
router.get('/test', function(req, res, next) {
    res.send('Test Route');
  });

export default router;