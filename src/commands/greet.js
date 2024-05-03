import { userInfo } from "os";

export function greet() {
  const user = userInfo().username;
  console.log(`Hello, ${user}!`);
}
