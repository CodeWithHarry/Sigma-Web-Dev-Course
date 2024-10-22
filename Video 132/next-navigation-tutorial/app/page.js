"use client"

import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchparms = useSearchParams()
  return (
    <div>
      Hey this is our page and blog is {searchparms.get('blog')} and utm source is {searchparms.get('utm_source')}
    </div>
  );
}
