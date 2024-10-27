import Image from 'next/image';

export default function Work() {
  return (
    <main className="mb-4">
      <div className="flex flex-wrap lg:flex-nowrap gap-6 lg:gap-8 mt-10 ml-4 lg:ml-10">
        
        {/* First Card */}
        <div className="cursor-pointer transition-transform transform hover:scale-105 hover:shadow-[0_6px_20px_rgba(14,165,233,0.7)] shadow-[0_4px_15px_rgba(14,165,233,0.5)] h-[500px] w-full sm:w-[80%] md:w-[45%] lg:w-[30%] xl:w-[30%] rounded-[60px] p-6 mt-24">
          <Image
            src="/iot2.jpg"
            alt="IoT"
            width={250}
            height={120}
            className="rounded-full object-cover mx-auto lg:ml-[80px]"
          />
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white text-center sm:text-left lg:ml-[100px] mt-4">
            IoT Project
          </h1>
          <a
  href="/iot.docx"
  download="IoT_Project_Documentation.docx"
  className="text-white hover:text-blue-300 transition-colors underline text-center mx-auto sm:ml-12 lg:ml-[70px] mt-4 lg:mt-[50px]"
>
  Download Project Documentation
</a>

        </div>
        
        {/* Second Card */}
        <div className="cursor-pointer transition-transform transform hover:scale-105 hover:shadow-[0_6px_20px_rgba(14,165,233,0.7)] shadow-[0_4px_15px_rgba(14,165,233,0.5)] h-[500px] w-full sm:w-[80%] md:w-[45%] lg:w-[30%] xl:w-[30%] rounded-[60px] p-6 mt-24">
          <Image
            src="/diet.jpg"
            alt="dietplanner"
            width={250}
            height={120}
            className="rounded-full object-cover mx-auto lg:ml-[80px]"
          />
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white text-center sm:text-left lg:mt-[10px] mt-4">
            GUI-Based Diet Planner
          </h1>
          <a
            href="/Presentation.pptm"
            download="Diet_planner.pptm"
            className="text-white hover:text-blue-300 transition-colors underline text-center mx-auto lg:ml-[80px] mt-4 lg:mt-[50px]"
          >
            Download Project Documentation
          </a>
        </div>
        
        {/* Third Card */}
        <div className="cursor-pointer transition-transform transform hover:scale-105 hover:shadow-[0_6px_20px_rgba(14,165,233,0.7)] shadow-[0_4px_15px_rgba(14,165,233,0.5)] h-[500px] w-full sm:w-[80%] md:w-[45%] lg:w-[30%] xl:w-[30%] rounded-[60px] p-6 mt-24">
          <Image
            src="/cp1.jpg"
            alt="IoT3"
            width={250}
            height={120}
            className="rounded-full object-cover mx-auto lg:ml-[80px]"
          />
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white text-center sm:text-left lg:ml-[70px] mt-4">
            Quiz Game on C
          </h1>
          <a
            href="/iot3.docx"
            download="IoT_Project_Documentation3.docx"
            className="text-white hover:text-blue-300 transition-colors underline text-center mx-auto lg:ml-[80px] mt-4"
          >
            Download Project Documentation
          </a>
        </div>

      </div>
      
    </main>
  );
}
