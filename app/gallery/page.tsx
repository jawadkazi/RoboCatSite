import Link from "next/link";
import Image from "next/image";

export default function Gallery() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <nav className="w-full py-6 px-8 flex justify-center gap-12">
        <Link href="/progress" className="text-xl text-gray-700 hover:text-blue-600 hover:underline transition-colors">
          Progress
        </Link>
        <Link href="/join" className="text-xl text-gray-700 hover:text-blue-600 hover:underline transition-colors">
          Join Us
        </Link>
        <Link href="/gallery" className="text-xl text-blue-600 underline">
          Gallery
        </Link>
      </nav>

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Gallery</h1>
        <div className="flex flex-col gap-8 w-full max-w-2xl">
          <div className="relative w-full aspect-video">
            <Image
              src="/Image.jpg"
              alt="Gallery Image 1"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative w-full aspect-video">
            <Image
              src="/Image (1).jpg"
              alt="Gallery Image 2"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative w-full aspect-video">
            <Image
              src="/Image (2).jpg"
              alt="Gallery Image 3"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
