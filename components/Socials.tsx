import data from "@/data/socials.json";
import { socialSchema } from "@/lib/schemas";
import Icon from "./Icon";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

export default function Socials() {
  const socials = socialSchema.parse(data).socials;

  return (
    <section className="flex gap-4">
      {socials.map((item) => (
        <Tooltip key={item.name}>
          <TooltipTrigger asChild>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="sr-only">{item.name}</span>
              <Icon name={item.icon} aria-hidden="true" className="size-5" />
            </a>
          </TooltipTrigger>
          <TooltipContent side="top">{item.name}</TooltipContent>
        </Tooltip>
      ))}
    </section>
  );
}
