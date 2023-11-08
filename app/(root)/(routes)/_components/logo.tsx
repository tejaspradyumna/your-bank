import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div>
      <Link href="/">
        <div className="relative h-[30px] w-[120px] ml-3">
          <Image src="/assets/logo.png" alt="Logo" fill />
        </div>
      </Link>
    </div>
  );
}
