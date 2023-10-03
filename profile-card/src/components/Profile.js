import React from "react";

function Profile(props) {
  const message = () => {
    alert(
      "Please click on the  Skype Icon , and then you can direct message me on my Skype account."
    );
  };

  const following = () => {
    alert(
      "Please click on the profile card picture, and then you can direct follow me on my LinkedIn account."
    );
  };

  return (
    <>
      <title>Profile Card Hover Animation | {props.title}</title>

      <div className="container">
        <div className="wrapper">
          <a
            href="https://in.linkedin.com/in/krishn-pethani-1aa990216"
            target="blank"
          >
            <img src={props.pic} alt=" Krishn Pethani" />
          </a>
          <div className="title">{props.title}</div>
          <div className="place">{props.place}</div>
        </div>
        <div className="content">
          <p>{props.content}</p>
          <div className="buttons">
            <div className="btn">
              <button onClick={message}>Message</button>
            </div>
            <div className="btn">
              <button onClick={following}>Following</button>
            </div>
          </div>
        </div>
        <div className="icons">
          <li>
            <a href="https://www.facebook.com/" target="blank">
              <span className="fab fa-facebook-f"></span>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/" target="blank">
              <span className="fab fa-twitter"></span>
            </a>
          </li>
          <li>
            <a href="https://instagram.com/" target="blank">
              <span className="fab fa-instagram"></span>
            </a>
          </li>
          <li>
            <a href="https://join.skype.com/invite/wgcx24SFggfJ" target="blank">
              <span className="fab fa-skype"></span>
            </a>
          </li>
        </div>
      </div>
    </>
  );
}

export default Profile;
