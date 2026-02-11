import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="text-6xl mb-4">🤖</div>
          <h1 className="text-4xl font-bold leading-10 tracking-tight text-black dark:text-zinc-50 mb-4">
            Welcome to RoboCat
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400 mb-8">
            A special project for Dell Children's Hospital created with love by the Dell community.
          </p>
          <Link
            href="/robocat"
            className="flex h-14 items-center justify-center gap-2 rounded-full bg-blue-600 px-8 text-white transition-colors hover:bg-blue-700 font-semibold text-lg"
          >
            Explore RoboCat
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </main>
    </div>
  );
}
