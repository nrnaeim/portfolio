import HomeAbout from "../components/HomeAbout/HomeAbout";
import Hero from "../components/Hero/Hero";
import Feature from "../components/Featcher/Feature";
import Skill_Stack from "@/components/Skill_Stuck/Skill_Stack";
import Cta from "@/components/Cta/Cta";

export default function Home() {
    return (
        <main>
            <Hero />
            <Feature />
            <HomeAbout />
            <Skill_Stack />
        </main>
    );
}
