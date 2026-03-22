import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

let supabase: ReturnType<typeof createClient<Database>> | null = null;

export function getSupabaseClient() {
  if (typeof window === "undefined") {
    throw new Error("Supabase client can only be used in the browser");
  }

  if (!supabase) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

    if (!supabaseUrl || !supabasePublishableKey) {
      throw new Error("Missing Supabase environment variables");
    }

    supabase = createClient<Database>(supabaseUrl, supabasePublishableKey);
  }

  return supabase;
}
