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
import LivingRoom from "./components/Pages/Rooms/LivingRoom";
import BackToTop from "./components/UI/BackToTop/BackToTop";
import ScrollToTopFab from "./components/UI/BackToTop/BackToTop";

function App() {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#0F263C',
                //contrastText: 'antiquewhite'
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <div className="App">
                    <ScrollToTopFab/>
                    <Navbar/>

                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="bathrooms" element={<Bathrooms/>}/>
                        <Route path='kitchen' element={<Kitchen/>}/>
                        <Route path='living-room' element={<LivingRoom/>}/>

                    </Routes>

                    <Carousel/>
                    <Footer/>


                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
