import Image from "next/image";

const Home = () => {
  return (
    <div
      className="min-h-screen flex flex-col-reverse lg:flex-row w-screen bg-no-repeat bg-cover bg-center lg:justify-between justify-center items-center lg:pt-10 lg:px-28 px-5"
      style={{
        backgroundImage:
          'url("https://d2uw1ycl6v35t8.cloudfront.net/others/optimized_website_background.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col md:gap-0 lg:gap-7 gap-7 lg:mt-0">
        <h1
          className="lg:text-6xl heading hidden text-center lg:block text-4xl text-white font-semibold"
          style={{ lineHeight: "76px", textAlign: "center" }}
        >
          Memorable audio tours
          <br /> to bring life to <br />
          your travel!
        </h1>
        <h1 className="lg:text-6xl heading lg:hidden text-center text-2xl leading-tight text-white font-semibold">
          Memorable audio tours!
        </h1>
        <p className="text-center lg:hidden text-white">
          Discover hidden gems, learn local customs, and experience authentic
          travel. Let Pathbeat be your personal storyteller.
        </p>
        <div className="flex mx-auto justify-center lg:justify-start items-center">
          <a
            href="/cities"
            className="bg-[#2068a9] text-white rounded-full px-6 py-4 mt-5 font-semibold hover:scale-110 duration-300 w-[300px] text-center"
          >
            Explore
          </a>
        </div>
      </div>

      <div className="lg:w-1/2 flex justify-center items-center pb-16 lg:p-4">
        <Image
          src="https://d2uw1ycl6v35t8.cloudfront.net/others/Hero_section_screen.webp"
          alt="Pathbeat app"
          className="w-[600px]"
          width={600}
          height={600}
          priority
        />
      </div>
    </div>
  );
};

// This function runs on the server before rendering the page
export const getServerSideProps = async () => {
  // Fetch data if required
  return {
    props: {}, // Will pass props to the page
  };
};

export default Home;
