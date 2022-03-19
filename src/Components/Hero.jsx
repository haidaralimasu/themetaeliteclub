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
      <div
        className=" hero"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className=" ">
          <div>
            <div>
              <h1 style={{ textAlign: "center" }} className="heading">
                THE META
              </h1>
              <h1
                style={{ textAlign: "center", marginBottom: "30px" }}
                className="heading text-primary"
              >
                ELITE CLUB
              </h1>
              <h6
                style={{ textAlign: "center", width: "60%", margin: "auto" }}
                // className="col-lg-9 fs-6  col-12 ps-0 py-2"
              >
                From the deepest depths of the Metaverse, The Meta Elite Club is
                a secret society that aims to become a home to high-status and
                prestigious Elites of the World. The club is ready to rock the
                world of NFTs unfolding a mass of opportunities for the next
                generation of Entrepreneurs.
              </h6>
            </div>

            {/* <p
              style={{ textAlign: "center", width: "80%" }}
              // className="col-lg-9 fs-6  col-12 ps-0 py-2"
            >
              From the deepest depths of the Metaverse, The Meta Elite Club is a
              secret society that aims to become a home to high-status and
              prestigious Elites of the World. The club is ready to rock the
              world of NFTs unfolding a mass of opportunities for the next
              generation of Entrepreneurs.
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
}
