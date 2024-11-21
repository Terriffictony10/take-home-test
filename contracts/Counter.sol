// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

contract Counter {

    uint256 public count;

   
    function getCount() public view returns (uint256) {
        return count;
    }
    
    function setCount(uint256 _num) public {
        count = _num;
    }
}
