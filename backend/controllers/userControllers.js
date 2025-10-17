import users from "../models/userModel.js";

export const createUsers = async (req, res) => {
  const { name, age, email } = req.body;
  try {
    const user = await users.create({
      name,
      age,
      email,
    });
    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({message : "something went wrong"});
  }
}

export const getAllUsers = async (req,res) => {
    try {
        const allUsers = await users.find();
        return res.status(200).json(allUsers);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message : "something went wrong"});
    }
}

export const getSingleUser = async (req,res) => {
    const {id} = req.params;
    try {
        const user = await users.findById(id);
        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message : "something went wrong"});
    }
}

export const deleteUser = async (req,res) => {
    const {id} = req.params;
    try {
        const user = await users.findByIdAndDelete(id);
        return res.status(200).json({message : "user deleted succesfully"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message : "internal server error"});
    }
}

export const updateUsers = async (req,res) => {
    const {id} = req.params;
    try {
        const user = await users.findByIdAndUpdate(id,req.body);
        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message : 'something went wrong'});
    }
}