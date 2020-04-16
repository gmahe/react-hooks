import React from "react";
import userResources from "../hooks/userResources";

export default function UserList() {
  const users = userResources("users");
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
