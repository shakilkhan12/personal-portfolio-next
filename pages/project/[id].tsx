import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect, useState } from "react"
import { IoIosArrowRoundBack } from "react-icons/io"
import Header from '../../components/Header'
import Data from "../../data/projects.json"
import Footer from '../../components/Footer'
interface Projects {
  id: number;
  title: string;
  stack: string[];
  description: string;
  link: string;
  code: string;
}
const project = () => {
  const {query, back} = useRouter();
  const [details, setDetails] = useState<Projects>();
  const id: number | any = query.id;
  useEffect(() => {
    const response: Projects | any = Data.find(pro => pro.id == id);
    setDetails(response)
  }, [id])
  console.log(details)
  return (
    <div>
         <Head>
        <title>{details && details.title}</title>
        <meta name="description" content={details && details.description} />
        <link rel="icon" href="/images/javascript.png" />
      </Head>
      <div className='max-w-screen-lg mx-auto py-20 px-5'>
        <Header />
        <div className='my-5'>
          <div className='text-orange-500 flex items-center capitalize mb-2 cursor-pointer' onClick={() => back()}>
           <IoIosArrowRoundBack size={22} /> go back
          </div>
          {details && <>
            <h1 className='text-2xl text-white font-bold'>{details.title}</h1>
            <div className='flex flex-wrap -mx-2 my-3'>
              {details.stack.length > 0 && details.stack.map((stack: string, index) => (
                <span key={index} className="p-2">
                  <span className='bg-zinc-800 text-white px-4 py-1.5 uppercase font-medium rounded-full text-xs'>{stack}</span>
                </span>
              ))}
            </div>
            <div>
              <li className='text-orange-500'>
                <a href={details.link} className="text-orange-500 capitalize" target="_blank">live demo</a>
              </li>
              <li className='text-orange-500'>
                <a href={details.code} className="text-orange-500 capitalize" target="_blank">source code</a>
              </li>
            </div>
            <p className='text-gray-400 mt-3'>{details.description}</p>
          </>}
          
        </div>
        <Footer />
        </div>
    </div>
  )
}

export default project