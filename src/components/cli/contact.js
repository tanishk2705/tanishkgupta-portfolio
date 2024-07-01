import TypeIt from "typeit-react";
import { GithubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "../Icons";

export default function CliContact() {
  return (
    <div className="flex flex-wrap max-w-full">
      <pre
        data-prefix="tanishk@fedora$"
        className="text-warning ml-3 text-base text-wrap w-full flex flex-wrap"
        style={{ "text-wrap": "wrap" }}
      >
          <div className="text-base" 
           > 
         <div className="text-base flex gap-1 mt-3">
                <TwitterIcon className="w-7 mx-2" />
                <div>Twitter:</div> 
                <a href="https://twitter.com/notnotrachit" target="_blank" className="underline">
                        @tanishk2772
                </a>
         </div>
          <div className="text-base flex gap-1 my-3"><GithubIcon className="w-7 mx-2"/><div>GitHub:</div> <a href="https://github.com/notnotrachit" target="_blank" className="underline">tanishk2705</a></div>
          <div className="text-base flex gap-1 my-3"><LinkedInIcon className="w-7 mx-2"/><div>LinkedIn:</div> <a href="https://linkedin.com/in/rachitkhurana1" target="_blank" className="underline">tanishkgupta</a></div>
          {/* <div className="text-base flex gap-1 mb-3"><InstagramIcon className="w-7 mx-2"/><div>Instagram:</div> <a href="https://instagram.com/notnotrachit" target="_blank" className="underline">tanishk</a></div> */}
        </div>
      </pre>
    </div>
  );
}
