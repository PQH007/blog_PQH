import React, { useState } from "react";
import '../albumStyle.scss'
import CardExtra from "../../../components/common/cardExtra/CardExtra";
import { Button, Collapse, Image, Input, Upload } from "antd";
import { TrashIcon, EyeIcon, PencilIcon, LockIcon, UnlockIcon, FileDirectorySymlinkIcon } from "@primer/octicons-react";
import { statusConfig } from '../../../components/statusConfig/statusConfig';
const { TextArea } = Input
const MainAlbum = ({ }) => {

    const [dataCardExtra, setDataCardExtra] = useState({
        title: 'Extra Card Title',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
        TYPE_DESC_ALBUMS: 'DEFAULT',
        children: [
            <Button><TrashIcon color="#59636e" size={12} /></Button>,
            <Button><EyeIcon color="#59636e" size={12} /></Button>
        ]
    })

    const [isEditDesc, setIsEditDesc] = useState(false)
    const [fileList, setFileList] = useState([]);
    const handleChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };
    return (
        <div className="main_albums">
            <CardExtra dataCardExtra={dataCardExtra} noneDesc={true} />
            <Collapse
                size="small"
                className="content_desc"
                items={
                    [{
                        key: '1',
                        label: (<div className="header_desc">
                            <span>
                                {String.fromCodePoint(parseInt(statusConfig.TYPE_DESC_ALBUMS[dataCardExtra?.TYPE_DESC_ALBUMS]?.emoji, 16))}
                            </span>
                            <h5>
                                {statusConfig.TYPE_DESC_ALBUMS[dataCardExtra?.TYPE_DESC_ALBUMS]?.text}
                            </h5>
                            <div className="header_desc_button">
                                <Button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setIsEditDesc(pre => !pre)
                                    }}
                                ><PencilIcon color="#59636e" size={12} /></Button>
                                <Button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                    }}
                                ><UnlockIcon color="#59636e" size={12} /></Button>
                            </div>
                        </div>),
                        children:
                            <div className="item_desc">
                                {
                                    isEditDesc ? (
                                        <TextArea defaultValue={dataCardExtra?.desc} />
                                    ) : (
                                        <p>{dataCardExtra?.desc}</p>
                                    )
                                }
                            </div>
                    }]
                }
            />
            <div div className="container_image_list" >
                <Upload
                    listType="picture-card"
                    className="upload_image"
                    fileList={fileList}
                    onChange={handleChange}
                    multiple
                    showUploadList={false}
                >
                    <span>
                        <FileDirectorySymlinkIcon />
                    </span>
                    <span>Upload</span>
                </Upload>
                {fileList.map((file, index) => (
                    <div className="item_image" key={index}>
                        <Image
                            src={URL.createObjectURL(file.originFileObj)}
                            alt={file.name}
                            fallback="data:image/png;base64,iVBORw0K..."
                        />
                    </div>
                ))}
            </div>
        </div >
    )
}

export default MainAlbum;
