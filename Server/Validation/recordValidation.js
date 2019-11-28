import joi from 'joi';

const validatePost = (req, res, next) => {
        const schema = {
            
            createdBy: joi.string().trim().min(3).max(30).required(),
            title: joi.string().trim().min(5).max(100).required(),
            type: joi.string().trim().min(3).max(30).required(),
            location: joi.string().trim().min(3).max(100).required(),
            status: joi.string().trim().min(3).max(13).required(),
            comment: joi.string().trim().min(10).required(),
            
          }
          const result =  joi.validate(req.body, schema);
          if (result.error){
          res.status(400).send(result.error);
            return;
          
          }
        return next();
        }
        
    
    const validateModify = (req, res, next) => {
       
            const schema = {
                title: joi.string().trim().min(5).max(100).required(),
                type: joi.string().trim().min(3).max(30).required(),
                location: joi.string().trim().min(3).max(100).required(),
                comment: joi.string().trim().min(10).required(),
                
              }
                  
              const result =  joi.validate(req.body, schema);
              if (result.error){
              res.status(400).send(result.error);
                return;
              
              }
            return next();
            }
            
 
export {validatePost, validateModify};