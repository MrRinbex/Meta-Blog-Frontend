import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/authContext";
import Page404 from "./Page404";

const Profile = () => {
  //   const location = useLocation();
  //   const userId = pathname.split("/")[2];

  const userId = useLocation().state;
  const [username, setUsername] = useState(userId?.username);
  const [email, setEmail] = useState(userId?.email);
  const [userImg, setUserImg] = useState(userId?.img);
  const [posts, setPosts] = useState([]);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/users/${userId.id}`);
        setUsername(res.data.username);
        setEmail(res.data.email);
        setUserImg(res.data.img);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userId]);

  //

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/posts/`);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return userId === null ? (
    <Page404 />
  ) : (
    <div className="profile">
      <div className="info">
        <div className="profileImg">
          <img src={userImg} alt="Profile img" />
        </div>
        <div className="infoUser">
          <span>
            <h1>Informations du compte</h1>
          </span>
          <span>
            <h3>Identifiant</h3>
            <span className="spanInfo">{username}</span>
          </span>
          <span>
            <h3>Email</h3>
            <span className="spanInfo">{email}</span>
          </span>
          <span>
            <h3>Mot de passe</h3>
            <span className="spanInfo">********</span>
          </span>
        </div>
      </div>
      <div className="posts">
        <h1>Vos articles</h1>
        {posts.map(
          (post) =>
            currentUser.id === post.userid && (
              <div className="post" key={post.id}>
                <img src={post?.img} alt="img" />
                <h2>{post.title}</h2>
                <Link className="link" to={`/post/${post.id}`}>
                  <button className="btn">Lisez l'article</button>
                </Link>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Profile;
