import About from "@/components/About";
import RedDiamond from "@/components/Bulletpoints";
import SvgComponent from "@/components/Bulletpoints";
import Progressindicator from "@/components/Progressindicator";
import Crosses from "@/components/Rcrosses";
import RotatedCrosses from "@/components/Rcrosses";
import Roundpills from "@/components/Roundpills";
import Image from "next/image";
import { resolve } from "path";

export default async function Home() {

  await new Promise(resolve => setTimeout(resolve, 3000))
  return (
    <>
    <main className="flex justify-center items-center h-screen" >
      <div className="max-w-xs w-full rounded-lg shadow-lg "style={{backgroundColor:'#180B1A'}}>
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src="https://via.placeholder.com/300"
        alt="Card Image"
      />
      <div className="p-4" >
        <h2 className="text-xl font-semibold text-gray-800">Card Title</h2>
        <p className="mt-2 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="mt-4 flex justify-end">
          <a href="#" className="text-blue-500 hover:text-blue-600">
            Read more
          </a>
        </div>
      </div>
      {/* <Roundpills /> */}
      {/* <Crosses angle={180} repetition={3} offsetX={10} offsetY={-30} color={'#FFF'}/> */}
      <RedDiamond size={40} />
    </div>
    </main>
    <section>
      <About />

    </section>
    </>
  );
}
