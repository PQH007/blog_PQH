import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Header from "./Header";
import React from "react";
const Layouts = ({ children }) => {

    return (
        <Layout>
            <Header />
            <Content className="container_layout">
                <div className="container_content">
                    <div className="block_content">
                        {children}
                    </div>
                </div>
            </Content>
        </Layout>
    )
}

export default Layouts;