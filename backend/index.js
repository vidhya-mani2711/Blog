const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/blog')
    .then(
        function () {
            console.log('db connect')
        }

    )
    .catch(function (err) {
        console.log('failed', err)
    })

const BlogSchema = new mongoose.Schema(
    {
        title: String,
        content: String,
        date: String,
        likes: Number

    }

)

// console.log(BlogSchema)


const BlogList = mongoose.model('BlogList', BlogSchema, 'blogList')
console.log(BlogList)

app.get('/api/blogs', async (req, res) => {
    try {
        const blogs = await BlogList.find()
        res.send(blogs)
    }
    catch (err) {
        console.log(err)
        res.status(500).send('Internal server error')
    }
})


app.patch('/api/blogs/like/:id', async (req, res) => {
    try {
        const blog = await BlogList.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        // Increment the likes of the blog post
        const updatedBlog = await BlogList.findByIdAndUpdate(
            req.params.id,
            { $inc: { likes: 1 } },
            { new: true } // This option returns the modified document rather than the original
        );

        res.json(updatedBlog);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.delete('/api/blogs/:id', async (req, res) => {
    try {
        const remove = await BlogList.findByIdAndDelete(req.params.id)

        if (!remove) {
            return res.status(404).json({ message: "blog not found" })
        }
        res.status(200).json({ message: 'Blog deleted successfully' });
    }

    catch (err) {
        console.log("Blog not delete")

    }
})


app.post('/api/blogs', async (req, res) => {

    const blog = new BlogList({
        title: req.body.title,
        content: req.body.content,
        date: req.body.date,
        likes: req.body.likes
    });

    try {
        const newBlog = await blog.save();
        res.status(201).json(newBlog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.listen(5000, function () {
    console.log('server startedd...')
})