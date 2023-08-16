import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = (props: any) => {
  return (
    <div className="">
      <Link href={props.link} about="_blank">
        <div className="w-[28.5vw] rounded-xl min-h-[27.76vw] bg-slate-400 overflow-hidden">
          <div className="w-[28.5vw] h-[14vw]">
          <Image
            className="w-full h-full"
            src={props.image}
            width={200}
            height={200}
            alt=""
          />
          </div>
          <div className="p-[2vw]">
          <h3 className="text-[1.6vw] text-[#101728]">{props.title}</h3>
          </div>
          
        </div>
      </Link>
    </div>
  );
};

export default Blog;
