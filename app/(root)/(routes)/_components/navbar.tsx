import Logo from "./logo";
import Menu from "./menu";
import ActionButton from "./action-button";

export default function Navbar() {
  return (
    <nav>
      <div className="p-6 z-50">
        <div className="flex items-center justify-between bg-[#1C1C1C] py-[14px] px-[24px] rounded-full border border-[#262626]">
          <Logo />
          <Menu />
          <ActionButton />
        </div>
      </div>
    </nav>
  );
}
