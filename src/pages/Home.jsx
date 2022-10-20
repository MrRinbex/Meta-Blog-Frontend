import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import axios from "axios";
import { motion } from "framer-motion";

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
  posts = [...posts]
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return loaded ? (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.7 }}
    >
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <motion.div
              className="img"
              initial={{ opacity: 0, y: 100 }}
              exit={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2.7 }}
            >
              <img src={post?.img} alt="img" />
            </motion.div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.7 }}
              >
                {getTextHtml(post.description)}
              </motion.p>
              <Link className="link" to={`/post/${post.id}`}>
                <button className="btn">Lisez la suite</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  ) : (
    <Loader />
  );
};

export default Home;
