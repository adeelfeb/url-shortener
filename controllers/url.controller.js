const Url = require("../models/url.model");
// const { nanoid } = require("nanoid");
const { nanoid } = require("nanoid"); // Use consistent syntax for CommonJS

const handlePostUrl = async (req, res) => {
  const body = req.body;

  // Validate input
  if (!body.url) {
    return res.status(400).json({ error: "URL is required" });
  }

  const shortId = nanoid(8);

  try {
    // Create a new shortened URL entry in the database
    await Url.create({
      shortId: shortId,
      redirectUrl: body.url,
      visitHistory: [],
      createdBy: req.user._id
    });
    const allUrls = await Url.find({})
    
    // Send success response
    return res.render("home", {id: shortId, urls: allUrls })
    
  } catch (err) {
    console.error("Error creating URL:", err.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};





const handleGetUrl = async (req, res) => {
  
  

  try {
    const allUrls = await Url.find({})
    
    return res.render("home", {urls: allUrls })
    
  } catch (err) {
    console.error("Error creating URL:", err.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const handleGetAnalytics = async (req, res) => {
    const shortId = req.params.shortId;
  
    try {
      // Find the URL document by `shortId`
      const result = await Url.findOne({ shortId });
  
      if (!result) {
        return res.status(404).json({ error: "URL not found" });
      }
  
      // Prepare the analytics response
      const totalClicks = result.visitHistory.length;
      const analytics = result.visitHistory.map((entry) => ({
        timeStamp: new Date(entry.timeStamp), // Convert timestamp to readable format
      }));
  
      return res.json({ message: "Successful", totalClicks, analytics });
    } catch (err) {
      console.error("Error fetching analytics:", err.message);
      return res.status(500).json({ error: "Internal server error" });
    }
  };
  

module.exports = {
  handleGetUrl,
  handleGetAnalytics,
  handlePostUrl
};
