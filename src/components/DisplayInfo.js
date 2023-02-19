import React, { useEffect, useState } from "react";
import "./DisplayInfo.scss";
import logo from "./../logo.svg";

// class DisplayInfo extends React.Component{

// }

const DisplayInfo = (props) => {
  const { listUsers } = props;
  const [isShowHideListUsers, setShowHideListUsers] = useState(true);

  const handleShowHideListUsers = () => {
    setShowHideListUsers(!isShowHideListUsers);
  };

  console.log(">>>call me render");

  useEffect(() => {
    if (listUsers.length === 0) {
      alert("You deleted all the users");
    }

    console.log(">>>call me useEffect");
  }, [listUsers]);

  return (
    <div className="display-info-container">
      <div>
        <span
          onClick={() => {
            handleShowHideListUsers();
          }}
        >
          {isShowHideListUsers === true ? "Hide list users" : "Show list users"}
        </span>
      </div>
      {isShowHideListUsers && (
        <>
          {listUsers.map((user) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>My name is {user.name}</div>
                <div>My age is {user.age}</div>
                <button onClick={() => props.handleDeleteUser(user.id)}>
                  Delete
                </button>
                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisplayInfo;
