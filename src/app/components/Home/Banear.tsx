/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";

const Banear = () => {
  const { theme } = useTheme();
  const isDarkMode = theme ? theme === "dark" : false;

  return (
    <div
      className={`w-full h-auto overflow-hidden transition-all duration-500 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="lg:px-16 xs:px-4 xs:py-10 sm:py-10 px-8 py-1 pb-4 h-full flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col z-10 w-full">
            <h4 className="text-lg font-semibold xl:text-2xl">
              Welcome to my portfolio
            </h4>
            <h1 className="md:text-2xl lg:text-3xl text-xl font-semibold font-serif mt-2">
              I'm{" "}
              <span className={isDarkMode ? "text-blue-300" : "text-blue-900"}>
                OMAR FARUK
              </span>
            </h1>
            <h4
              className={`mt-4 lg:text-2xl ${
                isDarkMode ? "text-blue-300" : "text-blue-900"
              }`}
            >
              -- FrontEnd Web Developer
            </h4>
            <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
              A passionate <strong>Full Stack Developer</strong> specializing in
              the <strong>MERN Stack</strong> and modern frameworks like{" "}
              <strong>Next.js</strong>. I build dynamic, responsive, and
              user-friendly web applications with expertise in{" "}
              <strong>HTML, CSS, JavaScript</strong>, and <strong>React</strong>
              . From crafting seamless front-end interfaces to developing robust
              back-end systems, I deliver scalable and efficient solutions.
            </p>
            <p className="mt-6 text-xl sm:text-2xl font-semibold">
              Let&apos;s create something amazing together!
            </p>
           <div className="flex w-96 justify-between mx-auto">
           <div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`mt-6 px-6 py-3 rounded-full transition-all duration-300 ease-in-out shadow-md ${
                  isDarkMode
                    ? "bg-blue-500 hover:bg-blue-300 text-gray-900"
                    : "bg-blue-900 hover:bg-blue-700 text-white"
                }`}
              >
                Contact Me
              </motion.button>
            </div>
            <div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`mt-6 px-6 py-3  rounded-full transition-all duration-300 ease-in-out shadow-md ${
                  isDarkMode
                    ? "bg-blue-500 hover:bg-blue-300 text-gray-900"
                    : "bg-blue-900 hover:bg-blue-700 text-white"
                }`}
              >
                Download Resume 
              </motion.button>
            </div>
           </div>
          </div>
          <div className="flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                className="w-full h-auto"
                src="https://images.unsplash.com/photo-1632255658480-3546119b5ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNXx8cG9ydGZvbGlvfGVufDB8MXx8fDE3MzczNzQxMDd8MA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Profile Image"
                width={500}
                height={500}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banear;
