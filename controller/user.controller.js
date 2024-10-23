const userService = require("../service/user.service")

const createUser = async(req,res) => {
    const data = req.body;
    const result = await userService.createUser(data);
    return res.status(201).json(result);
};

const findAllUsers = async (req, res) => {
    const data = req.body;
    const details = await userService.findAllUsers(data);
    if (details.length < 1 ) {
        return res.json({ msg: `No users found`, data: details });
    }
    return res.status(200).json({ msg: `user found`, data: details });
};

const findById = async (req,res) => {
    const id = req.params.id;
    const user = await userService.findById(id, body);
    if (userId) {
        return res
        .status(200)
        .json({ msg: `user with id ${id} updated`, id: UserId });
    }
};
const updateById = async (req, res) => {
    const id = req.params.id;
    const value = req.body;
    const userId = await userService.updateById(id, value);
    if (userId) {
      return res.status(201).json({ msg: `UPDATED` , value: userId });
    }
  };

  const deleteById = async (req, res) => {
    const id = req.params.id;
    const deleted = await userService.deleteById(id);
    if (deleted) {
      return res.status(201).json({ msg: `DELETED`,});
    }
  };
  
module.exports = {createUser,findAllUsers,findById, updateById, deleteById };
