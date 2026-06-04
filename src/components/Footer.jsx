function Footer() {
  return (
    <section className="bg-[#DDECDD] relative overflow-hidden">

      <div className="max-w-[1200px] mx-auto px-4 py-16 lg:py-24">

        {/* ================= TOP CTA ================= */}

        <div className="text-center">

          <h2
            className="
              font-gerbil
              font-normal

              text-[40px]
              sm:text-[56px]
              md:text-[72px]
              lg:text-[90px]

              leading-[0.95]
            "
          >
            Subscribe to
            <br />
            our newsletter
          </h2>

          <p
            className="
              mt-5

              text-[13px]
              md:text-[15px]
            "
          >
            To make your stay special and even more memorable
          </p>

          <button
            className="
              mt-8

              bg-black
              text-white

              px-8
              py-4

              rounded-full

              text-sm
            "
          >
            Subscribe Now
          </button>
        </div>

        {/* Divider */}

        <div className="mt-16 lg:mt-20 border-t border-[#9AA89A]" />

        {/* ================= LINKS ================= */}

        <div
          className="
            mt-12

            grid
            grid-cols-2
            md:grid-cols-4

            gap-10
          "
        >
          {/* Column 1 */}

          <div>
            <h3 className="font-medium text-lg mb-6">
              Company
            </h3>

            <ul className="space-y-4 text-sm">
              <li>Home</li>
              <li>Studio</li>
              <li>Service</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Column 2 */}

          <div>
            <h3 className="font-medium text-lg mb-6">
              Terms & Policies
            </h3>

            <ul className="space-y-4 text-sm">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Explore</li>
              <li>Accessibility</li>
            </ul>
          </div>

          {/* Column 3 */}

          <div>
            <h3 className="font-medium text-lg mb-6">
              Follow Us
            </h3>

            <ul className="space-y-4 text-sm">
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Youtube</li>
              <li>Twitter</li>
            </ul>
          </div>

          {/* Column 4 */}

          <div>
            <h3 className="font-medium text-lg mb-6">
              Contact
            </h3>

            <ul className="space-y-4 text-sm">
              <li>1498W Fulton St, STE</li>
              <li>2D Chicago, IL 63867</li>
              <li>(123) 456789000</li>
              <li>info@elementum.com</li>
            </ul>
          </div>
        </div>

        {/* ================= COPYRIGHT ================= */}

        <div className="mt-20 text-center">
          <p className="text-xs">
            ©2023 Elementum. All rights reserved
          </p>
        </div>

      </div>

    </section>
  );
}

export default Footer;