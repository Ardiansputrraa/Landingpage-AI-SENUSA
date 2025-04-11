import Hero from "@/components/main/Hero";
import About from "@/components/main/About";
import OurTeam from "@/components/main/OurTeam";
import ManagePatients from "@/components/main/features/ManagePatients";
import Report from "@/components/main/features/Report";
import VariantQuery from "@/components/main/features/VariantQuery";
import Acknowledgment from "@/components/main/Acknowledgment";
import Publications from "@/components/main/Publications";
import Model from "@/components/main/Model";

export default function Home() {
  return (
    <main className="h-full w-full">
      {/* <div className="flex flex-row py-4 md:py-8 px-4 md:px-14 justify-between">
          <video
            autoPlay
            muted
            loop
            className="rotate-180 absolute top-[-530px] md:top-[-300px] xl:top-[-700px] h-full w-full left-0 z-[1] object-cover"
          >
            <source src="/blackhole.webm" type="video/webm" />
          </video>
      </div> */}
      <div className="flex flex-col gap-10 md:gap-20">
        <Hero />
        <div id="About" className="flex flex-col items-center justify-center w-full">
        <About />
        </div>
        <div id="AI-Model" className="flex flex-col items-center justify-center w-full">
        <Model />
        </div>
        {/* <div id="Features" className="flex flex-col items-center justify-center w-full">
        <ManagePatients />
        <Report />
        <VariantQuery />
        </div> */}
        {/* <div id="Acknowledgment" className="flex flex-col items-center justify-center w-full">
        <Acknowledgment />
        </div> */}
        {/* <div id="Publications" className="flex flex-col items-center justify-center w-full">
        <Publications />
        </div> */}
        {/* <div id="Our-Team" className="flex flex-col items-center justify-center w-full">
        <OurTeam />
        </div> */}
      </div>
    </main>
    
  );
}
