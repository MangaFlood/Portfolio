import React from 'react'
import Marque2 from './Marque2'
import SocialLinks from './SocialLinks'
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Marker from './Marker';



function Footer() {

    const SocialLinksData = [
        {link: "https://x.com/AyushPraja95294", logo: (<BsTwitterX />)},
        {link: "https://github.com/MangaFlood", logo: (<FaGithub />)},
        {link: "linkedin.com/in/ayush-prajapati-545714302", logo: (<FaLinkedinIn />)},
        {link: "https://www.instagram.com/_ayush_prajapati_89/", logo: (<FaInstagram />)},
        {link: "https://x.com/AyushPraja95294", logo: (<BsTwitterX />)},
        {link: "https://github.com/MangaFlood", logo: (<FaGithub />)},
        {link: "linkedin.com/in/ayush-prajapati-545714302", logo: (<FaLinkedinIn />)},
        {link: "https://www.instagram.com/_ayush_prajapati_89/", logo: (<FaInstagram />)},
        {link: "https://x.com/AyushPraja95294", logo: (<BsTwitterX />)},
        {link: "https://github.com/MangaFlood", logo: (<FaGithub />)},
        {link: "linkedin.com/in/ayush-prajapati-545714302", logo: (<FaLinkedinIn />)},
        {link: "https://www.instagram.com/_ayush_prajapati_89/", logo: (<FaInstagram />)},
        {link: "https://x.com/AyushPraja95294", logo: (<BsTwitterX />)},
        {link: "https://github.com/MangaFlood", logo: (<FaGithub />)},
        {link: "linkedin.com/in/ayush-prajapati-545714302", logo: (<FaLinkedinIn />)},
        {link: "https://www.instagram.com/_ayush_prajapati_89/", logo: (<FaInstagram />)},
        {link: "https://x.com/AyushPraja95294", logo: (<BsTwitterX />)},
        {link: "https://github.com/MangaFlood", logo: (<FaGithub />)},
        {link: "linkedin.com/in/ayush-prajapati-545714302", logo: (<FaLinkedinIn />)},
        {link: "https://www.instagram.com/_ayush_prajapati_89/", logo: (<FaInstagram />)},
        {link: "https://x.com/AyushPraja95294", logo: (<BsTwitterX />)},
        {link: "https://github.com/MangaFlood", logo: (<FaGithub />)},
        {link: "linkedin.com/in/ayush-prajapati-545714302", logo: (<FaLinkedinIn />)},
        {link: "https://www.instagram.com/_ayush_prajapati_89/", logo: (<FaInstagram />)},
        {link: "https://x.com/AyushPraja95294", logo: (<BsTwitterX />)},
        {link: "https://github.com/MangaFlood", logo: (<FaGithub />)},
        {link: "linkedin.com/in/ayush-prajapati-545714302", logo: (<FaLinkedinIn />)},
        {link: "https://www.instagram.com/_ayush_prajapati_89/", logo: (<FaInstagram />)},
        {link: "https://x.com/AyushPraja95294", logo: (<BsTwitterX />)},
        {link: "https://github.com/MangaFlood", logo: (<FaGithub />)},
        {link: "linkedin.com/in/ayush-prajapati-545714302", logo: (<FaLinkedinIn />)},
        {link: "https://www.instagram.com/_ayush_prajapati_89/", logo: (<FaInstagram />)},
        {link: "https://x.com/AyushPraja95294", logo: (<BsTwitterX />)},
        {link: "https://github.com/MangaFlood", logo: (<FaGithub />)},
        {link: "linkedin.com/in/ayush-prajapati-545714302", logo: (<FaLinkedinIn />)},
        {link: "https://www.instagram.com/_ayush_prajapati_89/", logo: (<FaInstagram />)},
        {link: "https://x.com/AyushPraja95294", logo: (<BsTwitterX />)},
        {link: "https://github.com/MangaFlood", logo: (<FaGithub />)},
        {link: "linkedin.com/in/ayush-prajapati-545714302", logo: (<FaLinkedinIn />)},
        {link: "https://www.instagram.com/_ayush_prajapati_89/", logo: (<FaInstagram />)},
        {link: "https://x.com/AyushPraja95294", logo: (<BsTwitterX />)},
        {link: "https://github.com/MangaFlood", logo: (<FaGithub />)},
        {link: "linkedin.com/in/ayush-prajapati-545714302", logo: (<FaLinkedinIn />)},
        {link: "https://www.instagram.com/_ayush_prajapati_89/", logo: (<FaInstagram />)},
        {link: "https://x.com/AyushPraja95294", logo: (<BsTwitterX />)},
        {link: "https://github.com/MangaFlood", logo: (<FaGithub />)},
        {link: "linkedin.com/in/ayush-prajapati-545714302", logo: (<FaLinkedinIn />)},
        {link: "https://www.instagram.com/_ayush_prajapati_89/", logo: (<FaInstagram />)},
        {link: "https://x.com/AyushPraja95294", logo: (<BsTwitterX />)},
        {link: "https://github.com/MangaFlood", logo: (<FaGithub />)},
        {link: "linkedin.com/in/ayush-prajapati-545714302", logo: (<FaLinkedinIn />)},
        {link: "https://www.instagram.com/_ayush_prajapati_89/", logo: (<FaInstagram />)},
        {link: "https://x.com/AyushPraja95294", logo: (<BsTwitterX />)},
        {link: "https://github.com/MangaFlood", logo: (<FaGithub />)},
        {link: "linkedin.com/in/ayush-prajapati-545714302", logo: (<FaLinkedinIn />)},
        {link: "https://www.instagram.com/_ayush_prajapati_89/", logo: (<FaInstagram />)},
        {link: "https://x.com/AyushPraja95294", logo: (<BsTwitterX />)},
        {link: "https://github.com/MangaFlood", logo: (<FaGithub />)},
        {link: "linkedin.com/in/ayush-prajapati-545714302", logo: (<FaLinkedinIn />)},
        {link: "https://www.instagram.com/_ayush_prajapati_89/", logo: (<FaInstagram />)},
        {link: "https://x.com/AyushPraja95294", logo: (<BsTwitterX />)},
        {link: "https://github.com/MangaFlood", logo: (<FaGithub />)},
        {link: "linkedin.com/in/ayush-prajapati-545714302", logo: (<FaLinkedinIn />)},
        {link: "https://www.instagram.com/_ayush_prajapati_89/", logo: (<FaInstagram />)},
        {link: "https://x.com/AyushPraja95294", logo: (<BsTwitterX />)},
        {link: "https://github.com/MangaFlood", logo: (<FaGithub />)},
        {link: "linkedin.com/in/ayush-prajapati-545714302", logo: (<FaLinkedinIn />)},
        {link: "https://www.instagram.com/_ayush_prajapati_89/", logo: (<FaInstagram />)},
        {link: "https://x.com/AyushPraja95294", logo: (<BsTwitterX />)},
        {link: "https://github.com/MangaFlood", logo: (<FaGithub />)},
        {link: "linkedin.com/in/ayush-prajapati-545714302", logo: (<FaLinkedinIn />)},
        {link: "https://www.instagram.com/_ayush_prajapati_89/", logo: (<FaInstagram />)},
        {link: "https://x.com/AyushPraja95294", logo: (<BsTwitterX />)},
        {link: "https://github.com/MangaFlood", logo: (<FaGithub />)},
        {link: "linkedin.com/in/ayush-prajapati-545714302", logo: (<FaLinkedinIn />)},
        {link: "https://www.instagram.com/_ayush_prajapati_89/", logo: (<FaInstagram />)},
        {link: "https://x.com/AyushPraja95294", logo: (<BsTwitterX />)},
        {link: "https://github.com/MangaFlood", logo: (<FaGithub />)},
        {link: "linkedin.com/in/ayush-prajapati-545714302", logo: (<FaLinkedinIn />)},
        {link: "https://www.instagram.com/_ayush_prajapati_89/", logo: (<FaInstagram />)},
    ]


  return (
    <div className='w-screen'>
        <div><Marker /></div>
        <div className='bg-[#FE0000]'>
            <div className='masker font-LeagueGothic-Regular px-[3vw] pt-[3vw] font-extrabold leading-none uppercase text-[4vw] tracking-tighter'>
                <h1>Reach out.....</h1>
                <h1>and I’ll bring your vision to life</h1>
                <h1>crafted with creativity and code.</h1>
            </div>
            <div className='py-2'><Marque2 /></div>
            <div className='flex justify-end flex-shrink-0'>
                {SocialLinksData.map((items, index) => <SocialLinks items={items} />)}
            </div>
        </div>
    </div>
  )
}

export default Footer
