import React from 'react'

const Login = ({handleLogin}) => {

const [email, setEmail] = React.useState("");
const [password, setPassword] = React.useState("");

      const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    } 

       
return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="bg-gray-800 shadow-lg rounded-lg p-8 border border-purple-600 w-96">
            <h2 className="text-2xl font-bold text-purple-400 mb-6 text-center">Login</h2>
            <form
            onSubmit={(e)=>{
                submitHandler(e)


            }}
            className="flex flex-col gap-4">
                <input
                required
                value={email}
                       onChange={(e)=>{
                        setEmail(e.target.value); // Update email state
                    }}
                    className="p-3 px-5  text-lg text-gray-200 outline-none bg-black border border-purple-600 rounded   "
                    type="email"
                    placeholder="Enter your email"
                />
                <input
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value); // Update password state
                    }}
                    className="p-3 px-5   text-lg text-gray-200 outline-none bg-black border border-purple-600 rounded "
                    type="password"
                    placeholder="Enter your password"
                />
                <button
                    className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-4 py-2 rounded mt-2 transition"
                    type="submit"
                >
                    Login
                </button>
            </form>
        </div>
    </div>
)
}

export default Login