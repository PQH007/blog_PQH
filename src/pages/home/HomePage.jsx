import React, { useState } from 'react';
import './homeStyle.scss'
import Card_cus from '../../components/common/card/Card_cus';
import ram from '../../assets/images/dev/ram.jpg'
import Submenu from '../../components/common/submenu/Submenu';
import CardExtra from '../../components/common/cardExtra/CardExtra';
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

    const [dataCardExtra, setDataCardExtra] = useState({
        title: 'Extra Card Title',
        desc: 'This is a description for the extra card.',
        children: [
            <div style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>Child Component 1</div>,
            <div style={{ backgroundColor: '#e0e0e0', padding: '10px', borderRadius: '5px' }}>Child Component 2</div>
        ]
    })
    return (
        <>
            <Submenu dataSubmenu={dataSubmenu} />
            <CardExtra dataCardExtra={dataCardExtra} />
            <Card_cus dataCard={dataCard} />
        </>
    )
}

export default Home;
