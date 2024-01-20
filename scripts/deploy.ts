import { ethers } from "hardhat";

async function main() {
  const FlashLoan = await ethers.getContractFactory("FlashLoan");
  const flashLoan = await FlashLoan.deploy("0x012bAC54348C0E635dCAc9D5FB99f06F24136C9A");

  // await flashLoan.deployed();
  console.log("Address of the newly deployed contract", flashLoan);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
