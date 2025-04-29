import React from 'react';
import { HiHome, HiUser, HiBriefcase, HiDocumentText, HiMail } from 'react-icons/hi';

const icons = [
    { id: 0, name: 'skills', icon: <HiUser /> },
    { id: 1, name: 'works', icon: <HiBriefcase /> },
    { id: 2, name: 'home', icon: <HiHome /> },
    { id: 3, name: 'resume', icon: <HiDocumentText /> },
    { id: 4, name: 'contact', icon: <HiMail /> },
];

const MobNavBar = () => {
    return (
        <div data-aos="fade-down" >
            <div className="hidden md:flex fixed bottom-4 left-1/2 -translate-x-1/2 bg-[#0f111c] px-4 py-4 rounded-xl items-center justify-between gap-4 z-50 shadow-lg"
                style={{
                    width: '90%',
                    boxShadow: '#c4f000 0px 2px 0px 0px inset',
                    backgroundColor: '#111827',
                }}>
                {icons.map((item) => (
                    <div
                        key={item.id}
                        className={`flex items-center justify-center rounded-md transition
                        ${item.name === 'home'
                                ? 'bg-[#a3e635] text-white px-4 py-2 text-lg font-semibold'
                                : 'bg-[#1c1e2d] text-white text-xl p-2 w-10 h-10'}`}
                    >
                        {item.icon}
                        {item.name === 'home' && <span className="ml-2">Home</span>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MobNavBar;
