import React from "react";

const About = () => {
  return (
    <section className="w-full bg-about-bg bg-no-repeat bg-cover bg-left-bottom pt-9 pb-14 px-5">
      <h2 className="text-title mb-2">
        <span className="font-thin">WHO </span>WE ARE
      </h2>
      <p className="text-text w-[180px] leading-5 mb-5">
        <span className="text-subTitle">a team of enthusiasts</span> who are
        fully committed to the mission of creating unforgettable and
        extraordinary trips to the most beautiful parts of the Carpathians. Our
        goal is not just to show you the natural wonders of the mountains, but
        to provide you with a deep immersion in their magical atmosphere.
      </p>
      <p className="text-text w-[180px] mb-10">
        <span className="text-subTitle">We believe</span> that nature has the
        power to inspire, strengthen character and provide new perspectives.
        Therefore, each of our tours is aimed at unlocking your potential,
        enriching your spiritual world and creating unforgettable memories.
      </p>
      <div className="flex justify-end ">
        <div className="text-subTitle text-right mb-10">
          <h3 className="uppercase w-[180px] text-left">
            From vacationers
            <span className="uppercase text-right">to active travelers</span>
          </h3>
          <p className="text-text ">we have a tour for everyone.</p>
        </div>
      </div>

      <p className="text-text text-left ">
        <span className="text-subTitle">We use methods</span> that are
        time-tested and proven. Our expert guides with in-depth knowledge of the
        Carpathian landscapes lead you safely through the mysteries of these
        mountains.
      </p>
    </section>
  );
};

export default About;
