import { cn } from "@/lib/utils";

export default function Avatar({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <div className="avatar">
      <div className={cn("w-10 rounded-full", className)}>{children}</div>
    </div>
  );
}
