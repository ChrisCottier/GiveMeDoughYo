import React from "react";

const EmailPasswordInputs = (props) => {
  const { email, setEmail, password, setPassword } = props;

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input"
            type="email"
            placeholder="Email input"
            name="email"
            value={email}
            onChange={handleEmail}
            required
          />
          <span className="icon is-small is-left">
            <i className="fa fa-envelope"></i>
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input
            className="input"
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={handlePassword}
            required
          />
        </div>
      </div>
    </>
  );
};

export default EmailPasswordInputs;
