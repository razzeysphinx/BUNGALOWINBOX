async function testEndpoints() {
  const routes = [
    { path: '/', expectedStatus: 200, matchText: 'Authentic Timber Frames' },
    { path: '/projects', expectedStatus: 200, matchText: 'Casco Bay Barn House' },
    { path: '/projects/casco-bay-barn-house', expectedStatus: 200, matchText: 'Chebeague Island, Maine' },
    { path: '/about', expectedStatus: 200, matchText: 'Montsweag Brook Corporation' },
    { path: '/process', expectedStatus: 200, matchText: 'Custom Architectural Design' },
    { path: '/pricing', expectedStatus: 200, matchText: 'Project Budget' },
    { path: '/faq', expectedStatus: 200, matchText: 'Frequently Asked Questions' },
    { path: '/client-stories', expectedStatus: 200, matchText: 'Verified Project Record' },
    { path: '/journal', expectedStatus: 200, matchText: 'The Unboxing Journal' },
    { path: '/journal/thinking-ahead-pre-staining-timbers', expectedStatus: 200, matchText: 'Vicki Hennin' },
    { path: '/start-a-project', expectedStatus: 200, matchText: 'Start Your' },
    { path: '/sitemap.xml', expectedStatus: 200, matchText: '<loc>' },
    { path: '/robots.txt', expectedStatus: 200, matchText: 'User-agent' },
    { path: '/portfolio.html', expectedStatus: 308, redirectLocation: '/projects' },
    { path: '/cascobay.html', expectedStatus: 308, redirectLocation: '/projects/casco-bay-barn-house' },
  ];

  console.log('--- RUNNING AUTOMATED ROUTE AND REDIRECT VERIFICATION ---');
  let passCount = 0;

  for (const r of routes) {
    try {
      const res = await fetch(`http://localhost:3000${r.path}`, { redirect: 'manual' });
      const statusMatch = res.status === r.expectedStatus;
      
      let contentMatch = true;
      if (r.matchText) {
        const text = await res.text();
        contentMatch = text.toLowerCase().includes(r.matchText.toLowerCase());
      }

      let redirectMatch = true;
      if (r.redirectLocation) {
        const loc = res.headers.get('location');
        redirectMatch = loc === r.redirectLocation;
      }

      if (statusMatch && contentMatch && redirectMatch) {
        console.log(`✓ [PASS] ${r.path} -> ${res.status}`);
        passCount++;
      } else {
        console.error(`✗ [FAIL] ${r.path} -> Status: ${res.status} (expected ${r.expectedStatus}), ContentMatch: ${contentMatch}, RedirectMatch: ${redirectMatch}`);
      }
    } catch (err) {
      console.error(`✗ [ERR] ${r.path}:`, err.message);
    }
  }

  console.log(`\nVerification finished: ${passCount}/${routes.length} tests passed.`);
}

testEndpoints();
