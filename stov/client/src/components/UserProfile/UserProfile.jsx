import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faPen } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Avatar from "../../components/Avatar/Avatar";
import EditProfileForm from "./EditProfileForm";
import ProfileBio from "./ProfileBio";
import "./UsersProfile.css";

const UserProfile = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.usersReducer);
  const currentProfile = users.filter((user) => user._id === id)[0];
  const currentUser = useSelector((state) => state.currentUserReducer);
  const [Switch, setSwitch] = useState(false);
  const [photoSwitch, setPhotoSwicth] = useState(false);
  const [file, setFile] = useState();

  const uploadProPic = () => {
    setPhotoSwicth(!photoSwitch);
  };

  // useEffect(()=>{
  //     setFile(currentUser.result?.profile)
  // },[currentUser.result?.profile])

  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <section>
          <div className="user-details-container">
            <div className="user-details">
              <Avatar backgroundColor="purple" color="white" fontSize="50px" background={file}>
                {file ? (
                  file
                ) : (
                  <div style={{ padding: "30px 20px 30px 40px" }}>
                    {currentProfile?.name.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="change-avatar-btn">
                  <button>
                    {currentUser?.result._id === id && (
                        <FontAwesomeIcon
                        className="pen"
                        icon={faPen}
                        onClick={uploadProPic}
                        />
                    )}
                  </button>
                </div>
              </Avatar>

              <div className="user-name">
                <h1>{currentProfile?.name}</h1>
                <p>
                  <FontAwesomeIcon icon={faBirthdayCake} /> Joined{" "}
                  {moment(currentProfile?.joinedOn).fromNow()}
                </p>
              </div>
            </div>
            {currentUser?.result._id === id && (
              <button
                type="button"
                onClick={() => setSwitch(true)}
                className="edit-profile-btn"
              >
                <FontAwesomeIcon icon={faPen} /> Edit Profile
              </button>
            )}
          </div>
          <>
            {photoSwitch ? <div>
                <form action="">
                    <input type="file"/>
                    <button className="photo-upload-btn" >Apply</button>
                </form>
                <button>Create avatar</button>
            </div> : ""}
            {Switch ? (
              <EditProfileForm
                currentUser={currentUser}
                setSwitch={setSwitch}
              />
            ) : (
              <ProfileBio currentProfile={currentProfile} />
            )}
          </>
        </section>
      </div>
    </div>
  );
};

export default UserProfile;
