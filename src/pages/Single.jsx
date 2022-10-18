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
        setTimeout(() => {
          setLoaded(true);
        }, post);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [postId, post]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${postId}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return loaded ? (
    <div className="single">
      <div className="leftBlock">
        <img src={post?.img} alt="img" />
        <div className="user">
          {post.userImg && <img src={post?.userImg} alt="user img" />}
          <div className="info">
            <span>{post.username}</span>
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
        </div>
        <h1>{post.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.description),
          }}
        ></p>
      </div>
      <Menu cat={post.cat} />
    </div>
  ) : (
    <Loader />
  );
};

export default Single;
