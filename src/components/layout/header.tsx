import { SquareMenu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex h-[95px] bg-gradient-to-r from-sky-950 to-indigo-950 text-white shadow-lg z-50">
      {/* Logo Section */}
      <div className="ml-[50px] hover:text-white cursor-pointer mt-[15px]">
        SURESH
        <br />
        MAHESHWARI
      </div>

      {/* Centered Navbar Links */}
      <nav className="justify-center flex mx-auto items-center p-[40px] gap-10">
        <ul className="hidden md:block">
          <li className="flex gap-[100px] mr-[35px] mt-[5px]">
            <Link href="/" className="pl-[25px] p-[5px] h-[35px] w-[100px] rounded-full bg-blue-900 hover:text-blue-900 transition duration-200 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:bg-white">HOME</Link>
            <Link href="/work" className="pl-[25px] p-[5px] h-[35px] w-[100px] rounded-full bg-blue-900 hover:text-blue-900 transition duration-200 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:bg-white">WORK</Link>
            <Link href="/contact" className="pl-[15px] p-[5px] h-[35px] w-[100px] rounded-full bg-blue-900 hover:text-blue-900 transition duration-200 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:bg-white">CONTACT</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Icon with Sheet Trigger */}
      <Sheet>
        <SheetTrigger asChild>
          <SquareMenu className="mr-[20px] mt-[15px] cursor-pointer md:hidden bg-transparent" size={35} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <ul className="flex flex-col gap-4 mt-4">
            <li>
              <Link href="/" className="hover:text-amber-400 transition duration-200">HOME</Link>
            </li>
            <li>
              <Link href="/work" className="hover:text-amber-400 transition duration-200">WORK</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-amber-400 transition duration-200">CONTACT</Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
}
