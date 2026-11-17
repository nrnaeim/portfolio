import HomeAbout from "./_components/HomeAbout/HomeAbout";
import Hero from "./_components/Hero/Hero";
import Feature from "./_components/Featcher/Feature";
import Skill_Stack from "@/app/_components/Skill_Stack/Skill_Stack";

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
