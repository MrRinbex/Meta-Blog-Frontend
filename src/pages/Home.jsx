import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import axios from "axios";

const Home = () => {
  let [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/posts${cat}`);
        setPosts(res.data);
        if (res.data) {
          setLoaded(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [cat]);

  const getTextHtml = (html) => {
    const document = new DOMParser().parseFromString(html, "text/html");
    return document.body.textContent;
  };

  // Random posts =>
  const shuffled = [...posts]
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return loaded ? (
    <div className="home">
      <div className="posts">
        {shuffled.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post?.img} alt="img" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getTextHtml(post.description)}</p>

              <Link className="link" to={`/post/${post.id}`}>
                <button className="btn">Lisez la suite</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Home;
