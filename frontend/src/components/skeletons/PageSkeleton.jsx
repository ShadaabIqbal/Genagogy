const PageSkeleton = () => {
  return (
    <div className="min-h-screen animate-pulse">
      {/* Hero section skeleton */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="h-12 bg-muted rounded-md w-3/4 mx-auto"></div>
            <div className="h-6 bg-muted rounded-md w-full max-w-2xl mx-auto"></div>
            <div className="h-6 bg-muted rounded-md w-5/6 max-w-xl mx-auto"></div>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="h-5 bg-muted rounded-md w-32"></div>
              <div className="h-5 bg-muted rounded-md w-32"></div>
              <div className="h-5 bg-muted rounded-md w-32"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content section skeleton */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="h-48 bg-muted rounded-lg"></div>
                <div className="h-6 bg-muted rounded-md w-3/4"></div>
                <div className="h-4 bg-muted rounded-md w-full"></div>
                <div className="h-4 bg-muted rounded-md w-5/6"></div>
                <div className="h-9 bg-muted rounded-md w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageSkeleton;

