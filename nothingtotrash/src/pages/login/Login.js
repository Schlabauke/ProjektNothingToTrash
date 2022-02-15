const Login = () => {
    return (
        <section className="login-Sec">
            <div>
                <h2>Registriere Dich & nimm Teil</h2>
                <article>
                    <h2>Mit Email anmelden</h2>
                    <form>
                        <input type="email" name="email" placeholder="Email" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Passwort"
                        />
                        <input
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
