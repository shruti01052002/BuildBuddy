import React from "react";
import { Link } from 'react-router-dom';
import architect from '../images/architect.png';
import builder from '../images/builder.png';
import materials from '../images/materials.png';
import water from '../images/water.png';
import transport from '../images/transport.png';
import machines from '../images/machines.png';
import { HashScroll } from "react-hash-scroll";
import Button from '@mui/material/Button';

const Services = () => {
    let btnStyle = {
        fontSize: "22px",
        fontWeight: "bold",
        letterSpacing: "2px",
        cursor: 'pointer',
        backgroundColor: "white",
        color: "black",
        fontFamily: 'Dosis, sans-serif',
    }
    return (
        <>
            <h1 className="explore" id='services'>Explore Services</h1>
            <HashScroll hash="#services">
                <div className="container">
                    <div className="row">
                        <div className="card">
                            <img src={architect} alt="architect" className="image"></img>
                            <div className="button_div">
                                <Button className="card-text" style={btnStyle}> ARCHITECT</Button>
                            </div>
                        </div>
                        <div className="card">
                            <img src={builder} alt="builder" className="image"></img>
                            <Button className="card-text" style={btnStyle}> BUILDERS </Button>
                        </div>
                        <div className="card">
                            <img src={materials} alt="materials" className="image"></img>
                            <Link to='/materials/cement'><Button className="card-text" style={btnStyle}> MATERIALS </Button></Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="card">
                            <img src={water} alt="water" className="image"></img>
                            <Button className="card-text" style={btnStyle}> WATER SUPPLY </Button>
                        </div>
                        <div className="card">
                            <img src={transport} alt="transport" className="image"></img>
                            <Button className="card-text" style={btnStyle}> TRANSPORTATION </Button>
                        </div>
                        <div className="card">
                            <img src={machines} alt="machines" className="image"></img>
                            <Button className="card-text" style={btnStyle}> MACHINERIES</Button>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                </div>
            </HashScroll>
        </>
    );
}
export default Services;