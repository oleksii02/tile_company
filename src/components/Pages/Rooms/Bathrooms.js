import React, { useState} from 'react';
import bathrooms_general from "../../imgs//Bathrooms/tile.jpg";

import b1 from '../../imgs/Bathrooms/b1.jpg'
import b2 from '../../imgs/Bathrooms/b2.jpg'
import b3 from '../../imgs/Bathrooms/b3.jpg'
import b4 from '../../imgs/Bathrooms/b4.jpg'
import b5 from '../../imgs/Bathrooms/b5.jpg'
import b6 from '../../imgs/Bathrooms/b6.jpg'
import b7 from '../../imgs/Bathrooms/b7.jpg'
import b8 from '../../imgs/Bathrooms/b8.jpg'
import b9 from '../../imgs/Bathrooms/b9.jpg'
import b10 from '../../imgs/Bathrooms/b10.jpg'
import b11 from '../../imgs/Bathrooms/b11.jpg'
import b12 from '../../imgs/Bathrooms/b12.jpg'
import b13 from '../../imgs/Bathrooms/b13.jpg'
import b14 from '../../imgs/Bathrooms/b14.jpg'
import b15 from '../../imgs/Bathrooms/b15.jpg'
import b16 from '../../imgs/Bathrooms/b16.jpg'
import b17 from '../../imgs/Bathrooms/b17.jpg'
import b18 from '../../imgs/Bathrooms/b18.jpg'

import b20 from '../../imgs/Bathrooms/b20.jpg'
import b21 from '../../imgs/Bathrooms/b21.jpg'


import './Bathrooms.css'
import {Box, Button, Modal} from "@mui/material";

import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';


function Bathrooms(props) {

    const listImg = [
        {id: 1, img: b1},
        {id: 2, img: b2},
        {id: 3, img: b3},
        {id: 4, img: b4},
        {id: 5, img: b5},
        {id: 6, img: b6},
        {id: 7, img: b7},
        {id: 8, img: b8},
        {id: 9, img: b9},
        {id: 10, img: b10},
        {id: 11, img: b11},
        {id: 12, img: b12},
        {id: 13, img: b13},
        {id: 14, img: b14},
        {id: 15, img: b15},
        {id: 16, img: b16},
        {id: 17, img: b17},
        {id: 18, img: b18},
        {id: 20, img: b20},
        {id: 21, img: b21},
    ]


    const [open, setOpen] = useState({
        1: false,
    });

    const handleOpen = (num) => {
        const newArr = {...open, [num]: true}
        setOpen(newArr)
    };
    const handleClose = (num) => {
        const newArr = {...open, [num]: false}

        setOpen(newArr)
    };

    const [show, setShow] =useState(true)

    const showMore = () => setShow(!show)


    return (
        <main className={'Bathrooms'}>
            <div className={'general__photo'}>
                <img src={bathrooms_general} alt={'kitchen img'}/>

            </div>
            <section className={'information'}>
                <h2>BATHROOM REMODELERS CHICAGO IL</h2>
                <div className={'line'}/>
                <h3>Bathroom Renovation Services For Your Home</h3>
                <p>One of the most common spaces to design or remodel is your bathroom. Once one of the most used rooms, this room has now become a space for relaxation, not just a functional private space. Redesigning your bathroom can be a daunting task because of the logistics and all the plumbing that goes into the room. You will need to entrust this project to a professional expert.
                </p>
                <h4>CHICAGO IL Bathroom Remodeling Expert</h4>
                <p>Renovating your bathroom can make a big difference to the comfort level of your home, as it is where we start and end each day. Your bathroom should be comfortable, attractive and functional. The CHICAGO, IL bathroom remodeling experts at Tile Constr & Design can help you create a relaxing and comfortable bathroom that fits your family's needs and budget.
                </p>
                <p>We offer a full range of bathroom renovation services from design to installation. All of our bath installation solutions are designed to make your vision a reality.</p>
                <a href={'/contact-us'}><Button variant={'contained'}>Schedule A Consultation</Button></a>
                <h4>Get Started On Your Bathroom Renovation Today!</h4>
                <p className={'bold'}>text text text text text text text text text text text text text text text text text text text text text text text text text text </p>
            </section>
            <section className={'portfolio'}>

                <h3>text text text text text text text text text text text text text text text text text text text text text </h3>
                {listImg.slice(0, show ? 12 : 22).map(elment => <div>
                        <img src={elment.img} alt={'Portfolio Rooms'}
                             onClick={() => handleOpen(elment.id)}
                        />
                        <Modal
                            open={open[elment.id]}
                            onClose={() => handleClose(elment.id)}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box className={'box__modal'}>
                                <CloseTwoToneIcon onClick={() => handleClose(elment.id)}/>
                                <img src={elment.img} alt={'Portfolio Rooms'}/>
                            </Box>
                        </Modal>
                    </div>
                )}

                <Button onClick={showMore} className={show ? 'none' : 'less'}> show&nbsp;
                    { (show) ? <span>more <ArrowCircleDownIcon/></span> : <span>less <ArrowCircleUpIcon/></span>}
                </Button>


            </section>
        </main>
    )
        ;
}

export default Bathrooms;
