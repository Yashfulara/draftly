const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    //username, email, password, profilePicture, bio, savedBlogs, likedBlogs
    username: {
      type: String,
      required: [true, "Username is required.."],
      unique: true,
      trim: true,
      minlength: [2, "Username must be atleast 2 characters"],
      maxlength: [20, "Username cannot exceed 20 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required.."],
      unique: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/,
        "Please enter a valid Email",
      ],
    },
    password: {
      type: String,
      require: [true, "Paswword is required"],
      minlength: [6, "Password must be atleast 6 charcters"],
    },
    profilePicture: {
      type: String,
      default: "https://placehold.co/600x400",
    },
    bio: {
      type: String,
      maxlength: [200, "Bio cannot exceed 200 characters"],
    },
    savedBlogs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
      },
    ],
    likedBlogs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next();
  }
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
