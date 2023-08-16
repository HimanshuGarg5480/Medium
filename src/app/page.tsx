import Blog from "@/components/Blog";
import Image from "next/image";
export async function getStaticProps() {
  const response = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@Sabesan96"
  );
  const jsonData = await response.json();
  console.log(jsonData);
  return {
    props: {
      data: jsonData,
    },
  };
}
export default async function Home() {
  const jData = await getStaticProps();
  console.log(jData);
  return (
    <main>
      <div className="w-100% flex gap-[1.59vw] flex-wrap pt-[4vw] pr-[5.55vw] pb-[5vw] pl-[5.6vw] min-[600px]:flex-col">
        {jData.props.data.items.map((item: any) => {
          return (
            <Blog title={item.title} image={item.thumbnail} link={item.link} />
          );
        })}
      </div>
    </main>
  );
}
