import React from "react";

const CardExtra = ({ dataCardExtra }) => {
    return (
        <div className="container_card-extra">
            <div className="content_title_card-extra">
                <h3 className="title">{dataCardExtra?.title}</h3>
                <p className="desc_card-extra">{dataCardExtra?.desc}</p>
            </div>
            <div className="content_children_card-extra">
                {
                    dataCardExtra?.children && dataCardExtra?.children.length > 0 ? (
                        dataCardExtra?.children.map((child, index) => (
                            <div key={index} className="child_card-extra">
                                {child}
                            </div>
                        ))
                    )
                        : ("")
                }
            </div>
        </div>
    )
}

export default CardExtra;