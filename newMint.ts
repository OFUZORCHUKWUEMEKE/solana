import { createMint } from "@solana/spl-token";
import { clusterApiUrl, Connection } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
// Create a new Mint Token 
// const tokenMint = await createMint(
//     connection,
//     payer,
//     mintAuthority,
//     freezeAuthority,
//     decimal
// );

// connection - The JSON-RPC connection of the cluster
// payer - the public key of the payer for the transaction
// mintAuthority - the account that is authorized to do the actual minting of tokens from the token mint.
// freezeAuthority - an account authorized to freeze the tokens in a token account. If freezing is not a desired attribute, the parameter can be set to null
// decimals - specifies the desired decimal precision of the token