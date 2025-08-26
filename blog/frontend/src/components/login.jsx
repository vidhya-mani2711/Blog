import { useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import Nav from "../common/nav"
import { useEffect, useState } from "react"
import auth from "../config/firebase"

function Login() {
    const navigate = useNavigate('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [err, settErr] = useState('')

    useEffect(()=>
        
    {
        window.scrollTo(0,0)
        auth.onAuthStateChanged(function(user)
    {
        if(user){
        navigate('/home')
        }
    })
    },[])

    const handleLogin = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, pass).then(function () {
            navigate('/home')
        })
            .catch(function () {
                settErr('Error, please SignIn Try again')
            })

    }
    return (
        <div>
            <Nav />
            <div className="bg-gray-200 w-full h-screen relative">
                <form className="bg-white absolute top-20 w-10/12 h-4/6 mx-[100px] px-12 py-7">
                    <h1 className="font-bold text-2xl py-7">Login</h1>
                    <label htmlFor="name"
                        className="">Email</label> <br />
                    <input type="email"
                        onChange={function (e) {
                            setEmail(e.target.value)
                        }
                        }
                        placeholder="Enter UserName"
                        className="outline-none border my-3 text-sm p-3 border-gray-300 w-full mt-2" /> <br />

                    <label htmlFor="password">Password</label> <br />
                    <input type="password" placeholder="Enter password"
                        onChange={function (e) {
                            setPass(e.target.value)
                        }
                        }
                        className="outline-none border  text-sm p-3 border-gray-300 w-full mt-2" /> <br />

                    <p className="text-red-400 ">
                        {err}</p>

                    <p
                    onClick={()=>{navigate("/signup")}}
                    className="text-blue-400 cursor-pointer">
                        New user? Register here</p> 


                    <button onClick={handleLogin}
                        className="bg-gradient-to-br from-blue-200 my-2 to-blue-500 text-white p-2 rounded-xl ">login</button>
                </form>
            </div>

        </div>





    )
}

export default Login