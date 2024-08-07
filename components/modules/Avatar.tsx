import { cn } from "@/lib/utils";

export default function Avatar({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <div
      className={cn(
        "flex w-10 shrink-0 items-center justify-center overflow-hidden rounded-full",
        className,
      )}>
      {children}
    </div>
  );
}
