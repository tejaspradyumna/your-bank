import Link from "next/link";

export default function Menu() {
  return (
    <div>
      <ul className="flex items-center gap-x-2 text-white">
        <li className="bg-[#262626] px-4 py-3 rounded-full cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="px-4 py-3 rounded-full cursor-pointer hover:bg-[#262626] transition">
          <Link href="/">Careers</Link>
        </li>
        <li className="px-4 py-3 rounded-full cursor-pointer hover:bg-[#262626] transition">
          <Link href="/">About</Link>
        </li>
        <li className="px-4 py-3 rounded-full cursor-pointer hover:bg-[#262626] transition">
          <Link href="/">Security</Link>
        </li>
      </ul>
    </div>
  );
}
