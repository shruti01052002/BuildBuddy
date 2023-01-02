import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.png';
import truck from './imgs/truck.png';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
    return (
        <>
            <nav className='mat_navbar'>
                <ul>
                    <div>
                
                        <Link to='/'><img src={logo} alt='logo' /></Link>
                        <TextField
                            id="input-with-icon-textfield"
                            placeholder="Search"
                            style={{ backgroundColor: "white", marginTop: "40px", marginLeft: '100px', width: '400px' }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start" style={{ fontFamily: 'Dosis, sans-serif', height: "70px" }}>
                                        <SearchIcon style={{ color: "black" }} />
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                        />
                        <Link style={{ marginLeft: '400px' }}>
                            <img src={truck} alt="truck" style={{ height: "70px" }} />
                        </Link>
                        <Link>
                            <AccountCircleIcon style={{ marginBottom: "15px", fontSize: "larger", color: "white", width: "60px", height: "60px" }} />
                        </Link>
                    </div>
                </ul>
            </nav>
        </>
    );
}
export default Navbar;