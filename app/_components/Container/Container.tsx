import { cn } from "@/app/_utils/utils";
import React from "react";

type Props = {
    children: React.ReactNode;
    className?: string;
    parent_bg?: string;
};

export default function Container({ children, className, parent_bg }: Props) {
    return (
        <div className={cn("w-full flex flex-col items-center text-sm", parent_bg)}>
            <div className={cn("w-full min-w-70 md:max-w-180 lg:max-w-240 xl:max-w-300 p-5", className)}>
                {children}
            </div>
        </div>
    );
}
