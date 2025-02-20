"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useGetAllProjectsQuery } from "@/redux/features/projectsManagment/projectManagmentApi";
import LoadingProgress from "../shared/LoadingProgress";
import { TProject } from "@/types";
import Link from "next/link";

const FeaturProjectSlider = () => {
    const { data, error, isLoading } = useGetAllProjectsQuery(undefined);
    const allProject = data?.data;
    const projects = allProject?.slice(0, 4);

    if (isLoading) {
        return <LoadingProgress />;
    }

    if (error) {
        return <div>Data not fetched</div>;
    }

    return (
        <div className="container mx-auto">
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    480: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 1,
                    },

                    768: {
                        slidesPerView: 2,
                    },

                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                <div className="lg:p-8 md:p-4 p-2">
                    {projects.map((item: TProject) => (
                        <SwiperSlide key={item?._id}>
                            <div
                                className="flex items-end overflow-hidden bg-cover rounded-lg h-96"
                                style={{ backgroundImage: `url(${item.image})` }}
                            >
                                <div className="w-full px-4 py-2 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                    <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                                        {item.title}
                                    </h2>
                                    <p className="mt-2 text-lg tracking-wider text-yellow-400 uppercase font-medium">
                                        <button className="bg-blue-800 rounded-full p-2">
                                            <Link href={item?.liveLink} target="_blank" > Live Demo </Link>
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </div>
    );
};

export default FeaturProjectSlider;