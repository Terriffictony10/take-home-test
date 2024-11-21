import React, { useEffect, useState } from 'react';
import { ethers } from "ethers";
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter.json";

function App() {

  const [count, setCount] = useState(0);
  const [contract, setContract] = useState(null)

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

  const loadBlockchainData = async () => {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner()
      const mainContract = new ethers.Contract(contractAddress, Counter, signer);
      console.log("works")
      setContract(mainContract)

      const _count = await mainContract.getCount()
      setCount(Number(_count))
  }

  useEffect(() => {
    loadBlockchainData()
  }, [])

  const changeCount = async () => {
    if (contract) {
      const _value = prompt('Enter new count');
      if(_value !== null){
        const tx = await contract.setCount(_value)
        await tx.wait()
        const newCount = await contract.getCount()
        setCount(Number(newCount))
      }
    }
  }
  return (
    <div style={{textAlign: 'center', margintTop: '50px'}}>
      <p>Current Count: {count}</p>
      <button onClick={changeCount}> Set Count </button>
    </div>
  );
}

export default App;
