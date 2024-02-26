import React, { useEffect, useRef, useState } from 'react';
// how to retrive the previous props and current props value
function PreviousValueComponent({ value }) {
  const previousValueRef = useRef();


  useEffect(() => {
    previousValueRef.current = value;

  });

  return (
    <div>
    <h1>
      Current: {value}, Previous: {previousValueRef.current}
    </h1>
   
   
    </div>
  );
}

export default PreviousValueComponent;