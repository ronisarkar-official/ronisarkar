import { Skeleton } from '@/components/ui/Skeleton';

export default function BlogGridSkeleton() {
	return (
		<div className="flex flex-col gap-8">
			<div className="relative">
				<Skeleton className="h-11 w-full rounded-lg" />
			</div>
			<div className="flex flex-wrap gap-2">
				<span className="text-sm font-medium text-muted-foreground">
					Categories:
				</span>
				<Skeleton className="h-6 w-14 rounded-full" />
				<Skeleton className="h-6 w-20 rounded-full" />
				<Skeleton className="h-6 w-24 rounded-full" />
			</div>
			<div className="grid gap-6 md:grid-cols-2">
				{[...Array(4)].map((_, i) => (
					<div
						key={i}
						className="border rounded-lg min-h-80 max-h-80 flex flex-col overflow-hidden p-4">
						<Skeleton className="h-48 rounded-lg mb-2 flex-shrink-0" />
						<Skeleton className="h-6 w-3/4 mb-2" />
						<div className="space-y-2 mb-4">
							<Skeleton className="h-3 w-full" />
							<Skeleton className="h-3 w-5/6" />
						</div>
						<div className="mt-auto">
							<Skeleton className="h-4 w-32" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}