const CollectionFactoryContract = {
  MAINNET_721_PRIVATE: '0x96264d4d5922b627cf5297Ad2E4D6273A73C1CC1', //FantomNFTFactoryPrivate
  MAINNET_721_PUBLIC: '0xaad585ecd23AFD195Ae035C7150CBce3C341c53b', //FantomNFTFactory
  TESTNET_721_PRIVATE: '0x96264d4d5922b627cf5297Ad2E4D6273A73C1CC1', //FantomNFTFactoryPrivate
  TESTNET_721_PUBLIC: '0xaad585ecd23AFD195Ae035C7150CBce3C341c53b', //FantomNFTFactory
  MAINNET_1155_PRIVATE: '0x0F85FAbcdb1A45110e1cA4417855dB39B3dBa5f2', //FantomArtFactoryPrivate
  MAINNET_1155_PUBLIC: '0xEEB4b411020d11E92e30BCf52Df5F5025c4f871E', //FantomArtFactory
  TESTNET_1155_PRIVATE: '0x0F85FAbcdb1A45110e1cA4417855dB39B3dBa5f2', //FantomArtFactoryPrivate
  TESTNET_1155_PUBLIC: '0xEEB4b411020d11E92e30BCf52Df5F5025c4f871E', //FantomArtFactory
  ABI: [
    {
      inputs: [{ internalType: 'address', name: '', type: 'address' }],
      name: 'exists',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function'
    }
  ]
};

module.exports = CollectionFactoryContract;
