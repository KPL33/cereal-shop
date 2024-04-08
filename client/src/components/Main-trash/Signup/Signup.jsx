import "./signup.css";

const SignUp = () => {
  return (
    <form name="contact" method="post" className="Login-form">
      <h2 className="log-greeting">
        Welcome to Cereal! Please register to start.
      </h2>

      <label>
        Email: <input type="email" name="email" />
      </label>

      <label>
        Password: <input name="message"></input>
      </label>

      <button className="submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default SignUp;
