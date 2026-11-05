# Graph Report - my portfolio  (2026-11-05)

## Corpus Check
- 180 files · ~67,787 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .ico 1, .css 1)

## Summary
- 944 nodes · 1968 edges · 50 communities (35 shown, 15 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `55a7e2cf`
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
- react
- next
- contact/page.tsx
- components.json
- cn
- rules/graphify.md
- compilerOptions
- CommandMenu.tsx
- workflows/graphify.md
- achievements/page.tsx
- spotify.ts
- Certifications.tsx
- utils.ts
- devDependencies
- link-preview.tsx
- ProjectCard.tsx
- contact/route.ts
- link-preview/route.ts
- global.d.ts
- UI Polish Design Principles
- quotes/route.ts
- template.tsx
- scripts
- Portfolio Tech Stack & Architecture
- eslint.config.mjs
- overrides
- BlogCard.tsx
- nav.ts
- postcss.config.mjs
- vercel.json
- 3Skill Logo Asset
- Freelancer Platform Badge Asset
- Google Search Console Verification
- MDXContent.tsx
- contribution-graph.tsx
- Button
- contact/layout.tsx
- next-themes

## God Nodes (most connected - your core abstractions)
1. `cn()` - 119 edges
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
- `TooltipPanel()` --calls--> `cn()`  [EXTRACTED]
  components/animate-ui/components/base/tooltip.tsx → lib/utils.ts
- `CardDescription` --calls--> `cn()`  [EXTRACTED]
  components/ui/Card.tsx → lib/utils.ts
- `KbdGroup()` --calls--> `cn()`  [EXTRACTED]
  components/ui/kbd.tsx → lib/utils.ts
- `GET()` --calls--> `getAllSanityPosts`  [EXTRACTED]
  app/api/posts/route.ts → lib/sanity.ts

## Import Cycles
- None detected.

## Communities (50 total, 15 thin omitted)

### Community 0 - "BelowFoldWidgets.tsx"
Cohesion: 0.18
Nodes (10): BelowFoldWidgets(), QuoteBlock, VisitorCounter, FALLBACK_QUOTES, QuoteData, formatOrdinal(), VisitorCounter(), VisitorCounterProps (+2 more)

### Community 1 - "animate/github-stars.tsx"
Cohesion: 0.07
Nodes (49): buttonStarVariants, buttonVariants, GitHubStarsButton(), GitHubStarsButtonProps, GithubStars(), GithubStarsContextType, GithubStarsIcon(), GithubStarsIconProps (+41 more)

### Community 2 - "sanity"
Cohesion: 0.06
Nodes (22): dynamic, revalidate, portableTextComponents, PortableTextContentProps, getYouTubeId(), next-sanity, sanity, @sanity/code-input (+14 more)

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
Cohesion: 0.40
Nodes (5): Post, PostItem(), Posts(), PostsProps, PostSummary

### Community 8 - "package.json"
Cohesion: 0.06
Nodes (32): browserslist, name, private, version, babel-plugin-react-compiler, baseline-browser-mapping, clsx, cn (+24 more)

### Community 9 - "icon.tsx"
Cohesion: 0.12
Nodes (26): AnimateIcon(), run(), AnimateIconContext, AnimateIconContextValue, AnimateIconProps, AnyProps, composeEventHandlers(), DefaultIconProps (+18 more)

### Community 10 - "react"
Cohesion: 0.17
Nodes (15): Home(), metadata, revalidate, AvailabilityBadge(), AvailabilityBadgeProps, ImageSwiper, LinkWithIcon(), LinkWithIconProps (+7 more)

### Community 11 - "next"
Cohesion: 0.32
Nodes (4): ImageSwiperProps, imageLoader(), nextConfig, next

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

### Community 17 - "CommandMenu.tsx"
Cohesion: 0.07
Nodes (35): jetbrainsMono, metadata, RootLayout(), viewport, BackToTop(), BackToTopProps, ClientShell(), CommandMenu (+27 more)

### Community 19 - "achievements/page.tsx"
Cohesion: 0.25
Nodes (9): AchievementsPage(), metadata, revalidate, AchievementCard(), Props, Props, Award, getAwards() (+1 more)

### Community 20 - "spotify.ts"
Cohesion: 0.19
Nodes (15): dynamic, GET(), revalidate, NowPlayingClient(), Props, SpotifyIcon(), NowPlaying(), basic (+7 more)

### Community 21 - "Certifications.tsx"
Cohesion: 0.14
Nodes (25): Achievements(), AwardIcon(), AwardItemExpandable(), AwardItemStatic(), AwardMeta(), AwardRightIcons(), Footer(), FooterSurprise() (+17 more)

### Community 22 - "utils.ts"
Cohesion: 0.05
Nodes (58): GET(), revalidate, BlogContent(), BlogPage(), metadata, revalidate, BlogPostPage(), BlogPostPageProps (+50 more)

### Community 23 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, baseline-browser-mapping, eslint, eslint-config-next, @eslint/eslintrc, tailwindcss, @tailwindcss/postcss, tw-animate-css (+5 more)

### Community 24 - "link-preview.tsx"
Cohesion: 0.09
Nodes (22): fetchWithTimeout(), GET(), revalidate, fetchWithTimeout(), GET(), revalidate, About(), AboutProps (+14 more)

### Community 25 - "ProjectCard.tsx"
Cohesion: 0.08
Nodes (40): metadata, ProjectPage(), revalidate, CustomIconName, CustomIcons, Icon(), IconProps, ProjectCard() (+32 more)

### Community 26 - "contact/route.ts"
Cohesion: 0.50
Nodes (4): isRateLimited(), POST(), rateLimitMap, nodemailer

### Community 27 - "link-preview/route.ts"
Cohesion: 0.83
Nodes (3): extractOgImage(), GET(), isPrivateIp()

### Community 28 - "global.d.ts"
Cohesion: 0.33
Nodes (5): *.css, *.less, *.sass, *.scss, *.styl

### Community 29 - "UI Polish Design Principles"
Cohesion: 0.40
Nodes (5): Motion and Interaction Animations, Frontend Rendering Performance Guidelines, UI Polish Design Principles, Surfaces, Borders, and Glassmorphism, Typography Hierarchy and Tabular Numbers

### Community 31 - "template.tsx"
Cohesion: 0.67
Nodes (3): getRouteIndex(), navOrder, Template()

### Community 32 - "scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, start

### Community 33 - "Portfolio Tech Stack & Architecture"
Cohesion: 0.40
Nodes (5): Featured Project Showcase Preview Asset, Portfolio Features & Integrations, Performance Optimizations & Caching, Sanity CMS Content Management, Portfolio Tech Stack & Architecture

### Community 35 - "overrides"
Cohesion: 0.20
Nodes (10): overrides, adm-zip, glob, minimatch, nodemailer, postcss-selector-parser, @types/react, @types/react-dom (+2 more)

### Community 45 - "contribution-graph.tsx"
Cohesion: 0.21
Nodes (12): buildContributionGrid(), ContributionGraphClient(), Props, ContributionGraph(), GridData, MonthLabel, MONTHS, normalizeDateString() (+4 more)

### Community 47 - "Button"
Cohesion: 0.26
Nodes (8): metadata, NotFound(), BlogImage(), BlogImageProps, Counter(), Button, ButtonProps, @radix-ui/react-slot

### Community 49 - "next-themes"
Cohesion: 0.40
Nodes (3): ToasterProps, next-themes, sonner

## Knowledge Gaps
- **348 isolated node(s):** `metadata`, `revalidate`, `rateLimitMap`, `revalidate`, `QuoteData` (+343 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 393 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **15 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `BelowFoldWidgets.tsx`, `animate/github-stars.tsx`, `sanity`, `primitives/animate/tabs.tsx`, `primitives/animate/tooltip.tsx`, `components/base/tooltip.tsx`, `Posts.tsx`, `package.json`, `icon.tsx`, `next`, `contact/page.tsx`, `cn`, `CommandMenu.tsx`, `achievements/page.tsx`, `spotify.ts`, `Certifications.tsx`, `utils.ts`, `link-preview.tsx`, `ProjectCard.tsx`, `template.tsx`, `BlogCard.tsx`, `MDXContent.tsx`, `contribution-graph.tsx`, `Button`?**
  _High betweenness centrality (0.346) - this node is a cross-community bridge._
- **Why does `next` connect `next` to `BelowFoldWidgets.tsx`, `sanity`, `primitives/animate/tooltip.tsx`, `Posts.tsx`, `package.json`, `react`, `CommandMenu.tsx`, `achievements/page.tsx`, `spotify.ts`, `Certifications.tsx`, `utils.ts`, `ProjectCard.tsx`, `contact/route.ts`, `link-preview/route.ts`, `quotes/route.ts`, `template.tsx`, `BlogCard.tsx`, `revalidate/route.ts`, `Button`, `contact/layout.tsx`?**
  _High betweenness centrality (0.125) - this node is a cross-community bridge._
- **Why does `cn()` connect `cn` to `animate/github-stars.tsx`, `sanity`, `primitives/animate/tabs.tsx`, `primitives/animate/tooltip.tsx`, `components/base/tooltip.tsx`, `Posts.tsx`, `icon.tsx`, `react`, `contact/page.tsx`, `Button`, `Certifications.tsx`, `utils.ts`, `link-preview.tsx`, `ProjectCard.tsx`?**
  _High betweenness centrality (0.111) - this node is a cross-community bridge._
- **What connects `metadata`, `revalidate`, `rateLimitMap` to the rest of the system?**
  _348 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `animate/github-stars.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06896551724137931 - nodes in this community are weakly interconnected._
- **Should `sanity` be split into smaller, more focused modules?**
  _Cohesion score 0.06313497822931785 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.03636363636363636 - nodes in this community are weakly interconnected._