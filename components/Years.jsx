"use client";

import { useEffect, useState } from "react";
import { yearsSinceFounded } from "../lib/site";

// Years in business, counted from FOUNDED_YEAR. Recalculated in the browser so it
// goes up every year even if the static site isn't rebuilt.
export default function Years() {
  const [years, setYears] = useState(yearsSinceFounded);
  useEffect(() => setYears(yearsSinceFounded()), []);
  return <>{years}</>;
}
