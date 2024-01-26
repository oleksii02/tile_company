import React from 'react';
import './Footer.css'
import logo from "../../imgs/logo.png";
import {Grid} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

function Footer(props) {
    return (
        <footer className={'footer'}>
            <Grid container className={'container'}>
                <Grid item xs={12} sm={4} md={4}>
                    <div className={'box__logo'}>
                        <div className={'logo'}>
                            <img src={logo} alt={"TILE COMPANY"}/>
                        </div>
                        <div className={"Name"}>
                            <h2>TILE COMPANY</h2>
                            <h3>CERAMIC & GRANITE </h3>
                        </div>
                    </div>

                </Grid>
                <Grid item  xs={12} sm={3} md={4}  className={'QUICK__LINKS'}>
                    <h5>QUICK LINKS</h5>
                    <ul>
                        <li><a href={'/'}>Home</a></li>
                        <li><a>Bathrooms</a></li>
                        <li><a>Kitchens</a></li>
                        <li><a>Designs</a></li>
                        <li><a>Contracting</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                </Grid>
                <Grid item xs={12} sm={5} md={4} className={'connected'}>
                    <h5>STAY CONNECTED</h5>
                    <div className={'icon__groups'}>
                        <a href={'/'}><FacebookOutlinedIcon/></a>
                        <a href={'/'}><InstagramIcon/></a>
                        <a href={'/'}><XIcon/></a>
                    </div>
                    <div className={'maps__phone'}>
                        <a href={''} style={{display: 'flex'}}>
                            <LocationOnIcon/>
                            <h5>Copany</h5>
                        </a>
                        <a href={'/'} style={{display: 'flex'}}>
                            <CallIcon/>
                            <h5>000-000-0000</h5>
                        </a>
                    </div>

                </Grid>
            </Grid>


            <div className={'Rights'}>
                <h6>All Rights
                    Reserved</h6>

            </div>


        </footer>
    );
}

export default Footer;
