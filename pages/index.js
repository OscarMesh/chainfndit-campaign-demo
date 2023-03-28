import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import image from "../public/chainfundit.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
export default function Home() {
  const [text] = useTypewriter({
    words: [
      "Memorials...",
      "Loved ones...",
      "Events...",
      "Charities...",
      "Funeral Expenses...",
    ],
    // loop: 3,
    // onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return (
    <>
      <Head>
        <title>Chainfundit Campaing Demo</title>
        <meta name="description" content="A chanfundit demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-[100%]: flex flex-col gap-5 p-5 md:p-auto items-center md:flex-row md:justify-between">
        <div className="flex flex-col gap-5 max-w-[600px]">
          <p className="text-gray-500">Fundraising? Join The Chain Reaction!</p>
          <span>
            <h1 className="font-bold text-[#7b7b7b] text-5xl md:text-6xl">
              ChainFund it for <br />
              {text}
              <Cursor />
            </h1>
          </span>
          <Link href="/campaigns">
            <button className="p-3 border border-[#104901] mt-7 text-[#104901] font-bold hover:bg-[#104901] hover:text-white">
              View Campaings
            </button>
          </Link>
        </div>
        <div>
          <Image
            src={image}
            className="object-cover max-w-[400px] mt-7 md:max-w-[600px] w-full"
          />
        </div>
      </main>
    </>
  );
}
