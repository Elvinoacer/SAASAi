import { Routes } from "@/types";
import {
  CodeIcon,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  MusicIcon,
  Settings,
  VideoIcon,
} from "lucide-react";

export const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: Routes.dashboard,
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: Routes.conversation,
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: Routes.image,
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: Routes.video,
    color: "text-orange-700",
  },
  {
    label: "Music Generation",
    icon: MusicIcon,
    href: Routes.music,
    color: "text-emerald-500",
  },
  {
    label: "Code generation",
    icon: CodeIcon,
    href: Routes.code,
    color: "text-green-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: Routes.settings,
  },
];
