import joi from 'joi';

const validateUserSignIn = (req, res, next) =>{
    const schema = {
 
        email: joi.string().trim().min(3).max(100).required(),
        password: joi.string().trim().min(4).max(100).required()
      }
          
      const result =  joi.validate(req.body, schema);
      if (result.error){
      res.status(400).send(result.error);
        return;
      
      }
    return next();
    }
 
export default validateUserSignIn ;