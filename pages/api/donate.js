import { donations } from "../../donations";

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

  // Add the new donation to the existing donations array
  donations.push(newDonation);

  // Return the new donation object as the response
  res.status(201).json({ donation: newDonation });
}
