import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, Mail, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const StaffLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call - in a real app, this would authenticate with a backend
    setTimeout(() => {
      // Admin credentials -> redirect to Admin Dashboard
      if (formData.email === "iqbalshadaab@gmail.com" && formData.password === "rimtiet118") {
        localStorage.setItem("staffLoggedIn", "true");
        localStorage.setItem("staffUser", JSON.stringify({
          name: "Admin",
          email: formData.email,
          role: "admin"
        }));
        toast({ title: "Login Successful!", description: "Welcome to the admin dashboard." });
        navigate("/admin");
      } else if (formData.email === "staff@genagogy.edu" && formData.password === "password") {
        // Demo staff -> redirect to Staff Dashboard
        localStorage.setItem("staffLoggedIn", "true");
        localStorage.setItem("staffUser", JSON.stringify({
          name: "Dr. Sarah Johnson",
          email: formData.email,
          role: "staff"
        }));
        toast({ title: "Login Successful!", description: "Welcome back to the staff dashboard." });
        navigate("/staff-dashboard");
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid email or password. Please try again.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center section-padding">
      <div className="w-full max-w-md">
        <Card className="shadow-large animate-fade-in">
          <CardHeader className="text-center">
            <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="h-8 w-8" />
            </div>
            <CardTitle className="text-2xl font-bold">Staff Login</CardTitle>
            <p className="text-muted-foreground">
              Access the staff dashboard and manage student information
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="Enter your password"
                    className="pl-10 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? (
                  "Signing in..."
                ) : (
                  <>
                    <LogIn className="mr-2 h-4 w-4" />
                    Sign In
                  </>
                )}
              </Button>
            </form>

            {/* Demo credentials removed as requested */}

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Forgot your password?{" "}
                <button className="text-primary hover:underline">
                  Contact IT Support
                </button>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Need help? Contact{" "}
            <a href="mailto:contactgenagogy@gmail.com" className="text-primary hover:underline">
              contactgenagogy@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StaffLogin;
