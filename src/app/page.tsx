import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="pt-[100px] min-h-screen bg-gradient-to-r from-sky-950 to-indigo-950"> {/* Gradient background */}
        <main className="flex flex-col items-center justify-center min-h-screen">
          {/* Circular div with hover effect for the image */}
          <section className="relative flex items-center justify-center mb-10"> {/* Add margin below for spacing */}
            <div className="w-[400px] h-[400px] rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.5)] bg-white flex items-center justify-center transition-transform duration-300 transform hover:scale-105 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
              <Image 
                src="/my.jpeg" // Update with your image path
                alt="Your Image"
                width={360} // Size should match the dimensions of the circle
                height={350}
                className="rounded-full" // Ensures the image is circular
              />
            </div>
          </section>

          {/* Main Content Section */}
          <section className="flex items-center justify-center flex-grow">
            <div className="bg-transparent p-10 rounded-lg text-center relative z-20 shadow-[0_4px_15px_rgba(128,128,128,0.7)]">
              <h2 className="text-5xl font-bold mb-4 text-amber-500">Hello!</h2>
              <p className="text-lg mb-4 text-white">I am Suresh Maheshwari, an aspiring AI specialist specializing in web development and AI technologies.</p>
              <p className="text-md text-white">My expertise includes AI, machine learning, and creating intelligent solutions for modern web applications.</p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
