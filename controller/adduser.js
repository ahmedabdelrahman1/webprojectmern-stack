import signup from "../models/signup_schema.js"
import bcrypt from 'bcrypt';

const  adduserform= async (req,res)=>{
  //const signup =new Signup(req.body)
    
      const saltRounds = 10;
      const password = req.body.password;
      const cpassword=req.body.cpassword;
    
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const hashedcPassword = await bcrypt.hash(cpassword, saltRounds);
    const sign = new signup ({
      
        fullname: req.body.fullname,
        mail: req.body.mail,
        password: hashedPassword,
        cpassword: hashedcPassword,
        Age: req.body.Age,
        gender: req.body.gender,
        Type:req.body.type,
      });

      console.log(req.body)
   sign.save()
    .then( result => {
        res.redirect("/")
    })
    .catch( err => {
        console.log(err)
    })
}


export default adduserform