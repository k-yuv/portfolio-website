import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { WaveDivider } from "@/components/wavedivider";

export default function Home() {
  return (
    <div className="">
      <Navbar />

      <main>
        {/** ROW 1 */}
        <div className="bg-(--peach) p-[80px] pb-[20px]">
          <div className="flex bg-(--peach)">
            <h1 className='pt-[20px] text-(--background)'>Welcome</h1>
            <div className='text-[75px] text-(--background) pl-[20px] pt-[30px]'>❀˖°</div>
          </div>
          <div className='text-(--background) text-[30px] font-(--font-itim) w-150'>
            <p>hello! my name is keyura and im a student at ucsd! feel free to take a look at my projects below :D</p>
          </div>
        </div>
      
      </main>
      <WaveDivider />


      <div className="flex">
            <h1 className='pt-[20px] text-(--background)'>Welcome</h1>
            <div className='text-[75px] text-(--background) pl-[20px] pt-[30px]'>❀˖°</div>
        </div>
        <div className="flex">
            <h1 className='pt-[20px] text-(--background)'>Welcome</h1>
            <div className='text-[75px] text-(--background) pl-[20px] pt-[30px]'>❀˖°</div>
        </div>
      <div className="flex">
            <h1 className='pt-[20px] text-(--background)'>Welcome</h1>
            <div className='text-[75px] text-(--background) pl-[20px] pt-[30px]'>❀˖°</div>
        </div>
        <div className="flex">
            <h1 className='pt-[20px] text-(--background)'>Welcome</h1>
            <div className='text-[75px] text-(--background) pl-[20px] pt-[30px]'>❀˖°</div>
        </div>

    </div>
    
  );
}
