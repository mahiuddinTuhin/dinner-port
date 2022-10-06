import { NavLink, useLoaderData } from "react-router-dom";

export const Hero = () => {
    const headerFoods = useLoaderData();
    const { meals } = headerFoods;
    const images = meals.map(image => image.strMealThumb);
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                {/* <div className="flex items-center justify-center w-16 h-16 mb-4">
                    <img className="rounded-full"
                        src={`${images[0]}`}
                        alt=''
                    />
                </div> */}
                  <div className="max-w-xl mb-6">
                      <div className="flex lg:flex-col items-center justify-center">
                          <img className="rounded-full lg:mb-5 w-16 mr-5"
                        src={`${images[5]}`}
                        alt=''
                    />
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    OUR FOOD
                    <br className="hidden md:block" />
                    YOUR PORT 
                    <span className="inline text-deep-purple-accent-400"> DINNER-PORT
                    </span>
                    </h2>
                      </div>
                    <p className="text-base text-gray-700 md:text-lg">
                    Here you will get most delecious food what you might not taste yet in your life. Just taste a bite and you will feel like what never you feel ever. 
                    </p>
                </div>
                <div>
                    <a
                    href="/foods"
                    aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                    Food Categories
                    <svg
                        className="inline-block w-3 ml-2"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                    >
                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                    </a>
                </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <NavLink to='/foods' className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56 hover:rotate-12 "
              src={`${images[0]}`}
              alt=""
            />
            <img
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40  hover:rotate-12 "
              src={`${images[1]}`}
              alt=""
            />
          </NavLink>
          <NavLink to='/foods' className="px-3">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80  hover:rotate-12 "
              src={`${images[3]}`}
              alt=""
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};