import InstaIcon from "../../public/icons/insta.svg";
import XIcon from "../../public/icons/x-social.svg";
import LinkedInIcon from "../../public/icons/linkedin.svg";
import YoutubeIcon from "../../public/icons/youtube.svg";
import GithubIcon from "../../public/icons/github.svg";
import Link from "next/link"

export default function Footer() {
  return (
    <>
      <footer className="bg-black text-white/70 border-t border-white/20">
        <div className="container">
          <div className="flex flex-col sm:flex-row  flex  gap-5 flex-col sm:justify-between">
            <div className="text-whtie/70 text-center ">
              All rights reserved
            </div>
            <ul className="flex justify-center gap-4 cursor-pointer ">
              <li>
                <InstaIcon />
              </li>
              <li>
                <XIcon />
              </li>
              <li>
                <LinkedInIcon />
              </li>
              <li>
                <YoutubeIcon />
              </li>
              <li>
                <Link href="https://github.com/nitesh2920/Saas-Landing-Page"><GithubIcon /></Link>
                
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
