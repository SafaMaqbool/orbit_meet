import React from 'react'
import StudentCard from './StudentCard';

const students = [
    {
        name: "Wania Faheem",
        url: "/images/student1.jpg"
    },
    {
        name: "Safa Maqbool",
        url: "/images/student2.jpg"
    }
] as const;

const Students = () => {
    return (
        <div className='flex gap-2 items-center justify-center'>
            {
                students.map((item, index) => (
                    <StudentCard key={index} name={item.name} url={item.url} />
                ))
            }

        </div>
    )
}

export default Students