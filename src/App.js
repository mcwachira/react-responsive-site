import React from 'react'
import { Brand, Cta, Navbar } from './components'
import { Blog, Possibility, Features, WhatGPT3, Header, Footer } from './containers/index'

import './App.css'
const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">

                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Cta />
            <Possibility />
            <Blog />
            <Footer />
        </div>
    )
}

export default App