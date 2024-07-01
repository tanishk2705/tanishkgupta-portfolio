import TypeIt from "typeit-react";

export default function CliEdu() {
  return (
    <div className="flex flex-wrap max-w-full">
      <pre
        data-prefix="tanishk@fedora$"
        className="text-neutral-content ml-3 text-wrap w-full flex flex-wrap"
        style={{ "text-wrap": "wrap" }}
      >
          <div className="text-base" 
                    options={{
                      speed: 5,
                      waitUntilVisible: true,
                      cursor: false,
                    }}
          >
          <span className="text-base font-semibold text-success"> College: </span><br/>
          <span className="text-base text-info"> {" "} National Institute of Technology Raipur </span><br/>
          <span className="text-base"> {" "} 2021-2025</span><br/>
          <span className="text-base"> {" "} B.Tech. Computer Science Minor </span><br/>
          <span className="text-base"> {" "} (Ongoing) </span><br/>
          <span className="text-base font-semibold text-success"> Schooling: </span><br/>
          <span className="text-base text-info"> {" "} Prayash Residential High School Bilaspur</span><br/>
          <span className="text-base"> {" "} 2018-2020</span><br/>
          <span className="text-base"> {" "} Class XI - Class XII </span><br/>
          <span className="text-base text-info"> {" "} Jawahar Navodaya Vidyalaya Jashpur</span><br/>
          <span className="text-base"> {" "} 2017-2018</span><br/>
          <span className="text-base"> {" "} Class X </span><br/>
          
          
        </div>
      </pre>
    </div>
  );
}