import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	'https://ybxnmdahollawuugmccf.supabase.co',
	`${process.env.NEXT_PUBLIC_DB_API}`
);

export default supabase;
