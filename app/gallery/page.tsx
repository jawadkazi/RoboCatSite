import Link from "next/link";

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

      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Gallery</h1>
        <p className="text-xl text-gray-600">Coming soon...</p>
      </div>
    </div>
  );
}
