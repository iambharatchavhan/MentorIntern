import React, { useState } from 'react';

const String = () => {
  const [person, setPerson] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <h1>Person details</h1>
      <h2>Name: {person.firstName} LastName: {person.lastName}</h2>

      <input type='text' value={person.firstName} onChange={(e)=>setPerson({...person,firstName:e.target.value})} />
      <input type='text' value={person.lastName} onChange={(e)=>setPerson({...person,firstName:e.target.value})} />
    </div>
  );
};

export default String;
