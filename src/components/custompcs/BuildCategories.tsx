"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import BuildModal, { type BuildCategory } from "./BuildModal";

const categories: BuildCategory[] = [
  {
    id: "gaming",
    title: "Gaming PC Builds",
    short: "Flawless gaming.",
    body:
      "High-performance machines built for immersive play. Powerful GPUs, fast processors, smooth frame rates, and the kind of headroom that future-proofs your build.",
    spec: "RTX 4070+ • i7/Ryzen 7 • 32GB+ DDR5 • NVMe storage",
    detail: {
      intro: [
        "We build custom gaming machines for peak performance and the kind of immersive play that pulls you in. Every rig is built to your specifications, with high-end GPUs, fast processors, and efficient cooling so gameplay stays smooth and the graphics stay stunning, even when the action gets heavy.",
        "There is no one-size-fits-all gaming PC. A competitive shooter player and a single-player 4K explorer want different things, so we start with how you actually play and build the machine around it. The result is a rig with real headroom that does not feel dated a year from now.",
      ],
      includesTitle: "What goes into a gaming build",
      includes: [
        "High-end GPU matched to your target resolution and frame rate",
        "Fast current-generation CPU",
        "32GB or more of fast DDR5 memory",
        "NVMe storage for quick load times",
        "Cooling tuned for sustained performance",
        "Clean cable management and room to upgrade",
      ],
      process:
        "We start with a free consultation to understand your games, your monitor, and your budget. Then we recommend the right components, build it, test it hard, and deliver a machine that performs. By-the-job pricing, built to your spec.",
    },
  },
  {
    id: "editing",
    title: "Editing PC Builds",
    short: "Fastest rendering.",
    body:
      "Optimized for video editing, graphic design, 3D, and creative workflows. Heavy processing power, generous RAM, fast scratch disks. Built for projects that punish weak hardware.",
    spec: "RTX 4080+ or Apple Silicon • 64GB+ RAM • Multi-NVMe",
    detail: {
      intro: [
        "Creative work punishes weak hardware. Our editing PC builds focus on the processing power and memory that video editing, graphic design, 3D, and content creation actually demand, so timelines scrub smoothly and renders finish faster.",
        "We tailor each build to your software and your workflow. Heavy multi-core processing, generous RAM for big projects, and fast scratch disks so you spend your time creating instead of waiting on the machine to catch up.",
      ],
      includesTitle: "What goes into an editing build",
      includes: [
        "Multi-core CPU built for rendering and export",
        "GPU acceleration for your editing software",
        "64GB or more RAM for large projects",
        "Multiple fast NVMe drives for scratch and storage",
        "Color-accurate output ready",
        "Quiet, efficient cooling for long sessions",
      ],
      process:
        "Tell us what you create and what software you run. We recommend the components that match your workflow, build it, and test it against real creative work. The goal is a machine that keeps up with you instead of slowing you down.",
    },
  },
  {
    id: "ai-builds",
    title: "AI Hardware Builds",
    short: "Built for AI.",
    body:
      "Purpose-built machines for AI work: local large language model rigs, multi-GPU builds, and AI workstations that run models on your own hardware instead of paying for the cloud every month.",
    spec: "RTX 4090 / multi-GPU • 128GB+ RAM • high-VRAM • NVMe arrays",
    detail: {
      intro: [
        "AI work has its own hardware demands, and most off-the-shelf machines are not built for it. Our AI hardware builds are designed for running large language models locally, training and fine-tuning, and heavy GPU compute, so you keep your data on your own equipment and stop paying the cloud by the hour.",
        "Whether you want a single high-VRAM workstation for local LLMs or a multi-GPU rig for serious compute, we spec it around the models and frameworks you actually run. Real performance, real ownership, no recurring cloud bill.",
      ],
      includesTitle: "What goes into an AI build",
      includes: [
        "High-VRAM GPUs (RTX 4090 and multi-GPU options)",
        "Local LLM and inference rigs",
        "Training and fine-tuning workstations",
        "128GB or more system memory",
        "Fast NVMe storage arrays for datasets",
        "Cooling and power built for sustained GPU load",
      ],
      process:
        "Tell us the models and workloads you plan to run. We spec the right GPUs, memory, and storage, build it, and test it against real AI workloads before it reaches you. Own your compute instead of renting it.",
    },
  },
  {
    id: "workstations",
    title: "PC Workstations",
    short: "Unlimited capability.",
    body:
      "Professional builds for engineering, CAD, 3D modeling, scientific computing, and demanding business workloads. Reliability and longevity are the priorities.",
    spec: "Xeon/Threadripper • ECC RAM • Quadro/RTX A-series",
    detail: {
      intro: [
        "Our custom PC workstations are built to meet the demands of professionals in fields like video editing, 3D modeling, engineering, CAD, and software development. Each workstation is tailored to your specific needs, with high-performance CPUs, ample RAM, and fast SSDs for seamless multitasking and efficient workflows.",
        "Where a gaming rig chases frame rates, a workstation chases reliability and longevity. With advanced cooling and components chosen for stability, these machines are built to run hard, day after day, and tackle complex projects with ease.",
      ],
      includesTitle: "What goes into a workstation",
      includes: [
        "Professional-grade CPU (Xeon or Threadripper class)",
        "ECC memory for stability on critical work",
        "Workstation GPU (Quadro / RTX A-series)",
        "Fast, redundant SSD storage",
        "Advanced cooling for sustained load",
        "Built for reliability and long service life",
      ],
      process:
        "We start with the work the machine has to do, whether that is CAD, 3D, scientific computing, or a demanding business workload. Then we spec it for stability and speed, build it, and stress-test it before it ever reaches your desk.",
    },
  },
];

export default function BuildCategories() {
  const [active, setActive] = useState<BuildCategory | null>(null);

  const openById = useCallback((id: string) => {
    const match = categories.find((c) => c.id === id);
    if (match) setActive(match);
  }, []);

  // Auto-open the matching modal when arriving via a redirect anchor
  // (e.g. /custom-pcs#gaming from the old /gaming-pc-builds URL).
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const t = setTimeout(() => openById(hash), 400);
      return () => clearTimeout(t);
    }
  }, [openById]);

  return (
    <section id="builds" className="py-20 lg:py-28 bg-[var(--color-mcs-page)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <div className="text-[var(--color-mcs-amber-deep)] text-sm font-bold uppercase tracking-wider mb-4">
            Three Build Categories
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-[var(--color-mcs-text)] leading-tight">
            Built for what you actually do.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {categories.map((c, i) => (
            <motion.button
              key={c.id}
              id={c.id}
              type="button"
              onClick={() => setActive(c)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group scroll-mt-24 w-full text-left p-8 rounded-2xl mcs-card-dark hover:border-[var(--color-mcs-amber)]/50 hover:-translate-y-1 transition-all cursor-pointer"
            >
              <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-mcs-amber)] mb-3">
                {c.short}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{c.title}</h3>
              <p className="text-base text-white/70 leading-relaxed mb-6">
                {c.body}
              </p>
              <div className="text-xs font-mono text-white/50 border-t border-white/10 pt-4">
                {c.spec}
              </div>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-mcs-amber)] group-hover:translate-x-0.5 transition-transform">
                <Plus className="w-4 h-4" strokeWidth={3} />
                See full details
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <BuildModal category={active} onClose={() => setActive(null)} />
    </section>
  );
}
