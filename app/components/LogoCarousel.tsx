
import acmeLogo from "../../public/images/acme.png"
import quantumLogo from "../../public/images/quantum.png"
import echoLogo from "../../public/images/echo.png"
import celestialLogo from "../../public/images/celestial.png"
import pulseLogo from "../../public/images/pulse.png"
import apexLogo from "../../public/images/apex.png"
import Image from "next/image";

export default function LogoCarousel(){

    const Logos=[
        {src:apexLogo ,alt:"apex logo"       },
        {src:quantumLogo,alt:"quantum logo"},
        {src:acmeLogo, alt:"acme logo"},
        {src:echoLogo,alt:"echo logo"},
        {src:celestialLogo, alt:"celestial Logo"},
        {src:pulseLogo,alt:"pulse Logo"}

    ]

    return (
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]  ">
            <ul className="flex items-center justify-center [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                {Logos.map((item,index)=>{
                    return(
                        <li key={index}> 
                            <Image key={index} src={item.src} alt={item.alt} />
                        </li>
                    )
                })}
            </ul>
             <ul className="flex items-center justify-center [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true"  >
                {Logos.map((item,index)=>{
                    return(
                        <li key={index}> 
                            <Image key={index} src={item.src} alt={item.alt} />
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}
