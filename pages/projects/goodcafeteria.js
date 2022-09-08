import React from "react";
import Image from "next/image";
import url from "/public/images/proejct_1.webp";

const Goodcafeteria = () => {
  return (
    <main>
      <header
        style={{
          paddingTop: "54px",
          paddingBottom: "145px",
          color: "#fff",
        }}
      >
        {/* title section */}
        <div
          style={{
            maxWidth: "1024px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              maxWidth: "580px",
              marginLeft: "auto",
            }}
          >
            <p
              style={{
                fontSize: "1rem",
                marginBottom: "75px",
              }}
            >
              Good Cafeteria
            </p>
            <p
              style={{
                fontSize: "2.5rem",
              }}
            >
              An interactive fairy tale for Amsterdam’s biggest fashion
              department store.
            </p>
            <div
              style={{
                margin: "100px 0 60px 0",
                fontSize: ".9285714286rem",
              }}
            >
              <p>2022</p>
            </div>
          </div>
        </div>
        {/* title image section */}
        <div>
          {/*  840, (max-width: 91.24em)695, (max-width: 50.9275em)500, (max-width: 47.99em)400, (max-width: 37.49em)300*/}
          <div
            style={{
              width: "100%",
              height: "840px",
              position: "relative",
            }}
          >
            <Image
              alt="project_image"
              src={url}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        {/* discription section*/}
        <div style={{ marginTop: "105px" }}>
          <div
            style={{
              maxWidth: "1024px",
              margin: "0 auto",
              display: "flex",
            }}
          >
            <div
              style={{
                display: "flex",
                flexGrow: "1",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <p style={{ marginTop: "12px", fontSize: ".6428571429rem" }}>
                How it started
              </p>
              <ul
                style={{
                  fontSize: "1.2857142857rem",
                  lineHeight: "2",
                }}
              >
                <li>Development</li>
                <li>Development</li>
                <li>Development</li>
                <li>Development</li>
              </ul>
            </div>
            <div style={{ width: "580px" }}>
              <p
                style={{
                  marginBottom: "30px",
                  fontSize: "1.2857142857rem",
                  lineHeight: "1.7777777778",
                }}
              >
                The Amsterdam-based agency DEPT contacted us on behalf of their
                partners Bijenkorf with the festive ask - “Please craft us an
                innovative Christmas story”. So as we waved our last goodbyes to
                August’s comforting warmth and welcomed this challenge as a way
                to take the bite out of winter’s impending arrival. Winter was
                coming.
              </p>
              <p
                style={{
                  fontSize: "1.1428571429rem",
                  lineHeight: "2",
                  color: "#aaa",
                }}
              >
                Sharpening our Apple pencils, and filling our heads with magical
                imagery, we quickly aligned with DEPT’s team to sketch the
                outline of the Bijenkorf’s online Christmas campaign. Creating
                an enchanting moment for online shoppers started with the
                Bijenkorf name itself: “beehive” in English. Additional magic
                came from expanding our hive to collaborate with the amazing
                French-Canadian illustrator Myriam Wares.
              </p>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div
          style={{
            paddingBottom: "105px",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
              }}
            >
              <Image
                alt="project_image"
                src={url}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Goodcafeteria;
