import joi from 'joi';

const validatePost = {
    validation (PostRecord){
        const schema = {
            date: joi.string().trim().min(3).max(30).required(),
            createdBy: joi.string().trim().min(3).max(30).required(),
            title: joi.string().trim().min(5).max(30).required(),
            type: joi.string().trim().min(3).max(30).required(),
            location: joi.string().trim().min(3).max(100).required(),
            status: joi.string().trim().min(3).max(13).required(),
            comment: joi.string().trim().min(10).required(),
            
          }
              
          return joi.validate(PostRecord, schema )
        }
    }

 
export default validatePost;