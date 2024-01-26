import React, {useState} from 'react';
import "./Navbar.css"
import logo from '../../imgs/logo.png'
import {Button} from "@mui/material";
import {Link} from 'react-router-dom';
import LivingRoom from "../../Pages/Rooms/LivingRoom";


function Navbar(props) {
    const [id, setId] = useState('home')

    const pressButton = (e) => {
        console.log(e)
        setId(e)
    }

    return (

        <header className={'Navbar'}>
            <div className={'logo'}>
                <img src={logo} alt={"TILE COMPANY"}/>
            </div>
            <div className={"Name"}>
                <h2>TILE COMPANY</h2>
                <h3>CERAMIC & GRANITE </h3>

            </div>
            <div className={'telNumber'}>
                <a href="tel:+1">000-000-0000</a>
            </div>

            <div className={'line'}/>
            <div className={'ButtonGroup'}>

                <Link to={'/'}>
                    <Button

                        onClick={() => pressButton('home')}
                        variant={(id === 'home') ? 'contained' : 'text'}>Home</Button></Link>
                <Link to={'/bathrooms'}>
                    <Button
                        onClick={() => pressButton('bathrooms')}
                        variant={(id === 'bathrooms') ? 'contained' : 'text'}>Bathrooms</Button></Link>
                <Link to={'kitchen'}>
                    <Button
                        onClick={() => pressButton('kitchen')}
                        variant={(id === 'kitchen') ? 'contained' : 'text'}>KITCHEN</Button></Link>
                <Link to={'living-room'}>
                    <Button
                        onClick={() => pressButton('living-room')}
                        variant={(id === 'living-room') ? 'contained' : 'text'}>Living Room</Button></Link>
                <Link to={'contact-us'}>
                    <Button
                        onClick={() => pressButton('contact-us')}
                        variant={(id === 'contact-us') ? 'contained' : 'text'}>CONTACT US</Button></Link>


                {/*
                    <Button>Designs</Button>
                    <Button>General Contracting</Button>
                    <Button>Contac US</Button>*/}

            </div>
            <div className={'line__two'}/>


        </header>
    );
}

export default Navbar;
