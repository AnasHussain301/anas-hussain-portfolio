import Image from "next/image";
import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";
import HeroStats from "./HeroStats";
import HeroTypewriter from "./HeroTypewriter";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
    return (
        <section className="relative flex min-h-[90vh] items-center justify-center px-6 py-20">

            <div className="mx-auto max-w-6xl text-center">

                <HeroBadge />

                <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl font-black">
                    ANAS
                    <span className="text-cyan-400"> HUSSAIN</span>
                </h1>

                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                    AI Engineer at RepairDesk building production-ready LLM applications on AWS with RAG, embedded vector search, serverless infrastructure, and cloud automation.
                </p>

                <HeroTypewriter />

                <div className="relative mx-auto mt-10 h-[420px] w-[320px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-2xl shadow-cyan-900/20">
                    <Image
                        src="/images/img.jpg"
                        alt="Anas Hussain profile photo"
                        fill
                        className="object-cover"
                        quality={100}
                        priority
                    />
                </div>

                <HeroButtons />

                <HeroSocials />

                <HeroStats />

                <ScrollIndicator />

            </div>

        </section>
    );
}