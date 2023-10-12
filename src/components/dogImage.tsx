import Image from "next/image";

type PropsType = {
  url: string
};

export const DogImage = (props: PropsType) => {
  return (
    <Image
      src={props.url}
      fill={true}
      style={{ objectFit: "contain" }}
      alt={"犬"}
    />
  );
};
