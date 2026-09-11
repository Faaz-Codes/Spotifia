// ── Replace any content for the profile and future puzzle here. ──────────────
const siteData = {
  profileName: 'akshaya',
  profileImage: '',
  profileStats: { playlists: 10, followers: 19, following: 78, followsYou: true },
  albums: [
    { name: 'Album 01', image: '', subtitle: 'Album • Akshaya', tone: 'violet' },
    { name: 'Album 02', image: '', subtitle: 'Album • Akshaya', tone: 'blue' },
    { name: 'Album 03', image: '', subtitle: 'Album • Akshaya', tone: 'orange' },
    { name: 'Album 04', image: '', subtitle: 'Album • Akshaya', tone: 'rose' },
  ],
  artists: [
    { name: 'Artist 01', image: '', tone: 'violet' },
    { name: 'Artist 02', image: '', tone: 'cyan' },
    { name: 'Artist 03', image: '', tone: 'amber' },
    { name: 'Artist 04', image: '', tone: 'pink' },
  ],
  puzzleProgress: { tracksDiscovered: 3, totalTracks: 10, albumsDiscovered: 1, totalAlbums: 4 },
  player: { song: 'honeybee', artist: 'Olivia Rodrigo', albumCover: '', duration: '3:43' }
};

const icon = (name, size = 18) => `<svg class="icon" width="${size}" height="${size}" aria-hidden="true"><use href="#i-${name}"/></svg>`;
const cover = (item, kind='cover') => item.image
  ? `<img src="${item.image}" alt="${item.name || item.song}" />`
  : `<div class="placeholder ${item.tone || 'violet'} ${kind}"><span>${icon(kind === 'artist' ? 'mic' : 'music', 22)}</span></div>`;
const app = document.querySelector('#app');

function libraryItem(title, subtitle, artwork, extra='') {
 return `<button class="library-item">${artwork}<span class="library-copy"><b>${title}</b><small>${subtitle}</small></span>${extra}</button>`;
}
function render() {
 const {profileStats:s, puzzleProgress:p, player} = siteData;
 app.innerHTML = `
 <svg class="sprite" xmlns="http://www.w3.org/2000/svg"><defs>
  <symbol id="i-more" viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="19" cy="12" r="1.7"/></symbol>
  <symbol id="i-back" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></symbol><symbol id="i-forward" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></symbol>
  <symbol id="i-home" viewBox="0 0 24 24"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/></symbol><symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/></symbol>
  <symbol id="i-bell" viewBox="0 0 24 24"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></symbol><symbol id="i-users" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-4 2-6 6-6s6 2 6 6M17 11a3 3 0 1 0-1.5-5.6M18 14c2.2.4 3 2.5 3 5"/></symbol>
  <symbol id="i-expand" viewBox="0 0 24 24"><path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5"/></symbol><symbol id="i-list" viewBox="0 0 24 24"><path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/></symbol>
  <symbol id="i-music" viewBox="0 0 24 24"><path d="M9 18V5l10-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/></symbol><symbol id="i-mic" viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8"/></symbol>
  <symbol id="i-play" viewBox="0 0 24 24"><path d="m8 5 11 7-11 7z"/></symbol><symbol id="i-pause" viewBox="0 0 24 24"><path d="M8 5v14M16 5v14"/></symbol><symbol id="i-prev" viewBox="0 0 24 24"><path d="M7 6v12M18 6l-8 6 8 6z"/></symbol><symbol id="i-next" viewBox="0 0 24 24"><path d="M17 6v12M6 6l8 6-8 6z"/></symbol>
  <symbol id="i-shuffle" viewBox="0 0 24 24"><path d="M3 6h3c5 0 10 12 15 12h1M18 15l3 3-3 3M3 18h3c2.1 0 4-2.1 6-4.6M15 8.6C17 6.7 19 6 21 6h1M18 3l3 3-3 3"/></symbol><symbol id="i-repeat" viewBox="0 0 24 24"><path d="M17 2l4 4-4 4M3 11V7a1 1 0 0 1 1-1h17M7 22l-4-4 4-4M21 13v4a1 1 0 0 1-1 1H3"/></symbol>
  <symbol id="i-heart" viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/></symbol><symbol id="i-queue" viewBox="0 0 24 24"><path d="M4 6h10M4 12h10M4 18h10M18 14v6M15 17h6"/></symbol><symbol id="i-device" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="12" rx="1"/><path d="M8 21h8M12 17v4"/></symbol><symbol id="i-volume" viewBox="0 0 24 24"><path d="M4 10v4h4l5 4V6l-5 4zM17 9a5 5 0 0 1 0 6M19.5 6.5a8.5 8.5 0 0 1 0 11"/></symbol><symbol id="i-full" viewBox="0 0 24 24"><path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5"/></symbol>
 </defs></svg>
 <div class="shell">
  <header class="topbar"><button class="dots">${icon('more')}</button><div class="navigation"><button>${icon('back')}</button><button>${icon('forward')}</button></div><button class="home">${icon('home',20)}</button><label class="search">${icon('search')}<input aria-label="Search" placeholder="What do you want to play?"/><span class="search-end">${icon('list')}</span></label><div class="top-actions"><button>${icon('bell')}</button><button>${icon('users')}</button><button class="avatar">A</button></div></header>
  <div class="workspace">
   <aside class="library panel"><div class="library-head"><strong>${icon('music',22)} Your Library</strong><div><button class="create">+ <span>Create</span></button><button>${icon('expand')}</button></div></div><div class="filters"><button>Playlists</button><button>Podcasts</button><button>Albums</button><button>Artists</button></div><div class="library-tools"><button>${icon('search')}</button><button>Recents ${icon('list',15)}</button></div><nav>
    ${libraryItem('Liked Songs', 'Playlist • Akshaya', '<div class="liked-art">'+icon('heart',17)+'</div>')}
    ${libraryItem('Your Episodes', 'Playlist • Saved & downloaded episodes', '<div class="episodes-art">'+icon('mic',17)+'</div>', '<span class="download">↓</span>')}
    <div class="library-divider"></div>
    ${siteData.albums.map(album => libraryItem(album.name, album.subtitle, `<div class="album-art">${cover(album)}</div>`)).join('')}
   </nav></aside>
   <main class="main panel"><section class="profile"><div class="profile-art">${siteData.profileImage ? `<img src="${siteData.profileImage}" alt="${siteData.profileName}"/>` : '<span>A</span>'}</div><div class="profile-info"><small>Profile</small><h1>${siteData.profileName}</h1><p><b>${s.playlists} Public Playlists</b><i>•</i> ${s.followers} Followers <i>•</i> ${s.following} Following ${s.followsYou ? '<i>•</i> Follows you' : ''}</p></div></section><div class="profile-actions"><button class="following">Following</button><button class="more-action">${icon('more',25)}</button></div><section class="artists-section"><div class="section-heading"><h2>Top artists this month</h2><button id="show-all">Show all</button></div><div class="artist-grid">${siteData.artists.map((artist,i)=>`<button class="artist-card" data-artist="${artist.name}"><div class="artist-art">${cover(artist,'artist')}</div><b>${artist.name}</b><small>Artist</small></button>`).join('')}</div></section></main>
   <aside class="puzzle panel"><div class="puzzle-header"><h2>Puzzle Progress</h2><button>${icon('more')}</button></div><div class="puzzle-cover"><div class="puzzle-mark">✦</div></div><div class="progress-block"><div><span>Tracks discovered</span><b>${p.tracksDiscovered}/${p.totalTracks}</b></div><progress value="${p.tracksDiscovered}" max="${p.totalTracks}"></progress></div><div class="progress-block"><div><span>Albums discovered</span><b>${p.albumsDiscovered}/${p.totalAlbums}</b></div><progress value="${p.albumsDiscovered}" max="${p.totalAlbums}"></progress></div><p class="puzzle-note">Keep exploring to uncover the next clue.</p></aside>
  </div>
  <footer class="player"><div class="now-playing"><div class="player-cover">${cover({image:player.albumCover, tone:'amber'},'cover')}</div><div><b>${player.song}</b><small>${player.artist}</small></div><button class="liked">${icon('heart')}</button></div><div class="player-center"><div class="transport"><button>${icon('shuffle')}</button><button>${icon('prev')}</button><button id="play-toggle" class="play">${icon('pause',19)}</button><button>${icon('next')}</button><button>${icon('repeat')}</button></div><div class="scrubber"><span id="current-time">1:24</span><input id="progress" type="range" value="84" max="223" aria-label="Song progress"/><span>${player.duration}</span></div></div><div class="player-right"><button>${icon('mic')}</button><button>${icon('queue')}</button><button>${icon('device')}</button><button>${icon('volume')}</button><input id="volume" type="range" value="70" aria-label="Volume"/><button>${icon('full')}</button></div></footer>
 </div>`;
 bindEvents();
}
function bindEvents() {
 let playing = true;
 document.querySelector('#play-toggle').onclick = e => { playing = !playing; e.currentTarget.innerHTML = icon(playing ? 'pause' : 'play', 19); };
 document.querySelector('#progress').oninput = e => { const n=+e.target.value, m=+e.target.max; document.querySelector('#current-time').textContent = `${Math.floor(n/60)}:${String(n%60).padStart(2,'0')}`; };
 document.querySelector('#show-all').onclick = () => document.querySelector('.artists-section').classList.toggle('showing-all');
 document.querySelectorAll('.artist-card, .library-item').forEach(btn => btn.onclick = () => btn.classList.toggle('selected'));
}
render();
