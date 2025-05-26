"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

const OauthButtons = () => {
  const handleGithubLogin = async () => {
    // Handle GitHub login logic here
    await authClient.signIn.social(
      {
        provider: "github",
      },
      {
        onRequest: () => {
          // Optionally, you can show a loading state or spinner here
          console.log("Requesting GitHub login...");
        },
        onSuccess: async () => {
          console.log("Successfully logged in!");
        },
        onError: (ctx) => {
          console.log(ctx);
        },
      },
    );
  };

  const handleGoogleLogin = async () => {
    // Handle Google login logic here
    await authClient.signIn.social(
      {
        provider: "google",
      },
      {
        onRequest: () => {
          // Optionally, you can show a loading state or spinner here
          console.log("Requesting Google login...");
        },
        onSuccess: async () => {
          console.log("Successfully logged in!");
        },
        onError: (ctx) => {
          console.log(ctx);
        },
      },
    );
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
        <Button
          variant="default"
          className="w-full"
          onClick={handleGithubLogin}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon icon-tabler icons-tabler-filled icon-tabler-brand-github"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" />
          </svg>
          Login with Github
        </Button>
        <Button
          variant="default"
          className="w-full"
          onClick={handleGoogleLogin}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
              fill="currentColor"
            />
          </svg>
          Login with Google
        </Button>
      </div>
    </div>
  );
};

export default OauthButtons;
