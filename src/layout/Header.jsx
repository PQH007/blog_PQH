import React, { useState } from "react";
import { Dropdown, Image } from "antd";
import { Header } from "antd/es/layout/layout";
import './HeaderStyle.scss'
import Logo from '../assets/Images/logo/logo.png'
import Menu from "./Menu";
import Image_logo from "../assets/Images/logo/logo.png";
import { PersonIcon, GearIcon, SignOutIcon } from "@primer/octicons-react";

const HeaderAction = () => {

    const [openDrawer, setOpenDrawer] = useState(false)
    const [isDropdown, setIsDropdown] = useState(false)

    const handleMenu = () => {
        setIsDropdown((prevVisible) => !prevVisible);
    };

    const menuNotification = {
        items: [
            {
                key: "1",
                label:
                    <div className="container_dropDown_user">
                        <div className="container_user">
                            <Image src={Logo} alt="image logo" preview={false} className="image_avatar-user" />
                            <div className="content_info-user">
                                <span className="info_name-user">PQH tobi</span>
                                <span className="info_email-user">phanquochung@gmail.com</span>
                            </div>
                        </div>
                    </div>
                ,
            },
            {
                key: "2",
                label: <div className="item_dropDown">
                    <PersonIcon size={16} color="#59636e" />
                    <span>Profile</span></div>,
            },
            {
                key: "3",
                label: <div className="item_dropDown">
                    <GearIcon size={16} color="#59636e" />
                    <span>Settings</span></div>,
            },
            {
                key: "4",
                label: <div className="item_dropDown">
                    <SignOutIcon size={16} color="#59636e" />
                    <span>Logout</span></div>,
            }
        ],
    };


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
            <div className="container_user">
                <Dropdown
                    menu={menuNotification}
                    destroyOnHidden
                    trigger={["click"]}
                    open={isDropdown}
                    onOpenChange={handleMenu}
                >
                    <Image src={Image_logo} alt="avatar user" preview={false} className="image_avatar-user" />
                </Dropdown>
            </div>
            <Menu
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
            />
        </Header>
    );
};

export default HeaderAction;
