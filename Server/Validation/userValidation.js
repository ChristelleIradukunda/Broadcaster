import joi from 'joi';

const validateUser = {
    validation (SignUpUser){
        const schema = {
            firstname: joi.string().trim().min(3).max(30).required(),
            lastname: joi.string().trim().min(3).max(30).required(),
            email: joi.string().trim().min(3).max(100).required(),
            phoneNumber: joi.string().trim().max(13).required(),
            userName: joi.string().trim().min(3).max(100).required(),
            password: joi.string().trim().min(4).max(100).required()
          }
              
          return joi.validate(SignUpUser, schema )
        }
    }

 
export default validateUser;