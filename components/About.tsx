import { useState } from "react"
import { FaHandPaper } from "react-icons/fa"
const About = () => {
    const [heading] = useState<string>('hello everyone');
    const [description] = useState<string>('I\'m Shakil Khan, a full-stack developer experienced in JavaScript, React, Next, Express, MongoDB, etc, I am a backend developer at Hidden Logics, I teach on udemy since 2017 and also I educate people on my Youtube channel. I am a big fan of blockchain technology my next goal is to become an expert in blockchain technology.');
  return (
    <div className="py-6 border-b border-zinc-700">
    <h3 className="text-gray-400 capitalize text-lg font-medium">contacts</h3>
    <h1 className="text-white text-2xl font-medium capitalize my-2 flex items-center">{heading} <FaHandPaper className="ml-3 text-yellow-400 rotate-[10deg]" /></h1>
    <p className="text-gray-400 font-medium ">{description}</p>
    </div>
  )
}

export default About