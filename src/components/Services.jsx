import React from "react";
import architect from '../images/architect.png';
import builder from '../images/builder.png';
import materials from '../images/materials.png';
import water from '../images/water.png';
import transport from '../images/transport.png';
import machines from '../images/machines.png';

const Services = () => {
    return (
        <>
            <h1 className="explore">Explore Services</h1>
            <div className="container">
                <div className="row">
                    <div className="card">
                        <img src={architect} alt="architect" className="image"></img>
                        <button className="card-text"> ARCHITECT</button>
                    </div>
                    <div className="card">
                        <img src={builder} alt="builder" className="image"></img>
                        <button className="card-text"> BUILDERS </button>
                    </div>
                    <div className="card">
                        <img src={materials} alt="materials" className="image"></img>
                        <button className="card-text"> MATERIALS </button>
                    </div>
                </div>
                <div className="row">
                    <div className="card">
                        <img src={water} alt="water" className="image"></img>
                        <button className="card-text"> WATER SUPPLY </button>
                    </div>
                    <div className="card">
                        <img src={transport} alt="transport" className="image"></img>
                        <button className="card-text"> TRANSPORTATION </button>
                    </div>
                    <div className="card">
                        <img src={machines} alt="machines" className="image"></img>
                        <button className="card-text"> MACHINERIES</button>
                    </div>
                </div>
                <br></br>
                <br></br>
            </div>
        </>
    );
}
export default Services;