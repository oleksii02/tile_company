import React, { useState} from 'react';

import tiles from "../../imgs/Kitchen/tiles.jpg";

import k1 from '../../imgs/Kitchen/k1.jpg'
import k2 from '../../imgs/Kitchen/k2.jpg'
import k3 from '../../imgs/Kitchen/k3.jpg'
import k4 from '../../imgs/Kitchen/k4.jpg'
import k5 from '../../imgs/Kitchen/k5.jpg'
import k6 from '../../imgs/Kitchen/k6.jpg'



import './Bathrooms.css'
import {Box, Button, Modal} from "@mui/material";

import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';


function Kitchen(props) {

    const listImg = [
        {id: 1, img: k1},
        {id: 2, img: k2},
        {id: 3, img: k3},
        {id: 4, img: k4},
        {id: 5, img: k5},
        {id: 6, img: k6},

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
                <img src={tiles} alt={'kitchen img'}/>

            </div>
            <section className={'information'}>
                <h2>KITCHEN REMODELING CHICAGO IL</h2>
                <div className={'line'}/>
                <h3>Search for kitchen remodeling services in Chicago IL</h3>
                <p>Your Kitchen is the most visited room in your home where you spend the most time with family and friends. It's no longer just a place for cooking but is also a central point of social gatherings. Because of this, you want to make sure your kitchen is functional but also beautiful. A kitchen remodel is a major undertaking and mistakes can be costly in several ways. You want to make the most of your space so it looks attractive and functions well. Having an expert on your side through the entire process can save you money and avoid costly mistakes. Tile Company & Design will help you with a well-planned Kitchen Remodel in CHICAGO IL.</p>
                <h4>text text text text text</h4>
                <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text </p>

                <a href={'/contact-us'}><Button variant={'contained'}>Schedule A Consultation</Button></a>
                <h4>Get Started On Your Kitchen Design Today!
                </h4>
                <p className={'bold'}>Add beauty and function to your kitchen with Chicago IL </p>
            </section>
            <section className={'portfolio'}>

                <h3>text text text text text text text text text text text text text text text text text text text text </h3>
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

export default Kitchen;
