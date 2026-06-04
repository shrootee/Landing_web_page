import vector from "../assets/Vector 5.svg";
import vector10 from "../assets/Vector 2510.svg";
import vector11 from "../assets/Vector 2511.svg";
import rectanglepink from "../assets/Rectangle.pink.svg";
import rectanglegreen from "../assets/Rectangle 658.svg";
import Ellipse736 from "../assets/Ellipse736.svg";
import img1 from "../assets/Ellipse 255.png";
import img2 from "../assets/Ellipse 256.png";
import img3 from "../assets/Ellipse 257.png";
import img4 from "../assets/Ellipse 258.png";
import img5 from "../assets/Ellipse 259.png";
import img6 from "../assets/Ellipse 260.png";
import img7 from "../assets/Ellipse 261.png";
import img8 from "../assets/Ellipse 262.png";


function Hero() {
  return (
    <section className="relative overflow-hidden px-4">


{/* Black Vector */}

<img
  src={vector10}
  alt=""
  className="
    absolute

    left-0
    top-[180px]

    w-[25px]
    md:w-[45px]
    lg:w-[50px]

    z-0
    pointer-events-none
  "
/>

{/* Red Vector */}

<img
  src={vector11}
  alt=""
  className="
    absolute

    left-[25px]
    top-[170px]

    w-[30px]
    md:w-[70px]
    lg:w-[60px]

    z-0
    pointer-events-none
  "
/>


    {/* Pink Rectangle */}
<img
  src={rectanglepink}
  alt="Rectangle.pink"
  className="
    absolute

    top-[60px]
    right-[50px]

    md:top-[100px]
    md:right-[120px]

    lg:top-[220px]
    lg:right-[170px]

    w-[80px]
    md:w-[150px]
    lg:w-[300px]

    h-auto
    rounded-[100px]
    opacity-100
  "
/>

<img
  src={Ellipse736}
  alt="Ellipse736"
  className="
    absolute

    top-[70px]
    right-[20px]

    md:top-[130px]
    md:right-[30px]

    lg:top-[280px]
    lg:right-[80px]

    w-[20px]
    md:w-[80px]
    lg:w-[80px]

    h-auto
    rounded-[100px]
    opacity-100
  "
/>

<img
  src={rectanglegreen}
  alt="Rectangle.green"
  className="
    absolute

    top-[90px]
    left-[140px]

    md:top-[160px]
    md:right-[120px]

    lg:top-[320px]
    lg:left-[400px]

    w-[80px]
    md:w-[130px]
    lg:w-[260px]

    h-auto
    rounded-[100px]
    opacity-100
  "
/>

      {/* Heading */}
      <div className="max-w-[1200px] mx-auto px-4">
  <h1
    className="
      relative z-10
      mt-[40px]       // reduced from 80px
      md:mt-[60px]
      lg:mt-[143px]
      font-gerbil
      font-normal
      text-center
      text-[22px]     // reduced from 42px for mobile
      sm:text-[26px]  // optional: smooth transition
      md:text-[40px]
      lg:text-[60px]
     leading-[1]
md:leading-[1.1]
lg:leading-[80px]

      
    "
  >
    The thinkers and <br />
    doers were changing <br />
    the status Quo with
  </h1>
</div>

      {/* Yellow Vector */}
      <div className="absolute top-[62px] md:top-[95px] lg:top-[205px] left-1/2 -translate-x-1/2 z-0">
        <img
          src={vector}
          alt="Vector 5"
          className="
            w-[120px]
            md:w-[250px]
            lg:w-[400px]
            h-auto
          "
        />
      </div>

<h1
className="
  font-satoshi
  font-normal
  text-center

  text-[9px]     
  sm:text-sm
  md:text-sm
  lg:text-base
"
>
  We are a team of strategists, designers communicators, researchers. Togeather, <br/>
we belive that progress only hghappens when you refuse to play things safe.
</h1>

<div className="relative w-full h-[250px] md:h-[350px] lg:h-[420px]">

  <img
  src={img1}
  alt=""
  className="
    absolute
    left-[2%]
    top-[110px]

    w-[70px]
    md:w-[100px]
    lg:w-[120px]

    rounded-full
    border-[4px]
border-white
w-[55px]
md:w-[100px]
lg:w-[140px]
  "
/>

<img
  src={img2}
  alt=""
  className="
    absolute
    left-[12%]
    top-[90px]

    w-[70px]
    md:w-[100px]
    lg:w-[120px]

    rounded-full
    border-[4px]
border-white
w-[55px]
md:w-[100px]
lg:w-[120px]
  "
/>

<img
  src={img3}
  alt=""
  className="
    absolute
    left-[30%]
    top-[40px]

    w-[80px]
    md:w-[110px]
    lg:w-[130px]

    rounded-full
    border-[4px]
border-white
w-[55px]
md:w-[100px]
lg:w-[120px]
  "
/>

<img
  src={img4}
  alt=""
  className="
    absolute
    left-[38%]
    top-[140px]

    w-[80px]
    md:w-[110px]
    lg:w-[130px]

    rounded-full
    border-[4px]
border-white
w-[55px]
md:w-[100px]
lg:w-[120px]
  "
/>

<img
  src={img5}
  alt=""
  className="
    absolute
    left-[55%]
    top-[70px]

    w-[80px]
    md:w-[110px]
    lg:w-[130px]

    rounded-full
    border-[4px]
border-white
w-[55px]
md:w-[100px]
lg:w-[120px]
  "
/>

<img
  src={img6}
  alt=""
  className="
    absolute
    left-[63%]
    top-[120px]

    w-[80px]
    md:w-[110px]
    lg:w-[130px]

    rounded-full
    border-[4px]
border-white
w-[55px]
md:w-[100px]
lg:w-[120px]
  "
/>

<img
  src={img7}
  alt=""
  className="
    absolute
    left-[78%]
    top-[40px]

    w-[80px]
    md:w-[110px]
    lg:w-[130px]

    rounded-full
    border-[4px]
border-white
w-[55px]
md:w-[100px]
lg:w-[120px]
  "
/>

<img
  src={img8}
  alt=""
  className="
    absolute
    right-[2%]
    top-[110px]

    w-[70px]
    md:w-[100px]
    lg:w-[120px]

    rounded-full
    border-[4px]
border-white
w-[55px]
md:w-[100px]
lg:w-[120px]
  "
/>
</div>

    </section>
  );
}

export default Hero;