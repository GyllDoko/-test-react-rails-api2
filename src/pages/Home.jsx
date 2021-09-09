import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Blog_Form from "../components/Blog_Form";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/blogs").then((res) => {
      setBlogs(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div className="App">
      <h1>Blogs</h1>

      {blogs.map((item, index) => (
        <Link
          to={{
            pathname: "/details",
            data: item,
          }}
          key={index}
        >
          <p>{item.name}</p>
        </Link>
      ))}

      <Blog_Form />
    </div>
  );
};
export default Home;
