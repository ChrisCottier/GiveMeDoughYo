import React from "react";

const Login = (props) => {
  const { showLogin, setShowLogin } = props;
  let displayType;
  if (!showLogin) {
    displayType = "none";
  } else {
    displayType = "block";
  }

  return (
    <div className="modal" display={displayType}>
      <div
        className="modal-background"
        onClick={() => setShowLogin(false)}
      ></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Welcome back!</p>
        </header>
        <section className="modal-card-body">
          <div>Log in to continue.</div>
          <form>
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  placeholder="Email input"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  classname="input"
                  type="password"
                  placeholder="password"
                />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link" type="submit">
                  Log In
                </button>
              </div>
              <div className="control">
                <button className="button is-primary">Demo User</button>
              </div>
              <div className="control">
                <button
                  className="button is-link is-light"
                  onClick={() => setShowLogin(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;
