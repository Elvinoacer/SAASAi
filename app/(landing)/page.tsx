import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function LandingPage() {
  return (
    <div>
      LandingPage (unprotected)
      <div className="flex gap-3">
        <Link href={"/sign-in"}>
          <Button>Login</Button>
        </Link>
        <Link href={"/sign-up"}>
          <Button>Register today</Button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
