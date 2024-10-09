"use client";

import { usePathname } from "next/navigation";
import { HomeIcon as SolidHomeIcon } from "@heroicons/react/24/solid";
import { HomeIcon as OutlineHomeIcon } from "@heroicons/react/24/outline";

import TabButton from "./tab-button";

export default function TabBar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 w-full mx-auto max-w-screen-sm grid grid-cols-3 border-neutral-200 bg-stone-200 border-t px-5 py-3 *:text-stone-700">
      <TabButton
        title="홈"
        pathname="/"
        isActive={pathname === "/"}
        defaultIcon={<OutlineHomeIcon className="size-7 text-stone-500" />}
        activeIcon={<SolidHomeIcon className="size-7" />}
      />
    </div>
  );
}
