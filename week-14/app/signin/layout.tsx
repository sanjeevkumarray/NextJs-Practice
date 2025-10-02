import next from "next";
import { nodeServerAppPaths } from "next/dist/build/webpack/plugins/pages-manifest-plugin";
import { ESLINT_DEFAULT_DIRS } from "next/dist/lib/constants";
import React, { Children } from "react";
import postcssPluginWarning from "tailwindcss";
import { domainToASCII } from "url";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="border-b-p-1 text-center">20% off for the next few days</div>
      {children}
    </div>
  );
}



