import React from "react";
import { UserState } from "../../Context";
import "./UserInfo.style.css";
import VerifiedIcon from "../Assets/verified-tick.png";
const UserInfo = () => {
  const { userInfo } = UserState();
  // console.log(userInfo,"userinfo")
  return (
    <div>
      <div className="header">
        <div className="user-image">
          <img
            src="https://via.placeholder.com/150/92c952"
            className="user-thumbnail"
          ></img>
        </div>
        <section className="section-userInfo">
          <div className="section-header">
            <a className="section-header_username">
              {userInfo && userInfo.username}
            </a>
            <div>
              <img
                className="verified-icon"
                src={VerifiedIcon}
                height="18px"
              ></img>
            </div>
            <div className="header-desktop-btns-div">
              <button className="header-btns">Follow</button>
              <button className="header-btns">Message</button>
          </div>
            <div>
              <button type="button" id="more">
                <span class="material-symbols-outlined">more_horiz</span>
              </button>
            </div>
          </div>

          <div className="mobile-btns-div">
            <button className="header-btns">Follow</button>
            <button className="header-btns">Message</button>
          </div>
          <div className="section-info">
            <div className="name"> {userInfo && userInfo.name}</div>
            <span className="comapany-name">

              {userInfo && userInfo.company.name}
            </span>
            <div className="website-link">
              <a href={userInfo && userInfo.website}>
                {userInfo && userInfo.website}
              </a>
            </div>
          </div>
        </section>
      </div>

      <div className="info">
        <div className="name"> {userInfo && userInfo.name}</div>
        <span className="comapany-name">
          {" "}
          {userInfo && userInfo.company.name}
        </span>
        <div className="website-link">
          <a href={userInfo && userInfo.website}>
            {userInfo && userInfo.website}
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
