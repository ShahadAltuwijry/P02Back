const userModel = require("./../../db/models/userSchema");

const createUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const user = new userModel({ userName, email, password });
    await user.save();
    userModel.findOne({ email: email }, (err, user) => {
      if (user) {
        return res.send({ message: "Sign up Successfuly", user: user });
      }
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

const getVisits = (req, res) => {
  const { id } = req.params;
  userModel
    .find({ _id: id })
    .populate("visits")
    .exec()
    .then((result) => {
      res.send(result[0].visits);
    })
    .catch((err) => {
      res.send(err);
    });
};

//login cotroller
const login = (req, res) => {
  try {
    const { userName, password } = req.body;
    userModel.findOne({ userName: userName }, (err, user) => {
      console.log(userName);
      if (user) {
        if (password === user.password) {
          return res.send({ message: "Login Successfuly", user: user });
        } else {
          return res.send({ message: "Invalid Password" });
        }
      }
      return res.send({ message: "You Do not have an account" });
    });
  } catch (error) {
    return res.send(error.message);
  }
};

const getAllUsers = (req, res) => {
  userModel
    .find({})
    .then((result) => {
      return res.send(result);
    })
    .catch((err) => {
      return res.send(err);
    });
};

// const updateUser = (req, res) => {

//   const { name } = req.params;
//   const { userName, email, password } = req.body;
//   let index = 0;
//   try {
//     const found = userModel.find((item, i) => {
//       index = i;
//       return item.userName === name;
//     });
//     if (found) {
//       // if (found.userName === "guest") {
//       //   res.status(404).json("you are a guest, sign up to get update option");
//       // } else {
//       if (userName) found.userName = name;
//       if (email) found.email = email;
//       if (password) found.password = password;

//       userModel[index] = found;
//       // userModel.userName === userName;
//       // userModel.email === email;
//       // userModel.password === password;
//       res.status(200).json(found);
//     } else res.status(400).json("user not found");
//   } catch (error) {
//     res.status(400).json(error.meassage);
//   }
// };

const updateUser = (req, res) => {
  const { id } = req.params;
  const { userName, email, password } = req.body;

  if (userName) {
    userModel
      .findByIdAndUpdate({ _id: id }, { userName: userName }, { new: true })
      .then((result) => {
        return res.json(result);
      })
      .catch((err) => {
        return res.send(err);
      });
  }

  if (password) {
    userModel
      .findByIdAndUpdate({ _id: id }, { password: password }, { new: true })
      .then((result) => {
        return res.json(result);
      })
      .catch((err) => {
        return res.send(err);
      });
  }

  if (email) {
    userModel
      .findByIdAndUpdate({ _id: id }, { email: email }, { new: true })
      .then((result) => {
        return res.json(result);
      })
      .catch((err) => {
        return res.send(err);
      });
  }
};

const addVisit = async (req, res) => {
  const { id, ObjectId } = req.params;
  // const { ObjectId } = req.params;
  console.log(id, ObjectId);
  const user = await userModel.findOne({ _id: id });

  if (user) {
    if (user.visits.includes(ObjectId)) {
      userModel
        .findOneAndUpdate(
          { _id: id },
          { $pull: { visits: ObjectId } },
          { new: true }
        )
        .then((result) => {
          res.status(200).send(result);
        })
        .catch((err) => {
          console.log(err);
          res.status(400).json(err);
        });
    } else {
      userModel
        .findOneAndUpdate(
          { _id: id },
          { $push: { visits: ObjectId } },
          { new: true }
        )

        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          console.log(err);
          res.send(err);
        });
    }
  } else {
    res.status(400).json("invalid user");
  }
};

module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  login,
  addVisit,
  getVisits,
};
