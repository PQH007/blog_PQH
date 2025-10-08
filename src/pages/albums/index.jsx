import React, { useState } from "react";
import CardExtra from "../../components/common/cardExtra/CardExtra";
import { Button, Col, Row, Tooltip } from "antd";
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
            <Tooltip title="Lịch sử xoá">
                <Button
                    onClick={() => navigate('/albums/list-delete')}
                    style={{ border: 'none', padding: 0 }}
                ><TrashIcon size={24} color="#59636e" /></Button>
            </Tooltip>
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