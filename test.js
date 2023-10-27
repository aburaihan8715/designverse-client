// const key = Date.now().toString();
// console.log(key);

const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");

// Assuming you have a MongoDB connection URL
const mongoUrl = "mongodb://localhost:27017/yourdb";

router.post("/updateClass", async (req, res) => {
  const { ids } = req.body; // Assuming you send the IDs from your React component

  try {
    const client = new MongoClient(mongoUrl, { useUnifiedTopology: true });
    await client.connect();

    const db = client.db();

    for (const id of ids) {
      const collection = db.collection("classes");
      const result = await collection.findOneAndUpdate(
        { _id: id, seats: { $gt: 0 } }, // Ensure there are available seats
        { $inc: { enrolledStudent: 1, seats: -1 } },
      );

      if (!result.value) {
        // Handle the case where the class is full or doesn't exist
        return res
          .status(404)
          .json({ message: "Class not found or no seats available" });
      }
    }

    client.close();
    res.status(200).json({ message: "Class updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
