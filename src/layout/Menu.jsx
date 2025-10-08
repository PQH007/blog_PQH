import React, { useState } from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom";
import { HomeIcon, CpuIcon, CopilotIcon, FileMediaIcon } from "@primer/octicons-react";

const Menu = ({ openDrawer, setOpenDrawer }) => {
    const [items] = useState([
        {
            label: <Link to="/">Home</Link>,
            key: "home",
            icon: <HomeIcon size={16} color="#59636e" />
        },
        {
            label: <Link to="/login">Login</Link>,
            key: "login",
            icon: <CpuIcon size={16} color="#59636e" />
        },
        {
            label: <Link to="/register">Register</Link>,
            key: "register",
            icon: <CopilotIcon size={16} color="#59636e" />
        },
        {
            label: <Link to="/album">Album</Link>,
            key: "album",
            icon: <FileMediaIcon size={16} color="#59636e" />
        },
    ]);

    return (
        <Drawer
            open={openDrawer}
            closable={false}
            onClose={() => {
                setOpenDrawer(false)
            }}
            placement="left"
            title="PQH tobi"
            width={320}
            className="drawer_menu"
        >
            <div className="content_menu-drawer">
                {
                    items.map((item) => (
                        <div key={item.key} className="menu_item">
                            {item.icon}
                            <span className="menu_label">{item.label}</span>
                        </div>
                    ))
                }
            </div>
        </Drawer>
    )
}

export default Menu;