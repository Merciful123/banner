import styles from "./index.module.css";
import image from "../../assets/salad-image.jpeg";
import fruit from "../../assets/fruit.jpg";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

const Hero = () => {
  return (
    <>
      <div className="min-h-[65vh] flex max-md:flex-col justify-center items-center">
        <div className=" bg-[#F7F5F0] w-full   self-stretch ">
          <div className="w-[80%] mx-auto mt-[150px] max-sm:mt-[50px] gap-5 flex flex-col justify-center ">
            <p className="">Discount upto 20%</p>
            <h1 className={`${styles.leftHeading} text-3xl`}>
              Buy Fresh And Organic Grocery Food
              <span className="relative">
                <img
                  src={fruit}
                  className="inline ml-2 h-[20px] rounded-md w-[60px]"
                  alt="fruit image"
                />
                <MdOutlineSubdirectoryArrowRight className="max-sm:hidden inline absolute top-10 left-10  right-1" />
              </span>
            </h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing temporibus
              quas perspiciatis in omnis?
            </p>
          </div>
        </div>

        <div className={`  bg-green-900 w-[80%] mx-auto self-stretch`}>
          <div className="relative ">
            <img
              src={image}
              alt="image"
              className="absolute h-[300px] max-sm:h-[280px] max-sm:top-[50px] w-[300px] top-[100px] left-[-50px] max-sm:left-0"
            />
          </div>
        </div>
      </div>
      <div className="category-section flex flex-col items-center  mt-4 relative max-sm:top-[300px] w-[80%] mx-auto ">
        <p>Shop By Category</p>
        <h1 className={` ${styles.categoryHeading} text-2xl text-center`}>Top Category Of Organic Food</h1>
      </div>
    </>
  );
};

export default Hero;
