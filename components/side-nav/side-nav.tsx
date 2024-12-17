"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { usePathname, useRouter } from "next/navigation";

interface TabProps {
  text: string;
  icon?: string;
  href: string;
  count?: number;
}

export default function SideNav({ tabs }: { tabs: TabProps[] }) {
  const pathname = usePathname();
  const router = useRouter();
  const [selected, setSelected] = useState<string>(
    tabs.find((tab) => tab.href === pathname)?.text || tabs[0].text
  );

  useEffect(() => {
    const currentTab = tabs.find((tab) => tab.href === pathname);
    if (currentTab) {
      setSelected(currentTab.text);
    }
  }, [pathname, tabs]);

  const handleTabClick = (tab: TabProps) => {
    setSelected(tab.text);
    router.push(tab.href);
  };

  return (
    <div className=" sticky top-0">
      <div className="flex flex-col space-y-1">
        {tabs.map((tab) => (
          <Tab
            {...tab}
            selected={selected === tab.text}
            onClick={() => handleTabClick(tab)}
            key={tab.text}
          />
        ))}
      </div>
    </div>
  );
}

interface TabComponentProps extends TabProps {
  selected: boolean;
  onClick: () => void;
}

const Tab = ({
  text,
  icon,
  href,
  count,
  selected,
  onClick,
}: TabComponentProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative rounded-md px-4 py-3 text-sm transition-all w-full",
        "flex items-center space-x-3 group",
        selected ? "text-zinc-100" : "text-zinc-900 hover:font-black"
      )}
    >
      {icon && (
        <Icon
          icon={icon}
          className={cn(
            "w-5 h-5 transition-all z-10",
            selected
              ? "text-zinc-100"
              : "text-zinc-700 group-hover:text-zinc-950"
          )}
        />
      )}
      <p className="relative z-50 min-w-20 text-left flex-grow">{text}</p>
      {count !== undefined && (
        <span
          className={cn(
            "ml-auto text-xs rounded-full px-2 py-1 z-10 bg-zinc-200",
            selected ? " text-zinc-950" : " text-zinc-700"
          )}
        >
          {count}
        </span>
      )}
      {selected && (
        <motion.a
          layoutId="tabs"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 rounded-md bg-zinc-950 -left-2"
        />
      )}
    </button>
  );
};
