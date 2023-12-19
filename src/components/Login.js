import "./Login.css"

const  Login =() => {
    return(
     <section className="login">
        <article>
            <h2>Login</h2>
            <p>Welcome back</p>
            <form>
                <input placeholder="username"></input>
                <input placeholder="password"></input>
                <button className="btn">Log in</button>
            </form>
        </article>
     </section>
    )
}

export default Login