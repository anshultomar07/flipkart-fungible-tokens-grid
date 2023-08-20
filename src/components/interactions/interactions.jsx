import { React, useState } from 'react'
import styles from './Wallet.modules.css';
import { BiTransfer } from 'react-icons/bi';
import { BsSend } from 'react-icons/bs';

import Portfolio from '../portfolio/Portfolio';
const Interactions = (props) => {

	const [transferHash, setTransferHash] = useState();
	const [errorMsg, setErrorMsg] = useState();
	const [success, setSuccess] = useState();


	const transferHandler = async (e) => {
		e.preventDefault();
		let transferAmount = e.target.sendAmount.value;
		let recieverAddress = e.target.recieverAddress.value;

		if (!transferAmount) {
			setErrorMsg("Receiver's Address or Amount Not Entered....");
			setTimeout(() => {
				setErrorMsg('')
			}, 2000);

		}
		else {
			let txt = await props.contract.transfer(recieverAddress, transferAmount);
			console.log(txt);
			// setTransferHash("Transaction Successful!", txt.hash);
			setSuccess("Transaction Successful!");
			setTimeout(() => {
				setSuccess('')
			}, 2000);
			setTransferHash("Transfer confirmation hash: " + txt.hash);
		}

	}

	return (
		<>
			<div className='transfer_card'>
				<form onSubmit={transferHandler}>
					<div className='transfer_heading'><BiTransfer /> Transfer FLT </div>
					<span className='address_heading'> Reciever Address </span>
					<input type='text' id='recieverAddress' className={styles.addressInput} />

					<span className='address_heading'> Amount </span>
					<input type='number' id='sendAmount' min='0' step='1' />

					<button type='submit' className='btn send_btn'><BsSend /> Send</button>

					<div>{errorMsg}</div>

					<div className='confirmation_hash'>
						{success}
					</div>
				</form>
			</div>
			<Portfolio contract = {props.contract} />
		</>

	)

}

export default Interactions;