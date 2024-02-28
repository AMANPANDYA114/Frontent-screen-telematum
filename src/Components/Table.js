import React from 'react';

export default function Table() {
    const appointments = [
        {
            "patient_name": "John Doe",
            "mobile_number": "123-456-7890",
            "appointment_date": "2024-02-26",
            "appointment_time": "10:00 AM",
            "doctor": "Dr. Smith",
            "injury": "Sprained ankle"
        },
        {
            "patient_name": "Jane Smith",
            "mobile_number": "987-654-3210",
            "appointment_date": "2024-02-26",
            "appointment_time": "11:30 AM",
            "doctor": "Dr. Johnson",
            "injury": "Back pain"
        },
        {
            "patient_name": "Michael Johnson",
            "mobile_number": "456-789-0123",
            "appointment_date": "2024-02-26",
            "appointment_time": "1:00 PM",
            "doctor": "Dr. Lee",
            "injury": "Headache"
        },
        {
            "patient_name": "Emily Davis",
            "mobile_number": "789-012-3456",
            "appointment_date": "2024-02-26",
            "appointment_time": "2:30 PM",
            "doctor": "Dr. Patel",
            "injury": "Sore throat"
        },
        {
            "patient_name": "David Wilson",
            "mobile_number": "321-654-9870",
            "appointment_date": "2024-02-26",
            "appointment_time": "4:00 PM",
            "doctor": "Dr. Garcia",
            "injury": "Fever"
        },
        {
            "patient_name": "Sarah Brown",
            "mobile_number": "654-321-0987",
            "appointment_date": "2024-02-26",
            "appointment_time": "5:30 PM",
            "doctor": "Dr. Kim",
            "injury": "Cough"
        }
    ];

    return (
        <div>
        <h1 className='my-7 mx-3 font-bold text-gray-500'>Todays appointments List</h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100 ">
                <thead className="text-xs text-black uppercase  bg-gray-100  border-b border-black-400 dark:text-black">
                    <tr>
                        <th scope="col" className="px-11 py-3">
                            #
                        </th>
                        <th scope="col" className="px-1 py-3">
                            Patient Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Time
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Doctor
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Injury
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((item, i) => (
                        <tr key={i} className="bg-white-600 border-b border-black-400 hover:bg-white-500">
                            <td className="px-11 py-1 font-medium text-black whitespace-nowrap dark:text-#4B5665-100 ">
                                <span className='px'>   <p style={{ color: 'blue', border: 'none', backgroundColor: 'blue', display: 'inline-block', width: '20px', height: '100%', marginLeft: '0%', border: '1px solid black', borderRadius: '10px' }}>
  -
</p></span>
                            </td>
                            <td className="px-2 py-4 font-medium text-black whitespace-nowrap dark:text-#4B5665-100">
                                <span style={{ marginLeft: '2px' }}>{item.patient_name}</span>
                                <br />
                                <span className='text-gray-500'>{item.mobile_number}</span>
                            </td>
                            <td className="px-6 py-4 font-medium text-black whitespace-nowrap">
                                {item.appointment_date}
                            </td>
                            <td className="px-6 py-4 font-medium text-black whitespace-nowrap">
                                {item.appointment_time}
                            </td>
                            <td className="px-6 py-4 font-medium text-black whitespace-nowrap">
                                {item.doctor}
                            </td>
                            <td className="px-6 py-4 font-medium text-black whitespace-nowrap">
                                <span className="border border-gray-300 rounded bg-gray-300 border-2 w-full px-5 py-2">{item.injury}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    );
}