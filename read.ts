import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";

const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const address = new PublicKey(`6AE2FakfBtLijYnhPVV67ac6aaNCkA6QN34j4pEv1xMW`);
const balance = await connection.getBalance(address);
const balanceInSOL = await balance / LAMPORTS_PER_SOL;
console.log("Connected");

console.log(
    `💰 Finished! The balance for the wallet at address ${address} is ${balanceInSOL}!`
);