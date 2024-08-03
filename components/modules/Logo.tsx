import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Logo({className , width , height} : {className : string , width : number , height: number}) {
  return (
    <Image
      className={cn(className)}
      src={"/svg/logo.svg"}
      alt="Logo"
      width={width}
      height={height}
    />
  );
}
