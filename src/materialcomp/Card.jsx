import React from 'react';

function Card(props) {
    return (
        <>
            <div className='cards_div'>
                <div className='card_div'>
                    <img
                        src={props.imgsrc}
                        alt='myPic'
                        className='card_img'
                    />
                    <div className='card_info'>
                        <span className='card_category'>{props.title}</span>
                        <h3 className='card_title'>{props.qty}</h3>
                        <h3 className='card_title'>{props.cost}</h3>
                        {/* <a target='_blank' rel="noopener noreferrer" href={props.link}> */}
                        <button>Add to Truck</button>
                        {/* </a> */}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;
