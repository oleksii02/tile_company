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


function LivingRoom(props) {

    const listImg = [
        {id: 1, img: l1},
        {id: 2, img: l2},
        {id: 3, img: l3},
        {id: 4, img: l4},
        {id: 5, img: l5},
        {id: 6, img: l6},

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
                <h2>Living Room REMODELING ROCHESTER NY</h2>
                <div className={'line'}/>
                <h3>Looking for Kitchen Renovation Services in Rochester</h3>
                <p>Just because we specialize in Kitchen and Bathroom Remodeling, don't be fooled! We can be your single point of contact for any of your remodeling needs, providing you with both design and construction. We work together with you every step of the way. We listen to your needs, work with your budget, and then show you how to create the best solution for your home and family. Our low overhead allows us to provide competitive pricing for just about any kind of project and budget.</p>
                <h4>Cabinets • Painting • Drywall • Ceramic Tile • Windows • Doors • Plumbing • Electrical • Venetian • Plaster</h4>
                <p>As a third generation remodeling company, we have the experience and expertise to get your project done right and on schedule.Our success is based on our many happy customers. We work hard to exceed your expectations and your satisfaction is 100% guaranteed.

                    Craftsmen Construction is a family-owned and run company. Our roots trace back to Eastern Europe and our family trade is three generations old. Today, strong as ever, we maintain the same work ethic, integrity and quality as our father and grandfather did.

                    Serving Rochester, Spencerport, Webster, Fairport and Pittsford, NY with superior Bathroom and Kitchen Remodeling Services.</p>


                <a href={'/'}><Button variant={'contained'}>Schedule A Consultation</Button></a>
                <h4>Our Promise
                </h4>
                <p className={'bold'}>Our craftsmen are highly skilled and trained in their trade. From design to finish, we will complete your project with the highest attention to detail.
                </p>
            </section>
            <section className={'portfolio'}>

                <h3>Providing Kitchen Remodeling in Fairport, Webster, Pittsford, Spencerport, and Rochester.</h3>
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

export default LivingRoom;
