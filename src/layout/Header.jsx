import React, { useState } from "react";
import { Image } from "antd";
import { Header } from "antd/es/layout/layout";
import './HeaderStyle.scss'
import Logo from '../assets/Images/logo/logo.png'
import Menu from "./Menu";
const HeaderAction = () => {

    const [openDrawer, setOpenDrawer] = useState(false)

    return (
        <Header className="container_header">
            <div className="content_image-logo" onClick={() => {
                setOpenDrawer(pre => !pre)
            }}>
                <Image src={Logo} alt="image logo" preview={false} className="image_logo" />
            </div>
            <div className="content_menu">
                <h2>PQH blog</h2>
                <span>Trang chủ</span>
            </div>
            <Menu
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
            />
        </Header>
    );
};

export default HeaderAction;
