import Image from "next/image";

export default function Home() {
  // console.log("The id is: ", process.env.ID)
  // console.log("The secret is: ", process.env.SECRET)
  return (
    <div>
      Hey this is home. The id is {process.env.NEXT_PUBLIC_ID} and secret is {process.env.SECRET} and name is {process.env.NAME}
    </div>
  );
}
