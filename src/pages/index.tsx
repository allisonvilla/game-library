import { supabase } from '../../lib/supabaseClient';

type Props = {
	countries: [];
};

export default function Home({ countries }: Props) {
	return (
		<>
			{/* Supabase Test */}
			<ul>
				{countries.map((country: { id: number; name: string }) => (
					<li key={country.id}>{country.name}</li>
				))}
			</ul>
		</>
	);
}

export async function getServerSideProps() {
	let { data } = await supabase.from('countries').select();

	return {
		props: {
			countries: data,
		},
	};
}
