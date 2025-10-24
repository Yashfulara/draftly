const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    //title, content, expert, author, featuredImage, tags, category, likes, likesCount, savedBy, isPublished, readTime
    title: {
      type: String,
      required: [true, "Title is required.."],
      unique: true,
      minlength: [3, "Title must be atleast 3 characters"],
      maxlength: [20, "Title cannot exceed 20 characters"],
    },
    content: {
      type: String,
      required: [true, "Content is required.."],
      minlength: [3, "Title must be atleast 3 characters"],
      maxlength: [300, "Content  should be atmost 300 characters"],
    },
    tags: [{
        type: String,
        trim: true,
        lowercase: true,
    }],
    readTIme: {
        type: Number,
        default: function() {
            const wordsPerMinute = 200;
            const wordCount = this.content.split(" ").length;
            return Math.ceil(wordCount/wordsPerMinute);
        },
    },
    expert: {
      type: String,
      required: [true, "Summary is required.."],
      minlength: [10, "Summary must be atleast 3 characters"],
      maxlength: [200, "Summary should be of 200 characters max"],
    },
    author: {
      typeof: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    featuredImage: {
        type: String,
    default: "https://placehold.co-------"
    },
    category: {
        type: String,
        enum: ["Technology","Lifestyle", "Travel", "Food", "Education", "Others"],
        default: "Others",
    },
    likes: {
      typeof: mongoose.Schema.Types.ObjectId,
      ref: "User",     
    },
    savedBy: {
      typeof: mongoose.Schema.Types.ObjectId,
      ref: "User",          
    },
    likesCount: {
      type: Number,
      default: 0,  
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", blogSchema);
