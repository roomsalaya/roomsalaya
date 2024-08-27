import React, { useState } from 'react';
import './AddPackageForm.css'; // เพิ่มไฟล์ CSS สำหรับการจัดการสไตล์

const AddPackageForm = () => {
    const [packageData, setPackageData] = useState({
        trackingNumber: '',
        recipient: '',
        deliveryAddress: '',
        // เพิ่มฟิลด์อื่นๆ ตามต้องการ
    });

    // กำหนดประเภทของ e เป็น React.ChangeEvent<HTMLInputElement>
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPackageData({
            ...packageData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // ดำเนินการส่งข้อมูลไปยัง backend
        } catch (error) {
            console.error('Error adding package:', error);
            alert('เกิดข้อผิดพลาดในการเพิ่มพัสดุ');
        }
    };

    return (
        <div className="form-container">
            <h2>เพิ่มพัสดุใหม่</h2>
            <form onSubmit={handleSubmit} className="package-form">
                <div className="form-group">
                    <label htmlFor="trackingNumber">หมายเลขติดตาม:</label>
                    <input
                        type="text"
                        id="trackingNumber"
                        name="trackingNumber"
                        value={packageData.trackingNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="recipient">ผู้รับ:</label>
                    <input
                        type="text"
                        id="recipient"
                        name="recipient"
                        value={packageData.recipient}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="deliveryAddress">ที่อยู่จัดส่ง:</label>
                    <input
                        type="text"
                        id="deliveryAddress"
                        name="deliveryAddress"
                        value={packageData.deliveryAddress}
                        onChange={handleChange}
                        required
                    />
                </div>
                {/* เพิ่มฟิลด์อื่นๆ ตามต้องการ */}
                <button type="submit" className="submit-button">เพิ่มพัสดุ</button>
            </form>
        </div>
    );
};

export default AddPackageForm;
