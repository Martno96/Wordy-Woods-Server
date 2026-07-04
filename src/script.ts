import { prisma } from "./lib/prisma";
async function main() {
  const response = await fetch("http://localhost:8080/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "Balice",
      display_name: "Babalicice",
      email: "balice@prisma.io",
      password: "password123",
    }),
  });

  const text = await response.text();
  console.log("Raw response:", text);

  const data = JSON.parse(text);
  console.log("Register response:", data);
}

main().catch(console.error);
