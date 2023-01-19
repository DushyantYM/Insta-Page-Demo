import React, { useEffect } from "react";
import SinglePhoto from "./SinglePhoto";
import { UserState } from "../../Context";
import "./PhotoGrid.style.css";
const PhotosGrid = () => {
  const { postsData } = UserState();
  // console.log(postsData,"posts");
  // console.log("111111")
  return (
    <div className="posts-container">
      <div className="posts-btns-div">
        <div className="nav-btns active">
          <div className="text-div">
            <img
              src="https://img.icons8.com/ios/50/null/instagram-reel.png"
              className="nav-imgs"
            />
            <span className="nav-text">POSTS</span>
          </div>
        </div>
        <div className="nav-btns">
          <div className="text-div">
            <img
              src="https://img.icons8.com/ios/50/null/instagram-reel.png"
              className="nav-imgs"
            />
            <span className="nav-text">REELS</span>
          </div>
        </div>
        <div className="nav-btns">
          <div className="text-div">
            <img
              src="https://img.icons8.com/ios/50/null/instagram-reel.png"
              className="nav-imgs"
            />
            <span className="nav-text">TAGGED</span>
          </div>
        </div>
      </div>

      <div className="grid-container">
        {postsData &&
          postsData.map((post) => {
            return <SinglePhoto imgSrc={post.thumbnailUrl} key={post.id} />;
          })}
      </div>
    </div>
  );
};

export default PhotosGrid;
