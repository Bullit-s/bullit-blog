import Image from "next/image";

interface Props {
  title: string;
  text: string;
  imagePath?: string;
}
export const PageHeader = ({
  title,
  text,
  imagePath = "/images/reading-list.svg",
}: Props) => {
  return (
    <div className={"flex flex-col items-center w-full pt-24 md:flex-row"}>
      <div>
        <Image
          priority
          alt="Page picture"
          src={imagePath}
          width={"350"}
          height={"350"}
          className="object-contain h-48 w-full"
        />
      </div>
      <div className={"left-arrow md:ml-10"}>
        <h1 className={"text-rose-400 mb-2"}>{title}</h1>
        <p className={"max-w-xs"}>{text}</p>
      </div>
    </div>
  );
};
