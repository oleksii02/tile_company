import './App.css';
import Navbar from "./components/UI/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@mui/material";
import Carousel from "./components/UI/Carousel/Carousel";
import Footer from "./components/UI/Footer/Footer";
import Bathrooms from "./components/Pages/Rooms/Bathrooms";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Kitchen from "./components/Pages/Rooms/Kitchen";
import Remodeling from "./components/Pages/Rooms/Remodeling";
import ScrollToTopFab from "./components/UI/BackToTop/BackToTop";
import {useEffect} from "react";
import ContactUs from "./components/Pages/Rooms/ContactUs";
import GeneralContracting from "./components/Pages/Rooms/GeneralContracting";

function App() {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#0F263C',
                //contrastText: 'antiquewhite'
            },
        },
    });

    useEffect(() => {
        console.log('App')
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <div className="App">
                    <ScrollToTopFab/>
                    <Navbar/>

                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/bathrooms" element={<Bathrooms/>}/>
                        <Route path='/kitchen' element={<Kitchen/>}/>
                        <Route path='/remodeling' element={<Remodeling/>}/>
                        <Route path='/general-contracting' element={<GeneralContracting/>}/>
                        <Route path='/contact-us' element={<ContactUs/>}/>

                    </Routes>
                    <Carousel/>
                    <Footer/>
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
