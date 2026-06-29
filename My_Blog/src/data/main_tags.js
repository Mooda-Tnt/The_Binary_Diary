import GhidraIcon from "@site/static/img/icons/ghidra.svg";
import ToolsIcon from "@site/static/img/icons/tools.svg";
import BinAnalysisIcon from "@site/static/img/icons/binary-analysis.svg";
import ReverseEngIcon from "@site/static/img/icons/reverse-engineering.svg";
import CtfIcon from "@site/static/img/icons/ctf.svg";
import VulnerabilitiesIcon from "@site/static/img/icons/vulnerabilities.svg";
import MyResearchIcon from "@site/static/img/icons/my-research.svg";
import ExploitationIcon from "@site/static/img/icons/exploitation.svg";
import OsInternalsIcon from "@site/static/img/icons/os-internals.svg";

const MAIN_CARDS = [
  {
    title: "My Research",
    description: "Original research, experiments, and technical investigations I have conducted.",
    url: "/blog/tags/my-research",
    icon: <MyResearchIcon style={{ width: "2.5rem", height: "2.5rem" }} />,
  },
  {
    title: "Binary Analysis",
    description: "Concepts, techniques, and tools for analyzing compiled executables.",
    url: "/blog/tags/binary-analysis",
    icon: <BinAnalysisIcon style={{ width: "2.5rem", height: "2.5rem" }} />,
  },
  {
    title: "Reverse Engineering",
    description: "Concepts, techniques, and tutorials for reverse engineering software.",
    url: "/blog/tags/reverse-engineering",
    icon: <ReverseEngIcon style={{ width: "2.5rem", height: "2.5rem" }} />,
  },
  {
    title: "Vulnerabilities",
    description: "Analysis, exploitation, and mitigation of software vulnerabilities.",
    url: "/blog/tags/vulnerabilities",
    icon: <VulnerabilitiesIcon style={{ width: "2.5rem", height: "2.5rem" }} />,
  },
  {
    title: "Exploitation",
    description: "Core concepts and techniques used in modern software exploitation.",
    url: "/blog/tags/exploitation",
    icon: <ExploitationIcon style={{ width: "2.5rem", height: "2.5rem" }} />,
  },
  {
    title: "OS Internals",
    description: "Low-level concepts, system architecture, and operating system internals.",
    url: "/blog/tags/os-internals",
    icon: <OsInternalsIcon style={{ width: "2.5rem", height: "2.5rem" }} />,
  },
    {
    title: "Ghidra",
    description: "Tips, tutorials, and deep dives into Ghidra for binary analysis.",
    url: "/blog/tags/ghidra",
    icon: <GhidraIcon style={{ width: "2.5rem", height: "2.5rem" }} />
  },
  {
    title: "Ctf",
    description: "Challenge writeups and practical techniques from CTF competitions.",
    url: "/blog/tags/ctf",
    icon: <CtfIcon style={{ width: "2.5rem", height: "2.5rem" }} />,
  },
  {
    title: "Tools",
    description: "Reviews, setup guides, and workflows for tools used in reverse engineering and security.",
    url: "/blog/tags/tools",
    icon: <ToolsIcon style={{ width: "2.5rem", height: "2.5rem" }} />
  },
];

export default MAIN_CARDS;