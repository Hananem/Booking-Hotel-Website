import "./Sign.css"

const Sign = () => {
    return(
        <section className="register">
            <article>
                <div className="col-1">
                    <h2>Sign in</h2>
                    <p>register and enjoy the service</p>
                    <form>
                        <input placeholder="username"></input>
                        <input  placeholder="password"></input>
                        <input  placeholder="confirm password"></input>
                        <input  placeholder="mobile number"></input>
                    </form>
                    <button className="btn">Sign in</button>
                </div>
                <div className="col-2">
                    <img src="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="sign-img"/>
                </div>
            </article>
        </section>
    )
}

export default Sign