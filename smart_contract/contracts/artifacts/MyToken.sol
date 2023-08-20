// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FlipkartLoyaltyToken is ERC20 {
    uint256 transactionCount;
    address payable public immutable owner;
    mapping(address => bool) public sellersList;
    mapping(address => bool) public customersList;

    struct info {
        address from;
        address to;
        uint amount;
        uint256 timestamp;
    }

    info[] public history;
    mapping(address => info) public individual_history_received;
    mapping(address => info) public individual_history_sent;

    constructor() ERC20("FlipkartLoyaltyToken", "FLT") {
        owner = payable (msg.sender);
        _mint(owner, 1000000 * (10 ** decimals()));
    }

    function transfer(address to, uint256 amount) public virtual override returns (bool) {
        require(to != address(0), "Please enter the valid address.");
        require(amount > 0, "Please enter the number of tokens to be sent.");
        require(to !=  msg.sender, "Sending to youself is not allowed.");
        
        address _owner = _msgSender();
        transactionCount += 1;
        _transfer(_owner, to, amount);

        history.push(info(_owner,to,amount,block.timestamp));
        individual_history_sent[_owner] = info(_owner,to,amount,block.timestamp);
        individual_history_received[to] = info(_owner,to,amount,block.timestamp);

        return true;
    }

    function balanceOf(address account) public view virtual override returns (uint256) {
        return super.balanceOf(account);
    }

    function number_of_tokens() public view returns (uint256){
        return balanceOf(msg.sender)/(10**decimals());
    }

    function getAllTransactions() public view returns (info[] memory) {
        return history;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }

} 
