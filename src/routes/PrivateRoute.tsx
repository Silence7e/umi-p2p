import React from 'react';

export default ({ children }: { children: JSX.Element }) => {
  return (
    <div>
      <div>Private Route (routes/Privates.tsx)</div>
      {children}
    </div>
  );
}

