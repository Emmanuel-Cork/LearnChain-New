import React from "react";
import Metamask_Error from "./metamask_error";
import ethbg_png from "../assets/eth_gif.gif";
import Search from "./Search";
import Introduction from "./Introduction";
import "../styles/Home.css";

export const Home = ({ address, contract, t_contract, ts_contract, error }) => {
  if (error) {
    return <Metamask_Error />;
  } else {
    return (
      <div className="Home">
        <Search address={address} contract={contract} t_contract={t_contract} ts_contract={ts_contract} />
        <div className="intro-container">
          <div className="intro-text">
            <h1>LearnChain by EM</h1>
            <p id="introduction">An Ethereum Blockchain based Education Platform</p>
            <p id="quote">"Educating Minds, Empowering Futures"</p>
          </div>
          <div className="intro-img">
            <img src={ethbg_png} alt="blockchain_animation"></img>
          </div>
        </div>
        <div className="information">
          <p>
            EDBX Token Address: {t_contract && t_contract._address ? t_contract._address : 'Loading...'}{" "}
            {t_contract && t_contract._address && (
              <i
                className="far fa-copy"
                onClick={() => {
                  navigator.clipboard.writeText(t_contract._address.toString());
                }}
              ></i>
            )}
          </p>
        </div>
        <Introduction />
      </div>
    );
  }
};

