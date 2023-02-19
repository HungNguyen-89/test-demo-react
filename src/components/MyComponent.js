import React, { useState } from "react";
import DisplayInfo from "./DisplayInfo";
import AddUserInfo from "./AddUserInfo";

const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Hoi dan IT", age: "16" },
    { id: 2, name: "Erik", age: "20" },
    { id: 3, name: "Hary", age: "35" },
  ]);

  const handleAddNewUser = (userObj) => {
    setListUsers([userObj, ...listUsers]);
  };

  const handleDeleteUser = (userId) => {
    let listUsersClone = [...listUsers];
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    setListUsers(listUsersClone);
  };

  return (
    <div>
      <AddUserInfo handleAddNewUser={handleAddNewUser} />
      <br></br>
      <DisplayInfo listUsers={listUsers} handleDeleteUser={handleDeleteUser} />
    </div>
  );
};

export default MyComponent;
