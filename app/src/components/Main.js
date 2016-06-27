import React from 'react';

const Main = (props) => (
  <div>
    {React.cloneElement(props.children, props)}
  </div>
);

export default Main;
