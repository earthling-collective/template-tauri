import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { Button } from "earthling-ui/button";
import { Input } from "earthling-ui/input";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="flex-1 flex flex-col gap-2 items-center justify-center min-h-screen">
      <div className="flex flex-row gap-2">
        <Input value={name} onChange={(e) => setName(e.target.value)} />
        <Button onClick={greet}>Send</Button>
      </div>
      <div>{greetMsg}</div>
    </div>
  );
}

export default App;
