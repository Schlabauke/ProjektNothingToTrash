import axios from "axios";
import { useState, useContext } from "react";
import { newToken } from "../../App";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { token, setToken } = useContext(newToken);

    const loginFetch = (e) => {
        e.preventDefault();
        const user = {
            email,
            password,
        };
        axios
            .post("http://localhost:3001/api/users/login", {
                email: user.email,
                password: user.password,
            })
            .then((res) => {
                if (res.data.token) {
                    setToken(res.data.token);
                    console.log(res);
                } else {
                    console.log(res);
                    console.log("kacke");
                }
            });
    };

    return (
        <section className="login-Sec">
            <div>
                <h2>Registriere Dich & nimm Teil</h2>
                <article>
                    <h2>Mit Email anmelden</h2>
                    <form>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            name="password"
                            placeholder="Passwort"
                        />
                        <input
                            onClick={loginFetch}
                            className="btn-primary"
                            type="submit"
                            value="Login"
                        />
                    </form>
                </article>
            </div>
        </section>
    );
};

export default Login;
