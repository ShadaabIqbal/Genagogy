import { Card, CardContent, CardHeader } from "@/components/ui/card";

const CourseCardSkeleton = () => {
  return (
    <Card className="overflow-hidden border border-border/30 bg-card">
      {/* Image skeleton with shimmer effect */}
      <div className="relative h-48 bg-muted/80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
      </div>

      <CardHeader className="space-y-3 pb-3">
        {/* Title skeleton - proper skeleton style */}
        <div className="space-y-2">
          <div className="h-5 bg-muted rounded w-3/4"></div>
          <div className="h-4 bg-muted/70 rounded w-1/2"></div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 pt-0">
        {/* Description skeleton - proper skeleton lines */}
        <div className="space-y-2">
          <div className="h-3 bg-muted rounded w-full"></div>
          <div className="h-3 bg-muted rounded w-5/6"></div>
          <div className="h-3 bg-muted rounded w-4/6"></div>
        </div>

        {/* Button skeleton */}
        <div className="h-9 bg-muted rounded-md w-full mt-4"></div>
      </CardContent>
    </Card>
  );
};

export default CourseCardSkeleton;

