import React from 'react';
import kitchen from '../../imgs/kichen__room.jpg'
import kitchenTwo from '../../imgs/bathroom.jpg'
import './Home.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {Button, Grid} from "@mui/material";

import kitchenNav from '../../imgs/kitchenNav.jpg';
import kitchenNavTwo from '../../imgs/kitchenNavTwo.jpg';
import bathroomNav from '../../imgs/bathroomNav.jpg';
import bathroomNavTwo from '../../imgs/BathroomNavTwo.jpg'

function Home(props) {
    return (
        <main className={"home"}>
            <div className={'general__photo'}>
                <img src={kitchen} alt={'kitchen img'}/>

            </div>
            <div className={'button__photo'}>
                <img src={kitchenTwo} alt={'kitchen photo'}/>
                <Button sx={{
                    position: 'absolute',
                    LineHeight: '1'
                }}
                        variant="contained">
                    <CalendarMonthIcon/>
                    Schedule a free<br/>
                    in home consultation

                </Button>

            </div>
            <section className={'pages__nav'}>
                <h3>KITCHEN AND BATHROOM RENOVATION PROJECTS IN ROCHESTER</h3>
                <nav>
                    <a href={'/kitchen'}>
                        <img src={kitchenNav} alt={'kitchenNav'}/>
                        <h4>Kitchen Remodeling</h4>
                    </a>
                    <a href={'/kitchen'}>
                        <img src={kitchenNavTwo} alt={'kitchenNavTwo'}/>
                        <h4>Kitchen Remodeling</h4>
                    </a>
                    <a href={'/bathroom'}>
                        <img src={bathroomNav} alt={'bathroomNav'}/>
                        <h4>Bathroom Remodeling</h4>
                    </a>
                    <a href={'/bathroom'}>
                        <img src={bathroomNavTwo} alt={'bathroomNavTwo'}/>
                        <h4>Bathroom Remodeling</h4>
                    </a>
                </nav>
                <div className={'line__thee'}/>

            </section>

            <section className={'information'}>
                <h3>
                    EXPERT KITCHEN AND BATHROOM REMODELERS ROCHESTER NY
                </h3>
                <h4>
                    Kitchen And Bath Remodeling Services For Your Home
                </h4>

                <p><span>Craftsmen Construction & Design</span> is a full-service remodeling company that specializes in kitchen and
                    bathroom remodeling and designs. We are a third-generation, family-owned and operated business and
                    have completed numerous remodeling projects in Rochester, New York.</p>

                <p>We are your one-stop-shop for stress-free remodeling of your kitchen and bathroom. With our skilled
                    craftsmanship, we can help make your ideal kitchen or bathroom remodel a reality from start to
                    finish.</p>
                <p>We treat every customer like family and <span>Owner, Tony Fendikevich</span> is on every project. We guarantee
                    100% customer satisfaction and receive final payment only when our customer is fully satisfied with
                    the completed job.</p>

                <p>Love the place where you live by remodeling your kitchen and bathroom with Craftsmen Construction &
                    Design in Rochester NY. Get in touch with our Bathroom and Kitchen Remodeling Experts to discuss
                    your next project.</p>

            </section>
            <Grid
                columns={20}
                container
                justifyContent="space-between"
                className={'service'}>
                <h4>
                    Serving Rochester, Spencerport, Webster, Fairport and Pittsford, NY with superior<br/>
                    Bathroom Remodeling and Kitchen Remodeling Services.
                </h4>

                <Grid item xs={20} sm={20}  >
                    <h5>In-Home Consultation and Design</h5>
                    <p>Meeting in your home for project planning and measurements. The professional design of the project includes 3-D renderings.
                    </p>
                </Grid>
                <Grid  item xs={20} sm={10} >
                    <h5>Project Management</h5>
                    <p>With so many moving parts, we make sure everything comes together smoothly.</p>
                </Grid>
                <Grid item xs={20} sm={9} >
                    <h5>Expert Craftsmanship</h5>
                    <p>Our team of expert installers covers every detail.</p>
                </Grid>

            </Grid>

        </main>
    );
}

export default Home;
