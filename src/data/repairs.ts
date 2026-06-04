export type RepairDetail = {
  intro: string[];
  includesTitle: string;
  includes: string[];
  process: string;
};

export type RepairService = {
  id: string;
  title: string;
  short: string;
  body: string;
  keyword: string;
  detail: RepairDetail;
};

export const repairServices: RepairService[] = [
  {
    id: "pc-mac-repair",
    title: "PC & Mac Repair",
    short: "Quality repairs for PCs and Macs, with free diagnostics on every job.",
    body:
      "Fast, reliable repairs for desktops and laptops, MacBook, MacBook Pro, MacBook Air, iMac, and every flavor of Windows machine. Hardware failures, slow performance, won't-boot situations, screen issues, keyboards, batteries. We handle it on-site whenever we can, in shop when we have to.",
    keyword: "computer repair denver",
    detail: {
      intro: [
        "When a computer stops working, your whole day stops with it. We have handled computer repair across the Denver metro for more than 26 years, and we come to you. Most fixes happen right at your home or office, so there is no unplugging the whole setup and hauling it across town.",
        "We repair every kind of machine: Windows desktops and laptops, MacBook, MacBook Pro, MacBook Air, iMac, and custom-built towers. Slow performance, a computer that will not boot, a black screen, a failing hard drive, a dead battery, a cracked or dim display, noisy fans, overheating. If it has gone wrong, we have almost certainly seen it and fixed it.",
      ],
      includesTitle: "Common repairs we handle",
      includes: [
        "Won't-turn-on and won't-boot diagnosis",
        "Slow performance and freezing",
        "Hard drive and SSD replacement or upgrade",
        "Screen, keyboard, and battery replacement",
        "Overheating, fan, and cooling issues",
        "Operating system repair and reinstall",
        "Memory (RAM) and storage upgrades",
      ],
      process:
        "Every job starts with a free diagnostic. We tell you honestly what is wrong, what it takes to fix it, and what it costs before any work begins. Pricing is by the job, never a flat menu, because a loose cable and a failed drive are not the same problem. No trip fee. No obligation.",
    },
  },
  {
    id: "computer-cleanup",
    title: "Computer Clean Up",
    short:
      "Make your old computer feel new again. Files, junk, bloatware, and performance tuned up.",
    body:
      "Computers slow down over time. We remove the junk, optimize startup, clear out the bloat, defrag where it makes sense, and tune your machine so it actually feels responsive again. Often saves you the cost of a new computer.",
    keyword: "computer clean up denver",
    detail: {
      intro: [
        "A slow computer is not always a broken computer. Most machines bog down over the years from junk files, too many startup programs, leftover bloatware, and a drive that is nearly full. A proper computer clean up in Denver often brings an older machine back to life and saves you the cost of buying a new one.",
        "We go through your system the way we would our own. We clear the clutter, shut down the programs quietly hogging your startup, remove software you never asked for, and tune the machine so it boots faster and stays responsive day to day.",
      ],
      includesTitle: "What a clean up includes",
      includes: [
        "Remove junk files, temp data, and cache buildup",
        "Trim startup programs that slow your boot time",
        "Strip out bloatware and unwanted software",
        "Check the drive health and free up space",
        "Install pending updates and security patches",
        "Tune settings for everyday speed",
      ],
      process:
        "We start with a free diagnostic to see whether a clean up will actually solve the slowness or whether something deeper is going on. If a tune up is the answer, great. If the real fix is a quick hardware upgrade like an SSD, we will tell you that too, honestly.",
    },
  },
  {
    id: "computer-protection",
    title: "Computer Protection",
    short:
      "Stop threats before they cost you. Comprehensive protection setup and monitoring.",
    body:
      "Modern threats are smarter than the antivirus that came with your computer. We set up real protection, train you on what to click and what to avoid, and configure your machine so the bad stuff stays out.",
    keyword: "computer protection denver",
    detail: {
      intro: [
        "The threats that hit home computers and small businesses in Denver have gotten smarter, and the free antivirus that came preinstalled is rarely enough. Real computer protection is part software, part setup, and part knowing what to click and what to close.",
        "We set your machine up properly, install protection that actually works, and walk you through the habits that keep you safe. The goal is simple: the bad stuff stays out, and you stop worrying every time an email looks a little off.",
      ],
      includesTitle: "How we protect your machine",
      includes: [
        "Install and configure effective security software",
        "Lock down browser and email settings",
        "Set up safe, automatic backups",
        "Remove existing threats and weak points",
        "Walk you through spotting scams and phishing",
        "Configure updates so you stay current automatically",
      ],
      process:
        "We come to you, review how the machine is actually used, and build protection around that. Free diagnostic first. We would rather prevent the virus call than make it, so we set things up to keep you out of trouble in the first place.",
    },
  },
  {
    id: "virus-removal",
    title: "Virus Removal",
    short:
      "Sluggish? Pop-ups? Weird redirects? We clean it out and fix the entry point.",
    body:
      "Virus removal is the easy part. Figuring out how the virus got in, and making sure it doesn't happen again, that's where we earn the work. Free diagnostic. No removal, no charge.",
    keyword: "virus removal denver",
    detail: {
      intro: [
        "Pop-ups you cannot close, a browser that redirects on its own, a machine crawling for no reason, or a scary message demanding payment. These are the signs of an infection, and they are exactly the kind of virus removal we handle across Denver every week.",
        "Pulling the virus off the machine is the easy part. The real work is figuring out how it got in, closing that door, and making sure it does not happen again. We do both, and we explain what we found in plain language.",
      ],
      includesTitle: "What virus removal covers",
      includes: [
        "Full scan and removal of viruses, malware, and spyware",
        "Clear out adware, pop-ups, and browser hijackers",
        "Find and close the entry point that let it in",
        "Check whether any personal data was exposed",
        "Restore performance the infection was draining",
        "Set up protection so it stays clean",
      ],
      process:
        "Free diagnostic first, and we come to you. If there is nothing to remove, there is no charge. If there is, we tell you what it takes to clean it and protect against the next one before we start. By-the-job pricing, no trip fee.",
    },
  },
  {
    id: "data-recovery",
    title: "Data Recovery",
    short:
      "Hard drive failure, accidental delete, drive won't mount. We have options.",
    body:
      "Data loss is stressful. Before you panic, let us look. Often there's more recoverable than you'd expect. We're honest about what's possible and upfront about what it costs.",
    keyword: "data recovery denver",
    detail: {
      intro: [
        "Data loss can be stressful, especially when it is photos, work files, or records you cannot replace. Before you assume the worst, let us look. Our data recovery service in Denver pulls back more than people expect, from drives that will not mount, accidental deletes, failed drives, and corrupted file systems.",
        "We are honest from the start about what is recoverable and what is not. Some situations are a quick win. Others are a longer process. Either way, you get a straight answer before any cost is on the table, not after.",
      ],
      includesTitle: "Data loss situations we work with",
      includes: [
        "Hard drive and SSD failure",
        "Accidentally deleted files and folders",
        "Drives that will not mount or show up",
        "Corrupted file systems and partitions",
        "Failed external drives and USB media",
        "Recovery before and after a hardware repair",
      ],
      process:
        "We start with a free evaluation and tell you honestly what we think is recoverable. We are upfront about what it costs before we begin. We handle your data carefully and privately, and we wipe anything off our equipment when the job is done.",
    },
  },
  {
    id: "it-support",
    title: "IT Support",
    short:
      "Remote and on-site IT support for small businesses and home offices.",
    body:
      "Network setup, printer troubleshooting, email issues, backup configuration, new employee onboarding. The technical stuff that piles up when you don't have an in-house IT person. We've got you.",
    keyword: "it support denver",
    detail: {
      intro: [
        "Comprehensive IT support for the small businesses and home offices around Denver that do not have a full-time tech person on staff. Whether your team is on PC or Mac, we handle the technical work that piles up and keeps you from getting actual work done.",
        "We work both remotely and on-site. A lot of issues we can solve the same day from wherever you are, and for everything else, we come to you. No long contracts required, just reliable help when you need it.",
      ],
      includesTitle: "What we support",
      includes: [
        "Network and Wi-Fi setup and troubleshooting",
        "Printer, scanner, and peripheral issues",
        "Email setup and account problems",
        "Backup configuration and recovery planning",
        "New computer and new employee onboarding",
        "Remote support for quick fixes, on-site when needed",
      ],
      process:
        "Start with a free diagnostic of what is slowing your team down. We give you a clear picture of what needs attention and handle it on your schedule. By-the-job pricing means you pay for the help you actually need, nothing more.",
    },
  },
  {
    id: "computer-setup",
    title: "Computer Setup",
    short: "New, rebuilt, or refurbished. Setup is always free.",
    body:
      "Buy a new computer from anywhere. We'll come set it up, migrate your files, install your software, and make sure everything works the way it should. Free for our customers.",
    keyword: "computer setup denver",
    detail: {
      intro: [
        "A new computer should not mean a frustrating weekend of moving files and reinstalling software. Buy your machine anywhere you like, and we will handle the computer setup for you across the Denver metro. We come to you, set it up, and make sure everything works before we leave.",
        "We move your files and photos over, get your email and software installed, connect your printer and devices, and set the machine up the way you actually use it. You sit down to a computer that just works.",
      ],
      includesTitle: "What setup covers",
      includes: [
        "Migrate files, photos, and documents from your old machine",
        "Install your software and sign you into your accounts",
        "Set up email, browser, and bookmarks",
        "Connect printers, monitors, and devices",
        "Apply updates and basic protection",
        "Walk you through anything new",
      ],
      process:
        "Setup is free for our customers. We come to you, do the work in place, and make sure the new machine is ready to go before we leave. No trip fee, no obligation.",
    },
  },
  {
    id: "computer-recycling",
    title: "Computer Recycling",
    short: "Responsible disposal of your old tech. We pick it up.",
    body:
      "Old computers, monitors, peripherals, and electronics. We pick them up, wipe drives properly so your data doesn't go anywhere, and recycle responsibly.",
    keyword: "computer recycling denver",
    detail: {
      intro: [
        "Old computers and electronics should not sit in a closet or end up in a landfill. Our computer recycling service in Denver picks up your old tech, wipes any drives properly so your personal data does not go anywhere, and recycles the hardware responsibly.",
        "The piece most people forget is the data. A computer you throw away still has your files on it unless the drive is wiped correctly. We handle that step properly so your information is gone for good before anything leaves your hands.",
      ],
      includesTitle: "What we take and handle",
      includes: [
        "Desktops, laptops, and towers",
        "Monitors and displays",
        "Printers, keyboards, and peripherals",
        "Old drives and storage media",
        "Secure data wiping before disposal",
        "Pickup so you do not have to haul it anywhere",
      ],
      process:
        "We come to you and pick it up. Drives get wiped properly so your data is unrecoverable, and the hardware is recycled the responsible way. Simple, safe, and off your plate.",
    },
  },
];
