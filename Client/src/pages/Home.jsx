import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const testPost = [
    {
      id: 1,
      title: "title1",
      description: "descpretion exemp",
      img: "https://www.fnordware.com/superpng/pnggrad16rgb.png",
    },
    {
      id: 2,
      title: "title2",
      description: "descpretion exemp",
      img: "https://www.fnordware.com/superpng/pnggrad16rgb.png",
    },
    {
      id: 3,
      title: "title3",
      description: "descpretion exemp",
      img: "https://www.fnordware.com/superpng/pnggrad16rgb.png",
    },
    {
      id: 4,
      title: "title4",
      description: "descpretion exemp",
      img: "https://www.fnordware.com/superpng/pnggrad16rgb.png",
    },
  ];
  return (
    <div className="home">
      <div className="posts">
        {testPost.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="img" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.description}</p>
              <button className="btn">Lisez la suite</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
