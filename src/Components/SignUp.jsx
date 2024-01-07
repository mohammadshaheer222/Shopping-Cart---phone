import { Link} from "react-router-dom";
import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";
const SignUp = () => {
    return(
        <>
            <div>
                <div className="h-screen w-screen flex flex-col justify-center items-center space-y-10">
                    <div>
                        <h1 className="text-5xl font-semibold text-gray-600 md:mt-10">Sign Up</h1>
                    </div>
                    <form className="flex flex-col space-y-5 overflow-hidden">
                        <input className="w-64 input-field md:w-80" type="text" placeholder="Name" />
                        <input className="w-64 input-field md:w-80 " type="email" placeholder="Email" />
                        <input className="w-64 input-field md:w-80" type="password" placeholder="Password" />
                        <input className="btn btn-primary" type="submit" value={"Sign Up"} />
                        <p className="text-sm font-medium text-center text-gray-500">Already have an account? <Link className="text-blue-500" to="/login">Login</Link></p>
                    </form>
                    
                    <div className="text-xs text-gray-500 md:text-sm">
                        <p className="line-break">or SignUp with</p>
                    </div>
                    <div className="max-w-md grid grid-cols-3 items-center gap-1 justify-between">
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

export default SignUp;