const User = require('../models/Register');

// function for post method 
const createUser = async (req, res) => {
  try {
    const { name, phone, email,  password, confirmPassword} = req.body;
    
    const user = new User({
      name,
      phone,
      email,
      password,
      confirmPassword

    });

    await user.save();
    res.status(200).json(user);
  } catch (error) {
    console.log('There is an error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


// function for get method for all users
const getUsers= async(req,res)=>{
  try{
    const users= await User.find()
    res.status(200).json(users)
  }catch(error){
    console.log('There is an error:',error)
    res.status(500).json({message:'server error'})
  }
}


// function for get method for single user
const singleUser= async(req,res)=>{
  try{
    const user= await User.findById(req.params.id)
    if (!user){
      return res.status(404).json({message:'User Not Found'})
    }
    res.status(200).json(user)
  }catch(error){
    console.log('There is an error:',error)
    res.status(500).json({message:'server error'})
  }
}


// function for put method 
const updateUser = async(req,res)=>{
  try{
    const {name,phone,email,password,confirmPassword}=req.body

    const myUser = await User.findByIdAndUpdate(
      req.params.id,
      {name,phone,email,password,confirmPassword}
    )
    if (!myUser){
      return res.status(404).json({message:'user not found'})
    }
    res.status(200).json(myUser)

  }catch(error){
    console.log('There is an error:',error)
    res.status(500).json({message:"Server Error"})
  }
}

// function for delete method 
const deleteUser = async(req,res)=>{
  try{
    const deleteUser = await User.findByIdAndDelete(req.params.id)
    res.status(204).send()
  }catch(error){
    console.log('There is an error:',error)
    res.status(500).json({message:"Server Error"})
  }
}

module.exports = { createUser,getUsers,singleUser,updateUser,deleteUser };
