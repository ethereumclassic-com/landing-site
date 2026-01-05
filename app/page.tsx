/**
 * ethereumclassic.com v0.1
 * MUST follow locked scope:
 * - 5 sections only
 * - No dashboards
 * - No wallet connections
 * - Router, not destination
 */

import { Hero } from "./sections/Hero";
import { Why } from "./sections/Why";
import { WhatCanIDo } from "./sections/WhatCanIDo";
import { WhoFor } from "./sections/WhoFor";
import { SiteFooter } from "./sections/SiteFooter";

export default function Page() {
  return (
    <main>
      <Hero />
      <Why />
      <WhatCanIDo />
      <WhoFor />
      <SiteFooter />
    </main>
  );
}
