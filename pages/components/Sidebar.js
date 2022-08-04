import Image from 'next/image';
import {
    ChartBarIcon,
    ClockIcon,
    DotsHorizontalIcon,
    HomeIcon,
  } from "@heroicons/react/solid";
  import { FaMicrophoneAlt } from "react-icons/fa";
  import { RiCompassFill } from "react-icons/ri";

const Sidebar = () => {
    return (
        <section className='fixed top-0 z-40 flex flex-col p-4 items-center bg-black w-[90px] h-screen space-y-8'>
            <Image src="https://i.ibb.co/zN47HZf/download-removebg-preview-1.png" width={65} height={65} objectFit="contain"/>
           

            <div className='flex flex-col space-y-8'>
            <HomeIcon className="sidebarIcon text-white opacity-[0.85]" />
        <RiCompassFill className="sidebarIcon text-2xl" />
        <FaMicrophoneAlt className="sidebarIcon ml-1" />
        <ChartBarIcon className="sidebarIcon" />
        <ClockIcon className="sidebarIcon" />
        <DotsHorizontalIcon className="sidebarIcon" />
            </div>
        </section>
    );
};

export default Sidebar;