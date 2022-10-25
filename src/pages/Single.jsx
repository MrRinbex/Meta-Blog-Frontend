import React, { useState, useEffect, useContext } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/trash.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";
import DOMPurify from "dompurify";
import Loader from "../components/Loader";
import { motion } from "framer-motion";

const Single = () => {
  const [post, setPost] = useState({});
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const postId = location.pathname.split("/")[2];
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/posts/${postId}`);
        setPost(res.data);
        if (res.data) {
          setLoaded(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${postId}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return loaded ? (
    <motion.div
      className="single"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.7 }}
    >
      <div className="leftBlock">
        <motion.img
          src={post?.img}
          alt="img"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 2.7 }}
        />
        <motion.div
          className="user"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{ duration: 2.7 }}
        >
          {post.userImg && <img src={post?.userImg} alt="user img" />}
          <div className="info">
            {post.username && <span>{post.username}</span>}
            <p>Article publié {moment(post.date).fromNow()}</p>
          </div>
          {currentUser?.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=${post.id}`} state={post}>
                <img src={Edit} alt="edit-btn" data-hover="édité" />
              </Link>
              <img
                onClick={handleDelete}
                src={Delete}
                alt="delete-btn"
                data-hover="effacer"
              />
            </div>
          )}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{ duration: 2.7 }}
        >
          {post.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 2.7 }}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.description),
          }}
        ></motion.p>
      </div>
      <Menu cat={post.cat} />
    </motion.div>
  ) : (
    <Loader />
  );
};

export default Single;
