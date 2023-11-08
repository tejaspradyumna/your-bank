export default function ActionButton() {
  return (
    <div className="flex items-center gap-x-2">
      <button className="text-white px-5 py-3 rounded-full hover:bg-[#262626] transition">
        Sign Up
      </button>
      <button className="px-5 py-3 rounded-full bg-[#caff34]">Login</button>
    </div>
  );
}
