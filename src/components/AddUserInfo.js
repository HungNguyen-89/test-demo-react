import React, { useState } from "react";

// class AddUserInfo extends React.Component {
//   state = {
//     name: "",
//     address: "Nam Tu Liem",
//     age: "",
//   };

//   handleOnChangeInput = (e) => {
//     this.setState({
//       name: e.target.value,
//     });
//   };

//   handleOnChangeAge = (e) => {
//     this.setState({
//       age: e.target.value,
//     });
//   };

//   handleOnSubmit = (e) => {
//     e.preventDefault();
//     this.props.handleAddNewUser({
//       id: Math.floor(Math.random() * 100 + 1) + "-randoom",
//       name: this.state.name,
//       age: this.state.age,
//     });
//   };

//   render() {
//     return (
//       <div>
//         My name is {this.state.name} and I'm {this.state.age}
//         <form
//           onSubmit={(e) => {
//             this.handleOnSubmit(e);
//           }}
//         >
//           <label>Your name:</label>
//           <input
//             value={this.state.name}
//             type="text"
//             onChange={(e) => this.handleOnChangeInput(e)}
//           />

//           <label>Your age:</label>
//           <input
//             value={this.state.age}
//             type="text"
//             onChange={(e) => this.handleOnChangeAge(e)}
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

const AddUserInfo = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("Nam Tu Liem");
  const [age, setAge] = useState("");

  const handleOnChangeInput = (e) => {
    setName(e.target.value);
  };

  const handleOnChangeAge = (e) => {
    setAge(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-randoom",
      name: name,
      age: age,
    });
  };

  return (
    <div>
      My name is {name} and I'm {age}
      <form
        onSubmit={(e) => {
          handleOnSubmit(e);
        }}
      >
        <label>Your name:</label>
        <input
          value={name}
          type="text"
          onChange={(e) => handleOnChangeInput(e)}
        />

        <label>Your age:</label>
        <input value={age} type="text" onChange={(e) => handleOnChangeAge(e)} />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default AddUserInfo;
