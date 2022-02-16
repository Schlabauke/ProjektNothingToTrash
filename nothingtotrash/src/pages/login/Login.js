import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginFetch = (e) => {
        e.preventDefault();
        const User = {
            email,
            password,
        };
        fetch("http://localhost:3001/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(User),
        }).then((res) => {
            console.log(res);
            if (res.ok) {
                window.location.replace("/login");
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
