import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";
const SignUp = () => {
    return(
        <>
            <div>
                <div className="h-screen w-screen flex flex-col justify-center items-center space-y-10">
                    <div>
                        <h1 className="text-5xl font-semibold text-gray-600 md:text-6xl md:mb-10">Sign Up</h1>
                    </div>
                    <form className="flex flex-col space-y-5 overflow-hidden">
                        <input className="w-64 bg-gray-100 font-medium placeholder:text-sm  focus:outline-none p-2 md:w-80" type="text" placeholder="Name" />
                        <input className="w-64 bg-gray-100 font-medium placeholder:text-sm  focus:outline-none p-2 md:w-80 " type="email" placeholder="Email" />
                        <input className="w-64 bg-gray-100 font-medium placeholder:text-sm  focus:outline-none p-2 md:w-80" type="password" placeholder="Password" />
                        <input className="text-white rounded-sm font-semibold cursor-pointer p-2 bg-blue-500 active:bg-blue-600 hover:bg-blue-400" type="submit" value={"Sign Up"} />
                        <p className="text-sm font-medium text-center">Already have an account? <a className="text-blue-500" href="">Sign In</a></p>
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

export default SignUp;