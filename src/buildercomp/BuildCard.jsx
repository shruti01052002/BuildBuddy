import React from 'react';
import Builderimg from '../images/builderimg.jpg'

function Card(props) {
    return (
        <>
            <div className='cards_div'>
                <div className='card_div'>
                    <img
                        src={Builderimg}
                        alt='myPic'
                        className='card_img'
                    />
                    <div className='card_info'>
                        {/* <span className='card_category'>{props.pname}</span> */}
                        <h3 className='card_title'>{props.city}</h3>
                        <h3 className='card_title'>{props.cpname}</h3>
                        <h3 className='card_title'>{props.bname}</h3>
                        <h3 className='card_title'>{props.cpno}</h3>
                        <h3 className='card_title'>{props.moname}</h3>
                        <h3 className='card_title'>{props.mono}</h3>
                        <p className='card_title'>{props.padd}</p>
                        {/* <a target='_blank' rel="noopener noreferrer" href={props.link}> */}
                        <button>Know More</button>
                        {/* </a> */}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;
