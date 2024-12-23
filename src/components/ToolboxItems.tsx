import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";
export const ToolboxItems = ({
  items,
  className,
  itemWrapperClassName,
}: {
  items: {
    title: string;
    icon: React.ElementType;
  }[];
  className?: string;
  itemWrapperClassName?: string;
}) => {
  return (
    <div className={twMerge("flex", className)}>
      <div
        className={twMerge(
          "flex flex-none  py-0.5 gap-6 pr-6",
          itemWrapperClassName
        )}
      >
        {items.map((item) => (
          <div
            key={item.title}
            className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
          >
            <TechIcon component={item.icon} />
            <span className="font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
