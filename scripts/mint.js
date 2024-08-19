const hre = require("hardhat");
const utils = require("../utils/utils.js")

async function main() {
  const contractAddress = "0x7bB0bCd45344dA6589d7d7c72dE2Cb99C59817a2";
  const [signer] = await hre.ethers.getSigners();

  const contractFactory = await hre.ethers.getContractFactory("SwisstronikPErc20");
  const contract = contractFactory.attach(contractAddress);

  const mint = await utils.sendShieldedTransaction(
    signer,
    contractAddress,
    "",
    0
  );

  await mint.wait();
  console.log("Transaction Receipt: ", mint.hash);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});