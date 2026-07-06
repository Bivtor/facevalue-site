<svelte:head>
	<title>Privacy — Face Value</title>
	<meta
		name="description"
		content="Face Value's privacy policy: no accounts, no user IDs, no analytics. Only public video metadata ever leaves your browser."
	/>
</svelte:head>

<!-- Canonical source: PRIVACY.md in the extension repository. Keep the two in sync —
     the store listings link here. -->
<article
	class="prose prose-invert prose-headings:font-serif prose-headings:font-medium prose-headings:tracking-tight prose-a:text-accent prose-code:font-mono prose-th:font-mono prose-th:text-xs prose-th:uppercase prose-th:tracking-wider mx-auto max-w-3xl py-16"
>
	<p class="font-mono text-xs tracking-widest text-accent uppercase not-prose">privacy policy</p>
	<h1>Built to know as little about you as possible.</h1>
	<p class="lead">
		<strong>Effective date:</strong> July 5, 2026. Face Value rewrites clickbait YouTube titles
		and replaces clickbait thumbnails with real frames. This page describes everything it sends,
		stores, and — more importantly — everything it deliberately doesn&rsquo;t.
	</p>

	<h2>The short version</h2>
	<ul>
		<li>
			<strong>No account, no sign-in, no user ID.</strong> There is nothing in any request that
			identifies you, links your requests together, or links them to your YouTube account.
		</li>
		<li>
			<strong>The only thing sent off your device is public video metadata</strong>: the video
			IDs, titles, and channel names of videos that appear on YouTube pages you view.
		</li>
		<li><strong>Your settings never leave your browser.</strong></li>
		<li>
			<strong>No analytics, no trackers, no ads, no fingerprinting, and nothing is ever sold or
			shared for marketing.</strong> Not as a promise of restraint — the data to sell
			doesn&rsquo;t exist.
		</li>
	</ul>

	<h2>What the extension sends, exactly</h2>
	<p>
		When a YouTube page shows video cards, the extension sends <strong>one batched request</strong>
		to our API containing, for each video on the page:
	</p>
	<table>
		<thead>
			<tr><th>Field</th><th>Example</th><th>Why</th></tr>
		</thead>
		<tbody>
			<tr>
				<td>Video ID</td>
				<td><code>dQw4w9WgXcQ</code></td>
				<td>Look up / generate the rewritten title and thumbnail</td>
			</tr>
			<tr>
				<td>Video title</td>
				<td><code>You WON'T BELIEVE…</code></td>
				<td>
					Fallback input for the rewrite (we independently verify titles against YouTube&rsquo;s
					public oEmbed API)
				</td>
			</tr>
			<tr>
				<td>Channel name</td>
				<td><code>Some Channel</code></td>
				<td>Context for the rewrite</td>
			</tr>
		</tbody>
	</table>
	<p>
		That&rsquo;s the entire payload. No YouTube account information, no cookies, no watch history,
		no search queries, no page URLs, and no identifiers of any kind are sent. The extension also
		loads replacement thumbnail images from our CDN, which is an ordinary image request.
	</p>
	<p>
		Like every request on the internet, these requests arrive with your <strong>IP address</strong>.
		See &ldquo;Server logs&rdquo; below for how long that exists.
	</p>

	<h2>What we store</h2>
	<p>
		<strong>On our servers:</strong> only public video metadata — video IDs, original titles,
		channel names, rewritten titles, and extracted thumbnail frames. This cache is shared by all
		users and keyed by video, not by person. It contains no user data and is retained indefinitely
		(it&rsquo;s a cache of public information about public videos).
	</p>
	<p>
		<strong>Server logs:</strong> our API keeps standard access logs (IP address, request time,
		request path, response code) for <strong>30 days</strong>, solely for abuse prevention and
		debugging, after which they are automatically deleted. We do not use them to build profiles,
		and they are not linked to the cached video data.
	</p>
	<p><strong>In your browser only</strong> (via extension storage, never transmitted):</p>
	<ul>
		<li>Your toggle settings (titles on/off, thumbnails on/off, hide Shorts).</li>
		<li>Your channel exceptions list.</li>
		<li>A local counter of titles cleaned (a number on your machine, nothing more).</li>
	</ul>
	<p>Uninstalling the extension deletes all of it.</p>

	<h2>Third-party services</h2>
	<p>
		Our <strong>servers</strong> (not your browser) talk to a few services to build the shared
		cache. What they receive is public video metadata only — never anything about you:
	</p>
	<ul>
		<li>
			<strong>YouTube</strong> (oEmbed + video streams) — to verify titles and extract thumbnail
			frames.
		</li>
		<li><strong>A transcript service</strong> — to fetch the video&rsquo;s public captions.</li>
		<li>
			<strong>Anthropic (Claude)</strong> — receives the video title, channel name, and transcript
			excerpt to generate the rewritten title.
		</li>
		<li><strong>Amazon Web Services</strong> — hosts the API, cache, and CDN.</li>
	</ul>
	<p>
		Your browser talks to exactly two places: <strong>youtube.com</strong> (which you were already
		on) and <strong>our API/CDN</strong>. The extension&rsquo;s fonts and assets are bundled — it
		makes no requests to Google Fonts or any other third party. This website is the same: fonts
		self-hosted, no analytics, no third-party requests.
	</p>

	<h2>What we can and cannot see</h2>
	<p>
		Because requests carry no identifier, we <strong>cannot</strong>: tell which requests came from
		the same person, reconstruct anyone&rsquo;s viewing history, or connect any request to a
		YouTube account. In principle, an IP address in a 30-day access log is the only thing that
		could group requests, and we don&rsquo;t do that.
	</p>
	<p>
		We <strong>can</strong> see, in aggregate and anonymously: which videos are being looked up
		(that&rsquo;s the cache working as intended).
	</p>

	<h2>Permissions the extension requests</h2>
	<ul>
		<li>
			<strong>Access to youtube.com pages</strong> — required to read video cards and swap
			titles/thumbnails in place.
		</li>
		<li><strong>Access to our API endpoint</strong> — required to fetch rewrites and frames.</li>
		<li><strong>Storage</strong> — required to save your settings locally.</li>
	</ul>
	<p>Nothing else. No tabs, no history, no cookies, no &ldquo;read data on all websites.&rdquo;</p>

	<h2>Children</h2>
	<p>
		Face Value does not knowingly collect personal information from anyone, including children. It
		has no accounts and no data collection beyond what is described above.
	</p>

	<h2>Changes to this policy</h2>
	<p>
		If the extension&rsquo;s data behavior ever changes, this document will be updated and the
		change will be called out in the release notes before it ships.
	</p>

	<h2>Contact</h2>
	<p>
		Questions or concerns: open an issue on the project&rsquo;s repository, or email
		<a href="mailto:contact@carpinteriacws.com">contact@carpinteriacws.com</a>.
	</p>
</article>
