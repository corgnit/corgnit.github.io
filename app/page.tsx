import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Welcome to Corgnit Research India
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="#about"
          >
            About Us
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/data:image/jpeg;base64,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" // Replace with your Corgnit Research India logo
          alt="Corgnit Research India Logo"
          width={180}
          height={180} // Adjust the height as needed
          priority
        />
      </div>

      <div id="about" className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left">
        <div className="rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            About Corgnit Research India
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Corgnit Research India is a leading computer science research lab dedicated to pushing the boundaries of technology through innovative research and development.
          </p>
        </div>
      </div>

      {/* Add more sections or content about the research lab as needed */}
    </main>
  );
}
