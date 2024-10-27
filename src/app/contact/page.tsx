import { Mail, Facebook, Instagram, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-950 to-indigo-950 flex flex-col items-center justify-center p-5">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-8">Contact Me</h1>
      <p className="text-base md:text-lg text-white mb-8 text-center px-4">
        Feel free to reach out through any of the platforms below!
      </p>

      <div className="flex flex-wrap justify-center gap-5">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/stylo.matiya"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform duration-300 hover:scale-110 hover:shadow-lg shadow-gray-600 p-4 rounded-full bg-white"
        >
          <Facebook size={30} className="text-blue-600" />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/suresh._.matiya"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform duration-300 hover:scale-110 hover:shadow-lg shadow-gray-600 p-4 rounded-full bg-white"
        >
          <Instagram size={30} className="text-pink-600" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/suresh-maheshwari-93540b318/"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform duration-300 hover:scale-110 hover:shadow-lg shadow-gray-600 p-4 rounded-full bg-white"
        >
          <Linkedin size={30} className="text-blue-700" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/maheshwarisuresh220"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform duration-300 hover:scale-110 hover:shadow-lg shadow-gray-600 p-4 rounded-full bg-white"
        >
          <Github size={30} className="text-gray-900" />
        </a>

        {/* Gmail */}
        <a
          href="mailto:maheshwarisuresh220@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform duration-300 hover:scale-110 hover:shadow-lg shadow-gray-600 p-4 rounded-full bg-white"
        >
          <Mail className="text-red-600" size={30} />
        </a>
      </div>
    </div>
  );
}
