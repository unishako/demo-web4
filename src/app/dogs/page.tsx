import Link from "next/link";
import styles from "./page.module.scss";
import { DogImage } from "@/components/dogImage";
import { fetchDog } from "@/libs/api";

const Dogs = async () => {
  const dogs = await fetchDog();
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <Link href={"/"}>Top</Link>
      </div>
      <div className={styles.content}>
        <DogImage url={dogs.message} />
      </div>
    </div>
  );
};

export default Dogs;
