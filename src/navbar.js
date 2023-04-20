import React from 'react'
import ABIFILE from "./artifacts/contracts/BlockchainVoting.sol/BlockchainVoting.json";
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav,NavDropdown } from 'react-bootstrap';
import * as ReactBootStrap from "react-bootstrap";
import { useState } from "react";
import { ethers } from "ethers";
const ContractAddress = "0x0fee2908afda3d25e876c05ed5a6b9e40c37d909";

const ABI = ABIFILE.abi;

export default function Navbar2() {
    const [account, setAccount] = useState("");
    const [contract, setContract] = useState(null);
    const [provider, setProvider] = useState(null);
    const [isoff, setOff] = useState(false);
    const [loading, setLoading] = useState(false);

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

    return (
        <div>
            <Navbar bg="info" style={{ color: 'white' }}>
                <Container>
                    <Navbar.Brand href="#">Voting System DEMO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/Home" className="nav-link">Home</Link>
                    
                            <NavDropdown title="Vote" id="basic-nav-dropdown">
                                <Link to="/Vote" className="dropdown-item">Vote</Link>
                                <NavDropdown.Divider />
                                <Link to="/Create" className="dropdown-item">Create</Link>
                            </NavDropdown>

                            <Link to="/Show" className="nav-link">Election Results</Link>
                            <Link to="/About" className="nav-link">about us</Link>
                        </Nav>
                        <button
                            onClick={Connect}
                            id="connectbtn"
                            className="btn btn-success mx-2"
                        >
                            {!loading ? (
                                "Connect"
                            ) : (
                                <ReactBootStrap.Spinner
                                    as="span"
                                    animation="grow"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                            )}
                        </button>
                        <button onClick={Dicconnect} id="Dissconnectbtn" className="btn btn-success mx-2" disabled={!isoff}>
                            Disconnect
                        </button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>


    )
}
