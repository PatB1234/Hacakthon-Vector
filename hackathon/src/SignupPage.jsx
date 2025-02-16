function SignUpPage() {
    return(
        <div className="css-bigbox">
            <form action="">
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" name="username"/><br/><br/>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password"/><br/><br/>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email"/><br/><br/>
            <input type="submit" value="Submit"/>
        </form>
        </div>

    );
}

export default SignUpPage;
