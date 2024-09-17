async function connectWallet() {
    try {
      // connect to the ArConnect browser extension
      await window.arweaveWallet.connect(
        // request permissions
        ["ACCESS_ADDRESS", "SIGN_TRANSACTION", "ACCESS_PUBLIC_KEY", "SIGNATURE"],
      );
      console.log("1111")
    } catch (error) {
      alert('You should connect to ArConnect browser extension.');
      return false;
    }
  
    return true;
  }

  connectWallet();