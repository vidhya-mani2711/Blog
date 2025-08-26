import { useNavigate } from "react-router-dom"
import Nav from "../common/nav"
import { useEffect, useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import auth from "../config/firebase"
function Signup() {
    const navigate = useNavigate()
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [conformPass, setconformPass] = useState('')
    const [error,seterror] = useState()

    useEffect(()=>{
        auth.onAuthStateChanged(function(user)
    {
        if(user)
        {
            navigate('/home')
        }
    })
    })
    const handleSubmit = (e) =>
    {
        e.preventDefault()

        if (pass!==conformPass)
        {

            seterror('password donot match')
            return;
        }

        createUserWithEmailAndPassword(auth,user,pass).then(function(res){
            console.log(res)
        })
        .catch(function(err)
        {
            console.log(err,'error')

        })

        console.log(user,pass)
        navigate('/login')
    }

return (
    <div>
        <Nav />
        <div className="bg-gray-200 w-full h-screen relative">
            <form className="bg-white absolute top-20 w-10/12 h-5/6 mx-[100px] px-12 py-7">
                <h1 className="font-bold text-2xl py-7">Signup</h1>
                <label htmlFor="name"
                    className="">Email</label> <br />
                <input type="email"
                    onChange={(e) => setUser(e.target.value)}
                    placeholder="Enter UserName"
                    className="outline-none border my-3 text-sm p-3 border-gray-300 w-full mt-2" /> <br />

                <label htmlFor="password">Password</label> <br />
                <input type="password"
                    placeholder="Enter password"
                    onChange={(e) => setPass(e.target.value)}
                    className="outline-none border my-3 text-sm p-3 border-gray-300 w-full mt-2" /> <br />

                <label htmlFor="password"> Conform  Password</label> <br />
                <input type="password" placeholder="Enter password"
                    onChange={(e) => setconformPass(e.target.value)}
                    className="outline-none border my-3 text-sm p-3 border-gray-300 w-full mt-2" /> <br />

                <p
                    onClick={() => navigate("/login")}
                    className="text-blue-400 cursor-pointer">Already have an Account? login here</p> <br />

                <button onClick={handleSubmit}
                    className="bg-gradient-to-br from-blue-200 to-blue-500 text-white p-2 rounded-xl ">Register</button>
            </form>
        </div>
    </div>





)

}
export default Signup