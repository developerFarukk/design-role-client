



"use client"

import Image from "next/image";
import html from "/public/skillsicon/html-5.png";
import css from "/public/skillsicon/css-3.png";
import js from "/public/skillsicon/js.png";
import ts from "/public/skillsicon/typescript.png";
import axios from "/public/skillsicon/Axios.svg";
import express from "/public/skillsicon/Express.svg";
import firebase from "/public/skillsicon/Firebase.svg";
import mongoDB from "/public/skillsicon/MongoDB.svg";
import next from "/public/skillsicon/Next.js.svg";
import node from "/public/skillsicon/Node.js.svg";
import react from "/public/skillsicon/React.svg";
import tailwind from "/public/skillsicon/Tailwind CSS.svg";

const Skills = () => {
    return (
        <div>
            <div className="text-center text-3xl font-bold p-4">
                <h2>My Skills</h2>
            </div>
            <div className="flex flex-wrap justify-center">
                {skillIcon.map((skill) => (
                    <div
                        key={skill.id}
                        className="m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#abd373] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&_p]:delay-200 [&_p]:transition-all"
                    >
                        <Image
                            className="rounded-full lg:max-w-[70%] max-w-[60%] mx-auto outline outline-[.7rem] outline-offset-[.1rem] outline-rose-400/30"
                            src={skill.icon}
                            alt={skill.title}
                            width={100}
                            height={100}
                        />
                        <p className="cardtxt font-semibold  tracking-wider group-hover:text-gray-700 text-xl p-1 mt-1">
                            {skill.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;

const skillIcon = [
    {
        title: 'MongoDB',
        id: 1,
        icon: mongoDB,
    },
    {
        title: 'Express',
        id: 2,
        icon: express,
    },
    {
        title: 'Node',
        id: 3,
        icon: node,
    },
    {
        title: 'Firebase',
        id: 4,
        icon: firebase,
    },
    {
        title: 'HTML',
        id: 5,
        icon: html, 
    },
    {
        title: 'CSS',
        id: 6,
        icon: css, 
    },
    {
        title: 'JavaScript',
        id: 7,
        icon: js, 
    },
    {
        title: 'TypeScript',
        id: 8,
        icon: ts, 
    },
    {
        title: 'Axios',
        id: 9,
        icon: axios,
    },
    {
        title: 'Next',
        id: 10,
        icon: next,
    },
    {
        title: 'React',
        id: 11,
        icon: react,
    },
    {
        title: 'Tailwind CSS',
        id: 12,
        icon: tailwind,
    },
];