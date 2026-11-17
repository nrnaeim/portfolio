import Container from "../_components/Container/Container";
import ServiceCard, { Service } from "./_components/ServiceCard";

const services: Service[] = [
    {
        name: "Web Application Development",
        short_description: "Custom web apps with React, Next.js - and modern UI/UX.",
        delivery_type: "Source code, deployment, docs",
        timeline: "Timeline: 2-6 weeks",
    },

    {
        name: "Web Application Development",
        short_description: "Custom web apps with React, Next.js - and modern UI/UX.",
        delivery_type: "Source code, deployment, docs",
        timeline: "Timeline: 2-6 weeks",
    },

    {
        name: "Web Application Development",
        short_description: "Custom web apps with React, Next.js - and modern UI/UX.",
        delivery_type: "Source code, deployment, docs",
        timeline: "Timeline: 2-6 weeks",
    },

    {
        name: "Web Application Development",
        short_description: "Custom web apps with React, Next.js - and modern UI/UX.",
        delivery_type: "Source code, deployment, docs",
        timeline: "Timeline: 2-6 weeks",
    },
];

export default function Services() {
    return (
        <Container>
            <div className="flex flex-col gap-10 ">
                <div className="flex flex-col gap-2">
                    <h2 className="h_2 text-ink-500">Services</h2>
                    <p className="text-ink-100">
                        I offer modern web development and digital marketing services to help you build, grow and
                        succeed online.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ">
                    {services.map((service, idx) => (
                        <ServiceCard key={idx} service={service} className="w-full col-span-1" />
                    ))}
                </div>
            </div>
        </Container>
    );
}
