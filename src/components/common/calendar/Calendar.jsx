import React, { useState } from "react";
import './calendarStyle.scss';
import { statusConfig } from "../../statusConfig/statusConfig";
import { Popconfirm, Popover, Select } from "antd";
import { TriangleRightIcon, TriangleLeftIcon, PlusIcon, PencilIcon, XCircleIcon, SyncIcon } from "@primer/octicons-react";

const events = {
    "2025-10-15": [
        { id: 1, type: "wedding", title: "Đám cưới Lan & Minh", description: "Lễ cưới tại nhà hàng Riverside." },
        { id: 2, type: "personal", title: "Mua quà cưới", description: "Cần mua quà tặng trước khi đi." }
    ],
    "2025-10-28": [
        { id: 3, type: "birthday", title: "Sinh nhật Mai", description: "Tiệc BBQ tại nhà lúc 19:00." }
    ],
    "2025-10-05": [
        { id: 4, type: "work", title: "Họp dự án Q4", description: "Đánh giá tiến độ 9 tháng đầu năm." },
        { id: 5, type: "work", title: "Đào tạo kỹ năng mềm", description: "Workshop kéo dài 3 tiếng." }
    ],
    // Ngày có nhiều loại công việc
    "2025-10-30": [
        { id: 6, type: "work", title: "Báo cáo cuối tháng", description: "Hoàn thành trước 17:00." },
        { id: 7, type: "personal", title: "Khám răng", description: "Lịch hẹn lúc 10:00." },
        { id: 8, type: "fitness", title: "Tập gym", description: "Buổi tập với HLV mới." }
    ],
    "2025-11-10": [
        { id: 9, type: "holiday", title: "Kỳ nghỉ lễ", description: "Bay đến Đà Lạt." }
    ]
};

const getDaysInMonth = (year, month) => {
    const date = new Date(year, month, 1);
    const daysArray = [];

    // ... (logic tính toán các ô trống giữ nguyên) ...
    let startDayOfWeek = date.getDay();
    if (startDayOfWeek === 0) startDayOfWeek = 7;
    startDayOfWeek = startDayOfWeek - 1;

    for (let i = 0; i < startDayOfWeek; i++) {
        daysArray.push({ key: `empty-${i}`, day: null, isCurrentMonth: false });
    }

    // Thêm các ngày của tháng hiện tại
    while (date.getMonth() === month) {
        const day = date.getDate();
        const fullDateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        // Lấy danh sách sự kiện, nếu không có thì là mảng rỗng
        const dayEvents = events[fullDateString] || [];

        let bgColor = null;
        if (dayEvents.length > 0) {
            const uniqueTypes = new Set(dayEvents.map(e => e.type));

            if (uniqueTypes.size > 1) {
                // Trường hợp 1: Nhiều loại sự kiện khác nhau
                bgColor = statusConfig.TYPE_COLORS.multiple;
            } else {
                // Trường hợp 2: Chỉ một loại sự kiện
                bgColor = statusConfig.TYPE_COLORS[dayEvents[0].type];
            }
        }

        // Cập nhật đối tượng ngày: sử dụng 'events' (số nhiều) và thêm 'bgColor'
        daysArray.push({
            key: fullDateString,
            day: day,
            isCurrentMonth: true,
            isToday: fullDateString === new Date().toISOString().slice(0, 10),
            events: dayEvents, // Đổi từ eventData sang dayEvents và đặt tên là events
            bgColor: bgColor   // Thêm thuộc tính màu nền
        });
        date.setDate(date.getDate() + 1);
    }

    return daysArray;
};

const handleAddNew = () => {

}



const Calendar = ({ currentYear, currentMonth, onPrevMonth, onNextMonth, currentDate, handleChange }) => {
    const [modalState, setModalState] = useState({
        isOpen: false,
        events: [],
        date: ''
    });

    const [isEdit, setIsEdit] = useState(false)

    const daysInMonth = getDaysInMonth(currentYear, currentMonth);

    const handleDayClick = (dayInfo) => {
        setModalState({
            isOpen: true,
            events: dayInfo.events,
            date: dayInfo.key
        });
    };

    const closeModal = () => {
        setModalState({ isOpen: false, events: [], date: '' });
    };

    const renderRepeat = () => {
        return (
            <div className="repeat-popconfirm">
                <Select placeholder="Loại lịch">
                    <option value="solar">Lịch dương</option>
                    <option value="type">Lịch âm</option>
                </Select>

                <Select placeholder="Loại lặp">
                    <option value="daily">Hàng ngày</option>
                    <option value="weekly">Hàng tuần</option>
                    <option value="monthly">Hàng tháng</option>
                    <option value="yearly">Hàng năm</option>
                </Select>
            </div>
        )
    }


    const EventModal = ({ events, date, onClose }) => {
        return (
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>  
                    <div className="modal-header">
                        <h3>Công việc ngày {date.split('-').reverse().join('/')}</h3>
                        <button className="modal-close-button" onClick={onClose}>&times;</button>
                    </div>
                    <ul className="event-list">
                        {events && events.length > 0 ? (
                            <>
                                {events.map(event => (
                                    <li key={event.id} className="event-item">
                                        <span
                                            className="event-type-color"
                                            style={{ backgroundColor: statusConfig.TYPE_COLORS[event.type] }}
                                            title={event.type}
                                        >
                                            {event.type.slice(0, 1).toUpperCase()}
                                        </span>
                                        <div className="event-details">
                                            <div className="details-header">
                                                <strong style={{ display: 'flex', flex: 1 }}>{event.title}</strong>
                                                <div className="action-details-header">
                                                    <button><PencilIcon color="#ff9800" /></button>
                                                    <Popover
                                                        content={renderRepeat()}
                                                        trigger="click"
                                                    >
                                                        <button><SyncIcon /></button>
                                                    </Popover>
                                                    <Popconfirm
                                                        title="Bạn có chắc muốn xóa công việc này?"
                                                        description="Hành động này không thể hoàn tác."
                                                        okText="Xóa"
                                                        cancelText="Hủy"
                                                    >
                                                        <button><XCircleIcon color="#e91e63" /></button>
                                                    </Popconfirm>
                                                </div>
                                            </div>
                                            <p>{event.description}</p>
                                        </div>
                                    </li>
                                ))}

                                <li
                                    key="new"
                                    className="event-item add-new"
                                    onClick={handleAddNew}
                                    style={{ cursor: "pointer", opacity: 0.7 }}
                                >
                                    <span className="event-type-color" style={{ backgroundColor: "#d9d9d9" }}>+</span>
                                    <div className="event-details">
                                        <div className="details-header">
                                            <strong style={{ display: 'flex', flex: 1 }}>Thêm công việc mới</strong>
                                            <div className="action-details-header">
                                                <button
                                                    onClick={() => setIsEdit(pre => !pre)}
                                                ><PencilIcon color="#ff9800" /></button>
                                                <Popover
                                                    content={renderRepeat()}
                                                    trigger="click"
                                                >
                                                    <button ><SyncIcon /></button>
                                                </Popover>
                                                <Popconfirm
                                                    title="Bạn có chắc muốn xóa công việc này?"
                                                    description="Hành động này không thể hoàn tác."
                                                    okText="Xóa"
                                                    cancelText="Hủy"
                                                >
                                                    <button><XCircleIcon color="#e91e63" /></button>
                                                </Popconfirm>
                                            </div>
                                        </div>
                                        <p>Nhấn để tạo công việc</p>
                                    </div>
                                </li>
                            </>
                        ) : (
                            // Nếu không có events thì vẫn hiện dòng thêm mới
                            <li
                                key="new"
                                className="event-item add-new"
                                onClick={handleAddNew}
                                style={{ cursor: "pointer", opacity: 0.7 }}
                            >
                                <span className="event-type-color" style={{ backgroundColor: "#d9d9d9" }}>+</span>
                                <div className="event-details">
                                    <div className="details-header">
                                        <strong style={{ display: 'flex', flex: 1 }}>Thêm công việc mới</strong>
                                        <div className="action-details-header">
                                            <button><PencilIcon color="#ff9800" /></button>
                                            <Popover
                                                content={renderRepeat()}
                                                trigger="click"
                                            >
                                                <button><SyncIcon /></button>
                                            </Popover>
                                            <Popconfirm
                                                title="Bạn có chắc muốn xóa công việc này?"
                                                description="Hành động này không thể hoàn tác."
                                                okText="Xóa"
                                                cancelText="Hủy"
                                            >
                                                <button><XCircleIcon color="#e91e63" /></button>
                                            </Popconfirm>
                                        </div>
                                    </div>
                                    <p>Nhấn để tạo công việc</p>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    };

    return (
        <div className="calendar-wrapper">
            <div className="calendar-container">
                {/* Header */}
                <div className="header">
                    {/* <h2>{monthName}</h2> */}
                    <input type="month" id="datePickerMonth"
                        value={currentDate} style={{ width: "100%" }}
                        onChange={handleChange} />
                    <button onClick={onPrevMonth}>{<TriangleLeftIcon size={24} />}</button>
                    <button onClick={onNextMonth}>{<TriangleRightIcon size={24} />}</button>
                </div>

                {/* Tên các ngày trong tuần */}
                <div className="weekdays">
                    {statusConfig.WEEKDAYS.map(day => (
                        <span key={day}>{day}</span>
                    ))}
                </div>

                {/* Lưới các ngày */}
                <div className="days-grid">
                    {daysInMonth.map(dayInfo => {
                        if (!dayInfo.isCurrentMonth) {
                            return <div key={dayInfo.key} className="day empty" />;
                        }

                        const classes = ['day'];
                        if (dayInfo.isToday) classes.push('today');

                        return (
                            <div
                                key={dayInfo.key}
                                className={classes.join(' ')}
                                onClick={() => handleDayClick(dayInfo)}
                            >
                                <span className="day-number">{dayInfo.day}</span>
                                {dayInfo.events.length > 0 && (
                                    <div
                                        className="event-marker"
                                        style={{ backgroundColor: dayInfo.bgColor }}
                                        title={dayInfo.events.length > 1 ? `Có ${dayInfo.events.length || 0} công việc` : dayInfo.events[0].title}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Modal */}
            {modalState.isOpen && (
                <EventModal
                    events={modalState.events}
                    date={modalState.date}
                    onClose={closeModal}
                />
            )}
        </div>
    );
}

export default Calendar;