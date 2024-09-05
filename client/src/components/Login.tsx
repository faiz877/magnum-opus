import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-background dark:bg-background-dark">
      <Card className="mx-auto max-w-sm">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold">Welcome</CardTitle>
          <CardDescription>
            Enter your details below to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link
                to="#"
                className="text-sm font-medium underline underline-offset-4 hover:text-primary dark:hover:text-primary-dark"
              >
                Forgot password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Sign In
          </Button>
          <Button variant="outline" className="w-full">
            Sign in with Google
          </Button>
        </CardContent>
        <CardFooter className="text-center text-sm text-muted-foreground dark:text-muted-foreground-dark">
          Don&apos;t have an account?{" "}
          <Link
            to="/auth/signup"
            className="font-medium underline underline-offset-4 hover:text-primary dark:hover:text-primary-dark"
          >
            Sign up
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
