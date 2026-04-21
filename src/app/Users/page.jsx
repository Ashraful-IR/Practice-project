import Usercard from "@/component/Card/page";
import React from "react";
const userData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
};

const UsersPage = async () => {
  const users = await userData();
  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-full gap-4 text-black">
      <h1>Users Page</h1>
      <p>Welcome to the Users page!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <Usercard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
