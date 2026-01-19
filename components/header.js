// Shared header component for Beyond Hate
// Include this script in each page to render the consistent header

(function() {
  // Get current page path to set active nav link
  const path = window.location.pathname;

  const isActive = (href) => {
    if (href === '/' || href === '/index.html') {
      return path === '/' || path === '/index.html' || path === '';
    }
    return path.startsWith(href.replace('/index.html', '').replace('.html', ''));
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/framework/', label: 'Framework' },
    { href: '/applications/hate-response.html', label: 'Hate Response' },
    { href: '/applications/vaccine-hesitancy.html', label: 'Vaccine Hesitancy' },
    { href: '/about.html', label: 'About' }
  ];

  const navHTML = navLinks.map(link =>
    `<a href="${link.href}"${isActive(link.href) ? ' class="active"' : ''}>${link.label}</a>`
  ).join('\n        ');

  const headerHTML = `
  <header>
    <div class="container">
      <a href="/" class="site-name">Beyond Hate</a>
      <nav>
        ${navHTML}
      </nav>
    </div>
  </header>
  <div class="accent-stripe"></div>
`;

  // Insert at the beginning of body
  document.body.insertAdjacentHTML('afterbegin', headerHTML);
})();
