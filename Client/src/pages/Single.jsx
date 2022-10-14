import React, { useState, useEffect, useContext } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/trash.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getTextHtml = (html) => {
    const document = new DOMParser().parseFromString(html, "text/html");
    return document.body.textContent;
  };

  return (
    <div className="single">
      <div className="leftBlock">
        <img src={`../upload/${post?.img}`} alt="img" />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="user img" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Article publié {moment(post.date).fromNow()}</p>
          </div>
          {currentUser?.username === post.username && (
            <div className="edit">
              <Link to={"/write?edit=1"} state={post}>
                <img src={Edit} alt="edit-btn" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="delete-btn" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        {getTextHtml(post.description)}
      </div>
      <Menu cat={post.cat} />
    </div>
  );
};

export default Single;
