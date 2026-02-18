import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <nav className="w-full py-6 px-8 flex justify-center gap-12">
        <Link href="/progress" className="text-xl text-gray-700 hover:text-blue-600 hover:underline transition-colors">
          Progress
        </Link>
        <Link href="/join" className="text-xl text-gray-700 hover:text-blue-600 hover:underline transition-colors">
          Join Us
        </Link>
        <Link href="/gallery" className="text-xl text-gray-700 hover:text-blue-600 hover:underline transition-colors">
          Gallery
        </Link>
      </nav>

      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-2xl mb-8">
          <Image
            src="/hero.svg"
            alt="Hero"
            width={800}
            height={400}
            className="w-full h-auto object-cover rounded-lg"
            priority
          />
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          Welcome to RoboCat
        </h1>
        <p className="text-xl text-gray-600 text-center max-w-lg">
          A special project for Dell Children&apos;s Hospital created with love by the Dell community.
        </p>
      </div>
    </div>
  );
}
