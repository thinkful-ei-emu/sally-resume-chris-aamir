import React from 'react';

import sally from './Sally.jpg';

function Header() {
    return (
      <div className="header">
          <img src={sally} alt="Sally Student" />
          <h1>Sally Student</h1>
      </div>
    );
  }

  export default Header;