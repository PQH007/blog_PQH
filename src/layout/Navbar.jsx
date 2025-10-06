import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Header from "./Header";
import React from "react";

const Layouts = ({ children }) => {

    return (
        <Layout>
            <Header />
            <Content className="container_layout">
                {children}
            </Content>
        </Layout>
    )
}

export default Layouts;