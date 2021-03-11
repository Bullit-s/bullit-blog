import Image from "next/image";

export const Person = () => {
  return (
    <div
      className={
        "flex flex-col flex-col-reverse justify-between items-center w-full pt-24 lg:flex-row"
      }
    >
      <h1
        className={"text-xl uppercase font-semibold pt-4 lg:pt-0 lg:text-2xl"}
      >
        <span>Dmitri Sakali</span>
        <br />
        <span>Front-end developer</span>
      </h1>
      <div>
        <Image
          className="rounded-full"
          priority
          alt="Profile picture"
          src="/images/avatar2.jpg"
          width={250}
          height={250}
        />
      </div>
    </div>
  );
};
