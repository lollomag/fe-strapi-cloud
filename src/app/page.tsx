"use client"
import Image from "next/image";
import styles from "./page.module.css";
import useSWR from "swr";
import Link from "next/link";

export default function Home() {
  const { data, error } = useSWR("https://eloquent-freedom-d513154e73.strapiapp.com/api/articles?populate=*");

  if (error) return <div>errore</div>
  if (!data) return <div>loading...</div>
  console.log(data.data);

  return (
    <main>
        <Link href={"/blog"}>andemooooo</Link>

        <div>
          {data.data?.map((list: any) => {
            return <div key={list.id}>
              {list?.image && <Image
                className={styles.cover}
                src={list.image.url}
                alt="Next.js logo"
                width={180}
                height={38}
              />}
              <p>{list.title}</p>
            </div>
          })}
        </div>
      </main>
  );
}
