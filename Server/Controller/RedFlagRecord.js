import redFlag from '../Models/db';

const SignIn= (req, res) => {
let newRecord = {

    id: parseInt(req.body.id),
    date: req.body.title,
    location:req.body.title.location, 
    title: req.body.title,
    description: req.body.description, 
  };

  redFlag.push(newRecord);
  res.status(200).json(newRecord);

};

export default SignIn;

