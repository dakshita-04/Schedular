import React, { useState } from "react";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";

const VerifyEmail = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const sendVerificationLink = (email) => {
    const auth = getAuth();

    const actionCodeSettings = {
      url: "https://schedular.com",
      handleCodeInApp: true,
    };

    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        // Verification email sent.
        // You can show a success message to the user
        console.log("Verification email sent.");
      })
      .catch((error) => {
        // Error occurred. Show an error message to the user
        console.error(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendVerificationLink(email);
  };

  return (
    <div>
      <h1>Verify Email</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <button type="submit">Send Verification Link</button>
      </form>
    </div>
  );
};

export default VerifyEmail;
