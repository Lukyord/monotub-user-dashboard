import Link from "next/link"
import React from "react"

import { FaGithub } from "react-icons/fa6"

export default async function Home() {
  return (
    <section className="flex h-[92vh] w-screen flex-col items-center justify-center overflow-hidden">
      <video
        src={"/video/video.mp4"}
        autoPlay
        muted
        loop
        className="absolute -z-10 h-[92vh] w-[100%] object-cover"
      />

      <div className="absolute -z-10 h-[92vh] w-[100%] bg-black opacity-20" />

      <h1 className="py-8 text-6xl font-bold text-white">
        Automated Monotub User Dashboard
      </h1>
      <div className="flex gap-6">
        <Link
          href="/dashboard"
          className="
                  rounded-lg border   
                  border-gray-200 px-5 py-2.5 text-center 
                  text-gray-200 transition-all 
                  hover:bg-gray-200 hover:text-gray-900"
        >
          Dashboard
        </Link>
        <Link
          href="https://github.com/Lukyord/mototub-user-dashboard"
          target="_blank"
          className="
          group flex gap-3 rounded-lg border
          border-white px-5 py-2.5 text-center 
          text-white transition-all 
          hover:bg-white hover:text-gray-900"
        >
          <FaGithub
            size={24}
            className="text-white group-hover:text-gray-900"
          />
          <p>GitHub Repository</p>
        </Link>
      </div>
    </section>
  )
}
