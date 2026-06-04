
import vector from "../assets/Vector 5.svg";

function Services() {
  return (
   <section id="services" className="relative py-16 lg:py-24">

  <div className="max-w-[1200px] mx-auto px-4">

    {/* Heading */}
    <div className="mb-12">

      <h2
        className="
          font-gerbil
          font-normal

          text-[32px]
          sm:text-[42px]
          md:text-[56px]
          lg:text-[72px]

          leading-[0.95]

          relative z-10
        "
      >
        What we <span className="bg-[#D7EEDD] px-2 rounded-full">
                can
              </span>
        <br />
        offer you!
      </h2>

    </div>

      <div  className="
    absolute
    top-[125px]
    md:top-[165px]
    lg:top-[230px]

    left-[20px]
    md:left-[20px]
    lg:left-[20px]

    z-0
  ">
            <img
              src={vector}
              alt="Vector 5"
              className="
                w-[80px]
                md:w-[180px]
                lg:w-[280px]
                h-auto
              "
            />
          </div>



    {/* Service Rows */}
    <div className="space-y-0">

      {/* Row 1 */}
      <div
        className="
          py-6

          border-t
          border-[#CFCFCF]

          flex
          flex-col
          md:flex-row

          md:items-center
          justify-between

          gap-4

          
        "
      >
        <p className="text-sm max-w-[180px]">
          Office of multiple
          interest content
        </p>

        <h3
          className="
            font-gerbil
            text-[24px]
            md:text-[38px]
          "
        >
          Colaborative & partnership
        </h3>

        <span className="text-2xl">→</span>
      </div>

      {/* Row 2 */}
      <div
        className="
          py-6

          border-t
          border-[#CFCFCF]

          flex
          flex-col
          md:flex-row

          md:items-center
          justify-between

          gap-4
        "
      >
        <p className="text-sm max-w-[180px]">
          The hanger US Air force
          digital experimental
        </p>

        <h3
          className="
            font-gerbil
            text-[24px]
            md:text-[38px]
          "
        >
          We talk about our weight
        </h3>

        <span className="text-2xl">→</span>
      </div>

      {/* Row 3 */}
      <div
        className="
          py-6

          border-t
          border-b
          border-[#CFCFCF]

          flex
          flex-col
          md:flex-row

          md:items-center
          justify-between

          gap-4
        "
      >
        <p className="text-sm max-w-[180px]">
          Delta faucet content,
          social, digital
        </p>

        <h3
          className="
            font-gerbil
            text-[24px]
            md:text-[38px]
          "
        >
          Piloting digital confidence
        </h3>

        <span className="text-2xl">→</span>
      </div>

    </div>

  </div>

</section>
  );
}

export default Services;
