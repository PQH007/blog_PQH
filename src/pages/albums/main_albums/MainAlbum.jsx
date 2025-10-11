import React, { useState } from "react";
import '../albumStyle.scss'
import CardExtra from "../../../components/common/cardExtra/CardExtra";

const MainAlbum = ({}) => {

    const [dataCardExtra, setDataCardExtra] = useState({
        title: 'Extra Card Title',
        desc: 'This is a description for the extra card.',
        children: [
            <div style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>Child Component 1</div>,
            <div style={{ backgroundColor: '#e0e0e0', padding: '10px', borderRadius: '5px' }}>Child Component 2</div>
        ]
    })

    return (
        <div className="main_albums">
            <CardExtra dataCardExtra={dataCardExtra} />
        </div>
    )
}

export default MainAlbum;