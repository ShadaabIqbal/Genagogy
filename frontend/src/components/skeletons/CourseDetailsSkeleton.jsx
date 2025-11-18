import { Card, CardContent, CardHeader } from "@/components/ui/card";

const CourseDetailsSkeleton = () => {
  return (
    <div className="min-h-screen animate-pulse">
      {/* Back Navigation Skeleton */}
      <div className="bg-background border-b border-border py-4 mt-5">
        <div className="container-max">
          <div className="h-5 bg-muted rounded-md w-32"></div>
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <section className="bg-gradient-subtle section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="h-6 bg-muted rounded-md w-24"></div>
              <div className="h-10 bg-muted rounded-md w-3/4"></div>
              <div className="h-6 bg-muted rounded-md w-full"></div>
              <div className="h-6 bg-muted rounded-md w-5/6"></div>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="h-16 bg-muted rounded-md"></div>
                <div className="h-16 bg-muted rounded-md"></div>
                <div className="h-16 bg-muted rounded-md"></div>
              </div>
              <div className="h-10 bg-muted rounded-md w-40 mt-4"></div>
            </div>
            <div className="h-72 bg-muted rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Content Section Skeleton */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Skills Card */}
              <Card>
                <CardHeader>
                  <div className="h-6 bg-muted rounded-md w-40"></div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="h-6 bg-muted rounded-full w-20"></div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Highlights Card */}
              <Card>
                <CardHeader>
                  <div className="h-6 bg-muted rounded-md w-32"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="h-4 bg-muted rounded-md w-full"></div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Curriculum Card */}
              <Card>
                <CardHeader>
                  <div className="h-6 bg-muted rounded-md w-36"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="space-y-2">
                        <div className="h-5 bg-muted rounded-md w-48"></div>
                        <div className="space-y-1 pl-4">
                          {[...Array(4)].map((_, j) => (
                            <div key={j} className="h-3 bg-muted rounded-md w-full"></div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Skeleton */}
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <div className="h-6 bg-muted rounded-md w-40 mx-auto"></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded-md w-full"></div>
                    <div className="h-4 bg-muted rounded-md w-5/6"></div>
                  </div>
                  <div className="h-px bg-muted"></div>
                  <div className="h-10 bg-muted rounded-md w-full"></div>
                  <div className="h-10 bg-muted rounded-md w-full"></div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetailsSkeleton;

