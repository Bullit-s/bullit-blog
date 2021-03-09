const navItems: { link: string; text: string }[] = [
  {
    link: "#",
    text: "Personal",
  },
  {
    link: "#",
    text: "Resources",
  },
  {
    link: "#",
    text: "Contact",
  },
  {
    link: "#",
    text: "CV",
  },
];

export const Navigation = () => {
  return (
    <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
      {navItems.map(({ text, link }) => (
        <a
          key={text}
          href={link}
          className="mr-5 text-sm font-semibold text-coolGray-900 hover:text-coolGray-600 dark:text-amber-50 dark:hover:text-amber-100"
        >
          {text}
        </a>
      ))}
    </nav>
  );
};
