import React, { useState } from "react";
import { Button, Menu } from "antd";
import { Header } from "antd/es/layout/layout";

const HeaderAction = () => {
    const [items, setItems] = useState([
        {
            label: 'Home',
            key: 'home',
        },
        {
            label: 'Login',
            key: 'login',
        },
        {
            label: 'Register',
            key: 'register',
        }
    ])

    return (
        <Header>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['home']}
                items={items}
            />
        </Header>
    )
}

export default HeaderAction;