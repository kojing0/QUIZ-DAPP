'use client';
import { useEffect, useState } from 'react';
export default function Home() {
  const [currentAccount, setCurrentAccount] = useState<string>('');
  console.log('currentAccount :', currentAccount);
  const checkWalletIsConnected = async () => {
    try {
      const { ethereum } = window as any;
      if (!ethereum) {
        console.log('Make sure you have MetaMask!')
      } else {
        console.log('We have the etnereum object', ethereum)
      }

      // ウォレットにアクセスできるか確認
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log('Found an authorized account :', account);
        setCurrentAccount(account);
      } else {
        console.log('No authorized account found')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const connectWallet = async () => {
    try {
      const { ethereum } = window as any;
      if (!ethereum) {
        alert('Get Metamask');
        return
      }
      const accounts: any = await ethereum.request({
        method: 'eth_requestAccounts'
      });
      console.log('Connected :',);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    checkWalletIsConnected();
  }, [])

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>
        Create Apps
      </div>
      <div>
        {!currentAccount && (
          <button onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
      </div>
    </main>
  )
}
