import "./login.css";

const Login = () => {
    return (
        <form name="login" method="post" className="login-form">
            
            <h2 className="log-greeting">Please log-in to view your cart and make additional orders.</h2>

            <label>
                Email: <input type="email" name="email" />
            </label>

            <label>
                Password: <input name="message"></input>
            </label>

        

            <button className = "submit" type="submit">Submit</button>
        </form>
    );
};

export default Login;
