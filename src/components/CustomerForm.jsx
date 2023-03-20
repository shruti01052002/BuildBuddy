import Navbar from "./Navbar";
import { HashLink } from 'react-router-hash-link';

const CustomerForm = () =>{
    return (
        <>
            <Navbar/>
            <div style={{backgroundColor:"#f4ebd0", height:"100vh"}}>
                <div>
                    <div className="form-form">
                        <div className="form_field">
                            <form>
                                <input type="text" placeholder="Enter Your Email"></input>
                                <br/>
                                <br/>
                                <input type="text" placeholder="Enter Your Username"></input>
                                <br/>
                                <br/>
                                <input type="text" placeholder="Enter Password"></input>
                                <br/>
                                <br/>
                                <input type="text" placeholder="Confirm Password"></input>
                                <br/>
                                <br/>
                                <HashLink to="#contact"><button className='btn-submit'>Submit</button></HashLink>
                            </form>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </>
    );
}
export default CustomerForm;