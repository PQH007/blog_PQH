import React from 'react';
import './cardStyle.scss';
import { Image } from 'antd';
const Card_cus = ({ dataCard }) => {

    return (
        <div className='container_card' >
            {
                dataCard && dataCard.length > 0 &&
                dataCard.map((item, index) => (
                    <div className='content_card' key={index}>
                        <div className='title_card'>
                            <h3>{item?.title}</h3>
                            <span>10/08/2025</span>
                        </div>
                        <div className='container_image'>
                            <div className='img_card'>
                                <Image src={item?.img} alt={item?.title} />
                            </div>
                        </div>
                        <div className='desc_card'>
                            <p>{item?.desc}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Card_cus;