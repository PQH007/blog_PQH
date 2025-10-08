import React from "react";
import { Button } from "antd";
const Submenu = ({ dataSubmenu }) => {
    return (
        <div className="subMenu">
            {
                dataSubmenu?.btns && dataSubmenu?.btns.length > 0 &&
                dataSubmenu?.btns.map((item, index) => (
                    <Button key={index} style={{ border: "none" }}>
                        <span>{item?.icon}</span>
                        <span style={{ color: "#43536a", fontWeight: 500 }}>
                            {item?.label}
                        </span>
                    </Button>
                ))
            }
            {
                dataSubmenu?.children && dataSubmenu?.children.length > 0 &&
                dataSubmenu?.children.map((child, index) => (
                    <div key={index}>
                        {child}
                    </div>
                ))
            }
        </div>
    )
}

export default Submenu;