import Image from "next/image";
import Counter from "./components/Counter"; // Import the new component

export default function Home() {
  return (
    // A simpler flexbox layout for vertical and horizontal centering.
    <div className="flex flex-col items-center justify-between min-h-screen p-8">
      
      {/* Header section with the Vercel logo */}
      <header className="w-full max-w-5xl flex justify-between items-center font-mono text-sm">
        <p className="p-4 border border-gray-300 bg-gray-100 dark:bg-zinc-800/30 dark:border-neutral-800 rounded-xl">
          Get started by editing 
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </header>

      {/* Main content area */}
      <main className="flex flex-col items-center gap-8">
        <h1 className="text-4xl sm:text-6xl font-bold text-center">
          Welcome to <a href="https://nextjs.org" className="text-blue-600 hover:underline">Next.js!</a>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
          This is a Server Component. Below is an interactive Client Component.
        </p>
        
        {/* Here we use our interactive Client Component */}
        <div className="mt-4 p-8 border rounded-lg bg-gray-50 dark:bg-zinc-800/50">
          <Counter />
        </div>
      </main>

      {/* Simplified Footer */}
      <footer className="w-full flex items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg" // Make sure this file exists in your public folder
            alt="File icon"
            width={16}
            height={16}
          />
          Read the Docs
        </a>
      </footer>
    </div>
  );
}