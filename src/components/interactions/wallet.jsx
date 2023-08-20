import { React, useState, useEffect } from 'react'
import { ethers } from 'ethers'
import styles from './Wallet.modules.css'
import simple_token_abi from './simple_token_abi.json'
import Interactions from './interactions';
import { GrConnect } from 'react-icons/gr';
import Portfolio from '../portfolio/Portfolio';

const Wallet = () => {


	// deploy simple token contract and paste deployed contract address here. This value is local ganache chain
	let contractAddress = '0xa9C1eCa6Bf5D84C36Af9f556B745068E3Ee58790';

	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');

	const [provider, setProvider] = useState(null);
	const [signer, setSigner] = useState(null);
	const [contract, setContract] = useState(null);

	const [tokenName, setTokenName] = useState("Token");
	const [balance, setBalance] = useState(null);
	const [transferHash, setTransferHash] = useState(null);



	const connectWalletHandler = async () => {
		if (window.ethereum && window.ethereum.isMetaMask) {

			window.ethereum.request({ method: 'eth_requestAccounts' })
				.then(result => {

					accountChangedHandler(result[0]);
					setConnButtonText('Wallet Connected');
				})
				.catch(error => {
					setErrorMessage(error.message);
					setTimeout(() => {
						setErrorMessage('')
					}, 3000);

				});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

	// update account, will cause component re-render
	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		updateEthers();
	}

	const updateBalance = async () => {
		let balanceBigN = await contract.balanceOf(defaultAccount);
		let balanceNumber = balanceBigN;

		let tokenDecimals = await contract.decimals();

		let tokenBalance = balanceNumber / Math.pow(10, tokenDecimals);

		setBalance(toFixed(tokenBalance));


	}

	function toFixed(x) {
		if (Math.abs(x) < 1.0) {
			var e = parseInt(x.toString().split('e-')[1]);
			if (e) {
				x *= Math.pow(10, e - 1);
				x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
			}
		} else {
			var e = parseInt(x.toString().split('+')[1]);
			if (e > 20) {
				e -= 20;
				x /= Math.pow(10, e);
				x += (new Array(e + 1)).join('0');
			}
		}
		return x;
	}

	const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	}

	// listen for account changes
	window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);

	const updateEthers = () => {
		let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
		setProvider(tempProvider);

		let tempSigner = tempProvider.getSigner();
		setSigner(tempSigner);

		let tempContract = new ethers.Contract(contractAddress, simple_token_abi, tempSigner);
		setContract(tempContract);
	}

	useEffect(() => {
		if (contract != null) {
			updateBalance();
			updateTokenName();
		}
	}, [contract]);

	const updateTokenName = async () => {
		setTokenName(await contract.name());
	}

	return (
		<>
			<div className='wallet-body'>
				<div className='conn_button_div' >
					<button className=' conn' onClick={connectWalletHandler}><GrConnect /> {connButtonText}</button>
				</div>

				<div className='hidden_container'>
					<div>
						{defaultAccount && (<div className='hidden_details'>Address: {defaultAccount}</div>)}

					</div>

					<div>
						{balance && <div className='hidden_details'>{tokenName} Balance: {balance}</div>}
						{balance == 0 && <div className='hidden_details'>You don't have FLT.</div>}
					</div>

					{errorMessage}
				</div>
				<Interactions contract={contract} />
			</div>
			{/* <Portfolio/> */}
			
		</>
	)
}

export default Wallet;