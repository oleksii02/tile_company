import React, {useState} from 'react';
import "./Navbar.css"
import logo from '../../imgs/logo.png'
import {Button} from "@mui/material";
import {Link} from 'react-router-dom';


function Navbar(props) {
    const [id, setId] = useState(window.location.href.split('/')[window.location.href.split('/').length - 1])

    const pressButton = (e) => {
        setId(e)
    }

    return (

        <header className={'Navbar'}>
            <div className={'logo'}>
                <img src={logo} alt={"TILE COMPANY"}/>
            </div>
            <div className={"Name"}>
                <h2>TILE COMPANY</h2>
                {/*<h3>CERAMIC & GRANITE </h3>*/}

            </div>
            <div className={'telNumber'}>
                <a href="tel:+15855598020">585-559-8020</a>
            </div>

            <div className={'line'}/>
            <div className={'ButtonGroup'}>

                <Link to={'/'}>
                    <Button

                        onClick={() => pressButton('')}
                        variant={(id === '') ? 'contained' : 'text'}>Home</Button></Link>
                <Link to={'remodeling'}>
                    <Button
                        onClick={() => pressButton('remodeling')}
                        variant={(id === 'remodeling') ? 'contained' : 'text'}>Remodeling</Button></Link>
                <Link to={'bathrooms'}>
                    <Button
                        onClick={() => pressButton('bathrooms')}
                        variant={(id === 'bathrooms') ? 'contained' : 'text'}>Bathrooms</Button></Link>
                <Link to={'kitchen'}>
                    <Button
                        onClick={() => pressButton('kitchen')}
                        variant={(id === 'kitchen') ? 'contained' : 'text'}>KITCHEN</Button></Link>
                <Link to={'general-contracting'}>
                    <Button
                        onClick={() => pressButton('general-contracting')}
                        variant={(id === 'general-contracting') ? 'contained' : 'text'}>GENERAL CONTRACTING </Button></Link>

                <Link to={'contact-us'}>
                    <Button
                        onClick={() => pressButton('contact-us')}
                        variant={(id === 'contact-us') ? 'contained' : 'text'}>CONTACT US</Button></Link>
            </div>
            <div className={'line__two'}/>


        </header>
    );
}

export default Navbar;
