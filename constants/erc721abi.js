const ERC721ABI = {
  RPC: 'https://kovan.infura.io/v3/ff21521dcf6745908bd33d52f5a66297',
  CHAINID: 42,
  ABI: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address'
        },
        { indexed: true, internalType: 'address', name: 'to', type: 'address' },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256'
        }
      ],
      name: 'Transfer',
      type: 'event'
    }
  ]
};

module.exports = ERC721ABI;
