import Link from "next/link";

export default function Home() {
   return (
      <main>
         <ul className="d-flex">
            <li>
               <Link href="/about">About</Link>
            </li>

            <li>
               <Link href="/about/shashank48">About me </Link>
            </li>
         </ul>
      </main>
   );
}
