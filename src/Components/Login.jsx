import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";
const Login = () => {
    return(
        <>
            <div>
                <div className="h-screen w-screen flex flex-col justify-center items-center space-y-10 ">
                    <div>
                        <h1 className="text-5xl font-semibold text-gray-600 md:text-6xl md:mb-10">Login</h1>
                    </div>
                    <form className="flex flex-col space-y-5 overflow-hidden">
                        <input className="w-64 bg-gray-100 font-medium placeholder:text-sm  focus:outline-none p-2 md:w-80" type="email" placeholder="Email" />
                        <input className="w-64 bg-gray-100 font-medium placeholder:text-sm  focus:outline-none p-2 md:w-80" type="password" placeholder="Password" />
                        <a className="text-blue-500 text-xs text-end font-medium underline hover:text-blue-300 active:text-blue-600" href="">Forgot Password?</a>
                        <input className="text-white rounded-sm font-semibold cursor-pointer p-2 bg-blue-500 active:bg-blue-600 hover:bg-blue-400" type="submit" value={"Login"} />
                        
                    </form>
                    <div className="text-xs text-gray-500">
                        <p className="grid grid-cols-3 items-center gap-2 before:h-[2px] before:bg-gray-200 before:block after:h-[2px] after:bg-gray-200 after:block ">or SignUp with</p>
                    </div>
                    <div className="max-w-md grid grid-cols-3 items-center gap-1 justify-between">
                        <div className="flex justify-center w-20 p-3 bg-gray-200 cursor-pointer">
                            <FaGoogle />
                        </div>
                        <div className="flex justify-center w-20 p-3 bg-gray-200 cursor-pointer">
                            <FaApple />
                        </div>
                        <div className="flex justify-center w-20 p-3 bg-gray-200 cursor-pointer">
                            <FaFacebookF />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;