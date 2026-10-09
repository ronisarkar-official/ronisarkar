# Graph Report - my portfolio  (2026-10-09)

## Corpus Check
- 177 files · ~62,656 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .css 2, .ico 1)

## Summary
- 922 nodes · 1930 edges · 53 communities (41 shown, 12 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `66ac2a0c`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- react
- animate/github-stars.tsx
- sanity
- dependencies
- primitives/animate/tabs.tsx
- primitives/animate/tooltip.tsx
- components/base/tooltip.tsx
- Posts.tsx
- package.json
- icon.tsx
- achievements/page.tsx
- link-preview.tsx
- contact/page.tsx
- components.json
- spotify.ts
- rules/graphify.md
- compilerOptions
- CommandMenu.tsx
- workflows/graphify.md
- contact/route.ts
- next
- Certifications.tsx
- [slug]/page.tsx
- devDependencies
- llms-full.txt/route.ts
- cn
- utils.ts
- Header.tsx
- global.d.ts
- UI Polish Design Principles
- MDXContent.tsx
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
- link-preview/route.ts
- sanity.ts
- components/share-menu.tsx
- BelowFoldWidgets.tsx
- blog/page.tsx
- Sonner.tsx

## God Nodes (most connected - your core abstractions)
1. `cn()` - 117 edges
2. `react` - 81 edges
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
- `TooltipContent()` --calls--> `cn()`  [EXTRACTED]
  components/animate-ui/components/animate/tooltip.tsx → lib/utils.ts
- `TooltipPanel()` --calls--> `cn()`  [EXTRACTED]
  components/animate-ui/components/base/tooltip.tsx → lib/utils.ts
- `DropdownMenuCheckboxItem()` --calls--> `cn()`  [EXTRACTED]
  components/ui/dropdown-menu.tsx → lib/utils.ts
- `DropdownMenuRadioItem()` --calls--> `cn()`  [EXTRACTED]
  components/ui/dropdown-menu.tsx → lib/utils.ts

## Import Cycles
- None detected.

## Communities (53 total, 12 thin omitted)

### Community 0 - "react"
Cohesion: 0.15
Nodes (18): Home(), metadata, revalidate, AvailabilityBadge(), AvailabilityBadgeProps, Achievements(), ContributionGraph(), ImageSwiper (+10 more)

### Community 1 - "animate/github-stars.tsx"
Cohesion: 0.07
Nodes (49): buttonStarVariants, buttonVariants, GitHubStarsButton(), GitHubStarsButtonProps, GithubStars(), GithubStarsContextType, GithubStarsIcon(), GithubStarsIconProps (+41 more)

### Community 2 - "sanity"
Cohesion: 0.06
Nodes (23): dynamic, revalidate, portableTextComponents, PortableTextContentProps, getYouTubeId(), next-sanity, sanity, @sanity/code-input (+15 more)

### Community 3 - "dependencies"
Cohesion: 0.04
Nodes (55): dependencies, babel-plugin-react-compiler, @base-ui-components/react, canvas-confetti, class-variance-authority, clsx, cmdk, cn (+47 more)

### Community 4 - "primitives/animate/tabs.tsx"
Cohesion: 0.07
Nodes (42): TabsContentProps, TabsContentsProps, TabsListProps, TabsProps, TabsTriggerProps, BaseTabsProps, ControlledTabsProps, Tabs() (+34 more)

### Community 5 - "primitives/animate/tooltip.tsx"
Cohesion: 0.07
Nodes (35): TooltipContent(), TooltipContentProps, TooltipProps, TooltipProviderProps, TooltipTriggerProps, Align, FloatingContextType, [FloatingProvider, useFloatingContext] (+27 more)

### Community 6 - "components/base/tooltip.tsx"
Cohesion: 0.10
Nodes (26): Tooltip(), TooltipPanel(), TooltipPanelProps, TooltipProps, TooltipProvider(), TooltipProviderProps, TooltipTriggerProps, [LocalTooltipProvider, useTooltip] (+18 more)

### Community 7 - "Posts.tsx"
Cohesion: 0.33
Nodes (6): Post, PostItem(), Posts(), PostsProps, PostSummary, dayjs

### Community 8 - "package.json"
Cohesion: 0.05
Nodes (37): name, private, version, babel-plugin-react-compiler, baseline-browser-mapping, clsx, cn, eslint (+29 more)

### Community 9 - "icon.tsx"
Cohesion: 0.12
Nodes (26): AnimateIcon(), run(), AnimateIconContext, AnimateIconContextValue, AnimateIconProps, AnyProps, composeEventHandlers(), DefaultIconProps (+18 more)

### Community 10 - "achievements/page.tsx"
Cohesion: 0.29
Nodes (8): AchievementsPage(), metadata, revalidate, AchievementCard(), Props, Props, Award, getAwards()

### Community 11 - "link-preview.tsx"
Cohesion: 0.22
Nodes (10): About(), AboutProps, getClientGreeting(), Greeting(), LinkPreview(), LinkPreviewProps, ogCache, pendingFetches (+2 more)

### Community 12 - "contact/page.tsx"
Cohesion: 0.22
Nodes (9): Contact(), handleSubmit(), validate(), FormErrors, FormState, Input, InputProps, Textarea (+1 more)

### Community 13 - "components.json"
Cohesion: 0.08
Nodes (23): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+15 more)

### Community 14 - "spotify.ts"
Cohesion: 0.19
Nodes (15): dynamic, GET(), revalidate, NowPlayingClient(), Props, SpotifyIcon(), NowPlaying(), basic (+7 more)

### Community 16 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 17 - "CommandMenu.tsx"
Cohesion: 0.07
Nodes (41): BackToTopProps, ClientShell(), CommandMenu, EasterEgg, BlogPostItem, CommandMenu(), RecentPage, EasterEgg() (+33 more)

### Community 19 - "contact/route.ts"
Cohesion: 0.50
Nodes (4): isRateLimited(), POST(), rateLimitMap, nodemailer

### Community 20 - "next"
Cohesion: 0.10
Nodes (10): PROGRAMMER_QUOTES, QuoteData, metadata, getRouteIndex(), navOrder, Template(), BlogCardProps, Post (+2 more)

### Community 21 - "Certifications.tsx"
Cohesion: 0.23
Nodes (17): AwardIcon(), AwardItemExpandable(), AwardItemStatic(), AwardMeta(), AwardRightIcons(), Footer(), FooterSurprise(), PortableTextContent() (+9 more)

### Community 22 - "[slug]/page.tsx"
Cohesion: 0.24
Nodes (12): BlogPostPage(), BlogPostPageProps, generateMetadata(), revalidate, BackButton(), BackButtonProps, portableTextComponents, calculateReadingTime() (+4 more)

### Community 23 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, baseline-browser-mapping, eslint, eslint-config-next, @eslint/eslintrc, tailwindcss, @tailwindcss/postcss, tw-animate-css (+5 more)

### Community 24 - "llms-full.txt/route.ts"
Cohesion: 0.18
Nodes (9): fetchWithTimeout(), GET(), revalidate, fetchWithTimeout(), GET(), revalidate, getSiteSettings(), TECH_STACK (+1 more)

### Community 25 - "cn"
Cohesion: 0.05
Nodes (67): metadata, ProjectPage(), revalidate, Tabs(), TabsContent(), TabsContents(), TabsList(), TabsTrigger() (+59 more)

### Community 26 - "utils.ts"
Cohesion: 0.27
Nodes (11): handleItemClick(), scrollToHeading(), TOCMinimap(), TOCMinimapProps, useActiveHeading(), HoverCard(), HoverCardContent(), HoverCardTrigger() (+3 more)

### Community 27 - "Header.tsx"
Cohesion: 0.17
Nodes (12): jetbrainsMono, metadata, RootLayout(), BackToTop(), Header(), navLinks, LayoutContainer(), LayoutContainerProps (+4 more)

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
Cohesion: 0.24
Nodes (11): BlogSearchProps, Category, SanityBlogCard(), SanityBlogCardProps, ViewCounter(), ViewCounterProps, formatRelativeTime(), lucide-react (+3 more)

### Community 44 - "Button"
Cohesion: 0.26
Nodes (8): metadata, NotFound(), BlogImage(), BlogImageProps, Counter(), Button, ButtonProps, @radix-ui/react-slot

### Community 45 - "contribution-graph.tsx"
Cohesion: 0.20
Nodes (11): buildContributionGrid(), ContributionGraphClient(), Props, GridData, MonthLabel, MONTHS, normalizeDateString(), Props (+3 more)

### Community 46 - "Label.tsx"
Cohesion: 0.50
Nodes (4): Label, labelVariants, class-variance-authority, @radix-ui/react-label

### Community 47 - "link-preview/route.ts"
Cohesion: 0.83
Nodes (3): extractOgImage(), GET(), isPrivateIp()

### Community 48 - "sanity.ts"
Cohesion: 0.19
Nodes (9): GET(), revalidate, generateStaticParams(), GET(), sitemap(), builder, getAllPostSlugs(), getAllSanityPosts() (+1 more)

### Community 49 - "components/share-menu.tsx"
Cohesion: 0.22
Nodes (12): ShareButton(), ShareButtonProps, copyText(), IconProps, LinkedInIcon(), ShareMenu(), ShareMenuProps, XIcon() (+4 more)

### Community 50 - "BelowFoldWidgets.tsx"
Cohesion: 0.22
Nodes (8): BelowFoldWidgets(), QuoteBlock, VisitorCounter, FALLBACK_QUOTES, QuoteData, formatOrdinal(), VisitorCounter(), VisitorCounterProps

### Community 51 - "blog/page.tsx"
Cohesion: 0.31
Nodes (8): BlogContent(), BlogPage(), metadata, revalidate, BlogGridSkeleton(), BlogSearch(), Skeleton(), getAllCategories()

## Knowledge Gaps
- **335 isolated node(s):** `metadata`, `revalidate`, `rateLimitMap`, `revalidate`, `QuoteData` (+330 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 382 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `animate/github-stars.tsx`, `sanity`, `primitives/animate/tabs.tsx`, `primitives/animate/tooltip.tsx`, `components/base/tooltip.tsx`, `Posts.tsx`, `package.json`, `icon.tsx`, `achievements/page.tsx`, `link-preview.tsx`, `contact/page.tsx`, `spotify.ts`, `CommandMenu.tsx`, `next`, `Certifications.tsx`, `cn`, `utils.ts`, `Header.tsx`, `MDXContent.tsx`, `dropdown-menu.tsx`, `lucide-react`, `Button`, `contribution-graph.tsx`, `Label.tsx`, `components/share-menu.tsx`, `BelowFoldWidgets.tsx`, `blog/page.tsx`?**
  _High betweenness centrality (0.332) - this node is a cross-community bridge._
- **Why does `next` connect `next` to `react`, `sanity`, `lucide-react`, `Posts.tsx`, `package.json`, `achievements/page.tsx`, `Button`, `spotify.ts`, `link-preview/route.ts`, `sanity.ts`, `CommandMenu.tsx`, `BelowFoldWidgets.tsx`, `contact/route.ts`, `blog/page.tsx`, `Certifications.tsx`, `[slug]/page.tsx`, `cn`, `Header.tsx`?**
  _High betweenness centrality (0.126) - this node is a cross-community bridge._
- **Why does `cn()` connect `cn` to `react`, `animate/github-stars.tsx`, `sanity`, `primitives/animate/tabs.tsx`, `primitives/animate/tooltip.tsx`, `components/base/tooltip.tsx`, `Posts.tsx`, `icon.tsx`, `link-preview.tsx`, `contact/page.tsx`, `CommandMenu.tsx`, `Certifications.tsx`, `[slug]/page.tsx`, `utils.ts`, `Header.tsx`, `dropdown-menu.tsx`, `Button`, `Label.tsx`, `components/share-menu.tsx`, `blog/page.tsx`?**
  _High betweenness centrality (0.115) - this node is a cross-community bridge._
- **What connects `metadata`, `revalidate`, `rateLimitMap` to the rest of the system?**
  _335 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `animate/github-stars.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06896551724137931 - nodes in this community are weakly interconnected._
- **Should `sanity` be split into smaller, more focused modules?**
  _Cohesion score 0.061495457721872815 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.03636363636363636 - nodes in this community are weakly interconnected._