import Image from "next/image"
import { useState } from "react"
const Positions = () => {
    const [position] = useState([
        {
            id: 1,
            image: '/images/job.jpg',
            role: 'backend developer',
            type: 'remote',
            date: '10/2022 - 11/2022'
        },
        {
            id: 2,
            image: '/images/nordic.gif',
            role: 'Next JS Full Stack Developer',
            type: 'remote',
            date: '11/2022 - present'
        },
        {
            id:3,
            image: '/images/udemy2.png',
            role: 'instructor',
            // type: 'remote',
            date: '5/2017 - present',
            options: ['45000+ udemy students', 'Courses are includes projects']
        },
        {
            id:4,
            image: '/images/youtube.png',
            role: 'instructor',
            // type: 'remote',
            date: '2/2016 - present',
            options: ['1200+ youtube subsribers', 'Created courses on React, Redux, Context API, Sass etc.','Tutorial videos included projects such as social networks, Ecommerce, blogs, stripe integrations and more']
        }
    ])
  return (
    <div className="py-6 border-b border-zinc-700">
        <h3 className="text-gray-400 capitalize text-lg font-medium">work history</h3>
        {position.map(pos => (
            <div className="mt-6 flex space-x-3" key={pos.id}>
            <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden">
                <Image src={pos.image} fill alt="job" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
                <h2 className="text-white capitalize">{pos.role}</h2>
                <h5 className="text-gray-500 font-medium capitalize text-sm mt-[2px]">{pos.type} - <span>{pos.date}</span></h5>
                <div className="mt-2">
                {pos.options && pos.options.map(option => (
                    <li key={option} className="text-gray-400">{option}</li>
                )) }
                </div>
            </div>
        </div>
        ))}
        </div>
  )
}

export default Positions