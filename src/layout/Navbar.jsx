import { Button, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Header from "./Header";
import React from "react";

const Layouts = ({ children }) => {

    return (
        <Layout>
            <Header />
            <Content className="container_layout">
                <div className="container_content">
                    <div className="subMenu">
                        <Button type="primary">
                            <span>&#128202;</span>
                            <span style={{ color: "#fff", fontWeight: 500 }}>
                                Primary button
                            </span>
                        </Button>

                        <Button style={{ border: "none" }}>
                            <span>&#128221;</span>
                            <span style={{ color: "#43536a", fontWeight: 500 }} >
                                File New Claim
                            </span>
                        </Button>

                        <Button style={{ border: "none" }}>
                            <span>&#128269;</span>
                            <span style={{ color: "#43536a", fontWeight: 500 }}>
                                Track Claims
                            </span>
                        </Button>
                    </div>
                    <div className="block_content">
                        {children}
                    </div>
                </div>
            </Content>
        </Layout>
    )
}

export default Layouts;