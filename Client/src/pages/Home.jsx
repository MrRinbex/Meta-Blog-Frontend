import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts${cat}`);
        setPosts(res.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [cat]);
  // const testPost = [
  //   {
  //     id: 1,
  //     title: "title1",
  //     description: "descpretion exemp",
  //     img: "https://www.fnordware.com/superpng/pnggrad16rgb.png",
  //   },
  //   {
  //     id: 2,
  //     title: "title2",
  //     description: "descpretion exemp",
  //     img: "https://www.fnordware.com/superpng/pnggrad16rgb.png",
  //   },
  //   {
  //     id: 3,
  //     title: "title3",
  //     description: "descpretion exemp",
  //     img: "https://www.fnordware.com/superpng/pnggrad16rgb.png",
  //   },
  //   {
  //     id: 4,
  //     title: "title4",
  //     description: "descpretion exemp",
  //     img: "https://www.fnordware.com/superpng/pnggrad16rgb.png",
  //   },
  // ];
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="img" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.description}</p>
              <Link className="link" to={`/post/${post.id}`}>
                <button className="btn">Lisez la suite</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
