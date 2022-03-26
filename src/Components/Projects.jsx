import React from "react";

export default function Projects() {
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row mx-0">
          <div className="col-lg-6 col-12 d-flex flex-column">
            <h1
              style={{ textAlign: "center" }}
              className="heading text-primary"
            >
              THE
            </h1>
            <h1 style={{ textAlign: "center" }} className="heading">
              PROJECT
            </h1>
            <img src="assets/images/line.svg" className="w-100 mb-5" alt="" />
            <div
              style={{ paddingTop: "-10px" }}
              className="project-wrapper w-100"
            >
              <img src="assets/women.png" className="w-100" alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-12 mt-lg-0 mt-4">
            <div className="project-card px-lg-5 px-3 p-4">
              <h1 style={{ textAlign: "center" }} className="heading-2 pt-3">
                THE META ELITE CLUB
              </h1>
              <p style={{ textAlign: "center" }} className="fs-5 ">
                The Meta Elite Club NFT is a collection of{" "}
                <span className="text-primary pe-1">6000</span> luxury human
                avatars split between men and women.
              </p>
              <p style={{ textAlign: "center" }} className="fs-5 ">
                The Meta Elite Club NFT is stored as ERC-721 on the Blockchain.
                We envision The Meta Elite Club NFT as being the home to the
                most affluent human avatars with class and status.
              </p>
              <p style={{ textAlign: "center" }} className="fs-5 ">
                The NFT you own will become a symbol of your status and a part
                of your identity. We believe in changing the world of NFTs while
                providing benefits to NFT holders.
              </p>
              <p style={{ textAlign: "center" }} className="fs-5 ">
                Here at T.M.E.C we’re not just creating an experience for NFT
                lovers, we’re creating a lifestyle that will bring you a lavish
                way of living.
              </p>

              <div className="d-flex w-100 justify-content-center">
                <div className="button-lines button-lines-2">
                  {/* <img src="assets/images/button-2.svg" alt="" /> */}

                  <button>
                    {/* <span
                      style={{
                        borderRadius: "10px",
                        margin: "10",
                        borderColor: "white",
                      }}
                      className="fs-5 "
                    >
                      Read Whitepaper
                    </span> */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          style={{
            position: "relative",
            top: "-10px",
            border: "2px solid white",
            borderRadius: "50px",
            background: "white",
            color: "black",
          }}
          className="btn-1 py-2"
        >
          Read our whitepaper
        </button>
      </div>
    </>
  );
}
