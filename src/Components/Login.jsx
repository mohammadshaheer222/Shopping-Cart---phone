import { Link } from "react-router-dom";
import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";
const Login = () => {
    return(
        <>
            <div>
                <div className="h-screen w-screen flex flex-col justify-center items-center space-y-10 ">
                    <div>
                        <h1 className="text-5xl font-semibold text-gray-600 ">Login</h1>
                    </div>
                    <form className="flex flex-col space-y-5 overflow-hidden">
                        <input className="w-64 input-field md:w-80" type="email" placeholder="Email" />
                        <input className="w-64 input-field md:w-80" type="password" placeholder="Password" />
                        <a className="text-blue-500 text-xs text-end font-medium underline hover:text-blue-300 active:text-blue-600" href="">Forgot Password?</a>
                        <input className="btn btn-primary" type="submit" value={"Login"} />
                        <p className="text-sm font-medium text-center text-gray-500">Don't have an account? <Link className="text-blue-500" to="/signup
                    ">Sign Up</Link></p>
                    </form>
                    <div className="text-xs text-gray-500 md:text-sm">
                        <p className="line-break">or Login with</p>
                    </div>
                    <div className="grid grid-cols-3 items-center gap-1 justify-between">
                        <div className="logSign-icon">
                            <FaGoogle />
                        </div>
                        <div className="logSign-icon">
                            <FaApple />
                        </div>
                        <div className="logSign-icon">
                            <FaFacebookF />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;