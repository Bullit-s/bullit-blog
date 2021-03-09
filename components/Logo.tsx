import Link from "next/link";

export const Logo = () => (
  <Link href="/">
    <a className="focus:outline-none">
      <button className="focus:outline-none transition duration-300 ease-in-out bg-coolGray-800 text-white dark:bg-amber-50 dark:text-coolGray-700 p-2 rounded-2xl transform hover:-rotate-1 hover:scale-110 dark:hover:bg-amber-100">
        {"<BullitBlog/>"}
      </button>
    </a>
  </Link>
);
