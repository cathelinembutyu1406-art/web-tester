:root {
  --bg: #0b0c10;
  --panel: #15171e;
  --text: #f6f7fb;
  --muted: #999eac;
  --accent: #c3ff69;
  --border: #292c35;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 85px;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: system-ui, -apple-system, sans-serif;
}

button, input {
  font: inherit;
}

button {
  cursor: pointer;
}

button:focus-visible, input:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 5%;
  background: rgba(11, 12, 16, .95);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
}

.logo {
  font-size: 25px;
  font-weight: 950;
  letter-spacing: -1.5px;
  color: white;
  text-decoration: none;
}

.logo span {
  color: var(--accent);
}

.header-actions {
  display: flex;
  gap: 10px;
}

.icon-btn {
  width: 42px;
  height: 42px;
  border: 1px solid var(--border);
  border-radius: 50%;
  background: var(--panel);
  color: white;
  font-size: 20px;
}

.avatar {
  color: #111;
  background: var(--accent);
  font-weight: 900;
}

.search-wrap {
  display: none;
  padding: 15px 5%;
  background: #111219;
}

.search-wrap.open {
  display: block;
}

.search-wrap input {
  width: 100%;
  padding: 13px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--panel);
  color: white;
}

.container {
  width: min(1400px, 100%);
  margin: auto;
  padding: 0 5% 110px;
}

.hero {
  position: relative;
  display: flex;
  align-items: flex-end;
  min-height: 480px;
  margin: 22px 0 35px;
  overflow: hidden;
  border-radius: 20px;
  background:
    linear-gradient(90deg, #090b10 0%, rgba(9,11,16,.8) 40%, transparent 100%),
    linear-gradient(0deg, #090b10, transparent 75%),
    url("https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1400")
    center/cover;
}

.hero-content {
  max-width: 610px;
  padding: clamp(24px, 5vw, 58px);
}

.eyebrow {
  color: var(--accent);
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 2px;
}

.hero h1 {
  margin: 14px 0;
  font-size: clamp(36px, 6vw, 64px);
  line-height: 1.04;
  letter-spacing: -2px;
}

.hero-meta {
  color: #c4c7d1;
  font-size: 13px;
}

.hero-content p {
  max-width: 440px;
  color: #d0d2da;
  font-size: 14px;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.btn {
  padding: 12px 18px;
  border: 0;
  border-radius: 9px;
  font-weight: 800;
}

.primary {
  background: var(--accent);
  color: #11140c;
}

.secondary {
  background: #30323a;
  color: white;
  border: 1px solid #454853;
}

.section {
  margin: 34px 0;
}

.section-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 17px;
}

.section-heading h2 {
  margin: 0;
  font-size: 21px;
}

.muted {
  color: var(--muted);
  font-size: 12px;
}

.filters, .categories {
  display: flex;
  gap: 9px;
  overflow-x: auto;
  padding: 4px 1px 12px;
  scrollbar-width: none;
}

.filters::-webkit-scrollbar,
.categories::-webkit-scrollbar {
  display: none;
}

.filter, .category {
  flex: 0 0 auto;
  padding: 9px 15px;
  border: 1px solid var(--border);
  border-radius: 30px;
  background: var(--panel);
  color: #c2c5cf;
  font-size: 12px;
}

.filter.active, .category.active {
  background: var(--accent);
  border-color: var(--accent);
  color: #10120b;
  font-weight: 800;
}

.movie-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 23px 15px;
}

.movie-card {
  min-width: 0;
  cursor: pointer;
}

.poster {
  position: relative;
  aspect-ratio: 2 / 3;
  overflow: hidden;
  border-radius: 11px;
  background: #20232d;
}

.poster img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .3s;
}

.movie-card:hover .poster img {
  transform: scale(1.045);
}

.rating {
  position: absolute;
  top: 8px;
  left: 8px;
  padding: 5px 7px;
  border-radius: 5px;
  background: rgba(0,0,0,.8);
  font-size: 10px;
  font-weight: 800;
}

.save-btn {
  position: absolute;
  top: 7px;
  right: 7px;
  width: 33px;
  height: 33px;
  border: 0;
  border-radius: 50%;
  background: rgba(0,0,0,.8);
  color: white;
  font-size: 18px;
}

.save-btn.saved {
  color: var(--accent);
}

.movie-card h3 {
  margin: 10px 0 5px;
  font-size: 13px;
  line-height: 1.4;
}

.empty {
  grid-column: 1 / -1;
  padding: 35px 10px;
  color: var(--muted);
  text-align: center;
}

.empty strong {
  display: block;
  margin-bottom: 8px;
  color: white;
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 30;
  display: flex;
  justify-content: space-around;
  padding: 10px 5px max(12px, env(safe-area-inset-bottom));
  border-top: 1px solid var(--border);
  background: rgba(15,16,22,.97);
  backdrop-filter: blur(16px);
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  min-width: 55px;
  border: 0;
  background: transparent;
  color: #898e9c;
  font-size: 10px;
}

.nav-item span {
  font-size: 21px;
}

.nav-item.active {
  color: var(--accent);
}

.modal {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: none;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  padding: 16px;
  background: rgba(0,0,0,.86);
}

.modal.open {
  display: flex;
}

.dialog {
  position: relative;
  width: min(850px, 100%);
  max-height: 92dvh;
  overflow-y: auto;
  padding: 25px;
  border: 1px solid #333641;
  border-radius: 17px;
  background: var(--panel);
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 5;
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 50%;
  background: #252730;
  color: white;
  font-size: 23px;
}

.details-dialog {
  display: grid;
  grid-template-columns: 210px 1fr;
  align-items: center;
  gap: 24px;
}

.detail-poster {
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  border-radius: 10px;
}

.detail-content h2 {
  font-size: 32px;
  line-height: 1.15;
}

.detail-content p {
  color: #c4c6cf;
  font-size: 14px;
  line-height: 1.8;
}

.player-dialog video {
  display: block;
  width: 100%;
  max-height: 65dvh;
  margin: 20px 0;
  border-radius: 10px;
  background: black;
}

.profile-dialog {
  width: min(450px, 100%);
}

footer {
  margin-top: 45px;
  padding: 25px 0;
  border-top: 1px solid var(--border);
  color: var(--muted);
  font-size: 12px;
  line-height: 1.7;
}

@media (max-width: 900px) {
  .movie-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .topbar {
    padding: 12px 4%;
  }

  .container {
    padding: 0 4% 100px;
  }

  .hero {
    min-height: 440px;
    margin-top: 15px;
    border-radius: 14px;
    background:
      linear-gradient(0deg, #090b10 0%, rgba(9,11,16,.35) 100%),
      url("https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=900")
      center/cover;
  }

  .hero-content {
    padding: 22px 18px;
  }

  .hero h1 {
    font-size: 42px;
  }

  .movie-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px 12px;
  }

  .details-dialog {
    grid-template-columns: 95px minmax(0, 1fr);
    gap: 15px;
    padding: 18px;
  }

  .detail-content h2 {
    font-size: 24px;
  }

  .detail-content p {
    font-size: 12px;
  }

  .detail-content .hero-actions {
    gap: 6px;
  }

  .detail-content .btn {
    padding: 10px;
    font-size: 11px;
  }

  .dialog {
    padding: 18px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    transition: none !important;
  }
}
