import PropTypes from "prop-types";
import "./Profile.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="profile-container">
      <div className="profile-info">
        <img className="profile-avatar" src={image} alt="User avatar" />
        <p className="profile-name">{name}</p>
        <p className="profile-tag">@{tag}</p>
        <p className="profile-location">{location}</p>
      </div>
      <ul className="profile-list">
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;