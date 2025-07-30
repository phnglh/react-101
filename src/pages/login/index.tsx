import { useState } from "react";
import { Button } from "../../components/ui/button";
import kyClient from "../../libs/kyClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await kyClient
        .post("auth/login", {
          json: { email, password },
          credentials: "include",
        })
        .json<{ accessToken: string }>();

      console.log("Login success:", data.accessToken);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <>
      <section className="content">
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto mt-10 space-y-6 bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
            />
          </div>
          <div>
            <Button type="submit">Login</Button>
          </div>
        </form>
      </section>
    </>
  );
}
