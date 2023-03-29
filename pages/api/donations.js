import fs from "fs";
import path from "path";

const donationsFilePath = path.join(process.cwd(), "donations.json");

export default function handler(req, res) {
  // Read the existing donations from the JSON file
  let existingDonations = [];
  try {
    existingDonations = JSON.parse(fs.readFileSync(donationsFilePath));
  } catch (error) {
    console.error("Error reading donations file:", error);
    return res.status(500).json({ error: "Server error" });
  }

  // Return the existing donations as the response
  res.status(200).json({ donations: existingDonations });
}
