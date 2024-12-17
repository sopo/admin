import { atom } from "jotai";
import { Session as SupabaseSession } from "@supabase/supabase-js";
export const UserAtom = atom<SupabaseSession | null>(null);
