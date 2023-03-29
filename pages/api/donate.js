import fs from "fs";
import path from "path";

const donationsFilePath = path.join(process.cwd(), "donations.json");

export default function handler(req, res) {
  const { amount, currency, name, email, paymentId, isAnonymous } = req.body;

  // Validate the input data
  if (!amount || !currency || !name || !email || !paymentId) {
    return res.status(400).json({ error: "Invalid donation data" });
  }

  // Create a new donation object
  const newDonation = {
    id: Math.random().toString(36).substr(2, 9),
    amount: parseFloat(amount),
    currency: currency,
    name: name,
    email: email,
    date: new Date().toISOString(),
    paymentId: paymentId,
    isAnonymous: isAnonymous,
  };

  // Read the existing donations from the JSON file
  let existingDonations = [];
  try {
    existingDonations = JSON.parse(fs.readFileSync(donationsFilePath));
  } catch (error) {
    console.error("Error reading donations file:", error);
    return res.status(500).json({ error: "Server error" });
  }

  // Add the new donation to the existing donations array
  existingDonations.push(newDonation);

  // Write the updated donations array to the JSON file
  try {
    fs.writeFileSync(donationsFilePath, JSON.stringify(existingDonations));
  } catch (error) {
    console.error("Error writing donations file:", error);
    return res.status(500).json({ error: "Server error" });
  }

  // Return the new donation object as the response
  res.status(201).json({ donation: newDonation });
}
