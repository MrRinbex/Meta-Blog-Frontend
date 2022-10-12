import React from "react";

const Menu = () => {
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
  ];
  return (
    <div className="rightBlock">
      <h1>Autre articles qui vous s'intéresse</h1>
      {testPost.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="img" />
          <h2>{post.title}</h2>
          <button className="btn">Lisez l'article</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
