import { BsGithub, BsTwitter, BsLinkedin, BsYoutube, BsInstagram, BsFacebook } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi";
import { useState } from "react"
const Contacts = () => {
    const [contacts] = useState([
        {id: 1, icon:<BsGithub className="text-gray-200"/>, title:'github', url:'https://github.com/shakilkhan12' },
        {id: 2, icon:<BsTwitter className="text-gray-200"/>, title:'twitter', url:'https://twitter.com/shakilkhan621' },
        {id: 3, icon:<BsLinkedin className="text-gray-200"/>, title:'linkedin', url:'https://linkedin.com/shakilkhan621' },
        {id: 4, icon:<BsYoutube className="text-gray-200"/>, title:'youtube', url:'https://youtube.com/@shakilkhanprogrammer' },
        {id: 5, icon:<BsInstagram className="text-gray-200"/>, title:'instagram', url:'https://www.instagram.com/shakilkhanprogrammer/' },
        {id: 6, icon:<BsFacebook className="text-gray-200"/>, title:'facebook', url:'https://facebook.com/shakilkhan621' },
        {id: 7, icon:<AiOutlineMail className="text-gray-200"/>, title:'Email', url:'mailto:shakilkhan621@gmail.com' },
        {id: 8, icon:<BiUserCircle className="text-gray-200"/>, title:'download CV', url:'/files/cv.pdf' },
    ]);
  return (
    <div className="py-6 border-b border-zinc-700">
        <h3 className="text-gray-400 capitalize text-lg font-medium">contacts</h3>
        <div className="flex flex-wrap -mx-2">
            {contacts.map(con => (
                <div key={con.id} className="p-2">
                    <a href={con.url} className="flex items-center bg-zinc-800 px-3 py-1.5 rounded-sm " target="-blank">
                {con.icon}
                 <span className="ml-2 text-gray-200 capitalize text-sm font-medium">{con.title}</span>
            </a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Contacts