const Login = () => {
    return(
        <section className="flex  mx-auto max-w-sm my-24 items-center justify-center bg-[#ffffff] shadow-2xl rounded-md border border-light/30 ">
        <div className="p-8 ">
          <h1 className=" text-2xl text-dark font-semibold ">Login</h1>
          <h2 className="text-sm text-light py-2">
            Enter your email below to login to your account
          </h2>
  
          <div className="pb-2">
            <label className="text-sm font-medium text-dark" htmlFor="Email">
              Email
            </label>
            <input
              type="text"
              className="mx-auto px-2.5 py-2.5 w-full border border-light rounded-md my-2 mb-3"
              placeholder="m@example.com"
            />
            <div className="flex justify-between ">
              <label className="text-sm font-medium text-dark" htmlFor="Password">
                Password
              </label>{" "}
              <a
                className="ml-auto text-dark inline-block text-sm underline"
                href=""
              >
                Forgot your password?
              </a>
            </div>
            <input
              type="password"
              className="mx-auto px-2.5 py-2.5 w-full border border-light rounded-md my-2"
              placeholder=""
            />
          </div>
  
          <button className="bg-primary mx-auto my-4 flex items-center justify-center text-[#ffffff] text-md rounded-md w-full py-2.5">
            Login
          </button>
          <button className=" mx-auto my-4 flex items-center justify-center text-dark border border-light text-md rounded-md w-full py-2.5">
            Login with Google
          </button>
        </div>
      </section>
    )
}

export default Login