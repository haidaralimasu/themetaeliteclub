import React, { useState } from "react";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaDiscord, FaPlus, FaMinus } from "react-icons/fa";
import { useEthers } from "@usedapp/core";
import { useCost, useWeiCost, useMaxSupply, useTotalSupply } from "../hooks";
import { ethers } from "ethers";
import nftabi from "../contract/json/NFT.json";
import { notifyMintSuccess, notifyError, notifyNetwork } from "../helper/toast";
import { address } from "../contract";

export default function Hero() {
  const { account, activateBrowserWallet } = useEthers();

  const nftInterface = new ethers.utils.Interface(nftabi);

  const cost = useCost();
  const weiCost = useWeiCost();
  const totalSupply = useTotalSupply();
  const maxSupply = useMaxSupply();

  const [amount, setAmount] = useState(1);
  const [minting, setMinting] = useState(false);

  const increase = () => {
    if (amount < 5) {
      setAmount(amount + 1);
    }
  };

  const onError = () => {
    notifyNetwork();
  };

  const decrease = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  async function handleMint() {
    try {
      setMinting(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const txCost = Number(weiCost) * amount;
      let nftcontract = new ethers.Contract(address, nftInterface, signer);
      let transaction = await nftcontract.mint(amount, {
        value: txCost.toString(),
      });
      await transaction.wait();
      setMinting(false);
      setAmount(1);
      notifyMintSuccess();
    } catch (error) {
      notifyError();
      setAmount(1);
      console.log(error);

      setMinting(false);
    }
  }

  return (
    <>
      <div className="hero-bg d-lg-block d-none">
        <img
          style={{ height: "700px", marginTop: 100 }}
          src="assets/logo.png"
          alt=""
        />
      </div>
      <div className=" hero">
        <div className="container">
          {/* <img src="assets/images/raper.webp" className="raper" alt="" /> */}
          <div className="row mx-0">
            <div className="col-lg-8 d-flex flex-column align-itmes-start col-12">
              <h1 className="heading">The Meta</h1>
              <h1 className="heading text-primary">Elite Club</h1>
              {/* <h1 className="heading text-primary">
                {totalSupply}/{maxSupply}
              </h1> */}

              <p className="col-lg-9 fs-6 fw-500 col-12 ps-0 py-2">
                From the deepest depths of the Metaverse, The Meta Elite Club is
                a secret society that aims to become a home to high-status and
                prestigious Elites of the World. The club is ready to rock the
                world of NFTs unfolding a mass of opportunities for the next
                generation of Entrepreneurs.
              </p>

              {/* {account ? (
                <>
                  <div
                    onClick={() => decrease()}
                    style={{ cursor: "pointer" }}
                    className="button-lines"
                  >
                    <img src="assets/images/button.svg" alt="" />
                    <span>
                      <FaMinus />
                    </span>
                  </div>

                  <div
                    onClick={() => handleMint()}
                    style={{ cursor: "pointer" }}
                    className="button-lines"
                  >
                    <img src="assets/images/button.svg" alt="" />
                    <span>
                      {minting
                        ? "Please Wait"
                        : `Mint ${amount} AP for ${cost * amount}
                      ${ethers.constants.EtherSymbol}`}
                    </span>
                  </div>

                  <div
                    onClick={() => increase()}
                    style={{ cursor: "pointer" }}
                    className="button-lines"
                  >
                    <img src="assets/images/button.svg" alt="" />
                    <span>
                      <FaPlus />
                    </span>
                  </div>
                </>
              ) : (
                <div
                  onClick={() => activateBrowserWallet(onError)}
                  style={{ cursor: "pointer" }}
                  className="button-lines"
                >
                  <img src="assets/images/button.svg" alt="" />
                  <span>Connect Metamask</span>
                </div>
              )} */}

              <>
                {/* <div style={{ cursor: "pointer" }} className="button-lines">
                  <img src="assets/images/button.svg" alt="" />
                  <span>Minting To Be Announced</span>
                </div> */}
              </>
            </div>

            <div className="col-12 d-lg-none d-flex ">
              <img src="assets/logo.png" className="w-100" alt="" />
            </div>
          </div>
        </div>
        {/* <div className="collective">Collective</div> */}
      </div>
    </>
  );
}
