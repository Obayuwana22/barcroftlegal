import {
  Briefcase,
  Building,
  FileText,
  Gavel,
  Shield,
  Users,
} from "lucide-react";
import { nanoid } from "nanoid";
import placeholder from "./src/assets/png/cropped.jpg";

export const assets = {
  placeholder,
};

export const practiceAreaCard = [
  {
    id: nanoid(),
    icon: Briefcase,
    title: "Corporate & Commercial Advisory",
    description:
      "We advise on corporate structuring, business formation, commercial transactions, contract drafting and negotiation, joint ventures, mergers & acquisitions, and regulatory compliance.",
    cases: "150+ Cases",
  },
  {
    id: nanoid(),
    icon: Building,
    title: "Deal Structuring & Transaction Support",
    description:
      "Our team provides legal support for project finance, private equity, infrastructure development, and cross-border investments, ensuring risk mitigation and regulatory alignment at every stage of a deal.",
    cases: "200+ Cases",
  },

  {
    id: nanoid(),
    icon: Users,
    title: "Dispute Resolution",
    description:
      "We offer robust representation in litigation, arbitration, and alternative dispute resolution (ADR), helping clients achieve favorable outcomes in commercial, regulatory, and sector-specific disputes.",
    cases: "300+ Cases",
  },
  {
    id: nanoid(),
    icon: Shield,
    title: "Regulatory & Public Policy Advisory",
    description:
      "With strong policy insight, we advise clients on government relations, legislative compliance, licensing, and engagement with public institutions and regulators.",
    cases: "180+ Cases",
  },
  {
    id: nanoid(),
    icon: FileText,
    title: "Energy",
    description:
      "Our lawyers provide end-to-end legal support in Nigeria’s energy sector—oil & gas (upstream, midstream, and downstream), power generation, renewables, and energy transition.",
    cases: "250+ Cases",
  },
  {
    id: nanoid(),
    icon: Gavel,
    title: "Maritime & Shipping",
    description:
      "We deliver legal solutions for shipping operations, maritime contracts, port logistics, vessel registration, marine insurance, and regulatory compliance under Nigerian and international maritime law.",
    cases: "120+ Cases",
  },
  {
    id: nanoid(),
    icon: Gavel,
    title: "Public Sector & Policy",
    description:
      "We advise government agencies, development partners, and NGOs on regulatory reform, institutional frameworks, legislative drafting, and public-private partnerships.",
    cases: "120+ Cases",
  },
];

export const teamCard = [
  {
    id: nanoid(),
    name: "Michael Sterling",
    title: "Managing Partner",
    specialization: "Corporate Law & Litigation",
    experience: "20+ Years",
    education: "Harvard Law School",
  },
  {
    id: nanoid(),
    name: "Sarah Johnson",
    title: "Senior Partner",
    specialization: "Family Law & Mediation",
    experience: "15+ Years",
    education: "Stanford Law School",
  },
  {
    id: nanoid(),
    name: "David Chen",
    title: "Partner",
    specialization: "Criminal Defense",
    experience: "12+ Years",
    education: "Yale Law School",
  },
];

export const testimonialsCard = [
  {
    name: "Robert Martinez",
    role: "Business Owner",
    content:
      "Sterling & Associates helped me navigate a complex business acquisition. Their expertise and attention to detail were exceptional.",
    rating: 5,
  },
  {
    name: "Jennifer Adams",
    role: "Individual Client",
    content:
      "During my divorce proceedings, Sarah Johnson provided compassionate yet strong representation. I couldn't have asked for better support.",
    rating: 5,
  },
  {
    name: "Thomas Wilson",
    role: "Corporate Executive",
    content:
      "The team's criminal defense work was outstanding. They fought tirelessly for my case and achieved an excellent outcome.",
    rating: 5,
  },
];
