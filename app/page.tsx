import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { WaveDivider } from "../components/wavedivider";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />

      <main>
        {/** ROW 1 */}
        <div className="bg-(--peach) p-[80px] flex items-center justify-center text-center">
          <div className="w-[50%]">
            <div className="flex bg-(--peach) justify-center">
              <h1 className='pt-[1.5vw] text-(--background)'>Welcome</h1>
              <div className='text-(--background) pl-[1.4vw] pt-[2vw]' style={{ fontSize: 'clamp(1.5rem, 5.2vw, 75px)' }}>
                ❀˖°
              </div>
            </div>
            <div className='text-(--background) font-(--font-itim)' style={{ fontSize: 'clamp(1rem, 2.1vw, 30px)' }}>
              <p>hello! my name is keyura and im a student at ucsd! feel free to take a look at my projects below :D</p>
            </div>
          </div>
        </div>
      </main>

      <WaveDivider top={"#c97a62"} 
                    ribbon={"#d8a94f"} 
                    bottom={"#e7d6c4"}/>

      <div className="flex pt-[0em] pb-[7em]">
        <div className="w-[50%]" style={{ paddingLeft: '5.5vw', marginRight: '1.4vw' }}>
          <h2 className=''>Capchd V2</h2>
          <p className="pb-[2em]">
            This is the current project im working on as a developer intern at SDSC (San Diego Supercomputing Center)! Currently, I am working on DevOps on the project, by setting up Docker on an SDSC instance and creating CI/CD pipelines. Previously, I created scaffolding for the frontend by using React, Nextjs, and Tailwind.
          </p>
          <a href="capchd" className='text-(--redorange) hover:text-(--peach)'>Click here to see more about this project o( ❛ᴗ❛ )o</a>
        </div>

        {/* image goes here */}
        <div style={{borderRadius: '5px', overflow: 'hidden', marginRight: '5.5vw'}} className="outline-solid outline-(--yellow)">
          <Image src="/capchd.png" height={100} width={750} alt="capchd website"/>
        </div>
      </div>

      <WaveDivider top={"#e7d6c4"} 
                    ribbon={"#d8a94f"} 
                    bottom={"#8c8b5e"}
      />

      <div className="bg-(--green) text-(--background) flex pt-[0em] pb-[7em]">
        <div className="w-[50%]" style={{ paddingLeft: '5.5vw', marginRight: '1.4vw' }}>
          <div className="flex"><h2 className='pr-[0.25em]'>clubhive</h2> <Image src="/bee.svg" width={50} height={0} alt="decal" /></div>
          <p className="pb-[2em]">
            I worked on this website during my Summer Program at SDSC. 
          </p>
          <a href="clubhive" className='text-[#efc67b] hover:text-(--background)'>Click here to see more about this project (✧ω✧)</a>
        </div>

        {/* image goes here */}
        <h2>hi i am an imaeg</h2>
      </div>

      <WaveDivider top={"#8c8b5e"} 
                    ribbon={"#d8a94f"} 
                    bottom={"#e7d6c4"} />

      <div className="flex pt-[0em] pb-[7em]">
        <div className="w-[50%]" style={{ paddingLeft: '5.5vw', marginRight: '1.4vw' }}>
          <h2 className='pr-[0.25em]'>Analytics Web App</h2> 
          <p className="pb-[2em]">
            I worked on this website during my Summer Program at SDSC. 
          </p>
          <a href="cse135" className='text-(--redorange) hover:text-(--peach)'>Click here to see more about this project! &gt;ᴗ&lt;</a>
        </div>

        {/* image goes here */}
        <h2>hi i am an imaeg</h2>
      </div>

      <WaveDivider top={"#e7d6c4"} 
                    ribbon={"#d8a94f"} 
                    bottom={"#a55d40"} />

      <div className="bg-(--redorange) text-(--background) flex pt-[0em] pb-[5em]">
        <div className="w-[50%]" style={{ paddingLeft: '5.5vw', marginRight: '1.4vw' }}>
          <h2 className='pr-[0.25em]'>Keebs @ UCSD: Website</h2> 
          <p className="pb-[2em]">
            I worked on this website during my Summer Program at SDSC. 
          </p>
        </div>

        {/* image goes here */}
        <h2>hi i am an imaeg</h2>
      </div>

      <WaveDivider top={"#a55d40"} 
                    ribbon={"#d8a94f"} 
                    bottom={"#e7d6c4"} />

      <div className="flex pt-[0em] pb-[5em]">
        <div className="w-[50%]" style={{ paddingLeft: '5.5vw', marginRight: '1.4vw' }}>
          <h2 className='pr-[0.25em]'>Other People Magazine</h2> 
          <p className="pb-[2em]">
            I worked on this website during my Summer Program at SDSC. 
          </p>
        </div>

        {/* image goes here */}
        <h2>hi i am an imaeg</h2>
      </div>

      <WaveDivider top={"#e7d6c4"} 
                    ribbon={"#d8a94f"} 
                    bottom={"#7c597e"} />

      <div className="bg-(--purple) text-(--background) flex pt-[0em] pb-[7em]">
        <div className="w-[50%]" style={{ paddingLeft: '5.5vw', marginRight: '1.4vw' }}>
          <h2 className='pr-[0.25em]'>Virene</h2> 
          <p className="pb-[2em]">
            I worked on this website during my Summer Program at SDSC. 
          </p>
          <a href="cse135" className='text-[#efc67b] hover:text-(--background)'>Click here to see more about this project! ( ´ ꒳ ` )</a>
        </div>

        {/* image goes here */}
        <h2>hi i am an imaeg</h2>
      </div>

      <WaveDivider top={"#7c597e"} 
                    ribbon={"#d8a94f"} 
                    bottom={"#e7d6c4"} />
    </div>
  );
}