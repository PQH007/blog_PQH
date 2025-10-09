import React, { useState } from "react";
import '../albumStyle.scss'
import { Button, Input } from "antd";
import { SearchIcon, RepoIcon } from "@primer/octicons-react";
import Card_cus from "../../../components/common/card/Card_cus";
import ram from '../../../assets/images/dev/ram.jpg'
import CardColumn from "../../../components/common/cardColumn/cardColumn";

const SidebarAlbums = () => {

    const [idAlbumActive, setIdAlbumActive] = useState(1)

    const [dataCard, setDataCard] = useState([
        {
            id: 1,
            thumbnail: ram,
            name: 'Card Title 1',
            desc: 'This is a description for card 1.',
            createdAt: '04/05/2000',
            emoji: '1F3DD',
            type: 'Du lịch',
            color: 'pink'
        },
        {
            id: 2,
            name: 'Card Title 2',
            desc: 'This is a description for card 2.',
            createdAt: '25/11/2000',
            emoji: '26BD',
            type: 'Thể thao',
            color: 'red'
        },
        {
            id: 3,
            thumbnail: ram,
            name: 'Card Title 3',
            desc: 'This is a description for card 3.',
            createdAt: '29/11/2000',
            emoji: '1F466',
            type: 'Cá nhân',
            color: 'cyan',
        },
        {
            id: 4,
            thumbnail: ram,
            name: 'Card Title 4',
            desc: 'This is a description for card 3.',
            createdAt: '29/11/2000',
            emoji: '1F4BB',
            type: 'Công việc',
            color: 'green',
        },
        {
            id: 5,
            thumbnail: ram,
            name: 'Card Title 5',
            desc: 'This is a description for card 3.',
            createdAt: '29/11/2000',
            emoji: '1F46A',
            type: 'Gia đình',
            color: 'purple',
        },
        {
            id: 6,
            name: 'Card Title 6',
            desc: 'This is a description for card 3.',
            createdAt: '29/11/2000',
            emoji: '1F465',
            type: 'Bạn bè',
            color: 'volcano'
        }
    ])

    return (
        <div className="sidebar_albums">
            <div className="header_sidebar_albums">
                <h4>Danh sách Album</h4>
                <div className="container_action_sidebar_albums">
                    <Input
                        prefix={<SearchIcon />}
                        placeholder="Tìm kiếm..."
                        className="input_search_sidebar_album"
                    />
                    <Button style={{ background: "#1f883d" }}>
                        <RepoIcon size={16} color="#fff" />
                        <span style={{ color: "#fff", fontWeight: 500, fontSize: 14 }}>
                            New
                        </span>
                    </Button>
                </div>
            </div>
            <div className="container_albums_list">
                <CardColumn dataCard={dataCard} idActive={idAlbumActive} setIdActive={setIdAlbumActive} />
            </div>
            <div className="container_footer_sidebar_albums">
                <Button>
                    Xem thêm
                </Button>
            </div>
        </div >
    )
}

export default SidebarAlbums;