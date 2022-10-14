import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="rightBlock">
      <h1>Autre articles qui vous s'intéresse</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="img" />
          <h2>{post.title}</h2>
          <Link className="link" to={`/post/${post.id}`}>
            <button className="btn">Lisez l'article</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;
