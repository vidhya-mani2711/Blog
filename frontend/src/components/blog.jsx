import Home from "../common/nav"
import Footer from "../common/footer"
import { useEffect, useState } from "react"
import axios from "axios"
import auth from "../config/firebase"
function Blog() {
    const [blogs, setBlogs] = useState([])
    const [newTitle, setNewTitle] = useState('')
    const [newContent, setNewContent] = useState('')
    const [admin, setAdmin] = useState(false)


    useEffect(() => {
        axios.get('http://localhost:5000/api/blogs')
            .then((res) => setBlogs(res.data))

            .catch((err) => console.log("Error fetching blogs", err));

        auth.onAuthStateChanged(function (user) {
            if (user) {
                // console.log('Loged in')
                if (user.uid === '3MS2VIQLlZho5rmHxBAcJ5Ijhsj2') {
                    setAdmin(true)
                }
                else {
                    setAdmin(false)
                }
            }
            else {
                console.log('loged out')
            }
        })

    }, [])

    const handleLike = async (blog_id) => {
        try {
            const response = await axios.patch(`http://localhost:5000/api/blogs/like/${blog_id}`);
            // After successfully updating the likes count in the backend, fetch the updated list of blogs
            if (response.status === 200) {
                axios.get("http://localhost:5000/api/blogs").then((res) => {
                    console.log(res.data)
                    setBlogs(res.data)
                }).catch(() => {
                    console.log("Error fetching data")
                })
            }
        } catch (error) {
            console.error('Error liking the blog post:', error);
        }
    };

    const handleNewBlogSubmit = (event) => {
        event.preventDefault(); // Prevent form from refreshing the page
        const today = new Date();
        const date = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });


        const likes = 0
        axios.post("http://localhost:5000/api/blogs", { title: newTitle, date, content: newContent, likes }).then((res) => {
            console.log(res.data)

            axios.get("http://localhost:5000/api/blogs").then((res) => {
                console.log(res.data)
                setBlogs(res.data)
            }).catch(() => {
                console.log("Error fetching data")
            })

        });

        setNewTitle('');
        setNewContent('');
    };

    const handleRemove = async (blog_id) => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/blogs/${blog_id}`)
            if (response.status === 200) {
                setBlogs(blogs.filter(blog => blog._id !== blog_id))

            }
        }
        catch (err) {
            console.log("remove successfully", err)
        }

    }


    return (
        <div>
            <Home />

            {/* {blog input forms} */}
            <div>
                <h1 className="text-3xl text-center font-bold">Latest {" "} <span className="text-red-500"> Blogs</span></h1>
                {admin ? <div className="mt-20">

                    <input type="text"
                        placeholder="Blog Title"
                        onChange={(e) => { setNewTitle(e.target.value) }}
                        value={newTitle}
                        className="w-9/12 outline-none border border-gray-400  mx-32 text-sm p-2 rounded-lg  my-3" />

                    <textarea name="content"
                        id="content"
                        placeholder="Blog content"
                        onChange={(e) => { setNewContent(e.target.value) }}
                        value={newContent}
                        className="w-9/12 outline-none border border-gray-400 mx-32 text-sm p-2 rounded-lg  my-3"></textarea>

                    <button onClick={handleNewBlogSubmit}
                        className="w-9/12 border bg-gradient-to-br from-red-400 to-red-700 mx-32 py-3 text-center text-white">Add Blog</button>
                </div> : ""}

                <div className="grid grid-cols-2 mx-36">
                    {blogs.map((blog, index) => (
                        <div key={index} className=" blogList bg-gray-200 w-[400px] h-[200px] shadow-sm rounded-lg shadow-black px-6 py-8 my-10">
                            <h1 className="font-bold text-xl">{blog.title}</h1>
                            <p className="text-sm text-gray-700 py-2">{blog.date}</p>
                            <p className="text-lg text-gray-900 pb-2">{blog.content}</p>
                            <span className="text-blue-500 cursor-pointer" onClick={() => handleLike(blog._id)}>Like</span>
                            <span className="ml-2">{blog.likes} Likes</span>
                            <div>
                                <button onClick={() => handleRemove(blog._id)}

                                    className="bg-gray-300 p-1 my-2 rounded-lg shadow-sm shadow-black">remove</button>
                            </div>
                        </div>
                    )
                    )}
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default Blog