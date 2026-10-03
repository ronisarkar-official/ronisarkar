# Graph Report - my portfolio  (2026-10-03)

## Corpus Check
- 166 files · ~59,007 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .css 2, .ico 1)

## Summary
- 884 nodes · 1804 edges · 48 communities (35 shown, 13 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `bf31e6f4`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- sanity.ts
- animate/github-stars.tsx
- lucide-react
- dependencies
- primitives/animate/tabs.tsx
- primitives/animate/tooltip.tsx
- components/base/tooltip.tsx
- CommandMenu.tsx
- package.json
- icon.tsx
- Certifications.tsx
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
- cn
- react
- devDependencies
- components/share-menu.tsx
- ProjectCard.tsx
- app/layout.tsx
- next
- global.d.ts
- UI Polish Design Principles
- quotes/route.ts
- utils.ts
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
- BlogCard.tsx
- Posts.tsx
- next-themes

## God Nodes (most connected - your core abstractions)
1. `cn()` - 113 edges
2. `react` - 78 edges
3. `next` - 38 edges
4. `lucide-react` - 26 edges
5. `Home()` - 21 edges
6. `BlogPostPage()` - 17 edges
7. `Button` - 17 edges
8. `compilerOptions` - 16 edges
9. `ShareMenu()` - 14 edges
10. `sanity` - 13 edges

## Surprising Connections (you probably didn't know these)
- `Featured Project Showcase Preview Asset` --conceptually_related_to--> `Portfolio Features & Integrations`  [INFERRED]
  public/project1.png → README.md
- `TooltipPanel()` --calls--> `cn()`  [EXTRACTED]
  components/animate-ui/components/base/tooltip.tsx → lib/utils.ts
- `CardDescription` --calls--> `cn()`  [EXTRACTED]
  components/ui/Card.tsx → lib/utils.ts
- `BreadcrumbEllipsis()` --calls--> `cn()`  [EXTRACTED]
  components/ui/breadcrumb.tsx → lib/utils.ts
- `KbdGroup()` --calls--> `cn()`  [EXTRACTED]
  components/ui/kbd.tsx → lib/utils.ts

## Import Cycles
- None detected.

## Communities (48 total, 13 thin omitted)

### Community 0 - "sanity.ts"
Cohesion: 0.08
Nodes (30): AchievementsPage(), metadata, revalidate, GET(), revalidate, BlogContent(), BlogPage(), revalidate (+22 more)

### Community 1 - "animate/github-stars.tsx"
Cohesion: 0.07
Nodes (48): buttonStarVariants, buttonVariants, GitHubStarsButton(), GitHubStarsButtonProps, GithubStars(), GithubStarsContextType, GithubStarsIcon(), GithubStarsIconProps (+40 more)

### Community 2 - "lucide-react"
Cohesion: 0.06
Nodes (25): dynamic, revalidate, portableTextComponents, PortableTextContentProps, getYouTubeId(), lucide-react, next-sanity, @portabletext/react (+17 more)

### Community 3 - "dependencies"
Cohesion: 0.04
Nodes (54): dependencies, babel-plugin-react-compiler, @base-ui-components/react, canvas-confetti, class-variance-authority, clsx, cmdk, cn (+46 more)

### Community 4 - "primitives/animate/tabs.tsx"
Cohesion: 0.07
Nodes (42): TabsContentProps, TabsContentsProps, TabsListProps, TabsProps, TabsTriggerProps, BaseTabsProps, ControlledTabsProps, Tabs() (+34 more)

### Community 5 - "primitives/animate/tooltip.tsx"
Cohesion: 0.07
Nodes (41): Tooltip(), TooltipContent(), TooltipContentProps, TooltipProps, TooltipProvider(), TooltipProviderProps, TooltipTrigger(), TooltipTriggerProps (+33 more)

### Community 6 - "components/base/tooltip.tsx"
Cohesion: 0.10
Nodes (26): Tooltip(), TooltipPanel(), TooltipPanelProps, TooltipProps, TooltipProvider(), TooltipProviderProps, TooltipTriggerProps, [LocalTooltipProvider, useTooltip] (+18 more)

### Community 7 - "CommandMenu.tsx"
Cohesion: 0.24
Nodes (6): ClientShell(), CommandMenu, EasterEgg, BlogPostItem, RecentPage, cmdk

### Community 8 - "package.json"
Cohesion: 0.07
Nodes (29): name, private, version, babel-plugin-react-compiler, baseline-browser-mapping, cn, eslint, eslint-config-next (+21 more)

### Community 9 - "icon.tsx"
Cohesion: 0.13
Nodes (25): AnimateIcon(), run(), AnimateIconContext, AnimateIconContextValue, AnimateIconProps, AnyProps, composeEventHandlers(), DefaultIconProps (+17 more)

### Community 10 - "Certifications.tsx"
Cohesion: 0.12
Nodes (27): Achievements(), AwardIcon(), AwardItemExpandable(), AwardItemStatic(), AwardMeta(), AwardRightIcons(), Footer(), FooterSurprise() (+19 more)

### Community 11 - "EasterEgg.tsx"
Cohesion: 0.22
Nodes (14): EasterEgg(), AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay (+6 more)

### Community 12 - "contact/page.tsx"
Cohesion: 0.16
Nodes (13): Contact(), handleSubmit(), validate(), FormErrors, FormState, Input, InputProps, Label (+5 more)

### Community 13 - "components.json"
Cohesion: 0.09
Nodes (22): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+14 more)

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
Cohesion: 0.06
Nodes (37): Home(), metadata, revalidate, About(), AvailabilityBadge(), AvailabilityBadgeProps, BelowFoldWidgets(), QuoteBlock (+29 more)

### Community 21 - "cn"
Cohesion: 0.11
Nodes (22): DropdownMenuCheckboxItem(), DropdownMenuLabel(), DropdownMenuRadioItem(), DropdownMenuSeparator(), DropdownMenuShortcut(), DropdownMenuSubContent(), DropdownMenuSubTrigger(), SelectContent (+14 more)

### Community 22 - "react"
Cohesion: 0.27
Nodes (6): BackToTop(), BackToTopProps, LayoutContainer(), LayoutContainerProps, MDXContentProps, react

### Community 23 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, baseline-browser-mapping, eslint, eslint-config-next, @eslint/eslintrc, tailwindcss, @tailwindcss/postcss, tw-animate-css (+5 more)

### Community 24 - "components/share-menu.tsx"
Cohesion: 0.22
Nodes (12): ShareButton(), ShareButtonProps, copyText(), IconProps, LinkedInIcon(), ShareMenu(), ShareMenuProps, XIcon() (+4 more)

### Community 25 - "ProjectCard.tsx"
Cohesion: 0.06
Nodes (46): metadata, ProjectPage(), revalidate, Tabs(), TabsContent(), TabsContents(), TabsList(), TabsTrigger() (+38 more)

### Community 26 - "app/layout.tsx"
Cohesion: 0.32
Nodes (5): jetbrainsMono, metadata, RootLayout(), ThemeProvider(), @vercel/analytics

### Community 27 - "next"
Cohesion: 0.17
Nodes (6): metadata, getRouteIndex(), navOrder, Template(), nextConfig, next

### Community 28 - "global.d.ts"
Cohesion: 0.33
Nodes (5): *.css, *.less, *.sass, *.scss, *.styl

### Community 29 - "UI Polish Design Principles"
Cohesion: 0.40
Nodes (5): Motion and Interaction Animations, Frontend Rendering Performance Guidelines, UI Polish Design Principles, Surfaces, Borders, and Glassmorphism, Typography Hierarchy and Tabular Numbers

### Community 31 - "utils.ts"
Cohesion: 0.10
Nodes (36): BlogPostPage(), BlogPostPageProps, generateMetadata(), revalidate, BackButton(), portableTextComponents, SanityBlogCard(), ViewCounter() (+28 more)

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

### Community 47 - "next-themes"
Cohesion: 0.40
Nodes (3): ToasterProps, next-themes, sonner

## Knowledge Gaps
- **325 isolated node(s):** `metadata`, `revalidate`, `rateLimitMap`, `revalidate`, `QuoteData` (+320 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 375 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **13 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `sanity.ts`, `animate/github-stars.tsx`, `lucide-react`, `primitives/animate/tabs.tsx`, `primitives/animate/tooltip.tsx`, `components/base/tooltip.tsx`, `CommandMenu.tsx`, `package.json`, `icon.tsx`, `Certifications.tsx`, `EasterEgg.tsx`, `contact/page.tsx`, `spotify.ts`, `use-sound.ts`, `app/page.tsx`, `cn`, `components/share-menu.tsx`, `ProjectCard.tsx`, `app/layout.tsx`, `next`, `utils.ts`, `Button`, `BlogCard.tsx`, `Posts.tsx`?**
  _High betweenness centrality (0.355) - this node is a cross-community bridge._
- **Why does `next` connect `next` to `sanity.ts`, `lucide-react`, `primitives/animate/tooltip.tsx`, `CommandMenu.tsx`, `package.json`, `Certifications.tsx`, `Button`, `BlogCard.tsx`, `spotify.ts`, `Posts.tsx`, `contact/route.ts`, `app/page.tsx`, `react`, `ProjectCard.tsx`, `app/layout.tsx`, `quotes/route.ts`, `utils.ts`?**
  _High betweenness centrality (0.121) - this node is a cross-community bridge._
- **Why does `cn()` connect `cn` to `sanity.ts`, `animate/github-stars.tsx`, `lucide-react`, `primitives/animate/tabs.tsx`, `primitives/animate/tooltip.tsx`, `components/base/tooltip.tsx`, `icon.tsx`, `Certifications.tsx`, `EasterEgg.tsx`, `Button`, `contact/page.tsx`, `Posts.tsx`, `app/page.tsx`, `components/share-menu.tsx`, `ProjectCard.tsx`, `utils.ts`?**
  _High betweenness centrality (0.113) - this node is a cross-community bridge._
- **What connects `metadata`, `revalidate`, `rateLimitMap` to the rest of the system?**
  _325 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `sanity.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07862679955703211 - nodes in this community are weakly interconnected._
- **Should `animate/github-stars.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06896551724137931 - nodes in this community are weakly interconnected._
- **Should `lucide-react` be split into smaller, more focused modules?**
  _Cohesion score 0.05974025974025974 - nodes in this community are weakly interconnected._