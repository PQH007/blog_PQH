import React, { useState } from 'react';
import './homeStyle.scss';
import ram from '../../assets/images/dev/ram.jpg'
import Submenu from '../../components/common/submenu/Submenu';
import CardExtra from '../../components/common/cardExtra/CardExtra';
import Calendar from '../../components/common/calendar/Calendar';
const Home = () => {

    const [dataCard, setDataCard] = useState([
        {
            img: ram,
            title: 'Card Title 1',
            desc: 'This is a description for card 1.'
        },
        {
            img: ram,
            title: 'Card Title 2',
            desc: 'This is a description for card 2.'
        },
        {
            img: ram,
            title: 'Card Title 3',
            desc: 'This is a description for card 3.'
        }
    ])

    const [dataSubmenu, setDataSubmenu] = useState({
        btns: [
            {
                icon: '📊',
                label: 'Analytics'
            },
            {
                icon: '📁',
                label: 'File New Claim'
            },
            {
                icon: '🔍',
                label: 'Track Claims'
            }
        ],
        children: []
    })

    const [dataCardExtra, setDataCardExtra] = useState({
        title: 'Extra Card Title',
        desc: 'This is a description for the extra card.',
    })

    const now = new Date();

    const [currentDate, setCurrentDate] = useState(now);

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const handlePrevMonth = () => {
        // Tạo một Date mới và lùi lại 1 tháng
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1);
            return newDate;
        });
    };

    const handleNextMonth = () => {
        // Tạo một Date mới và tiến lên 1 tháng
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1);
            return newDate;
        });
    };

    const formatMonthValue = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        return `${year}-${month}`;
    };

    const handleChange = (e) => {
        const [year, month] = e.target.value.split("-");
        setCurrentDate(new Date(year, month - 1, 1));
    };
    return (
        <>
            <Submenu dataSubmenu={dataSubmenu} />
            <CardExtra dataCardExtra={dataCardExtra} />
            <div className='container_homePage'>
                <div className='container_daily'>
                    <div className='box'>
                        <Calendar
                            currentYear={currentYear}
                            currentMonth={currentMonth}
                            onPrevMonth={handlePrevMonth}
                            onNextMonth={handleNextMonth}
                            currentDate={formatMonthValue(currentDate)}
                            handleChange={handleChange}
                        />
                    </div>
                    <div className='box'>
                        <span>Mỗi ngày</span>
                        <br />
                        <span>Số ngày trước đó</span>
                        <br />
                        <span>Level</span>
                        <br />
                        <span>Số ngày hoàn thành</span>
                        <br />
                        <span>Kiểm tra</span>
                    </div>
                    <div className='box'>
                        <span>Chỉ ghi trong ngày</span>
                    </div>
                </div>
                <div className='container_workList'>

                </div>
            </div>
        </>
    )
}

export default Home;
