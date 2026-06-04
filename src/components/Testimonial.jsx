import lines from "../assets/line 22.svg";
import img1 from "../assets/Ellipse 263.png";
import img2 from "../assets/Ellipse 264.png";
import img3 from "../assets/Ellipse 265.png";
import img4 from "../assets/Ellipse 266.png";
import img5 from "../assets/Ellipse 267.png";
import img6 from "../assets/Ellipse 268.png";
import img7 from "../assets/Ellipse 269.png";
import img8 from "../assets/Ellipse 270.png";
import vector from "../assets/Vector 5.svg";



function Testimonial() {
  return (
    <section className="py-16 lg:py-24">




  <div className="max-w-[1200px] mx-auto px-4">

    {/* Heading */}

    

    <div className=" relative text-center">
      <h2
        className="
          font-gerbil
          font-normal

          text-[32px]
          sm:text-[42px]
          md:text-[54px]
          lg:text-[64px]

          leading-[1]
        "
      >
        <span className="bg-[#D7EEDD] px-2 rounded-full">
                What
              </span> our customer
        <br />
        says About Us
      </h2>

       <div
  className="
    absolute

    top-[95px]
    md:top-[105px]
    lg:top-[125px]

    left-[40%]
    md:left-[40%]
    lg:left-[40%]

    z-0
  "
>
  <img
    src={vector}
    alt="Vector 5"
    className="
      w-[200px]
      md:w-[300px]
      lg:w-[400px]

      h-auto
    "
  />
</div>


    </div>

    

    

    {/* Testimonial Area */}

    <div
      className="
        relative

        mt-12
        lg:mt-16

        min-h-[500px]
        lg:min-h-[550px]
      "
    >

      {/* ================= CENTER CARD ================= */}



      <div
        className="
          absolute

          left-1/2
          top-1/2

          -translate-x-1/2
          -translate-y-1/2

          w-[90%]
          md:w-[75%]
          lg:w-[55%]

          bg-[#EEF2EB]

          p-6
          md:p-8
          lg:p-10

          rounded-md
        "
      >
        <p
          className="
            text-center

            text-[14px]
            md:text-[16px]

            leading-relaxed
          "
        >
          Elementum delivered the site within the timeline
          as they requested. In the end, the client found a
          50% increase in traffic with in days since its
          launch. They also had an impressive ability to use
          technologies that the company hasn't used, which
          have also proved to be easy to use and reliable.
        </p>
      </div>

      {/* ================= LEFT SIDE IMAGES ================= */}

      {/* img1 */}
      <div className="absolute left-[5%] top-[10%]">
        <img
          src={img1}
          alt=""
          className="
            w-[50px]
            md:w-[70px]

            rounded-full
            object-cover
          "
        />
      </div>

      {/* img2 */}
      <div className="absolute left-[8%] top-[38%]">
        <img
          src={img2}
          alt=""
          className="
            w-[90px]
            md:w-[120px]
            lg:w-[140px]

            rounded-full
            object-cover
            hidden md:block
          "
        />
      </div>

      {/* img3 */}
      <div className="absolute left-[0%] bottom-[12%]">
        <img
          src={img3}
          alt=""
          className="
            w-[50px]
            md:w-[70px]

            rounded-full
            object-cover
            
          "
        />
      </div>

      {/* img4 */}
      <div className="absolute left-[0%] top-[25%]">
        <img
          src={img4}
          alt=""
          className="
            w-[40px]
            md:w-[50px]

            rounded-full
            object-cover

            hidden md:block
          "
        />
      </div>

      {/* ================= RIGHT SIDE IMAGES ================= */}

      {/* img5 */}
      <div className="absolute right-[8%] top-[10%]">
        <img
          src={img5}
          alt=""
          className="
            w-[60px]
            md:w-[80px]

            rounded-full
            object-cover
            hidden md:block
          "
        />
      </div>

      {/* img6 */}
      <div className="absolute right-[18%] top-[18%]">
        <img
          src={img6}
          alt=""
          className="
            w-[40px]
            md:w-[55px]

            rounded-full
            object-cover
           
          "
        />
      </div>

      {/* img7 */}
      <div className="absolute right-[18%] top-[42%]">
        <img
          src={img7}
          alt=""
          className="
            w-[45px]
            md:w-[60px]

            rounded-full
            object-cover
            hidden md:block
          "
        />
      </div>

      {/* img8 */}
      <div className="absolute right-[2%] bottom-[8%]">
        <img
          src={img8}
          alt=""
          className="
            w-[120px]
            md:w-[160px]
            lg:w-[190px]

            rounded-full
            object-cover
          "
        />
      </div>

    </div>

  </div>

</section>
  );
}

export default Testimonial;
