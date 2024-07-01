import TypeIt from "typeit-react";

export default function CliAbout() {
  return (
    <div className="flex flex-wrap max-w-full">
      <pre
        data-prefix="tanishk@fedora$"
        className="text-info ml-3 text-wrap w-full flex flex-wrap"
        style={{ "text-wrap": "wrap" }}
      >
        <div className="lg:flex">
          <TypeIt
            className="text-base"
            options={{
              speed: 5,
              waitUntilVisible: true,
              cursor: false,
            }}
          >
            <span className="text-success">Name:</span> Tanishk Gupta
            <br />
            <span className="text-success">Age:</span> 22
            <br />
            <span className="text-success">Location:</span> Raipur,India
            <br />
            <span className="text-success">Bio:</span>
            <br />
              I&apos;m a passionate Full Stack Developer from India 🇮🇳
              <br />
               currently pursuing B.TECH from National Institue in Technology Raipur
              <br />
              I also love playing sports 
              <br />
              Presently I am looking for internship opportunities that can help me grow my technical knowledge.
              <br />
              Core Technical Member@{" "}
              <a
                href="https://fcc-nitrr.vercel.app/"
                target="_blank"
                className="underline"
              >
                FCC,NIT Raipur
              </a>            
          </TypeIt>
        </div>
      </pre>
    </div>
  );
}