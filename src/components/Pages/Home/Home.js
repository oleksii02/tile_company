import React from 'react';
import kitchen from '../../imgs/kichen__room.jpg'
import kitchenTwo from '../../imgs/bathroom.jpg'
import './Home.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {Button, Grid} from "@mui/material";

import kitchenNav from '../../imgs/kitchenNav.jpg';
import Remodeling from '../../imgs/LivingRoom/l2.jpg';
import bathroomNav from '../../imgs/bathroomNav.jpg';
import bathroomNavTwo from '../../imgs/BathroomNavTwo.jpg'

function Home(props) {
    return (
        <main className={"home"}>
            <div className={'general__photo'}>
                <img src={kitchen} alt={'kitchen general img'}/>

            </div>
            <div className={'button__photo'}>
                <img src={kitchenTwo} alt={'kitchen general img two'}/>
                <a href={'contact-us'}>
                    <Button
                            variant="contained">
                        <CalendarMonthIcon/>
                        Schedule a free<br/>
                        in home consultation

                    </Button>
                </a>

            </div>
            <section className={'pages__nav'}>
                <h3>KITCHEN AND BATHROOM RENOVATION PROJECTS IN ROCHESTER</h3>
                <nav>
                    <a href={'/kitchen'}>
                        <img src={kitchenNav} alt={'kitchen nav img'}/>
                        <h4>Kitchen Remodeling</h4>
                    </a>
                    <a href={'/kitchen'}>
                        <img src={Remodeling} alt={'Remodeling nav img'}/>
                        <h4>Remodeling</h4>
                    </a>
                    <a href={'/bathrooms'}>
                        <img src={bathroomNav} alt={'bathroom nav img'}/>
                        <h4>Bathroom Remodeling</h4>
                    </a>
                    <a href={'/bathrooms'}>
                        <img src={bathroomNavTwo} alt={'bathroomNavTwo'}/>
                        <h4>Bathroom Remodeling</h4>
                    </a>
                </nav>
                <div className={'line__thee'}/>

            </section>

            <section className={'information'}>
                <h3>
                    EXPERT KITCHEN AND BATHROOM REMODELERS CHICAGO IL.
                </h3>
                <h4>
                    Kitchen And Bath Remodeling Services For Your Home
                </h4>

                <p><span>TILE COMPANY</span> is a full-service remodeling company that specializes in kitchen and bathroom remodeling. We are a second-generation, family-owned and operated business and have completed numerous remodeling projects in <span>CHICAGO , IL.</span>
                </p>

                <p>We are your one-stop-shop for stress-free remodeling of your kitchen and bathroom. With our skilled craftsmanship, we can help make your ideal kitchen or bathroom remodel a reality from start to finish.
                </p>
                <p>We treat every customer like family and Owner, Ivan Humeniak is on every project. We guarantee 100% customer satisfaction and receive final payment only when our customer is fully satisfied with the completed job.
                </p>

                <p>Love the place where you live by remodeling your kitchen and bathroom with Tile Company in Chicago IL. Get in touch with our Bathroom and Kitchen Remodeling Experts to discuss your next project.</p>

            </section>
            <Grid
                columns={20}
                container
                justifyContent="space-between"
                className={'service'}>
                <h4>
                    text text text text text text text text text text
                </h4>

                <Grid item xs={20} sm={20}>
                    <h5> text text text text</h5>
                    <p> text text text text text text text text text text text text text text text text text text text text text text
                    </p>
                </Grid>
                <Grid item xs={20} sm={10}>
                    <h5> text text text text</h5>
                    <p> text text text text text text text text text text</p>
                </Grid>
                <Grid item xs={20} sm={9}>
                    <h5> text text text text text text text text</h5>
                    <p> text text text text text text text text text text</p>
                </Grid>

            </Grid>

        </main>
    );
}

export default Home;
