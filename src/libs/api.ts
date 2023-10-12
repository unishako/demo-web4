import { DogType } from "@/libs/types";

export const fetchDog = async (): Promise<DogType> => {
  return (
    await fetch("https://dog.ceo/api/breeds/image/random", {
      cache: "no-store",
    })
  ).json();
};
