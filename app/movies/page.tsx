import CommonLayout from "@/components/common-layout/page";
import { useEffect } from "react";

export default function Movies() {

  // Get mediaData according to different genre like Action, Romance and pass in to the CommonLayout component
  // useEffect(() => {
  //   async function getTV() {
  //   }
  //  }, [])

  // Sample mediaData would look like:
  // [
  //   {
  //       'title': 'Action',
  //       'medias': [<Object>]
  //   },
  //   {
  //       'title': 'Romance',
  //       'medias': [<Object>]
  //   }
  // ]

  return (
    <main className="flex min-h-screen flex-col">
      <CommonLayout mediaData={[]} />
    </main>
  )
}
