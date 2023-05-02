import { BlogItem } from '../components/BlogItem'
import './styles/Home.scss'
import { useEffect, useState } from "react"

export const Home = () => {

  const [blogs, setBlogs] = useState([0])

  useEffect(() => {
    setBlogs([1, 2, 3, 4]);
  }, [])
  

  return (
    <div className="Home">
      <div className="Home__Box">
        <div className="Home__Box__Title">
          <h2 className="fc-primary">Blogs</h2>
        </div>
        <div className="Home__Box__Blogs">
          {
            blogs.map( (blog, index) => <BlogItem key={index} blog={blog}/> )
          }
        </div>
      </div>
    </div>
  )
}
