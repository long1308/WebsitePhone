import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../../partials/Header'
import Slider from '../../../partials/Slider'
import Footer from '../../../partials/Footer'
type Props = {}

const BaseLayout = (props: Props) => {
  return (
    <div>
      <header className="bg-red-500 " >
        <Header />
      </header>
      {/* <Slider /> */}
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default BaseLayout