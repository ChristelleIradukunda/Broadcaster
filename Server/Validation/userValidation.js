import joi from 'joi';

const validateUser = (req, res, next) =>{
   
        const schema = {
            firstname: joi.string().trim().min(3).max(30).required(),
            lastname: joi.string().trim().min(3).max(30).required(),
            email: joi.string().trim().min(3).max(100).required(),
            phoneNumber: joi.string().trim().max(13).required(),
            userName: joi.string().trim().min(3).max(100).required(),
            password: joi.string().trim().min(4).max(100).required()
          }
              
          const result =  joi.validate(req.body, schema);
          if (result.error){
          res.status(400).send(result.error);
            return;
          
          }
        return next();
    }

 
export default validateUser;
