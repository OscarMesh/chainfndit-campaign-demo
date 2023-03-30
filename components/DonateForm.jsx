import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { PaystackButton } from "react-paystack";
import toast from "react-hot-toast";

const DonateForm = () => {
  const router = useRouter();
  const publicKey = "pk_test_6f0af7b8797769a25e651a35d69fd6831bde223f";

  const [donationAmount, setDonationAmount] = useState(0);
  const [currency, setCurrency] = useState("USD");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const handleAmountChange = (event) => {
    setDonationAmount(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleAnonymousChange = (event) => {
    setIsAnonymous(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // paystack component props
  const componentProps = {
    email: email,
    amount: donationAmount * 100,
    metadata: {
      name,
      phone,
      isAnonymous,
    },
    publicKey,
    text: "Donate with Paystack",
    onSuccess: (response) => {
      const donation = {
        amount: donationAmount,
        currency,
        name,
        email,
        phone,
        isAnonymous,
        paymentId: response.reference,
      };
      try {
        const response = axios.post("/api/donate", { ...donation });
        console.log(response);
        router.push("/campaign");
      } catch (error) {
        alert("An error occured");
        console.log(error);
      }
    },
    onClose: () => console.log("closed"),
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              required
              name="amount"
              id="amount"
              value={donationAmount}
              onChange={handleAmountChange}
              className="border rounded-md p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="currency">Currency</label>
            <select
              name="currency"
              id="currency"
              required
              value={currency}
              onChange={handleCurrencyChange}
              className="border rounded-md p-2"
            >
              <option value="USD">USD</option>
              <option value="NGN">NGN</option>
              <option value="GBP">GBP</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              required
              id="name"
              value={name}
              onChange={handleNameChange}
              className="border rounded-md p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              required
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="border rounded-md p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              name="phone"
              required
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
              className="border rounded-md p-2"
            />
          </div>
          <div className="flex flex-row items-center  gap-2">
            <label htmlFor="anonymous">Anonymous</label>
            <input
              type="checkbox"
              name="anonymous"
              id="anonymous"
              checked={isAnonymous}
              onChange={handleAnonymousChange}
              className="border rounded-md "
            />
          </div>
          {currency === "NGN" ? (
            <PaystackButton
              {...componentProps}
              className="bg-[#104901] text-white p-2 rounded-md"
            />
          ) : (
            <button
              type="submit"
              className="bg-[#104901] text-white p-2 rounded-md"
            >
              Donate with stripe
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default DonateForm;
