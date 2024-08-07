import { Metadata } from "next";
import Image from "next/image";

const listItems = [
  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
  "Amet minim mollit non deserunt. ",
  "Amet minim mollit non deserunt ullamco est sit aliqua. ",
  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
];

export const metadata: Metadata = {
  title: "Privacy Policy | Fix My Build",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container h-full pb-20 text-start sm:space-y-14">
      <div className="mx-auto max-w-5xl rounded-lg bg-white px-5 py-7 sm:p-12">
        <h2 className="text-xl font-bold sm:text-2xl">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor sint.
        </h2>
        <div className="pt-5 text-gray-font-color sm:text-lg">
          <p className="">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <p>
            Exercitation veniam{" "}
            <span className="text-orange-bg-font-color">
              enim-velit@fixmybuild.com
            </span>
          </p>
          <p className="py-10">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud
            amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet.
          </p>
          <ul className="space-y-2">
            {listItems.map((item) => (
              <li key={item} className="flex gap-x-2 sm:gap-x-3">
                <div className="mt-1.5 size-3 shrink-0 rounded-full bg-gray-font-color sm:size-4"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
