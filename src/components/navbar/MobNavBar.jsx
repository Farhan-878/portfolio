import React from 'react';
import { HiHome, HiUser, HiBriefcase, HiDocumentText, HiMail } from 'react-icons/hi';
import { FcVoicePresentation } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import { FcNook } from "react-icons/fc";
import { FcHome } from "react-icons/fc";

const icons = [
    { id: 0, name: 'skills', icon: <FcPortraitMode /> },
    { id: 1, name: 'works', icon: <FcBriefcase /> },
    { id: 2, name: 'home', icon: <FcHome /> },
    { id: 3, name: 'resume', icon: <FcNook /> },
    { id: 4, name: 'contact', icon: <FcVoicePresentation /> },
];

const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth',
        });
    }
};

const MobNavBar = () => {
    return (
        <div data-aos="fade-down">
            <div
                className="hidden md:flex fixed bottom-4 left-1/2 -translate-x-1/2 bg-[#0f111c] px-4 py-4 rounded-xl items-center justify-between gap-4 z-50 shadow-lg"
                style={{
                    width: '90%',
                    // boxShadow: '#c4f000 0px 2px 0px 0px inset',
                    // backgroundColor: '#111827',
                    backgroundColor: "#1b2135",
                    boxShadow: 'inset 0 2px 0 0 #1d2338',
                }}
            >
                {icons.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.name)}
                        className={`flex items-center justify-center rounded-md transition
              ${item.name === 'home'
                                ? 'bg-[#a3e635] text-white px-4 py-2 text-lg font-semibold'
                                : 'bg-[#22283f] text-white text-xl p-2 w-10 h-10'}`}
                        style={{
                            boxShadow: "inset 0 2px 0 0 #242b45, 0 12px 16px 0 rgba(0, 0, 0, .06)",
                        }}
                    >
                        {item.icon}
                        {item.name === 'home' && <span className="ml-2">Home</span>}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MobNavBar;
