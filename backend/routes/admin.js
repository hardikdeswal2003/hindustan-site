const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

const router = express.Router();

// REGISTER ADMIN (use only once then disable if you want)
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    const exists = await Admin.findOne({ username });
    if (exists) return res.status(400).json({ message: "Admin already exists" });

    const hashedPass = await bcrypt.hash(password, 10);

    const admin = new Admin({
      username,
      password: hashedPass
    });

    await admin.save();
    res.json({ message: "Admin created successfully" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(400).json({ message: "Admin not found" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign(
      { id: admin._id },
      process.env.JWT_SECRET,
      { expiresIn: "2d" }
    );

    res.json({ message: "Login successful", token });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
