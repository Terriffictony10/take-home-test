const hre = require("hardhat");

async function main() {
	const contract = await hre.ethers.deployContract("Counter")

	await contract.waitForDeployment()

	console.log(`Counter deployed to ${contract.target}`)
}
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});