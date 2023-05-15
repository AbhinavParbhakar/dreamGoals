export default async function Login() {
    return(
    <>
    <form action="./api/auth/signin" method="post" >
        <input type="text" name="username"placeholder="Jane Doe" id="username"required/>
        <label htmlFor="username">Enter username</label>
        <input type="email" name="email"placeholder="Jane.Doe@gmail.com" id="email"required/>
        <label htmlFor="email">Enter email</label>
        <input type="password" name="password" id="password" required/>
        <label htmlFor="password">Enter password</label>
        <input type="submit"/>
    </form>
    </>
    )
}