import React from 'react'
//import  from other file index.js  to finally app.js
import { About, Footer, Header, Skills, Testimonial, Work } from './container'
import { Navbar } from './components'
import './App.scss'

const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            {/* <Testimonial /> */}
            <Footer />
        </div>
    )
}

export default App