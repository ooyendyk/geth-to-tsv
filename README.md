# Geth to TSV

This app extracts data from a Geth node, and saves it in a TSV file

Project Brief: https://docs.google.com/document/d/1dFDgdRc1EAIV4rWh3PYWCVCk0SVOlkjkz2W_E26UKP0/edit

Start Clef:
`clef --keystore <GETH_DATA_DIR>/keystore --chainid 5`

Start Clef on my system: `clef --keystore ~/.ethereum/keystore --chainid 5`

Start Geth: `geth --goerli --syncmode "light" --http --ws --signer=<CLEF_LOCATION>/clef.ipc`

Start Geth on my system: `geth --goerli --syncmode "light" --http --ws --signer=/home/user/.clef/clef.ipc`