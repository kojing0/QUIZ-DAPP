// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract Reward {
    string public _message;

    constructor() {
        console.log("checking my contract");
    }

    function printMessage() public returns (string memory) {
        _message = "My Message";
        console.log("function log %s", _message);
        return _message;
    }

    function getOwnerAddress() public {
        console.log("owner wallet address $s", msg.sender);
    }
}
