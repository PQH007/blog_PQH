import React, { useState } from "react";
import CardExtra from "../../components/common/cardExtra/CardExtra";
import { Button } from "antd";
import { TrashIcon } from "@primer/octicons-react";
import { useNavigate } from "react-router-dom";
import './albumStyle.scss'
import SidebarAlbums from "./sidebar_albums/SidebarAlbums";
import MainAlbum from "./main_albums/MainAlbum";
const Albums = () => {
    const navigate = useNavigate()
    const [dataCardExtra, setDataCardExtra] = useState({
        title: 'Albums Management',
        desc: 'Quản lý album ảnh của bạn ở đây',
        children: [
            <Button
                onClick={() => navigate('/albums/list-delete')}
                className="btn_type_link"
            >
                <TrashIcon size={16} color="#0a0a0a" />
                <span>Danh sách đã xoá</span>
            </Button>
        ]
    })
    return (
        <>
            <CardExtra dataCardExtra={dataCardExtra} />
            <div className="container_albums">
                <SidebarAlbums />
                <MainAlbum />
            </div>
        </>
    )
}

export default Albums;