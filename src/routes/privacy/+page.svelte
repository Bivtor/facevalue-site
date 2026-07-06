<svelte:head>
	<title>Privacy | Face Value</title>
	<meta
		name="description"
		content="Face Value's privacy policy. No accounts, no user identifiers, no analytics. Only public video metadata leaves your browser."
	/>
</svelte:head>

<!-- Canonical source: PRIVACY.md in the extension repository. Keep the two in sync;
     the store listings link here. -->
<article
	class="prose prose-invert prose-headings:font-serif prose-headings:font-medium prose-headings:tracking-tight prose-a:text-accent prose-code:font-mono prose-th:font-mono prose-th:text-xs prose-th:uppercase prose-th:tracking-wider mx-auto max-w-3xl py-16"
>
	<p class="font-mono text-xs tracking-widest text-accent uppercase not-prose">privacy policy</p>
	<h1>Privacy policy</h1>
	<p class="lead">
		<strong>Effective date:</strong> July 5, 2026. Face Value rewrites YouTube titles and
		replaces thumbnails with real frames. This page lists what the extension sends, what is
		stored, and for how long.
	</p>

	<h2>The short version</h2>
	<ul>
		<li>
			There are no accounts, sign-ins, or user identifiers. Requests cannot be linked to you,
			to each other, or to your YouTube account.
		</li>
		<li>
			The extension sends the video IDs, titles, and channel names of videos that appear on
			YouTube pages you view. Nothing else leaves your browser.
		</li>
		<li>Your settings are stored locally in your browser and are never transmitted.</li>
		<li>There is no analytics, advertising, or tracking code in the extension or on this site.</li>
		<li>No data is sold or shared for marketing.</li>
	</ul>

	<h2>What the extension sends, exactly</h2>
	<p>
		When a YouTube page shows video cards, the extension sends one batched request to our API
		containing, for each video on the page:
	</p>
	<table>
		<thead>
			<tr><th>Field</th><th>Example</th><th>Purpose</th></tr>
		</thead>
		<tbody>
			<tr>
				<td>Video ID</td>
				<td><code>dQw4w9WgXcQ</code></td>
				<td>Look up or generate the rewritten title and thumbnail</td>
			</tr>
			<tr>
				<td>Video title</td>
				<td><code>You WON'T BELIEVE…</code></td>
				<td>
					Fallback input for the rewrite; titles are independently verified against
					YouTube&rsquo;s public oEmbed API
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
		That is the entire payload. No YouTube account information, cookies, watch history, search
		queries, page URLs, or identifiers of any kind are sent. The extension also loads
		replacement thumbnail images from our CDN, which is an ordinary image request.
	</p>
	<p>
		Like every request on the internet, these requests arrive with your IP address. See
		&ldquo;Server logs&rdquo; below for how long that exists.
	</p>

	<h2>What we store</h2>
	<p>
		<strong>On our servers:</strong> public video metadata only. Video IDs, original titles,
		channel names, rewritten titles, and extracted thumbnail frames. This cache is shared by
		all users and keyed by video, not by person. It contains no user data and is retained
		indefinitely, since it is a cache of public information about public videos.
	</p>
	<p>
		<strong>Server logs:</strong> the API keeps standard access logs (IP address, request time,
		request path, response code) for 30 days, for abuse prevention and debugging. They are
		deleted automatically after that. They are not used to build profiles and are not linked
		to the cached video data.
	</p>
	<p><strong>In your browser only</strong> (via extension storage, never transmitted):</p>
	<ul>
		<li>Your toggle settings (titles on/off, thumbnails on/off, hide Shorts).</li>
		<li>Your channel exceptions list.</li>
		<li>A local tally of titles cleaned, kept as an offline fallback for the popup&rsquo;s counter.</li>
	</ul>
	<p>Uninstalling the extension deletes all of it.</p>
	<p>
		The counter shown in the popup is the global total of titles cleaned across all users.
		The popup fetches that single aggregate number from our API when opened; the request
		carries no data about you.
	</p>

	<h2>Third-party services</h2>
	<p>
		Our servers (not your browser) talk to a few services to build the shared cache. What they
		receive is public video metadata only:
	</p>
	<ul>
		<li>
			<strong>YouTube</strong> (oEmbed and video streams), to verify titles and extract
			thumbnail frames.
		</li>
		<li><strong>A transcript service</strong>, to fetch the video&rsquo;s public captions.</li>
		<li>
			<strong>Anthropic (Claude)</strong>, which receives the video title, channel name, and
			transcript excerpt to generate the rewritten title.
		</li>
		<li><strong>Amazon Web Services</strong>, which hosts the API, cache, and CDN.</li>
	</ul>
	<p>
		Your browser talks to exactly two places: youtube.com, which you were already on, and our
		API/CDN. The extension&rsquo;s fonts and assets are bundled, so it makes no requests to
		Google Fonts or any other third party. This website is built the same way: fonts
		self-hosted, no analytics, no third-party requests.
	</p>

	<h2>What we can and cannot see</h2>
	<p>
		Because requests carry no identifier, we cannot tell which requests came from the same
		person, reconstruct anyone&rsquo;s viewing history, or connect any request to a YouTube
		account. An IP address in a 30-day access log is the only thing that could group requests,
		and we do not use it that way.
	</p>
	<p>
		We can see, in aggregate and anonymously, which videos are being looked up. That is the
		cache working as intended.
	</p>

	<h2>Permissions the extension requests</h2>
	<ul>
		<li>
			<strong>Access to youtube.com pages</strong>, required to read video cards and swap
			titles and thumbnails in place.
		</li>
		<li><strong>Access to our API endpoint</strong>, required to fetch rewrites and frames.</li>
		<li><strong>Storage</strong>, required to save your settings locally.</li>
	</ul>
	<p>Nothing else. No tabs, no history, no cookies, no &ldquo;read data on all websites.&rdquo;</p>

	<h2>Children</h2>
	<p>
		Face Value does not knowingly collect personal information from anyone, including children.
		It has no accounts and no data collection beyond what is described above.
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
