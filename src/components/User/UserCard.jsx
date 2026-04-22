// User/UserCard.jsx

function UserCard({ name = 'Guest', bio = '', joinDate = '' }) {
  return (
    <div className="user-card">
      <div className="user-avatar">{name.charAt(0).toUpperCase()}</div>
      <div className="user-info">
        <h4>{name}</h4>
        {bio && <p>{bio}</p>}
        {joinDate && <small>Joined {joinDate}</small>}
      </div>
    </div>
  );
}

export default UserCard;