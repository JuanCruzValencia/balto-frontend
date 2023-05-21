import Image from "next/image";

const HeroComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-7 gap-4">
      <h1 className="text-xl font-bold">Welcome to Balto!</h1>
      <p className="max-w-[800px] text-center text-s tracking-wide">
        Frontend created to visualize the data of the API developed for the
        Backend course. The technologies used were Typescript, React, NextJS,
        Next Auth, TailwindCSS, Axios, React-Hook-Form among others.
      </p>
      <Image
        src={
          "https://www.searchenginejournal.com/wp-content/uploads/2017/11/e-commerce-link-building.png"
        }
        alt={"hero-section-image"}
        width={1150}
        height={1000}
      />
    </div>
  );
};

export default HeroComponent;
