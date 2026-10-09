"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/Button";

export default function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="flex items-center gap-3">
      <Button size="icon" onClick={decrement} aria-label="Decrease count">
        <Minus className="size-4" />
      </Button>
      <p className="tabular-nums">Counter: {count}</p>
      <Button size="icon" onClick={increment} aria-label="Increase count">
        <Plus className="size-4" />
      </Button>
    </div>
  );
}
