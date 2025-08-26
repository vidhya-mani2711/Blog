import Nav from "../common/nav"
import html from "../assets/html.png"
import css from "../assets/css.jpg"
import js from "../assets/js.jpg"
import node from "../assets/node.png"
import db from "../assets/db.jpg"
import actoImg from "../assets/p1.jpg"
import blogImg from "../assets/blogImage.png"
import Footer from "../common/footer"
import { useNavigate } from "react-router-dom"
function Home() {
    const navigate = useNavigate()
    return (
        <div>
            <Nav />
            <div className="m-10">
                <div className="text-4xl font-bold py-2">
                    <h1 >Hy! I Am </h1>
                    <h1 className="text-red-500 py-2">Kani</h1>
                </div>

                <p className="w-6/12 py-1">I can create stunning website for your company,Do  check my works.
                    I won't disappointed you.Ttry me for 7 days before you decide anything</p>
                <button className="bg-red-300 p-1 outline-none my-2 rounded-lg shadow-sm shadow-black" >Hire me</button>



                <div className="flex justify-around items-center">
                    <img src={html} alt="html" className="w-32 h-36" />
                    <img src={css} alt="css" className="w-20 h-20" />
                    <img src={js} alt="js" className="w-14 h-16" />
                    <img src={db} alt="db" className="w-32 h-20" />
                    <img src={node} alt="node" className="w-32 h-28" />
                </div>

                <div className="flex flex-row justify-between w-full  px-32">
                    <div className="flex-col">
                        <div className="border border-l-4 border-r-4 border-b-4 border-purple-400
                         border-t-white rounded-b-lg ">

                            <div className="bg-purple-500 px-20 text-center py-4 my-7 mb-2 mx-4 rounded-full text-white ">6</div>
                            <p className="pb-4 font-semibold text-center">Projects Completed</p>


                        </div>

                        <div className=" mt-5 border border-l-4 border-r-4 border-b-4 border-green-400
                         border-t-white rounded-b-lg ">
                            <div className="bg-green-500 text-center py-4 my-7 mb-2 mx-4 rounded-full text-white ">6</div>
                            <p className="pb-4 font-semibold text-center">Months of Experience</p>

                        </div>
                    </div>

                    <div >
                        <div className="text-6xl font-bold py-2">
                            <h1 >My Awsome  </h1>
                            <h1 className="text-red-500 py-2">Services</h1>
                        </div>

                        <p className='my-2'>I have attahed my Resume here for your Reference</p>
                        <button className="bg-red-300 p-1 outline-none my-2 text-lg rounded-lg shadow-sm shadow-black" >Download CV</button>

                    </div>
                </div>

                <div>
                    <h1 className="text-5xl  font-bold pt-7 text-center" > CheckOut My Live {" "}
                        <span className="text-red-600">Projects</span> Here</h1>

                    <div className="mx-auto w-[360px] h-[360px] py-10">
                        <img src={actoImg} alt="actoImg" />
                    </div>
                </div>

                <div className="flex  justify-around py-20">
                    <img className=" w-[300px] h-[300px]" src={blogImg} alt="blogImg" />

                    <div >
                        <div className="text-4xl font-bold py-2">
                            <h1 >I like to Write </h1>
                            <h1 className="text-red-500 py-2 text-5xl">Blogs about tetch</h1>
                        </div>

                        <p className=" py-1">You can know better about me by reading  my blogs. I share my expertise here</p>
                        <button
                       onClick={() => navigate("/blog")}
                        className="bg-red-300 p-1 outline-none my-2 rounded-lg shadow-sm shadow-black" >Read my Blogs</button>
                    </div>
                </div>
            </div>

             <Footer/>
        </div>
    )
}

export default Home