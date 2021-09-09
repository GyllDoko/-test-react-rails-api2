import axios from "axios";
import React, { useState } from "react";

export default function Blog_Form() {
  const [blog_name, setName] = useState("");
  const [blog_content, setContent] = useState("");

  const onFormSubit = () => {
    let data = {
      name: blog_name,
      content: blog_content,
    };
    axios.post("http://localhost:3000/blogs/", data).then((res) => {
      console.log(res);
    });
  };
  return (
    <form onSubmit={() => onFormSubit()}>
      <label htmlFor="">Name :</label>
      <input
        type="text"
        placeholder="name.."
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label htmlFor="">Content :</label>
      <input
        type="text"
        placeholder="content.."
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Crer un blog</button>
    </form>
  );
}
