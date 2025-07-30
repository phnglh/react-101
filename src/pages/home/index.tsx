import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";

export default function HomePage() {
  const [value, setValue] = useState(false);

  useEffect(() => {
    console.log(`Value initialize:: ${value}`);
  }, [value]);
  return (
    <>
      <main className="flex md:flex-row flex-col justify-between">
        <span className="text-xl text-teal-500">test neovim</span>
        <span className="text-2xl text-indigo-500">test neovim</span>
        <span className="text-2xl text-blue-400">test neovim</span>
        <span className="text-2xl text-green-400">test neovim</span>
        <span className="text-2xl text-rose-400">test neovim</span>
        <Button variant="outline" onClick={() => setValue((pre) => !pre)}>
          Submit
        </Button>
      </main>
    </>
  );
}
