import { Metadata } from "next";
import Image from "next/image";

const missions = [
  {
    id: 1,
    value:
      "We review each of your projects for free, identifying areas that might require further thought and, when necessary, providing feedback accordingly before tradespeople are engaged. By doing this, we help to reduce differences in understanding between yourself and tradespeople, which could otherwise cause disputes, while giving you a heads’ up of potential additional work that might be required.",
  },
  {
    id: 2,
    value:
      "After your project request has been approved, multiple tradespeople are engaged right away and receive the same requirements from you. This means you don’t have to call people up individually while making sure you’re informing them the same requirements each time. ",
  },
  {
    id: 3,
    value:
      "Tradespeople who are available usually respond to your project requests quickly, so you don’t need to spend time finding someone who is available to start right away.",
  },
  {
    id: 4,
    value:
      "The tradespeople whom you desire can inform you when they are available, so at least you’ll know how long you’ll need to wait before they are ready to start on your project.",
  },
  {
    id: 5,
    value:
      "To gauge if an estimate is fair you can compare the products and services with other estimates received from other tradespeople on this website.",
  },
  {
    id: 6,
    value:
      "Whilst unplanned costs cannot always be determined in advance, tradespeople on our platform try to give as much advance notice of unexpected costs as possible by including ‘contingency’ in their estimates.  This allows you to set a more accurate budget in advance, and therefore reduce the likelihood of disappointment and delays later on.",
  },
];

const ourValues = [
  {
    id: 1,
    title: "Kindness and fairness",
    value:
      "We try to be kind and fair to everyone in our ecosystem, including people wanting projects to be undertaken, tradespeople, suppliers, etc. We believe that kindness goes a long way towards building a better society.",
  },
  {
    id: 2,
    title: "Empowering women",
    value:
      "Most of our tradespeople are in the construction industry, which is currently very heavily male-dominated. We try to encourage more women into the industry to create a more representative community.",
  },
  {
    id: 3,
    title: "Data Privacy",
    value:
      "We respect your privacy, and this respect underpins how we use, store and process data. For more information feel free to read our Privacy Policy.",
  },
];

export const metadata: Metadata = {
  title: "About Us | Fix My Build",
};

export default function AboutUsPage() {
  return (
    <div className="container h-full pb-20 text-start">
      <div className="mx-auto mb-10 max-w-7xl rounded-lg bg-blue-font-color p-5 sm:p-12">
        <h3 className="mb-5 text-xl font-bold text-white-font-color sm:text-2xl">
          Our story
        </h3>
        <p className="text-orange-gray sm:text-lg">
          Our story starts with our founder waking up one morning, realising
          that life is too short to live with regrets and wanting to make more
          of a positive difference in our world while he`s still alive.
          <br />
          <br />
          He decided to leave his safe job and started to aim to help to our
          society as much as possible while he is still alive, tackling every
          challenge that he`s faced in his life so far.
          <br />
          <br />
          Up until his life until then, whenever he needed help with finding the
          right person for general renovation, he spent a lot of time trying to
          find people he can trust and are available. Sometimes he found the
          right person at the right time and price, and other times he
          struggled, often spending a lot of time discussing requirements with a
          lot of people, taking risks by giving work to people he didn’t know
          and ending up paying more than his original budget.
        </p>
      </div>
      <div className="mx-auto max-w-7xl rounded-lg bg-orange-gray p-5 sm:p-12">
        <p className="text-xl font-light text-gray-font-color sm:text-4xl/[45px]">
          We can find people through other websites, but how do we know if they
          are{" "}
          <span className="font-bold text-orange-bg-font-color">available</span>
          , and they can deliver a{" "}
          <span className="font-bold text-orange-bg-font-color">
            good quality
          </span>{" "}
          of work while not{" "}
          <span className="font-bold text-orange-bg-font-color">
            overcharging
          </span>{" "}
          us?
        </p>
      </div>
      <h4 className="py-8 text-center text-2xl font-normal sm:py-14 sm:text-4xl">
        Our mission
      </h4>
      <div className="mx-auto max-w-7xl rounded-lg bg-white p-5 sm:p-12">
        <h2 className="mb-5 text-xl font-light text-gray-font-color sm:mb-10 sm:text-[40px]/[50px]">
          Through our platform we aim to solve these challenges while saving
          your time and money.
        </h2>
        <p className="mb-5 text-lg font-bold sm:text-2xl">
          How do we achieve this?
        </p>
        <div className="space-y-5">
          <div className="flex items-center gap-x-14">
            <div className="space-y-5">
              {missions.slice(0, 3).map((mission) => (
                <div key={mission.id} className="flex gap-x-2 sm:gap-x-4">
                  <p className="flex size-8 shrink-0 items-center justify-center rounded-full bg-orange-gray sm:size-9 sm:text-lg">
                    {mission.id}
                  </p>
                  <p className="text-gray-font-color sm:text-lg">
                    {mission.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="hidden w-52 shrink-0 lg:block">
              <Image
                className="w-full object-cover"
                src={"/svg/about-us-1.svg"}
                alt="About us image"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="space-y-5">
            {missions.slice(3).map((mission) => (
              <div key={mission.id} className="flex gap-x-2 sm:gap-x-4">
                <p className="flex size-8 shrink-0 items-center justify-center rounded-full bg-orange-gray sm:size-9 sm:text-lg">
                  {mission.id}
                </p>
                <p className="text-gray-font-color sm:text-lg">
                  {mission.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h4 className="py-8 text-center text-2xl font-normal sm:py-14 sm:text-4xl">
        Our values
      </h4>
      <div className="mx-auto max-w-7xl rounded-lg bg-white p-5 sm:p-12">
        <div className="flex flex-col items-center gap-x-14 gap-y-10 lg:flex-row">
          <div className="w-52 shrink-0">
            <Image
              className="w-full object-cover"
              src={"/svg/about-us-2.svg"}
              alt="About us image"
              width={400}
              height={400}
            />
          </div>
          <div className="space-y-8">
            {ourValues.map((ourValue) => (
              <div key={ourValue.id} className="flex gap-x-3 sm:gap-x-4">
                <p className="flex size-8 shrink-0 items-center justify-center rounded-full bg-orange-gray sm:size-9 sm:text-lg">
                  {ourValue.id}
                </p>
                <div className="pt-0.5">
                  <p className="mb-2 text-lg font-bold sm:text-2xl">
                    {ourValue.title}
                  </p>
                  <p className="text-gray-font-color sm:text-lg">
                    {ourValue.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-3 pt-20 sm:gap-y-6 sm:pt-24">
        <Image
          className="w-10 sm:w-24"
          src={"/svg/about-us-heart.svg"}
          alt="About us heart"
          width={200}
          height={200}
        />
        <p className="text-center font-normal sm:text-2xl md:text-4xl">
          Thank you for reading and have a lovely day
        </p>
      </div>
    </div>
  );
}
