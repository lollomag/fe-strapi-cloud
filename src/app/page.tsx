"use client"
import Image from "next/image";
import styles from "./page.module.css";
import useSWR from "swr";
import Link from "next/link";
import {getData} from "@/hooks/fetchApi";

export default function Home() {
  const { data, error } = getData("/articles?populate=*");

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
