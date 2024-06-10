import React from 'react'
import { BsCameraVideo, BsCalendar, BsShare, BsFillCameraVideoFill, BsPhone } from 'react-icons/bs';
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import { SiWebcomponentsdotorg } from "react-icons/si";
import { DiDatabase } from "react-icons/di";
import FeatureCard from './FeatureCard';
import { icons } from 'lucide-react';


const features = [
    {
        title: "Create Instant Meeting",
        description: "Quickly start a meeting with a single click, without the need for scheduling.",
        icon: BsCameraVideo,
        sequence: 1,
    },
    {
        title: "Schedule Meeting",
        description: "Plan meetings ahead of time with easy-to-use scheduling options.",
        icon: BsCalendar,
        sequence: 2,
    },
    {
        title: "Share Meeting Links with Others",
        description: "Easily share your meeting link via email or social media to invite participants.",
        icon: BsShare,
        sequence: 3,
    },
    {
        title: "Record Meeting Sessions",
        description: "Record your meetings and download the video files for later review.",
        icon: BsFillCameraVideoFill,
        sequence: 4,
    },
    {
        title: "Mobile Friendly",
        description: "Enjoy a seamless meeting experience on your mobile devices.",
        icon: BsPhone,
        sequence: 5,
    },
    {
        title: "Secure Authentication",
        description: "Protect your meetings with robust authentication mechanisms.",
        icon: RiLockPasswordFill,
        sequence: 6,
    },
    {
        title: "Google/GitHub Authentication",
        description: "Log in quickly using your Google or GitHub accounts for added convenience.",
        icon: AiFillGithub,
        sequence: 7,
    },
    {
        title: "Modern Web Tools",
        description: "Built using the latest web technologies for optimal performance and scalability.",
        icon: SiWebcomponentsdotorg,
        sequence: 8,
    },
    {
        title: "Cloud Database",
        description: "Store and manage data securely in the cloud for easy access and scalability.",
        icon: DiDatabase,
        sequence: 9,
    }
] as const;


const Features = () => {
    return (
        <div className='text-black rounded-md p-10 bg-white shadow-2xl mb-28'>
            <h1 className='text-3xl font-bold text-center text-black mb-10'>Features</h1>
            <div className='grid grid-cols-2 gap-3'>
                {
                    features.map((item, index) => (
                        <FeatureCard key={index} title={item.title} description={item.description} Icon={item.icon} />
                    ))
                }
            </div>
        </div>
    )
}

export default Features