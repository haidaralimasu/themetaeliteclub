import { React, useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { BsPlusLg } from "react-icons/bs";
import {
  AccordionContext,
  useAccordionButton,
  Accordion,
  Card,
} from "react-bootstrap";

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button type="button" onClick={decoratedOnClick} className="acc-toggler">
      {isCurrentEventKey ? <IoMdClose /> : <BsPlusLg />}
    </button>
  );
}

export default function Faq() {
  return (
    <>
      <div className="container">
        <div className="d-flex flex-column align-items-center mt-5">
          <h1
            style={{ color: "white", marginBottom: "60px" }}
            className="heading "
          >
            FAQ
          </h1>
        </div>
      </div>
      <div className="zangeer-2"></div>
      <div className="row mx-0 justify-content-center ">
        <div className="col-lg-9 col-12">
          <Accordion>
            <Card className="m-0 mb-3 acc-card">
              <Card.Header className="py-3 d-flex align-items-center justify-content-between">
                <div className="mb-0">What is The Meta Elite Club NFT?</div>
                <ContextAwareToggle eventKey="0">+</ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="">
                  {" "}
                  <span className="ps-lg-5 ps-0">
                    The Meta Elite Club NFT is a collection of luxury human
                    avatars that represent class, status and identity.
                  </span>{" "}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="m-0 mb-3 acc-card">
              <Card.Header className="py-3 d-flex align-items-center justify-content-between">
                <div className="mb-0">What is The Metaverse?</div>
                <ContextAwareToggle eventKey="1">+</ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="">
                  {" "}
                  <span className="ps-lg-5 ps-0">
                    The Metaverse is Web 3.0. It’s a simulated digital
                    environment that combines Virtual Reality, Augmented Reality
                    and Blockchain to create unique environments/rooms/spaces
                    where users can interact with each other, making the virtual
                    room look like the real world.
                  </span>{" "}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="m-0 mb-3 acc-card">
              <Card.Header className="py-3 d-flex align-items-center justify-content-between">
                <div className="mb-0">
                  How Do I Earn Passive Income By Joining The Meta Elite Club?
                </div>
                <ContextAwareToggle eventKey="2">+</ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="">
                  {" "}
                  <span className="ps-lg-5 ps-0">
                    The Meta Elite Club will purchase land in the Metaverse,
                    creating additional income opportunities for the holders.
                  </span>{" "}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="m-0 mb-3 acc-card">
              <Card.Header className="py-3 d-flex align-items-center justify-content-between">
                <div className="mb-0">
                  How do I Connect My Wallet to Mint The Meta Elite Club NFT?
                </div>
                <ContextAwareToggle eventKey="3">+</ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="">
                  {" "}
                  <span className="ps-lg-5 ps-0">
                    To mint the Meta Elite Club NFTs, you need to connect your
                    crypto wallet to an NFT marketplace like OpenSea. You can
                    use wallets like MetaMask or Coinbase to mint the NFT once
                    it’s released.
                  </span>{" "}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="m-0 mb-3 acc-card">
              <Card.Header className="py-3 d-flex align-items-center justify-content-between">
                <div className="mb-0">
                  How Much Does Minting The Meta Elite Club NFT Cost?
                </div>
                <ContextAwareToggle eventKey="4">+</ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="">
                  {" "}
                  <span className="ps-lg-5 ps-0">
                    Pre Sale will be 0.20 ETH and Public Sale will be 0.25 ETH
                  </span>{" "}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="m-0 mb-3 acc-card">
              <Card.Header className="py-3 d-flex align-items-center justify-content-between">
                <div className="mb-0">
                  How Do I View My Meta Elite Club NFT after buying?
                </div>
                <ContextAwareToggle eventKey="5">+</ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="5">
                <Card.Body className="">
                  {" "}
                  <span className="ps-lg-5 ps-0">
                    After minting The Meta Elite Club NFT, you can access your
                    NFT using an OpenSea account once you log in from your
                    MetaMask wallet.
                  </span>{" "}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="m-0 mb-3 acc-card">
              <Card.Header className="py-3 d-flex align-items-center justify-content-between">
                <div className="mb-0">What Does Minting Mean?</div>
                <ContextAwareToggle eventKey="6">+</ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="6">
                <Card.Body className="">
                  {" "}
                  <span className="ps-lg-5 ps-0">
                    Minting means you are purchasing a piece of digital art that
                    becomes part of the Ethereum Blockchain. Your digital
                    artwork is represented as a Non Fungible Token (NFT) so that
                    it can be traded on the market and tracked digitally when it
                    is resold or collected again in the future.
                  </span>{" "}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="m-0 mb-3 acc-card">
              <Card.Header className="py-3 d-flex align-items-center justify-content-between">
                <div className="mb-0">
                  What is The Rich Baby NFT and How Can I Mint It?
                </div>
                <ContextAwareToggle eventKey="6">+</ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="6">
                <Card.Body className="">
                  {" "}
                  <span className="ps-lg-5 ps-0">
                    The Rich Baby is an exclusive NFT for holders who own a man
                    and woman Elite. The Rich Baby will unlock additional
                    utilities.
                  </span>{" "}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="m-0 mb-3 acc-card">
              <Card.Header className="py-3 d-flex align-items-center justify-content-between">
                <div className="mb-0">
                  When is The Meta Elite Club NFT dropping?
                </div>
                <ContextAwareToggle eventKey="7">+</ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="7">
                <Card.Body className="">
                  {" "}
                  <span className="ps-lg-5 ps-0">To Be Announced</span>{" "}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="m-0 mb-3 acc-card">
              <Card.Header className="py-3 d-flex align-items-center justify-content-between">
                <div className="mb-0">How can I get a Pre Sale Spot? </div>
                <ContextAwareToggle eventKey="8">+</ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="8">
                <Card.Body className="">
                  {" "}
                  <span className="ps-lg-5 ps-0">
                    To join our Pre Sale you must first join our Discord and
                    follow the steps. Everyone can participate.
                  </span>{" "}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    </>
  );
}
