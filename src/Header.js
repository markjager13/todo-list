// import React from 'react'
/* Since the release of React 17, import React from 'react' is no longer needed
 * for simple components. React automatically transforms JSX without using 
 * React.createElement. Importing react still needed for hooks, more advanced stuff.
 */

const Header = () => {
  return (
      <header>
        <h1>Todo-List</h1>
      </header>
  )
}

export default Header