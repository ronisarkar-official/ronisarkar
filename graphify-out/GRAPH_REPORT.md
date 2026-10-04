# Graph Report - my portfolio  (2026-10-04)

## Corpus Check
- 167 files · ~59,774 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .css 2, .ico 1)

## Summary
- 894 nodes · 1817 edges · 45 communities (34 shown, 11 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `6dc2b721`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Certifications.tsx
- animate/github-stars.tsx
- sanity
- dependencies
- primitives/animate/tabs.tsx
- primitives/animate/tooltip.tsx
- components/base/tooltip.tsx
- react
- package.json
- icon.tsx
- contribution-graph.tsx
- EasterEgg.tsx
- contact/page.tsx
- components.json
- spotify.ts
- rules/graphify.md
- compilerOptions
- use-sound.ts
- workflows/graphify.md
- contact/route.ts
- app/page.tsx
- components/share-menu.tsx
- utils.ts
- devDependencies
- BelowFoldWidgets.tsx
- ProjectCard.tsx
- achievements/page.tsx
- next
- global.d.ts
- UI Polish Design Principles
- scripts
- Portfolio Tech Stack & Architecture
- eslint.config.mjs
- overrides
- nav.ts
- postcss.config.mjs
- vercel.json
- 3Skill Logo Asset
- Freelancer Platform Badge Asset
- Google Search Console Verification
- Button
- Posts.tsx
- cn

## God Nodes (most connected - your core abstractions)
1. `cn()` - 117 edges
2. `react` - 79 edges
3. `next` - 38 edges
4. `lucide-react` - 26 edges
5. `Home()` - 21 edges
6. `motion` - 17 edges
7. `Button` - 17 edges
8. `compilerOptions` - 16 edges
9. `ShareMenu()` - 14 edges
10. `sanity` - 13 edges

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

## Communities (45 total, 11 thin omitted)

### Community 0 - "Certifications.tsx"
Cohesion: 0.16
Nodes (22): Achievements(), AwardIcon(), AwardItemExpandable(), AwardItemStatic(), AwardMeta(), AwardRightIcons(), Footer(), FooterSurprise() (+14 more)

### Community 1 - "animate/github-stars.tsx"
Cohesion: 0.07
Nodes (49): buttonStarVariants, buttonVariants, GitHubStarsButton(), GitHubStarsButtonProps, GithubStars(), GithubStarsContextType, GithubStarsIcon(), GithubStarsIconProps (+41 more)

### Community 2 - "sanity"
Cohesion: 0.06
Nodes (23): dynamic, revalidate, portableTextComponents, PortableTextContentProps, getYouTubeId(), next-sanity, sanity, @sanity/code-input (+15 more)

### Community 3 - "dependencies"
Cohesion: 0.04
Nodes (57): dependencies, babel-plugin-react-compiler, @base-ui-components/react, canvas-confetti, class-variance-authority, clsx, cmdk, cn (+49 more)

### Community 4 - "primitives/animate/tabs.tsx"
Cohesion: 0.06
Nodes (48): Tabs(), TabsContent(), TabsContentProps, TabsContents(), TabsContentsProps, TabsList(), TabsListProps, TabsProps (+40 more)

### Community 5 - "primitives/animate/tooltip.tsx"
Cohesion: 0.07
Nodes (41): Tooltip(), TooltipContent(), TooltipContentProps, TooltipProps, TooltipProvider(), TooltipProviderProps, TooltipTrigger(), TooltipTriggerProps (+33 more)

### Community 6 - "components/base/tooltip.tsx"
Cohesion: 0.10
Nodes (26): Tooltip(), TooltipPanel(), TooltipPanelProps, TooltipProps, TooltipProvider(), TooltipProviderProps, TooltipTriggerProps, [LocalTooltipProvider, useTooltip] (+18 more)

### Community 7 - "react"
Cohesion: 0.08
Nodes (24): jetbrainsMono, metadata, RootLayout(), getRouteIndex(), navOrder, Template(), BackToTop(), BackToTopProps (+16 more)

### Community 8 - "package.json"
Cohesion: 0.06
Nodes (34): name, private, version, babel-plugin-react-compiler, baseline-browser-mapping, clsx, cn, eslint (+26 more)

### Community 9 - "icon.tsx"
Cohesion: 0.13
Nodes (25): AnimateIcon(), run(), AnimateIconContext, AnimateIconContextValue, AnimateIconProps, AnyProps, composeEventHandlers(), DefaultIconProps (+17 more)

### Community 10 - "contribution-graph.tsx"
Cohesion: 0.21
Nodes (12): buildContributionGrid(), ContributionGraphClient(), Props, ContributionGraph(), GridData, MonthLabel, MONTHS, normalizeDateString() (+4 more)

### Community 11 - "EasterEgg.tsx"
Cohesion: 0.22
Nodes (14): EasterEgg(), AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay (+6 more)

### Community 12 - "contact/page.tsx"
Cohesion: 0.13
Nodes (15): Contact(), handleSubmit(), validate(), FormErrors, FormState, Input, InputProps, Label (+7 more)

### Community 13 - "components.json"
Cohesion: 0.08
Nodes (23): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+15 more)

### Community 14 - "spotify.ts"
Cohesion: 0.18
Nodes (15): dynamic, GET(), revalidate, NowPlayingClient(), Props, NowPlaying(), basic, DEFAULT_STATE (+7 more)

### Community 16 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 17 - "use-sound.ts"
Cohesion: 0.21
Nodes (13): useSound(), bufferCache, decodeAudioData(), getAudioContext(), playSound(), PlaySoundOptions, SoundPlayback, PlayFunction (+5 more)

### Community 19 - "contact/route.ts"
Cohesion: 0.50
Nodes (4): isRateLimited(), POST(), rateLimitMap, nodemailer

### Community 20 - "app/page.tsx"
Cohesion: 0.15
Nodes (15): Home(), metadata, revalidate, AvailabilityBadge(), AvailabilityBadgeProps, ImageSwiper, ImageSwiperProps, LinkWithIcon() (+7 more)

### Community 21 - "components/share-menu.tsx"
Cohesion: 0.11
Nodes (19): ShareButton(), ShareButtonProps, copyText(), IconProps, LinkedInIcon(), ShareMenu(), ShareMenuProps, XIcon() (+11 more)

### Community 22 - "utils.ts"
Cohesion: 0.05
Nodes (57): GET(), revalidate, BlogContent(), BlogPage(), revalidate, BlogPostPage(), BlogPostPageProps, generateMetadata() (+49 more)

### Community 23 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, baseline-browser-mapping, eslint, eslint-config-next, @eslint/eslintrc, tailwindcss, @tailwindcss/postcss, tw-animate-css (+5 more)

### Community 24 - "BelowFoldWidgets.tsx"
Cohesion: 0.22
Nodes (8): BelowFoldWidgets(), QuoteBlock, VisitorCounter, FALLBACK_QUOTES, QuoteData, formatOrdinal(), VisitorCounter(), VisitorCounterProps

### Community 25 - "ProjectCard.tsx"
Cohesion: 0.07
Nodes (40): metadata, ProjectPage(), revalidate, CustomIconName, CustomIcons, Icon(), IconProps, ProjectCard() (+32 more)

### Community 26 - "achievements/page.tsx"
Cohesion: 0.29
Nodes (8): AchievementsPage(), metadata, revalidate, AchievementCard(), Props, Props, Award, getAwards()

### Community 27 - "next"
Cohesion: 0.15
Nodes (5): PROGRAMMER_QUOTES, QuoteData, metadata, nextConfig, next

### Community 28 - "global.d.ts"
Cohesion: 0.33
Nodes (5): *.css, *.less, *.sass, *.scss, *.styl

### Community 29 - "UI Polish Design Principles"
Cohesion: 0.40
Nodes (5): Motion and Interaction Animations, Frontend Rendering Performance Guidelines, UI Polish Design Principles, Surfaces, Borders, and Glassmorphism, Typography Hierarchy and Tabular Numbers

### Community 32 - "scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, start

### Community 33 - "Portfolio Tech Stack & Architecture"
Cohesion: 0.40
Nodes (5): Featured Project Showcase Preview Asset, Portfolio Features & Integrations, Performance Optimizations & Caching, Sanity CMS Content Management, Portfolio Tech Stack & Architecture

### Community 35 - "overrides"
Cohesion: 0.67
Nodes (3): overrides, @types/react, @types/react-dom

### Community 44 - "Button"
Cohesion: 0.29
Nodes (7): BlogImage(), BlogImageProps, Counter(), Button, ButtonProps, @radix-ui/react-icons, @radix-ui/react-slot

### Community 46 - "Posts.tsx"
Cohesion: 0.33
Nodes (6): Post, PostItem(), Posts(), PostsProps, PostSummary, dayjs

### Community 49 - "cn"
Cohesion: 0.12
Nodes (23): BreadcrumbEllipsis(), BreadcrumbItem(), BreadcrumbLink(), BreadcrumbList(), BreadcrumbPage(), BreadcrumbSeparator(), Kbd(), KbdGroup() (+15 more)

## Knowledge Gaps
- **331 isolated node(s):** `BlogPostPageProps`, `revalidate`, `$schema`, `style`, `rsc` (+326 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 382 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `Certifications.tsx`, `animate/github-stars.tsx`, `sanity`, `primitives/animate/tabs.tsx`, `primitives/animate/tooltip.tsx`, `components/base/tooltip.tsx`, `package.json`, `icon.tsx`, `contribution-graph.tsx`, `EasterEgg.tsx`, `contact/page.tsx`, `spotify.ts`, `use-sound.ts`, `app/page.tsx`, `components/share-menu.tsx`, `utils.ts`, `BelowFoldWidgets.tsx`, `ProjectCard.tsx`, `achievements/page.tsx`, `Button`, `Posts.tsx`, `cn`?**
  _High betweenness centrality (0.330) - this node is a cross-community bridge._
- **Why does `next` connect `next` to `Certifications.tsx`, `sanity`, `primitives/animate/tooltip.tsx`, `react`, `package.json`, `Button`, `spotify.ts`, `Posts.tsx`, `contact/route.ts`, `app/page.tsx`, `utils.ts`, `BelowFoldWidgets.tsx`, `ProjectCard.tsx`, `achievements/page.tsx`?**
  _High betweenness centrality (0.119) - this node is a cross-community bridge._
- **Why does `cn()` connect `cn` to `Certifications.tsx`, `animate/github-stars.tsx`, `sanity`, `primitives/animate/tabs.tsx`, `primitives/animate/tooltip.tsx`, `components/base/tooltip.tsx`, `icon.tsx`, `EasterEgg.tsx`, `Button`, `contact/page.tsx`, `Posts.tsx`, `app/page.tsx`, `components/share-menu.tsx`, `utils.ts`, `ProjectCard.tsx`?**
  _High betweenness centrality (0.117) - this node is a cross-community bridge._
- **What connects `BlogPostPageProps`, `revalidate`, `$schema` to the rest of the system?**
  _331 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `animate/github-stars.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06896551724137931 - nodes in this community are weakly interconnected._
- **Should `sanity` be split into smaller, more focused modules?**
  _Cohesion score 0.061495457721872815 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.03508771929824561 - nodes in this community are weakly interconnected._