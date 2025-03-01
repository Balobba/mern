import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name }
  }
}) => (
  <div className="profile-about bg-light p-2">
    {bio && (
      <Fragment>
        {/* name.trim().split(" ")[0] is for showing only first name */}
        <h2 className="text-primary">{name.trim().split(" ")[0]}s Bio</h2>
        <p>{bio}</p>
      </Fragment>
    )}

    <div className="line"></div>
    <h2 className="text-primary">Skill Set</h2>
    <div className="skills">
      {skills.map((skill, index) => (
        <div key={index} className="p-1">
          <i className="fas fa-check"></i> {skill}
        </div>
      ))}
    </div>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
