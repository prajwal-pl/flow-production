import React from "react";
import Image from "next/image";

type Props = {};

const Home = async (props: Props) => {
  return (
    <>
      <section className="h-full w-full pt-36 relative flex items-center  justify-center flex-col -z-20">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] " />
        <p className=" text-center">end-to-end e commerce marketplace</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h1 className="text-9xl font-bold text-center md:text-[300px]">
            Flow
          </h1>
        </div>
        <div className="flex justify-center items-center relative md:mt-[-70px]">
          <Image
            className="rounded-tl-2xl rounded-tr-2xl border-muted"
            src="/assets/preview.png"
            alt="banner"
            width={1200}
            height={1200}
          />
          <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
        </div>
      </section>
      <section className="flex pb-20 justify-center items-center flex-col z-20 gap-4 mt-20">
        <h2 className="text-4xl text-center"> Choose what fits you right</h2>
        <p className="text%-muted-foreground text-center md:w-[80%]">
          Our marketplace helps product owners profit simultaneously. {"It's"}{" "}
          both market and customer friendly.
          <br /> Explore the choices of both purchasing and selling valuable
          products online.
        </p>
        {/* <div className="flex justify-center gap-4 flex-wrap mt-24">
              {pricingCards.map((card) => (
                <Card
                  key={card.title}
                  className={clsx("w-[300px] justify-between flex flex-col ", {
                    "border-2 border-primary": card.title === "Unlimited Saas",
                  })}
                >
                  <CardHeader>
                    <CardTitle
                      className={clsx("", {
                        "text-muted-foreground": card.title !== "Unlimited Saas",
                      })}
                    >
                      {card.title}
                    </CardTitle>
                    <CardDescription>{card.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-4xl font-bold">{card.price}</span>
                    <span className="text-muted-foreground">/m</span>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start gap-4">
                    <div>
                      {card.features.map((feature) => (
                        <div key={feature} className="flex gap-2 items-center">
                          <Check className="text-muted-foreground" />
                          <p>{feature}</p>
                        </div>
                      ))}
                    </div>
                    <Link
                      className="w-full text-center text-white bg-primary p-2 rounded-md"
                      href={`/agency?plan=${card.priceId}`}
                    >
                      Get Started
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div> */}
      </section>
    </>
  );
};

export default Home;
