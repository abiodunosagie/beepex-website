"use client";

import { useSyncExternalStore } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme, type Theme } from "./ThemeProvider";

const options: { value: Theme; label: string; icon: typeof Sun }[] = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
];

// True only after client hydration. Lets us defer the active highlight,
// whose source (localStorage) is unknown on the server, without a
// setState-in-effect or a hydration mismatch.
const emptySubscribe = () => () => {};
function useHydrated() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}

// Lives in the dark footer, so it is styled for a dark surface only.
export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const mounted = useHydrated();

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className="inline-flex items-center gap-0.5 rounded-xl border border-gray-800 bg-gray-900 p-1"
    >
      {options.map(({ value, label, icon: Icon }) => {
        const active = mounted && theme === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => setTheme(value)}
            className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
              active
                ? "bg-white text-gray-900"
                : "text-gray-400 hover:text-white hover:bg-gray-800"
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            {label}
          </button>
        );
      })}
    </div>
  );
}
