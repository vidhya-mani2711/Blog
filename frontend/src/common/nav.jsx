import { onAuthStateChanged, signOut } from "firebase/auth"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import auth from "../config/firebase"

function Nav() {
    const navigate = useNavigate()
    const [log, setLog] = useState(false)

    useEffect(() => {
        auth.onAuthStateChanged(function (user) {
            if (user) {

                setLog(true)
                console.log('user logged in')
            }
            else {
                setLog(false)
                console.log('user Loged out')
            }
        })

    }, [])

    function logOut()
    {
        signOut(auth)
    }

    return (
        <div className="flex justify-between py-4">
            <div>
                <h1 className="text-xl font-serif" style={{ fontWeight: "bold" }}>personal</h1>
            </div>

            <div >
                <ul className="flex justify-evenly gap-7 font-serif items-center">
                    <Link to={"/home"} >Home</Link>
                    <Link to={"/blog"}>Blog</Link>
                    <Link to={"/about"}>About</Link>
                    {log ? 
                    <Link onClick={logOut} className="bg-gradient-to-br from-red-100 rounded-md shadow-sm shadow-black to-red-600 p-1 hover:rounded-md" >LogOut</Link>:
                    <Link className="bg-gradient-to-br from-red-100 rounded-md shadow-sm shadow-black to-red-600 p-1 hover:rounded-md" to={"/login"}>Login</Link> }


                </ul>
            </div>

        </div>
    )

}

export default Nav