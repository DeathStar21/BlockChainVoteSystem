import { ethers } from "ethers";

import { useState, useEffect } from "react";
import ABIFILE from "./artifacts/contracts/BlockchainVoting.sol/BlockchainVoting.json";

import Propsal from "./comp/Propsal";

const ABI = ABIFILE.abi;
const ContractAddress = "0x0fee2908afda3d25e876c05ed5a6b9e40c37d909";

function Create() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [isoff, setOff] = useState(false);
  const [loading, setLoading] = useState(false);

  const Dicconnect = async () => {
    if (typeof window !== "undefined") {
      if (window.localStorage.getItem("Connected")) {
        window.localStorage.removeItem("Connected");
        setOff(false);
        window.location.reload();
      } else {
      }
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.localStorage.getItem("Connected")) {
        Connect();
      }
    }
  }, []);

  const Connect = async (e) => {
    // e.preventDefault();
    setLoading(true);
    if (typeof window.ethereum !== "undefined") {
      const account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setOff(true);
      window.localStorage.setItem("Connected", "injected");
      console.log(account);
      setAccount(account);
      document.getElementById("connectbtn").innerHTML = account;

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);

      const signer = provider.getSigner();
      console.log(signer);
      const contract = new ethers.Contract(ContractAddress, ABI, signer);
      setContract(contract);
      console.log(contract);
    }
  };
  return (
    <div
      className="mx-auto p-4 text-light  "
      style={{
        width: 1000,
        marginTop: 25,
        backgroundColor: "rgba(64, 126, 255, 0.7)",
      }}
    >
      <h1 className="text-center text-warning p-2">
        E-Voting System
      </h1>
      
      <br></br>
      <Propsal contract={contract} account={account} provider={provider} />
    </div>
  );
}

export default Create;
