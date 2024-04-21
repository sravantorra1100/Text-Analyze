import React from 'react'
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
const App = () => {
    return (
        <>
            <Navbar title="Navbar" home="Home" about="AboutUs" />
            <Textform heading="Enter the text to analyze:" />
        </>

    )
}

export default App