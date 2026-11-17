import { cn } from "@/app/_utils/utils";
import Link from "next/link";
import React from "react";

export type Service = {
    name: string;
    short_description: string;
    delivery_type: string;
    timeline: string;
};

type Props = {
    service: Service;
    className?: string;
};

export default function ServiceCard({ service, className }: Props) {
    return (
        <div className={cn("flex flex-col gap-2 border border-brand-light-400 p-5 rounded-sm", className)}>
            <div
                className="size-12 rounded-full bg-brand-light-200 border border-brand-light-400 flex 
                            justify-center items-center"
            >
                <div className="size-5 rounded-sm bg-brand-400"></div>
            </div>
            <h3 className="h_3 text-ink-500">{service.name}</h3>
            <p className="text-ink-100">{service.short_description}</p>
            <hr className="border border-brand-light-400" />
            <span>{`Deliverables: ${service.delivery_type}`}</span>
            <span>{`Timeline: ${service.timeline}`}</span>
            <Link
                href={"/contact"}
                className="w-full py-2 bg-brand-400 rounded-sm text-center text-md text-white bg-linear-to-r
                 from-brand-500 from-50% to-brand-400 to-50% bg-size-[200%_auto] bg-right hover:bg-left brand-transition"
            >
                Let's Talk
            </Link>
        </div>
    );
}
