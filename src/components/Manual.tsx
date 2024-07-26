import React from 'react';
import { Link } from 'react-router-dom';
import './Manual.css'; // Import the CSS file
import { DoubleLeftOutlined } from '@ant-design/icons';

const Manual: React.FC = () => {
    return (
        <div className='manual-container'>
            <h2>คู่มือการใช้</h2> <Link to="/"><DoubleLeftOutlined />กดกลับหน้าแรก</Link>
            <iframe 
                title="Instructional Video"  // Add a title attribute
                allow="fullscreen;autoplay" 
                src="https://streamable.com/e/flote5?" 
                allowFullScreen
            ></iframe>
            <img src="https://i.ibb.co/PmhT3pF/Sequence-04-00-00-00-14-Still001.jpg" alt="Sequence-04-00-00-00-14-Still001" />
            <img src="https://i.ibb.co/yyPnvcn/Sequence-04-00-00-16-00-Still002.jpg" alt="Sequence-04-00-00-16-00-Still002" />
            <img src="https://i.ibb.co/4PxCqk2/Sequence-04-00-00-16-20-Still003.jpg" alt="Sequence-04-00-00-16-20-Still003" />
            <img src="https://i.ibb.co/2nsR0mx/Sequence-04-00-00-19-10-Still004.jpg" alt="Sequence-04-00-00-19-10-Still004" />
            <img src="https://i.ibb.co/LrWH1JY/Sequence-04-00-00-26-14-Still006.jpg" alt="Sequence-04-00-00-26-14-Still006" />
            <img src="https://i.ibb.co/jzrTQ1k/Sequence-04-00-00-29-24-Still007.jpg" alt="Sequence-04-00-00-29-24-Still007" />
            <img src="https://i.ibb.co/7pLgzQZ/Sequence-04-00-00-32-13-Still008.jpg" alt="Sequence-04-00-00-32-13-Still008" />
            <img src="https://i.ibb.co/89c87Cz/Sequence-04-00-00-36-10-Still009.jpg" alt="Sequence-04-00-00-36-10-Still009" />
            <img src="https://i.ibb.co/t4z14Lk/Sequence-04-00-00-43-03-Still010.jpg" alt="Sequence-04-00-00-43-03-Still010" />
            <img src="https://i.ibb.co/vw0H5RK/Sequence-04-00-00-50-16-Still011.jpg" alt="Sequence-04-00-00-50-16-Still011" />
            <img src="https://i.ibb.co/dQxvBsH/Sequence-04-00-00-54-03-Still012.jpg" alt="Sequence-04-00-00-54-03-Still012" />
        </div>
    );
};

export default Manual;
