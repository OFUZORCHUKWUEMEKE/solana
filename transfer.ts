import { airdropIfRequired } from "@solana-developers/helpers";
import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, SystemInstruction, SystemProgram, Transaction, clusterApiUrl, sendAndConfirmTransaction } from "@solana/web3.js";

const keypair = Keypair.generate()

const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const address = new PublicKey(keypair.publicKey.toBase58());
const reciepient = new PublicKey(`CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN`);
const transaction = new Transaction();

await airdropIfRequired(
    connection,
    keypair.publicKey,
    1 * LAMPORTS_PER_SOL,
    0.5 * LAMPORTS_PER_SOL,
);

const sendSolInstuction = SystemProgram.transfer({
    fromPubkey: address,
    toPubkey: reciepient,
    lamports: LAMPORTS_PER_SOL * 1
})
transaction.add(sendSolInstuction);
const signature = sendAndConfirmTransaction(
    connection,
    transaction,
    [keypair]
).then((signature) => {
    console.log("Transaction sent with signature:", signature)
}).catch((error) => {
    console.log("Error sending transaction:", error);
})