# Graph Report - my portfolio  (2026-10-10)

## Corpus Check
- 178 files · ~63,108 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 6 file(s) not represented in the graph (top: (none) 2, .css 2, .ico 1)

## Summary
- 927 nodes · 1938 edges · 48 communities (38 shown, 10 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `eeeb8983`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- app/page.tsx
- animate/github-stars.tsx
- sanity
- dependencies
- primitives/animate/tabs.tsx
- primitives/animate/tooltip.tsx
- components/base/tooltip.tsx
- Posts.tsx
- package.json
- icon.tsx
- sanity.ts
- link-preview.tsx
- react
- components.json
- cn
- rules/graphify.md
- compilerOptions
- components/toc-minimap.tsx
- workflows/graphify.md
- EasterEgg.tsx
- next
- Certifications.tsx
- utils.ts
- devDependencies
- llms-full.txt/route.ts
- ProjectCard.tsx
- global.d.ts
- UI Polish Design Principles
- dropdown-menu.tsx
- scripts
- Portfolio Tech Stack & Architecture
- eslint.config.mjs
- overrides
- lucide-react
- nav.ts
- postcss.config.mjs
- vercel.json
- 3Skill Logo Asset
- Freelancer Platform Badge Asset
- Google Search Console Verification
- Button
- contribution-graph.tsx
- Label.tsx
- components/share-menu.tsx
- BelowFoldWidgets.tsx
- blog/page.tsx
- next-themes

## God Nodes (most connected - your core abstractions)
1. `cn()` - 117 edges
2. `react` - 83 edges
3. `next` - 41 edges
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
- `TooltipPanel()` --calls--> `cn()`  [EXTRACTED]
  components/animate-ui/components/base/tooltip.tsx → lib/utils.ts
- `CardDescription` --calls--> `cn()`  [EXTRACTED]
  components/ui/Card.tsx → lib/utils.ts
- `DropdownMenuCheckboxItem()` --calls--> `cn()`  [EXTRACTED]
  components/ui/dropdown-menu.tsx → lib/utils.ts
- `DropdownMenuRadioItem()` --calls--> `cn()`  [EXTRACTED]
  components/ui/dropdown-menu.tsx → lib/utils.ts

## Import Cycles
- None detected.

## Communities (48 total, 10 thin omitted)

### Community 0 - "app/page.tsx"
Cohesion: 0.16
Nodes (13): Home(), metadata, revalidate, AvailabilityBadge(), AvailabilityBadgeProps, ImageSwiper, ImageSwiperProps, LinkWithIcon() (+5 more)

### Community 1 - "animate/github-stars.tsx"
Cohesion: 0.07
Nodes (49): buttonStarVariants, buttonVariants, GitHubStarsButton(), GitHubStarsButtonProps, GithubStars(), GithubStarsContextType, GithubStarsIcon(), GithubStarsIconProps (+41 more)

### Community 2 - "sanity"
Cohesion: 0.06
Nodes (24): dynamic, revalidate, portableTextComponents, PortableTextContentProps, getYouTubeId(), next-sanity, @portabletext/react, sanity (+16 more)

### Community 3 - "dependencies"
Cohesion: 0.04
Nodes (55): dependencies, babel-plugin-react-compiler, @base-ui-components/react, canvas-confetti, class-variance-authority, clsx, cmdk, cn (+47 more)

### Community 4 - "primitives/animate/tabs.tsx"
Cohesion: 0.06
Nodes (48): Tabs(), TabsContent(), TabsContentProps, TabsContents(), TabsContentsProps, TabsList(), TabsListProps, TabsProps (+40 more)

### Community 5 - "primitives/animate/tooltip.tsx"
Cohesion: 0.07
Nodes (39): Tooltip(), TooltipContent(), TooltipContentProps, TooltipProps, TooltipProvider(), TooltipProviderProps, TooltipTrigger(), TooltipTriggerProps (+31 more)

### Community 6 - "components/base/tooltip.tsx"
Cohesion: 0.10
Nodes (26): Tooltip(), TooltipPanel(), TooltipPanelProps, TooltipProps, TooltipProvider(), TooltipProviderProps, TooltipTriggerProps, [LocalTooltipProvider, useTooltip] (+18 more)

### Community 7 - "Posts.tsx"
Cohesion: 0.33
Nodes (6): Post, PostItem(), Posts(), PostsProps, PostSummary, dayjs

### Community 8 - "package.json"
Cohesion: 0.06
Nodes (32): name, private, version, babel-plugin-react-compiler, baseline-browser-mapping, cn, eslint, eslint-config-next (+24 more)

### Community 9 - "icon.tsx"
Cohesion: 0.12
Nodes (26): AnimateIcon(), run(), AnimateIconContext, AnimateIconContextValue, AnimateIconProps, AnyProps, composeEventHandlers(), DefaultIconProps (+18 more)

### Community 10 - "sanity.ts"
Cohesion: 0.17
Nodes (13): AchievementsPage(), metadata, revalidate, generateStaticParams(), sitemap(), AchievementCard(), Props, Props (+5 more)

### Community 11 - "link-preview.tsx"
Cohesion: 0.22
Nodes (10): About(), AboutProps, getClientGreeting(), Greeting(), LinkPreview(), LinkPreviewProps, ogCache, pendingFetches (+2 more)

### Community 12 - "react"
Cohesion: 0.15
Nodes (13): Contact(), handleSubmit(), validate(), FormErrors, FormState, MDXContentProps, SpringAnimated(), SpringAnimatedProps (+5 more)

### Community 13 - "components.json"
Cohesion: 0.08
Nodes (23): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+15 more)

### Community 14 - "cn"
Cohesion: 0.14
Nodes (20): BreadcrumbEllipsis(), BreadcrumbItem(), BreadcrumbLink(), BreadcrumbList(), BreadcrumbPage(), BreadcrumbSeparator(), SelectContent, SelectItem (+12 more)

### Community 16 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 17 - "components/toc-minimap.tsx"
Cohesion: 0.08
Nodes (35): BackToTopProps, BlogPostItem, CommandMenu(), RecentPage, handleItemClick(), scrollToHeading(), TOCMinimap(), TOCMinimapProps (+27 more)

### Community 19 - "EasterEgg.tsx"
Cohesion: 0.25
Nodes (12): EasterEgg(), AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay, AlertDialogTitle (+4 more)

### Community 20 - "next"
Cohesion: 0.06
Nodes (32): isRateLimited(), POST(), rateLimitMap, extractOgImage(), GET(), isPrivateIp(), PROGRAMMER_QUOTES, QuoteData (+24 more)

### Community 21 - "Certifications.tsx"
Cohesion: 0.09
Nodes (35): jetbrainsMono, metadata, RootLayout(), viewport, BackToTop(), Achievements(), AwardIcon(), AwardItemExpandable() (+27 more)

### Community 22 - "utils.ts"
Cohesion: 0.15
Nodes (16): BlogPostPage(), BlogPostPageProps, generateMetadata(), revalidate, BackButton(), BackButtonProps, CodeBlockProps, CodeBlock (+8 more)

### Community 23 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, baseline-browser-mapping, eslint, eslint-config-next, @eslint/eslintrc, tailwindcss, @tailwindcss/postcss, tw-animate-css (+5 more)

### Community 24 - "llms-full.txt/route.ts"
Cohesion: 0.14
Nodes (13): GET(), revalidate, fetchWithTimeout(), GET(), revalidate, fetchWithTimeout(), GET(), revalidate (+5 more)

### Community 25 - "ProjectCard.tsx"
Cohesion: 0.08
Nodes (40): metadata, ProjectPage(), revalidate, CustomIconName, CustomIcons, Icon(), IconProps, ProjectCard() (+32 more)

### Community 28 - "global.d.ts"
Cohesion: 0.33
Nodes (5): *.css, *.less, *.sass, *.scss, *.styl

### Community 29 - "UI Polish Design Principles"
Cohesion: 0.40
Nodes (5): Motion and Interaction Animations, Frontend Rendering Performance Guidelines, UI Polish Design Principles, Surfaces, Borders, and Glassmorphism, Typography Hierarchy and Tabular Numbers

### Community 31 - "dropdown-menu.tsx"
Cohesion: 0.15
Nodes (8): DropdownMenuCheckboxItem(), DropdownMenuLabel(), DropdownMenuRadioItem(), DropdownMenuSeparator(), DropdownMenuShortcut(), DropdownMenuSubContent(), DropdownMenuSubTrigger(), radix-ui

### Community 32 - "scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, start

### Community 33 - "Portfolio Tech Stack & Architecture"
Cohesion: 0.40
Nodes (5): Featured Project Showcase Preview Asset, Portfolio Features & Integrations, Performance Optimizations & Caching, Sanity CMS Content Management, Portfolio Tech Stack & Architecture

### Community 35 - "overrides"
Cohesion: 0.67
Nodes (3): overrides, @types/react, @types/react-dom

### Community 36 - "lucide-react"
Cohesion: 0.22
Nodes (12): BlogSearchProps, Category, SanityBlogCard(), SanityBlogCardProps, ViewCounter(), ViewCounterProps, formatRelativeTime(), lucide-react (+4 more)

### Community 44 - "Button"
Cohesion: 0.22
Nodes (10): metadata, NotFound(), BlogImage(), BlogImageProps, Counter(), AlertDialogCancel, Button, ButtonProps (+2 more)

### Community 45 - "contribution-graph.tsx"
Cohesion: 0.21
Nodes (12): buildContributionGrid(), ContributionGraphClient(), Props, ContributionGraph(), GridData, MonthLabel, MONTHS, normalizeDateString() (+4 more)

### Community 46 - "Label.tsx"
Cohesion: 0.50
Nodes (4): Label, labelVariants, class-variance-authority, @radix-ui/react-label

### Community 49 - "components/share-menu.tsx"
Cohesion: 0.22
Nodes (12): ShareButton(), ShareButtonProps, copyText(), IconProps, LinkedInIcon(), ShareMenu(), ShareMenuProps, XIcon() (+4 more)

### Community 50 - "BelowFoldWidgets.tsx"
Cohesion: 0.22
Nodes (8): BelowFoldWidgets(), QuoteBlock, VisitorCounter, FALLBACK_QUOTES, QuoteData, formatOrdinal(), VisitorCounter(), VisitorCounterProps

### Community 51 - "blog/page.tsx"
Cohesion: 0.31
Nodes (8): BlogContent(), BlogPage(), metadata, revalidate, BlogGridSkeleton(), BlogSearch(), Skeleton(), getAllCategories

### Community 52 - "next-themes"
Cohesion: 0.40
Nodes (3): ToasterProps, next-themes, sonner

## Knowledge Gaps
- **338 isolated node(s):** `metadata`, `revalidate`, `rateLimitMap`, `revalidate`, `QuoteData` (+333 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 382 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `app/page.tsx`, `animate/github-stars.tsx`, `sanity`, `primitives/animate/tabs.tsx`, `primitives/animate/tooltip.tsx`, `components/base/tooltip.tsx`, `Posts.tsx`, `package.json`, `icon.tsx`, `sanity.ts`, `link-preview.tsx`, `cn`, `components/toc-minimap.tsx`, `EasterEgg.tsx`, `next`, `Certifications.tsx`, `utils.ts`, `ProjectCard.tsx`, `dropdown-menu.tsx`, `lucide-react`, `Button`, `contribution-graph.tsx`, `Label.tsx`, `components/share-menu.tsx`, `BelowFoldWidgets.tsx`, `blog/page.tsx`?**
  _High betweenness centrality (0.347) - this node is a cross-community bridge._
- **Why does `next` connect `next` to `app/page.tsx`, `sanity`, `lucide-react`, `primitives/animate/tooltip.tsx`, `Posts.tsx`, `package.json`, `sanity.ts`, `Button`, `components/toc-minimap.tsx`, `BelowFoldWidgets.tsx`, `blog/page.tsx`, `Certifications.tsx`, `utils.ts`, `llms-full.txt/route.ts`, `ProjectCard.tsx`?**
  _High betweenness centrality (0.122) - this node is a cross-community bridge._
- **Why does `cn()` connect `cn` to `app/page.tsx`, `animate/github-stars.tsx`, `sanity`, `primitives/animate/tabs.tsx`, `primitives/animate/tooltip.tsx`, `components/base/tooltip.tsx`, `Posts.tsx`, `icon.tsx`, `link-preview.tsx`, `react`, `components/toc-minimap.tsx`, `EasterEgg.tsx`, `Certifications.tsx`, `utils.ts`, `ProjectCard.tsx`, `dropdown-menu.tsx`, `Button`, `Label.tsx`, `components/share-menu.tsx`, `blog/page.tsx`?**
  _High betweenness centrality (0.111) - this node is a cross-community bridge._
- **What connects `metadata`, `revalidate`, `rateLimitMap` to the rest of the system?**
  _338 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `animate/github-stars.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06896551724137931 - nodes in this community are weakly interconnected._
- **Should `sanity` be split into smaller, more focused modules?**
  _Cohesion score 0.059932659932659935 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.03636363636363636 - nodes in this community are weakly interconnected._