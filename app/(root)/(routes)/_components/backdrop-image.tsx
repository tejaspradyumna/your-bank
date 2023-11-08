import Image from "next/image";

export default function BackDropImage() {
  return (
    <div className="fixed top-0 left-0">
      <div className="relative h-[550px] w-[600px]">
        <Image
          className="absolute"
          alt="abstract_design"
          fill
          src="/assets/abstract_design.png"
        />
      </div>
    </div>
  );
}
