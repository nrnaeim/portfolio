import HomeAbout from "../components/HomeAbout/HomeAbout";
import Hero from "../components/Hero/Hero";
import Feature from "../components/Featcher/Feature";
import Skill_Stuck from "@/components/Skill_Stuck/Skill_Stuck";

export default function Home() {
    return (
        <main>
            <Hero />
            <Feature />
            <HomeAbout />
            <Skill_Stuck />
        </main>
    );
}
