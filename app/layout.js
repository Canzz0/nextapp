import React from 'react'

const Layout = ({children}) => {
  return (
   <html lang='en'>

    <body>
        <header>Header</header>
        
        {children}</body>
        <footer>Footer</footer>
   </html>
  )
}

export default Layout