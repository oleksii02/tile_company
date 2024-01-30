import React, { useState} from 'react';

import tiles from "../../imgs/LivingRoom/blue-mosaic-tiles.jpg";

import l1 from '../../imgs/LivingRoom/l1.jpg'
import l2 from '../../imgs/LivingRoom/l2.jpg'
import l3 from '../../imgs/LivingRoom/l3.jpg'
import l4 from '../../imgs/LivingRoom/l4.jpg'
import l5 from '../../imgs/LivingRoom/l5.jpg'
import l6 from '../../imgs/LivingRoom/l6.jpg'



import './Bathrooms.css'
import {Box, Button, Modal} from "@mui/material";

import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';


function Remodeling() {

    const listImg = [
        {id: 1, img: l1},
        {id: 2, img: l2},
        {id: 3, img: l3},
        {id: 4, img: l4},
        {id: 5, img: l5},
        {id: 6, img: l6},

    ]


    const [open, setOpen] = useState({1: false,});

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
                <h2>REMODELING</h2>
                <div className={'line'}/>
                <p>Just because we specialize in Kitchen and Bathroom Remodeling, don't be fooled! We can be your single point of contact for all your remodeling needs, providing you with construction. We work with you every step of the way. We listen to your needs, work with your budget, and then show you how to create the best solution for your home and family. Our low overheads allow us to offer competitive pricing for almost any type of project and budget.
                </p>
                <p className={'bold'}>Painting • Drywall • Ceramic and granite tiles • Plumbing • Plastering</p>
                <p>As a second-generation remodeling company, we have the experience and knowledge to get your project done right and on time. Our success is based on many satisfied customers. We work hard to exceed your expectations and your satisfaction is 100% guaranteed.
                </p>

                <p><span>TILE COMPANY</span> is a family business. Our roots go back to Eastern Europe, and our family business spans two generations. Today, strong as ever, we maintain the same work ethic, integrity and quality that our fathers did.
                </p>
                <p>Serving Highland Park, Vernon Hills, Lake Zurich, Arlington, Northbrook, Barrington, Glenview, Skokie, Oak Park and Chicago, IL provides top-notch bathroom and kitchen remodeling services.
                </p>


                <a href={'/contact-us'}><Button variant={'contained'}>Schedule A Consultation</Button></a>
                <h4>OUR PROMISE</h4>
                <p className={'bold'}>Our craftsmen are highly qualified and trained in their field. From renovation to completion, we will complete your project with the utmost attention to detail.
                </p>
            </section>
            <section className={'portfolio'}>

                <h3>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text </h3>
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

export default Remodeling;
