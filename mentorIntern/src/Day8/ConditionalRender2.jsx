import React from "react";

const ConditionalRender2 = ({ userType }) => {
     
   return userType === "Admin" ? <Admin/> : <User/>

   
};

const User = () => {
  return (
    <>
      <h1>This is User Page</h1>
      <p>Welcome user</p>
    </>
  );
};

const Admin = () => {
  return (
    <>
      <h1>This is Admin Page</h1>
      <p>Welcome Sir</p>
    </>
  );
};

export default ConditionalRender2;
