import joi from 'joi';

const validateUserSignIn = {
    validation (SignInUser){
        const schema = {
            email: joi.string().trim().min(3).max(100).required(),
            password: joi.string().trim().min(4).max(100).required()
          }
              
          return joi.validate(SignInUser, schema )
        }
    }
 
export default validateUserSignIn ;