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
                <h2>BATHROOM REMODELERS ROCHESTER</h2>
                <div className={'line'}/>
                <h3>Bathroom Renovation Services For Your Home</h3>
                <p>One of the most common spaces to design or renovate is your bathroom. As one of the most used rooms,
                    this room has now become a space for relaxing rather than being only functional private space.
                    Remodeling your bathroom can be a challenge due to the logistics and all the plumbing happening in
                    the room. You're going to need to leave this project to an expert.</p>
                <h4>Rochester NY’s Bathroom Remodeling Expert</h4>
                <p>A bathroom renovation can create an immense impact on your home’s comfort level as it's a place where
                    we start and finish every day. Your bathroom should be comfortable, attractive and functional. The
                    bathroom remodeling experts in Rochester, NY at Craftsmen Construction & Design help you create a
                    serene and comfortable bathroom that suits your family’s needs and budget. Our elegant bathroom
                    designs are engineered to accommodate any customer request, as well as withstand the test of
                    time.</p>
                <p>We offer a full range of bathroom remodeling services from design to installation, and a wide variety
                    of cabinets, flooring, faucets, fixtures, and backsplashes. All of our bath installation solutions
                    are customized to make your vision a reality. We also specialize in Venetian Plaster Design which
                    gives a polished, rock-hard, marble-like finish to your space. Our skilled team of craftsmen makes
                    sure that you get the feeling of comfort and luxury in your bathroom. Give your bathroom design a
                    boost with a little planning and our inspirational bathroom remodel ideas.</p>
                <a href={'/'}><Button variant={'contained'}>Schedule A Consultation</Button></a>
                <h4>Get Started On Your Bathroom Renovation Today!</h4>
                <p className={'bold'}>If it is time to give your bathroom a new look, call the team at Craftsmen
                    Construction & Design. Contact us and get a FREE Estimate for your Bathroom Remodeling Project.</p>
            </section>
            <section className={'portfolio'}>

                <h3>Providing Bathroom Remodeling in Fairport, Rochester, Spencerport, Webster, and Pittsford</h3>
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
