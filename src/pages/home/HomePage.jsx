import React, { useState } from 'react';
import './homeStyle.scss'
import Card_cus from '../../components/common/card/Card_cus';
import ram from '../../assets/images/dev/ram.jpg'
import Submenu from '../../components/common/submenu/Submenu';
const Home = () => {

    const [dataCard, setDataCard] = useState([
        {
            img: ram,
            title: 'Card Title 1',
            desc: 'This is a description for card 1.'
        },
        {
            img: ram,
            title: 'Card Title 2',
            desc: 'This is a description for card 2.'
        },
        {
            img: ram,
            title: 'Card Title 3',
            desc: 'This is a description for card 3.'
        }
    ])

    const [dataSubmenu, setDataSubmenu] = useState({
        btns: [
            {
                icon: '📊',
                label: 'Analytics'
            },
            {
                icon: '📁',
                label: 'File New Claim'
            },
            {
                icon: '🔍',
                label: 'Track Claims'
            }
        ],
        children: []
    })

    return (
        <>
            <Submenu dataSubmenu={dataSubmenu} />
            <Card_cus dataCard={dataCard} />
        </>
    )
}

export default Home;
