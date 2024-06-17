import React, { useState } from 'react';

const EmailPassForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your form submission logic here

    // For example, you can log the form data
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Terms Checked:', termsChecked);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          aria-describedby="email-help"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <small id="email-help">It's safe with us. We hate spam!</small>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="terms">
          <input
            type="checkbox"
            id="terms"
            checked={termsChecked}
            onChange={() => setTermsChecked(!termsChecked)}
          />
          <span>
            I accept the <a href="https://www.example.com"> terms and conditions</a>
          </span>
        </label>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default EmailPassForm;
