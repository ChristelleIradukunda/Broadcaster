import redFlag from '../Models/db';
import validatePost from '../Validation/recordValidation'

const postNew = (req, res) => {

  const { error } = validatePost.validation(req.body);
  if (error) {
      res.status(400).json({
          status: 400,
          error: error.details[0].message,
      });
      return;
  }

  const id = redFlag.length + 1;
let newRecord = {

    id,
    date: req.body.date,
    createdBy: req.body.createdBy,
    title: req.body.title,
    type: req.body.type,
    location: req.body.location, 
    status: req.body.status,
    comment: req.body.comment
  };

  redFlag.push(newRecord);
  res.status(200).json(newRecord);

};
// ============================== Gel All ====================================

const GetAll = (req, res) =>{
  res.status(200).json({
    status:201,
    message: 'Data retrieved succesfully',
    data: redFlag
  });
}

// ========================= Get One ==========================================

const getOne = (req, res) => {
  let findOne = redFlag.find(record => record.id === parseInt(req.params.id));
  if(findOne){
      res.status(201).json(findOne);  
  }
  else {
      res.status(404).json({
        message: 'Record not found',
        status: 404
      });
    }
  };
  
  // ============================== Delete One ================================

  const DeleteOne = (req, res) => {
    let removeOne = redFlag.find(foundId => foundId.id === parseInt(req.params.id));
    if(removeOne){
      let index = redFlag.indexOf(removeOne);
      redFlag.splice(index, 1);
      res.status(201).json({
        status:201,
        message: 'Record deleted sucessfully'
      });
    }
    else {
      res.status(404).json({
        message: 'Red flag not found',
        status: 404
      });
    }}
  
export {postNew, GetAll, getOne, DeleteOne};


