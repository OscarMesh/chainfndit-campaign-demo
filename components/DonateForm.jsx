import React, { useState } from "react";

const DonateForm = () => {
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
    console.log(donationAmount, currency, name, email, phone, isAnonymous);
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
          <button
            type="submit"
            className="bg-[#104901] text-white p-2 rounded-md"
          >
            Donate
          </button>
        </div>
      </form>
    </>
  );
};

export default DonateForm;
