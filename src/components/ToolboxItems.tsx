import { TechIcon } from "./TechIcon";
export const ToolboxItems = ({
  items,
}: {
  items: {
    title: string;
    icon: React.ElementType;
  }[];
}) => {
  return (
    <div className="flex">
      <div className="flex flex-none  py-0.5">
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
