import {
  ExternalLink,
  CircleDot,
  Play,
  Lightbulb,
  Mail,
  Phone,
  Globe,
} from "lucide-react";
import Image from "next/image";

export default function CampaignCards() {
  return (
    <main className="flex min-h-full flex-col items-center rounded-[1.8rem] bg-gradient-to-br from-slate-50 to-zinc-100 px-4 pb-8 pt-8 lg:py-16">
      {/* Cards Grid */}
      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {/* Featured Work Card */}
        <article className="group relative overflow-hidden rounded-2xl bg-[url(https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=1080&q=80)] bg-cover shadow-xl backdrop-blur-lg md:col-span-2 lg:col-span-1 lg:rounded-3xl">
          <div className="relative z-10 flex h-full min-h-[320px] flex-col justify-between p-6 lg:min-h-[400px] lg:p-8">
            <div className="flex items-start justify-between">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/90 ring-1 ring-white/30 backdrop-blur-sm">
                  Adobe After Effects
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/90 ring-1 ring-white/30 backdrop-blur-sm">
                  Cinema 4D
                </span>
              </div>
              <button className="rounded-full bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-white/20">
                <ExternalLink className="h-4 w-4 text-white" />
              </button>
            </div>
            <div className="mt-auto">
              <h3 className="font-bricolage mb-2 text-5xl font-normal tracking-tighter text-white">
                Nike Air Max Campaign
              </h3>
              <blockquote className="mb-4">
                <p className="text-sm leading-relaxed text-white/85">
                  "Every pixel tells a story. We craft motion narratives that
                  don't just catch eyes—they capture hearts and drive action."
                </p>
                <footer className="mt-3 flex items-center gap-3">
                  <Image
                    src="https://images.unsplash.com/photo-1560918801-53fe5c710a80?w=1080&q=80"
                    alt="Maria Santos"
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <div className="text-xs">
                    <div className="font-medium text-white/90">
                      Maria Santos
                    </div>
                    <div className="text-white/60">Creative Director</div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </article>

        {/* Brand Identity Card */}
        <article className="relative flex min-h-[320px] flex-col overflow-hidden rounded-2xl bg-[url(https://images.unsplash.com/photo-1643780668909-580822430155?w=1080&q=80)] bg-cover text-white shadow-xl lg:min-h-[400px] lg:rounded-3xl">
          <div className="relative z-10 flex grow flex-col items-center justify-center p-8 text-center lg:p-10">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
              <CircleDot className="h-8 w-8 text-white" />
            </div>
            <h2 className="font-instrument-serif mb-2 text-2xl font-normal tracking-tight text-white lg:text-3xl">
              Prism Studio
            </h2>
            <p className="mb-1 text-xs uppercase tracking-widest text-white/70">
              Est. 2019 • Los Angeles
            </p>
            <p className="mb-8 max-w-xs text-sm text-white/80">
              Transforming brands through motion, color, and digital artistry
            </p>
            <div className="flex gap-3">
              <button className="rounded-full px-6 py-2.5 text-sm font-medium text-white/90 ring-1 ring-white/40 backdrop-blur-md transition-colors hover:bg-white/10">
                <Play className="mr-1 inline h-4 w-4" />
                Watch Reel
              </button>
              <button className="rounded-full bg-white/15 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20">
                Projects
              </button>
            </div>
          </div>
        </article>

        {/* Philosophy Card */}
        <article className="relative flex min-h-[320px] flex-col overflow-hidden rounded-2xl bg-zinc-900 text-white shadow-xl lg:min-h-[400px] lg:rounded-3xl">
          <div className="grow p-6 lg:p-8">
            <h3 className="mb-6 flex items-center gap-2 text-xs font-normal uppercase tracking-widest text-zinc-400">
              <Lightbulb className="h-4 w-4" /> Our Philosophy
            </h3>
            <div className="space-y-4">
              <p className="text-3xl font-normal tracking-tighter text-white">
                Motion isn't just movement.
              </p>
              <p className="text-sm leading-relaxed text-zinc-300">
                It's the pulse between frames, the breath between cuts. We
                choreograph digital symphonies where every transition serves
                purpose, every effect tells truth.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">
                    127+
                  </div>
                  <div className="text-xs uppercase tracking-wide text-zinc-400">
                    Projects
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-violet-400">24</div>
                  <div className="text-xs uppercase tracking-wide text-zinc-400">
                    Awards
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400">5yr</div>
                  <div className="text-xs uppercase tracking-wide text-zinc-400">
                    Legacy
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3 border-t border-zinc-800 p-6 lg:p-8">
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-emerald-400" />
              <a
                href="mailto:hello@prismstudio.co"
                className="transition-colors hover:text-emerald-400"
              >
                hello@prismstudio.co
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-violet-400" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Globe className="h-4 w-4 text-pink-400" />
              <a href="#" className="transition-colors hover:text-pink-400">
                www.prismstudio.co
              </a>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
