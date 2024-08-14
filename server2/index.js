// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const cors = require("cors");
// const multer = require("multer");
// const path = require("path");
// const upload = multer();
// const courseRouter = require("./routes/courses");
// const submissionRouter = require("./routes/submissions");

// mongoose.connect("mongodb://127.0.0.1:27017/LearnChain", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// mongoose.connection.on("connected", () => {
//   console.log("Mongoose Connected Woohoo!");
// });

// // app.use(upload.any());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());
// app.use(express.json());
// app.use("/courses", courseRouter);
// app.use("/submissions", submissionRouter);

// const PORT = process.env.PORT || "4000";

// app.listen(PORT, () => {
//   console.log("Server up and running on port:", PORT);
// });
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const upload = multer();
const courseRouter = require("./routes/courses");
const submissionRouter = require("./routes/submissions");

mongoose.connect("mongodb://127.0.0.1:27017/LearnChain", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Mongoose Connected Woohoo!");
});

// Define the Course schema and model
const CourseSchema = new mongoose.Schema({
  name: String,
  description: String,
  author_id: String,
  users: Number,
  price: Number,
  id: String,
  address: String,
  author: String,
  thumbnail: String,
});

const Course = mongoose.model("Course", CourseSchema);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use("/courses", courseRouter);
app.use("/submissions", submissionRouter);

// Search endpoint
app.post('/courses/results', async (req, res) => {
  const searchTerm = req.body.searchterm;
  console.log(`Search term received: ${searchTerm}`); // Log received search term
  let query = {};

  if (searchTerm) {
    const regex = new RegExp(searchTerm, 'i'); // 'i' makes it case-insensitive
    query = {
      $or: [
        { name: regex },
        { description: regex },
        // Add other fields if necessary
      ],
    };
  }

  try {
    const courses = await Course.find(query);
    console.log(`Courses found: ${courses.length}`); // Log number of courses found
    res.json(courses);
  } catch (error) {
    console.error(`Error retrieving courses: ${error}`); // Log detailed error
    res.status(500).json({ message: 'Error retrieving courses' });
  }
});

const PORT = process.env.PORT || "4000";

app.listen(PORT, () => {
  console.log("Server up and running on port:", PORT);
});
