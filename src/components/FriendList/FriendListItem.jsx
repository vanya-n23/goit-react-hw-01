import PropTypes from "prop-types";
import "./FriendsListItem.css";

function FriendListItem({ avatar, name, isOnline }) {
    return (
        <li className="friend-list-item">
            <img className="friend-avatar" src={avatar} alt={name} width="48" />
            <p className="friend-name">{name}</p>
            <p className={`friend-status ${isOnline ? "online" : "offline"}`}>
                {isOnline ? "Online" : "Offline"}
            </p>
        </li>
    );
}


FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;