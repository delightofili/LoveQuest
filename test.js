import { hashPassword, verifyPassword } from "./lib/auth/hash.js";

const password = "hello123";
const hash = await hashPassword(password);

console.log(hash);

console.log(await verifyPassword(password, hash));
