import Usercard from "../User/userCard";

//Day 3 Challenge - List with keys
function UserList({ users = [] }) {
  // Conditional rendering: empty state
  if (users.length === 0) {
    return (
      <div className="user-list-empty">
        <p>👥 No users to display yet.</p>
      </div>
    );
  }
 
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
 
export default UserList;
