# Graph Report - my portfolio  (2026-10-24)

## Corpus Check
- 180 files · ~67,275 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .ico 1, .css 1)

## Summary
- 934 nodes · 1948 edges · 51 communities (39 shown, 12 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `30b28746`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- BelowFoldWidgets.tsx
- animate/github-stars.tsx
- sanity
- dependencies
- primitives/animate/tabs.tsx
- primitives/animate/tooltip.tsx
- components/base/tooltip.tsx
- Posts.tsx
- package.json
- icon.tsx
- app/page.tsx
- motion
- contact/page.tsx
- components.json
- cn
- rules/graphify.md
- compilerOptions
- CommandMenu.tsx
- workflows/graphify.md
- sanity.ts
- next
- Certifications.tsx
- utils.ts
- devDependencies
- llms-full.txt/route.ts
- ProjectCard.tsx
- EasterEgg.tsx
- components/share-menu.tsx
- global.d.ts
- UI Polish Design Principles
- app/layout.tsx
- Greeting.tsx
- scripts
- Portfolio Tech Stack & Architecture
- eslint.config.mjs
- overrides
- link-preview.tsx
- nav.ts
- postcss.config.mjs
- vercel.json
- 3Skill Logo Asset
- Freelancer Platform Badge Asset
- Google Search Console Verification
- react
- contribution-graph.tsx
- dropdown-menu.tsx
- Button
- getAllPostSlugs
- Sonner.tsx
- slot.tsx

## God Nodes (most connected - your core abstractions)
1. `cn()` - 117 edges
2. `react` - 84 edges
3. `next` - 42 edges
4. `lucide-react` - 30 edges
5. `Home()` - 21 edges
6. `Button` - 19 edges
7. `motion` - 17 edges
8. `compilerOptions` - 16 edges
9. `ShareMenu()` - 15 edges
10. `useSound()` - 15 edges

## Surprising Connections (you probably didn't know these)
- `Featured Project Showcase Preview Asset` --conceptually_related_to--> `Portfolio Features & Integrations`  [INFERRED]
  public/project1.png → README.md
- `DropdownMenuCheckboxItem()` --calls--> `cn()`  [EXTRACTED]
  components/ui/dropdown-menu.tsx → lib/utils.ts
- `DropdownMenuLabel()` --calls--> `cn()`  [EXTRACTED]
  components/ui/dropdown-menu.tsx → lib/utils.ts
- `DropdownMenuRadioItem()` --calls--> `cn()`  [EXTRACTED]
  components/ui/dropdown-menu.tsx → lib/utils.ts
- `DropdownMenuSeparator()` --calls--> `cn()`  [EXTRACTED]
  components/ui/dropdown-menu.tsx → lib/utils.ts

## Import Cycles
- None detected.

## Communities (51 total, 12 thin omitted)

### Community 0 - "BelowFoldWidgets.tsx"
Cohesion: 0.16
Nodes (13): BelowFoldWidgets(), QuoteBlock, VisitorCounter, ClientShell(), CommandMenu, EasterEgg, FALLBACK_QUOTES, QuoteData (+5 more)

### Community 1 - "animate/github-stars.tsx"
Cohesion: 0.17
Nodes (19): buttonStarVariants, buttonVariants, GitHubStarsButton(), GitHubStarsButtonProps, GithubStars(), GithubStarsContextType, GithubStarsIcon(), GithubStarsIconProps (+11 more)

### Community 2 - "sanity"
Cohesion: 0.06
Nodes (24): dynamic, revalidate, portableTextComponents, PortableTextContentProps, getYouTubeId(), next-sanity, @portabletext/react, sanity (+16 more)

### Community 3 - "dependencies"
Cohesion: 0.04
Nodes (55): dependencies, babel-plugin-react-compiler, @base-ui-components/react, canvas-confetti, class-variance-authority, clsx, cmdk, cn (+47 more)

### Community 4 - "primitives/animate/tabs.tsx"
Cohesion: 0.07
Nodes (42): TabsContentProps, TabsContentsProps, TabsListProps, TabsProps, TabsTriggerProps, BaseTabsProps, ControlledTabsProps, Tabs() (+34 more)

### Community 5 - "primitives/animate/tooltip.tsx"
Cohesion: 0.07
Nodes (41): Tooltip(), TooltipContent(), TooltipContentProps, TooltipProps, TooltipProvider(), TooltipProviderProps, TooltipTrigger(), TooltipTriggerProps (+33 more)

### Community 6 - "components/base/tooltip.tsx"
Cohesion: 0.10
Nodes (26): Tooltip(), TooltipPanel(), TooltipPanelProps, TooltipProps, TooltipProvider(), TooltipProviderProps, TooltipTriggerProps, [LocalTooltipProvider, useTooltip] (+18 more)

### Community 7 - "Posts.tsx"
Cohesion: 0.33
Nodes (6): Post, PostItem(), Posts(), PostsProps, PostSummary, dayjs

### Community 8 - "package.json"
Cohesion: 0.06
Nodes (33): browserslist, name, private, version, babel-plugin-react-compiler, baseline-browser-mapping, clsx, cn (+25 more)

### Community 9 - "icon.tsx"
Cohesion: 0.13
Nodes (25): AnimateIcon(), run(), AnimateIconContext, AnimateIconContextValue, AnimateIconProps, AnyProps, composeEventHandlers(), DefaultIconProps (+17 more)

### Community 10 - "app/page.tsx"
Cohesion: 0.14
Nodes (18): Home(), metadata, revalidate, About(), AboutProps, AvailabilityBadge(), AvailabilityBadgeProps, ImageSwiper (+10 more)

### Community 11 - "motion"
Cohesion: 0.18
Nodes (14): SlidingNumber(), SlidingNumberDisplay(), SlidingNumberDisplayProps, SlidingNumberRoller(), SlidingNumberRollerProps, TypingText(), TypingTextContextType, TypingTextCursorProps (+6 more)

### Community 12 - "contact/page.tsx"
Cohesion: 0.16
Nodes (13): Contact(), handleSubmit(), validate(), FormErrors, FormState, Input, InputProps, Label (+5 more)

### Community 13 - "components.json"
Cohesion: 0.08
Nodes (23): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+15 more)

### Community 14 - "cn"
Cohesion: 0.14
Nodes (20): BreadcrumbEllipsis(), BreadcrumbItem(), BreadcrumbLink(), BreadcrumbList(), BreadcrumbPage(), BreadcrumbSeparator(), SelectContent, SelectItem (+12 more)

### Community 16 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 17 - "CommandMenu.tsx"
Cohesion: 0.09
Nodes (28): BackToTop(), BackToTopProps, BlogPostItem, CommandMenu(), RecentPage, LayoutContainer(), LayoutContainerProps, useSound() (+20 more)

### Community 19 - "sanity.ts"
Cohesion: 0.16
Nodes (13): AchievementsPage(), metadata, revalidate, AchievementCard(), Props, Props, Award, builder (+5 more)

### Community 20 - "next"
Cohesion: 0.05
Nodes (34): isRateLimited(), POST(), rateLimitMap, extractOgImage(), GET(), isPrivateIp(), PROGRAMMER_QUOTES, QuoteData (+26 more)

### Community 21 - "Certifications.tsx"
Cohesion: 0.14
Nodes (26): RootLayout(), Achievements(), AwardIcon(), AwardItemExpandable(), AwardItemStatic(), AwardMeta(), AwardRightIcons(), Footer() (+18 more)

### Community 22 - "utils.ts"
Cohesion: 0.07
Nodes (42): BlogContent(), BlogPage(), metadata, revalidate, BlogPostPage(), BlogPostPageProps, generateMetadata(), revalidate (+34 more)

### Community 23 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, baseline-browser-mapping, eslint, eslint-config-next, @eslint/eslintrc, tailwindcss, @tailwindcss/postcss, tw-animate-css (+5 more)

### Community 24 - "llms-full.txt/route.ts"
Cohesion: 0.16
Nodes (10): GET(), revalidate, fetchWithTimeout(), GET(), revalidate, fetchWithTimeout(), GET(), revalidate (+2 more)

### Community 25 - "ProjectCard.tsx"
Cohesion: 0.07
Nodes (46): metadata, ProjectPage(), revalidate, Tabs(), TabsContent(), TabsContents(), TabsList(), TabsTrigger() (+38 more)

### Community 26 - "EasterEgg.tsx"
Cohesion: 0.22
Nodes (14): EasterEgg(), AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay (+6 more)

### Community 27 - "components/share-menu.tsx"
Cohesion: 0.22
Nodes (12): ShareButton(), ShareButtonProps, copyText(), IconProps, LinkedInIcon(), ShareMenu(), ShareMenuProps, XIcon() (+4 more)

### Community 28 - "global.d.ts"
Cohesion: 0.33
Nodes (5): *.css, *.less, *.sass, *.scss, *.styl

### Community 29 - "UI Polish Design Principles"
Cohesion: 0.40
Nodes (5): Motion and Interaction Animations, Frontend Rendering Performance Guidelines, UI Polish Design Principles, Surfaces, Borders, and Glassmorphism, Typography Hierarchy and Tabular Numbers

### Community 30 - "app/layout.tsx"
Cohesion: 0.25
Nodes (6): jetbrainsMono, metadata, viewport, ThemeProvider(), next-themes, @vercel/analytics

### Community 32 - "scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, start

### Community 33 - "Portfolio Tech Stack & Architecture"
Cohesion: 0.40
Nodes (5): Featured Project Showcase Preview Asset, Portfolio Features & Integrations, Performance Optimizations & Caching, Sanity CMS Content Management, Portfolio Tech Stack & Architecture

### Community 35 - "overrides"
Cohesion: 0.67
Nodes (3): overrides, @types/react, @types/react-dom

### Community 36 - "link-preview.tsx"
Cohesion: 0.33
Nodes (5): LinkPreviewProps, ogCache, pendingFetches, qss, @radix-ui/react-hover-card

### Community 44 - "react"
Cohesion: 0.18
Nodes (9): Align, ParticlesContextType, ParticlesEffectProps, ParticlesProps, [ParticlesProvider, useParticles], Side, MDXContentProps, getStrictContext() (+1 more)

### Community 45 - "contribution-graph.tsx"
Cohesion: 0.21
Nodes (12): buildContributionGrid(), ContributionGraphClient(), Props, ContributionGraph(), GridData, MonthLabel, MONTHS, normalizeDateString() (+4 more)

### Community 46 - "dropdown-menu.tsx"
Cohesion: 0.15
Nodes (8): DropdownMenuCheckboxItem(), DropdownMenuLabel(), DropdownMenuRadioItem(), DropdownMenuSeparator(), DropdownMenuShortcut(), DropdownMenuSubContent(), DropdownMenuSubTrigger(), radix-ui

### Community 47 - "Button"
Cohesion: 0.26
Nodes (8): metadata, NotFound(), BlogImage(), BlogImageProps, Counter(), Button, ButtonProps, @radix-ui/react-slot

### Community 48 - "getAllPostSlugs"
Cohesion: 0.67
Nodes (3): generateStaticParams(), sitemap(), getAllPostSlugs

### Community 50 - "slot.tsx"
Cohesion: 0.25
Nodes (9): AnyProps, DOMMotionProps, mergeProps(), mergeRefs(), Slot(), SlotProps, WithAsChild, Button() (+1 more)

## Knowledge Gaps
- **340 isolated node(s):** `ImageSwiperProps`, `nextConfig`, `QuoteData`, `VisitorCounterProps`, `IdleWindow` (+335 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 385 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `BelowFoldWidgets.tsx`, `animate/github-stars.tsx`, `sanity`, `primitives/animate/tabs.tsx`, `primitives/animate/tooltip.tsx`, `components/base/tooltip.tsx`, `Posts.tsx`, `package.json`, `icon.tsx`, `app/page.tsx`, `motion`, `contact/page.tsx`, `cn`, `CommandMenu.tsx`, `sanity.ts`, `next`, `Certifications.tsx`, `utils.ts`, `ProjectCard.tsx`, `EasterEgg.tsx`, `components/share-menu.tsx`, `app/layout.tsx`, `Greeting.tsx`, `link-preview.tsx`, `contribution-graph.tsx`, `dropdown-menu.tsx`, `Button`, `slot.tsx`?**
  _High betweenness centrality (0.348) - this node is a cross-community bridge._
- **Why does `next` connect `next` to `BelowFoldWidgets.tsx`, `sanity`, `primitives/animate/tooltip.tsx`, `Posts.tsx`, `package.json`, `app/page.tsx`, `Button`, `getAllPostSlugs`, `CommandMenu.tsx`, `sanity.ts`, `Certifications.tsx`, `utils.ts`, `llms-full.txt/route.ts`, `ProjectCard.tsx`, `app/layout.tsx`?**
  _High betweenness centrality (0.126) - this node is a cross-community bridge._
- **Why does `cn()` connect `cn` to `animate/github-stars.tsx`, `sanity`, `primitives/animate/tabs.tsx`, `primitives/animate/tooltip.tsx`, `components/base/tooltip.tsx`, `Posts.tsx`, `link-preview.tsx`, `icon.tsx`, `app/page.tsx`, `contact/page.tsx`, `dropdown-menu.tsx`, `Button`, `slot.tsx`, `Certifications.tsx`, `utils.ts`, `ProjectCard.tsx`, `EasterEgg.tsx`, `components/share-menu.tsx`?**
  _High betweenness centrality (0.110) - this node is a cross-community bridge._
- **What connects `ImageSwiperProps`, `nextConfig`, `QuoteData` to the rest of the system?**
  _340 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `sanity` be split into smaller, more focused modules?**
  _Cohesion score 0.059932659932659935 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.03636363636363636 - nodes in this community are weakly interconnected._
- **Should `primitives/animate/tabs.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06565656565656566 - nodes in this community are weakly interconnected._