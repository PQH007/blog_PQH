import React, { useState } from 'react';
import './homeStyle.scss';
import ram from '../../assets/images/dev/ram.jpg'
import Submenu from '../../components/common/submenu/Submenu';
import CardExtra from '../../components/common/cardExtra/CardExtra';
import { TrashIcon, FileDirectorySymlinkIcon } from "@primer/octicons-react";
import { Button, Image } from 'antd';
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
    })
    return (
        <>
            <Submenu dataSubmenu={dataSubmenu} />
            <CardExtra dataCardExtra={dataCardExtra} />
            <div className='container_homePage'>
                <div className='container_daily'>
                    <div className='box'>
                        <span>Lịch</span>
                        <br />
                        <span>Thêm ngày, loại ngày, vòng lặp</span>
                        <span></span>
                    </div>
                    <div className='box'>
                        <span>Mỗi ngày</span>
                        <br />
                        <span>Số ngày trước đó</span>
                        <br />
                        <span>Level</span>
                        <br />
                        <span>Số ngày hoàn thành</span>
                        <br />
                        <span>Kiểm tra</span>
                    </div>
                    <div className='box'>
                        <span>Chỉ ghi trong ngày</span>
                    </div>
                </div>
                <div className='container_workList'>
                    
                </div>
            </div>
        </>
    )
}

export default Home;
