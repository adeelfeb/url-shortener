const express = require("express");
const cors = require("cors"); // Import the CORS package
const { connectDb } = require("./connectionDb");
const urlRouter = require("./routes/url.route");
const path = require("path");
const Url = require("./models/url.model");
const staticRouter = require("./routes/staticRouter.route")
const userRouter = require("./routes/user.route")
const app = express();
const PORT = 8000;

connectDb("mongodb://127.0.0.1:27017/usersdb3");

app.use(cors()); // Enable CORS
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(express.static(path.join(__dirname, "public"))); // Serve static files


// Setting the rendering engine for express
app.set("view engine", "ejs");

// Setting the views directory
app.set("views", path.resolve("./views"));

// Routes
app.use("/api/url", urlRouter);
app.use("/user", userRouter)
app.use("/", staticRouter)

// Handle GET request for shortId
app.get("/:shortId", async (req, res) => {
  try {
    const shortId = req.params.shortId;
    const entry = await Url.findOneAndUpdate(
      { shortId },
      {
        $push: {
          visitHistory: {
            timeStamp: Date.now(),
          },
        },
      },
      { new: true } // Ensures the updated document is returned
    );

    if (!entry) {
      // If no entry is found, return a 404 error
      return res.status(404).send("Short URL not found");
    }

    res.redirect(entry.redirectUrl);
  } catch (error) {
    console.error("Error in /:shortId route:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Handle GET request for testing
app.get("/api/testing", async (req, res) => {
  try {
    const allUrls = await Url.find({});

    // Render the "home" view with some data if needed
    return res.render("home", { urls: allUrls });
  } catch (error) {
    console.error("Error in /api/testing route:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on Port:${PORT}`);
});
