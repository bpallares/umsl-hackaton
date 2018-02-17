import React from 'react'
import AppContainer from './Container'
import Header from './Header'
import Footer from './Footer'
import SideBar from './Sidebar'
const App = () => (
  <div>
    <SideBar>
      <AppContainer />
    </SideBar>
  </div>
)
export default App
