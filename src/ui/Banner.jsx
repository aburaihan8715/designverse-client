const Banner = () => {
  return (
    <section className="relative h-screen">
      <div className="bg-[url('/banner2.jpg')] h-full bg-cover bg-center">
        <div className="flex justify-center items-center h-full ">
          <div className="bg-gradient-to-r from-purple-300 to-pink-500 opacity-95 rounded sm:w-2/3 mx-auto p-10 z-10 relative">
            <h1 className="font-medium text-5xl">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Fashion Dreams Start Here </span>
              <span className="block text-2xl mt-2">
                Join Our<span className="text-white font-semibold text-3xl"> FashionVerse</span> School
              </span>
            </h1>

            <span className="badge badge-success absolute top-4 -right-8 text-xl p-4 transform rotate-45 text-orange-700">save 20%</span>

            <p className="mt-6">
              At our fashion design institute, we believe in nurturing dreams and turning them into successful careers. Our comprehensive curriculum
              and industry connections provide the perfect launchpad for your fashion aspirations. Join us to embark on an exciting journey in the
              world of fashion.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="w-full h-full absolute bg-black top-0 left-0 opacity-40"></div> */}
    </section>
  );
};

export default Banner;
