import Link from "next/link";
import { Caveat } from "next/font/google";
import Container from "../Container/Container";
import { cn } from "@/utils/utils";

const caveat = Caveat({
    weight: "400",
    style: "normal",
    subsets: ["latin"],
});

export default function Cta() {
    return (
        <Container className="text-brand-light-100">
            <div className="p-5 bg-linear-to-br from-ink-500 to-brand-400 rounded-sm flex">
                <div className="flex flex-col gap-5 sm:flex-8 ">
                    <h2 className="h_2">Have a project in mind?</h2>
                    <p>
                        Let’s build something amazing together. I’m available for freelance projects and full-time
                        opportunities.
                    </p>
                    <div className="flex flex-col gap-5 sm:flex-row">
                        <Link href={"/contact"} className={cn("btn w-full bg-brand-400 sm:max-w-42")}>
                            Get In Touch
                        </Link>
                        <Link href={"/"} className={cn("btn w-full sm:max-w-42 border border-brand-light-100")}>
                            Download Resume
                        </Link>
                    </div>
                </div>

                <div className="hidden justify-center-safe items-center sm:flex sm:flex-4">
                    <p className={`text-center text-3xl font-semibold ${caveat.className}`}>
                        Let’s talk — <br /> I’m here!
                    </p>
                </div>
            </div>
        </Container>
    );
}
