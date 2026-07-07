<script lang="ts">
	import { LINKS } from '$lib/links';
	// TODO: replace with the real donation setup (GitHub Sponsors / Ko-fi / Stripe link).
	// The extension popup's "Consider Donating" button points here.
</script>

<svelte:head>
	<title>Support | Face Value</title>
	<meta
		name="description"
		content="Help keep Face Value running. Donations through GitHub Sponsors pay the monthly server costs."
	/>
</svelte:head>

<section class="mx-auto max-w-2xl py-24 text-center">
	<p class="font-mono text-xs tracking-widest text-accent uppercase">support</p>
	<h1 class="mt-4 font-serif text-5xl tracking-tight">Keep the feed honest.</h1>
	<p class="mx-auto mt-6 max-w-lg leading-relaxed text-mut">
		The transcript API, thumbnail proxy data, LLM requests, as well as general hosting cost
		me every month. To me, this is a small price to pay for winning back the freedom to
		choose, but Face Value does not make money and donations through GitHub Sponsors are
		much appreciated.
	</p>
	<a
		href={LINKS.donate}
		class="mt-10 inline-block rounded-full bg-accent px-8 py-3 font-mono text-sm text-white transition-opacity hover:opacity-90"
	>
		Donate
	</a>
</section>
