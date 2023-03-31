import { donations } from "../../donations";

export default function handler(req, res) {
  let existingDonations = donations;

  const { currency } = req.query;
  if (currency) {
    existingDonations = existingDonations.filter(
      (donation) => donation.currency === currency.toUpperCase()
    );
  }

  // Return the existing donations as the response
  res.status(200).json({ donations: existingDonations });
}
