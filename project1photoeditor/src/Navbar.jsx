import React from 'react';
// eslint-disable-next-line
const Navbar = ({ setBackground }) => {
  return (
    <div className="navbar">
      <span>Photo Editor</span>
      <input
        type="text"
        placeholder="Image Link"
        onChange={(e) => setBackground(e.target.value)}
      />
    </div>
  );
};

export default Navbar;
