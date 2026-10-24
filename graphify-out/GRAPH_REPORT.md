# Graph Report - my portfolio  (2026-10-24)

## Corpus Check
- 180 files · ~67,187 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .ico 1, .css 1)

## Summary
- 933 nodes · 1945 edges · 50 communities (39 shown, 11 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `3894db1b`
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
- lucide-react
- contact/page.tsx
- components.json
- cn
- rules/graphify.md
- compilerOptions
- components/toc-minimap.tsx
- workflows/graphify.md
- sanity.ts
- spotify.ts
- react
- utils.ts
- devDependencies
- llms-full.txt/route.ts
- ProjectCard.tsx
- next
- blog/page.tsx
- global.d.ts
- UI Polish Design Principles
- app/layout.tsx
- About.tsx
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
- contact/route.ts
- contribution-graph.tsx
- CodeBlock.tsx
- link-preview/route.ts
- getAllPostSlugs
- Sonner.tsx

## God Nodes (most connected - your core abstractions)
1. `cn()` - 117 edges
2. `react` - 84 edges
3. `next` - 42 edges
4. `lucide-react` - 30 edges
5. `Home()` - 21 edges
6. `Button` - 19 edges
7. `motion` - 17 edges
8. `compilerOptions` - 16 edges
9. `useSound()` - 15 edges
10. `ShareMenu()` - 15 edges

## Surprising Connections (you probably didn't know these)
- `Featured Project Showcase Preview Asset` --conceptually_related_to--> `Portfolio Features & Integrations`  [INFERRED]
  public/project1.png → README.md
- `KbdGroup()` --calls--> `cn()`  [EXTRACTED]
  components/ui/kbd.tsx → lib/utils.ts
- `TooltipPanel()` --calls--> `cn()`  [EXTRACTED]
  components/animate-ui/components/base/tooltip.tsx → lib/utils.ts
- `CardDescription` --calls--> `cn()`  [EXTRACTED]
  components/ui/Card.tsx → lib/utils.ts
- `Home()` --calls--> `ContributionGraph()`  [EXTRACTED]
  app/page.tsx → components/contribution-graph.tsx

## Import Cycles
- None detected.

## Communities (50 total, 11 thin omitted)

### Community 0 - "BelowFoldWidgets.tsx"
Cohesion: 0.16
Nodes (13): BelowFoldWidgets(), QuoteBlock, VisitorCounter, ClientShell(), CommandMenu, EasterEgg, FALLBACK_QUOTES, QuoteData (+5 more)

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
Cohesion: 0.06
Nodes (48): Tabs(), TabsContent(), TabsContentProps, TabsContents(), TabsContentsProps, TabsList(), TabsListProps, TabsProps (+40 more)

### Community 5 - "primitives/animate/tooltip.tsx"
Cohesion: 0.07
Nodes (41): Tooltip(), TooltipContent(), TooltipContentProps, TooltipProps, TooltipProvider(), TooltipProviderProps, TooltipTrigger(), TooltipTriggerProps (+33 more)

### Community 6 - "components/base/tooltip.tsx"
Cohesion: 0.10
Nodes (26): Tooltip(), TooltipPanel(), TooltipPanelProps, TooltipProps, TooltipProvider(), TooltipProviderProps, TooltipTriggerProps, [LocalTooltipProvider, useTooltip] (+18 more)

### Community 7 - "Posts.tsx"
Cohesion: 0.40
Nodes (5): Post, PostItem(), Posts(), PostsProps, PostSummary

### Community 8 - "package.json"
Cohesion: 0.06
Nodes (35): browserslist, name, private, version, babel-plugin-react-compiler, baseline-browser-mapping, clsx, cn (+27 more)

### Community 9 - "icon.tsx"
Cohesion: 0.08
Nodes (36): metadata, NotFound(), AnimateIcon(), run(), AnimateIconContext, AnimateIconContextValue, AnimateIconProps, AnyProps (+28 more)

### Community 10 - "app/page.tsx"
Cohesion: 0.17
Nodes (13): Home(), metadata, revalidate, AvailabilityBadge(), AvailabilityBadgeProps, ImageSwiper, ImageSwiperProps, LocalTime() (+5 more)

### Community 11 - "lucide-react"
Cohesion: 0.22
Nodes (12): BlogSearchProps, Category, SanityBlogCard(), SanityBlogCardProps, ViewCounter(), ViewCounterProps, formatRelativeTime(), lucide-react (+4 more)

### Community 12 - "contact/page.tsx"
Cohesion: 0.16
Nodes (13): Contact(), handleSubmit(), validate(), FormErrors, FormState, Input, InputProps, Label (+5 more)

### Community 13 - "components.json"
Cohesion: 0.08
Nodes (23): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+15 more)

### Community 14 - "cn"
Cohesion: 0.06
Nodes (54): ShareButton(), ShareButtonProps, EasterEgg(), copyText(), IconProps, LinkedInIcon(), ShareMenu(), ShareMenuProps (+46 more)

### Community 16 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 17 - "components/toc-minimap.tsx"
Cohesion: 0.07
Nodes (38): BackToTop(), BackToTopProps, BlogPostItem, CommandMenu(), RecentPage, LayoutContainer(), LayoutContainerProps, handleItemClick() (+30 more)

### Community 19 - "sanity.ts"
Cohesion: 0.20
Nodes (11): AchievementsPage(), metadata, revalidate, AchievementCard(), Props, Props, Award, builder (+3 more)

### Community 20 - "spotify.ts"
Cohesion: 0.19
Nodes (15): dynamic, GET(), revalidate, NowPlayingClient(), Props, SpotifyIcon(), NowPlaying(), basic (+7 more)

### Community 21 - "react"
Cohesion: 0.10
Nodes (28): getRouteIndex(), navOrder, Template(), BlogCardProps, Post, Achievements(), AwardIcon(), AwardItemExpandable() (+20 more)

### Community 22 - "utils.ts"
Cohesion: 0.22
Nodes (14): BlogPostPage(), BlogPostPageProps, generateMetadata(), revalidate, BackButton(), BackButtonProps, portableTextComponents, calculateReadingTime() (+6 more)

### Community 23 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, baseline-browser-mapping, eslint, eslint-config-next, @eslint/eslintrc, tailwindcss, @tailwindcss/postcss, tw-animate-css (+5 more)

### Community 24 - "llms-full.txt/route.ts"
Cohesion: 0.16
Nodes (10): GET(), revalidate, fetchWithTimeout(), GET(), revalidate, fetchWithTimeout(), GET(), revalidate (+2 more)

### Community 25 - "ProjectCard.tsx"
Cohesion: 0.08
Nodes (40): metadata, ProjectPage(), revalidate, CustomIconName, CustomIcons, Icon(), IconProps, ProjectCard() (+32 more)

### Community 26 - "next"
Cohesion: 0.13
Nodes (5): PROGRAMMER_QUOTES, QuoteData, metadata, nextConfig, next

### Community 27 - "blog/page.tsx"
Cohesion: 0.31
Nodes (8): BlogContent(), BlogPage(), metadata, revalidate, BlogGridSkeleton(), BlogSearch(), Skeleton(), getAllCategories

### Community 28 - "global.d.ts"
Cohesion: 0.33
Nodes (5): *.css, *.less, *.sass, *.scss, *.styl

### Community 29 - "UI Polish Design Principles"
Cohesion: 0.40
Nodes (5): Motion and Interaction Animations, Frontend Rendering Performance Guidelines, UI Polish Design Principles, Surfaces, Borders, and Glassmorphism, Typography Hierarchy and Tabular Numbers

### Community 30 - "app/layout.tsx"
Cohesion: 0.24
Nodes (7): jetbrainsMono, metadata, RootLayout(), viewport, ThemeProvider(), next-themes, @vercel/analytics

### Community 31 - "About.tsx"
Cohesion: 0.43
Nodes (6): About(), AboutProps, getClientGreeting(), Greeting(), LinkPreview(), getSiteSettings()

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

### Community 44 - "contact/route.ts"
Cohesion: 0.50
Nodes (4): isRateLimited(), POST(), rateLimitMap, nodemailer

### Community 45 - "contribution-graph.tsx"
Cohesion: 0.21
Nodes (12): buildContributionGrid(), ContributionGraphClient(), Props, ContributionGraph(), GridData, MonthLabel, MONTHS, normalizeDateString() (+4 more)

### Community 46 - "CodeBlock.tsx"
Cohesion: 0.40
Nodes (3): CodeBlockProps, CodeBlock, react-syntax-highlighter

### Community 47 - "link-preview/route.ts"
Cohesion: 0.83
Nodes (3): extractOgImage(), GET(), isPrivateIp()

### Community 48 - "getAllPostSlugs"
Cohesion: 0.67
Nodes (3): generateStaticParams(), sitemap(), getAllPostSlugs

## Knowledge Gaps
- **340 isolated node(s):** `navOrder`, `Props`, `Props`, `MONTHS`, `MonthLabel` (+335 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 385 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `BelowFoldWidgets.tsx`, `animate/github-stars.tsx`, `sanity`, `primitives/animate/tabs.tsx`, `primitives/animate/tooltip.tsx`, `components/base/tooltip.tsx`, `Posts.tsx`, `package.json`, `icon.tsx`, `app/page.tsx`, `lucide-react`, `contact/page.tsx`, `cn`, `components/toc-minimap.tsx`, `sanity.ts`, `spotify.ts`, `utils.ts`, `ProjectCard.tsx`, `blog/page.tsx`, `app/layout.tsx`, `About.tsx`, `link-preview.tsx`, `contribution-graph.tsx`, `CodeBlock.tsx`?**
  _High betweenness centrality (0.347) - this node is a cross-community bridge._
- **Why does `next` connect `next` to `BelowFoldWidgets.tsx`, `sanity`, `primitives/animate/tooltip.tsx`, `Posts.tsx`, `package.json`, `icon.tsx`, `app/page.tsx`, `lucide-react`, `components/toc-minimap.tsx`, `sanity.ts`, `spotify.ts`, `react`, `utils.ts`, `llms-full.txt/route.ts`, `ProjectCard.tsx`, `blog/page.tsx`, `app/layout.tsx`, `contact/route.ts`, `link-preview/route.ts`, `getAllPostSlugs`?**
  _High betweenness centrality (0.126) - this node is a cross-community bridge._
- **Why does `cn()` connect `cn` to `animate/github-stars.tsx`, `sanity`, `primitives/animate/tabs.tsx`, `primitives/animate/tooltip.tsx`, `components/base/tooltip.tsx`, `Posts.tsx`, `link-preview.tsx`, `icon.tsx`, `app/page.tsx`, `contact/page.tsx`, `components/toc-minimap.tsx`, `react`, `utils.ts`, `ProjectCard.tsx`, `blog/page.tsx`, `About.tsx`?**
  _High betweenness centrality (0.110) - this node is a cross-community bridge._
- **What connects `navOrder`, `Props`, `Props` to the rest of the system?**
  _340 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `animate/github-stars.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06896551724137931 - nodes in this community are weakly interconnected._
- **Should `sanity` be split into smaller, more focused modules?**
  _Cohesion score 0.061495457721872815 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.03636363636363636 - nodes in this community are weakly interconnected._