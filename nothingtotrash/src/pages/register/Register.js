const Register = () => {
    return (
        <section className="register-Sec">
            <div>
                <h2>Registriere Dich & nimm Teil</h2>
                <article>
                    <h2>Mit Email registrieren</h2>
                    <form>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                        />
                        <input type="email" name="email" placeholder="Email" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Passwort"
                        />
                        <input
                            className="btn-primary"
                            type="submit"
                            value="Registrieren"
                        />
                    </form>
                </article>
            </div>
        </section>
    );
};

export default Register;
