import { cn } from "@/utils/utils";
import React from "react";

type Props = {
    children: React.ReactNode;
    className?: string;
};

export default function Container({ children, className }: Props) {
    return (
        <div className="w-full flex flex-col items-center text-sm">
            <div className={cn("w-full min-w-70 md:max-w-180 lg:max-w-240 xl:max-w-300 p-5", className)}>
                {children}
            </div>
        </div>
    );
}
