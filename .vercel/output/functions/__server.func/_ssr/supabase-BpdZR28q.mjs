import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/supabase-BpdZR28q.js
var supabaseUrl = "https://putltvchkxhgaxepsxrt.supabase.co";
var supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1dGx0dmNoa3hoZ2F4ZXBzeHJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM4MDI1OTMsImV4cCI6MjA5OTM3ODU5M30.FkQvPPacfL7vRrHGpu4DSJn56lBRGsAXpCjiauYkWBg";
/**
* Create a real Supabase client only when env vars are configured.
* Otherwise return a safe no-op proxy so the rest of the app doesn't crash.
*/
function createSafeClient() {
	return createClient(supabaseUrl, supabaseAnonKey);
}
var supabase = createSafeClient();
//#endregion
export { supabase as t };
