import {
  albumBlr,
  albumHeart,
  albumLoveName,
  albumMidnightSun,
  artistAksomaniac,
  artistAnirudh,
  artistOlivia,
  artistSai,
} from './image-data.js';


/* =========================================================
   SITE DATA
   ========================================================= */

const siteData = {
  profileName: 'akshaya',

  profileStats: {
    playlists: 10,
    followers: 19,
    following: 78,
  },

  albums: [
    {
      id: 'album-love-name',
      name: 'love',
      image: albumLoveName,
      subtitle: 'Album • Akshaya',
    },
    {
      id: 'album-midnight-sun',
      name: 'midnight sun',
      image: albumMidnightSun,
      subtitle: 'Album • Akshaya',
    },
    {
      id: 'album-blr',
      name: 'BLR',
      image: albumBlr,
      subtitle: 'Album • Akshaya',
    },
    {
      id: 'album-heart',
      name: '<3',
      image: albumHeart,
      subtitle: 'Album • Akshaya',
    },
  ],

  artists: [
    {
      name: 'Aksomaniac',
      image: artistAksomaniac,
      imageScale: 1.22,
      imagePosition: 'center 12%',
    },
    {
      name: 'Anirudh Ravichander',
      image: artistAnirudh,
      imageScale: 1.17,
      imagePosition: 'center top',
    },
    {
      name: 'Sai Abhyankkar',
      image: artistSai,
      imageScale: 1.18,
      imagePosition: 'center top',
    },
    {
      name: 'Olivia Rodrigo',
      image: artistOlivia,
      imageScale: 1.16,
      imagePosition: 'center top',
    },
  ],

  puzzleProgress: {
  totalAlbums: 5,
  },

  player: {
    song: 'honeybee',
    artist: 'Olivia Rodrigo',
    albumCover: './assets/honeybee.png',
    duration: '3:43',
  },
};


/* =========================================================
   LOVE [NAME] SONGS
   =========================================================
   
   CHANGE THESE VALUES LATER.
   
   You only need to edit this array.
   The playlist UI will update automatically.
   ========================================================= */

const loveAlbumSongs = [
  {
    title: 'Just the Two of Us (feat. Bill Withers)',
    artist: 'Grover Washington, Jr., Bill Withers',
    album: 'Lean on Me: The Bill Withers Songbook',
    dateAdded: 'Aug 31, 2023',
    duration: '3:06',
    image: './assets/love-song-01.png'
  },

  {
    title: 'Kannazhaga - The Kiss of Love',
    artist: 'Anirudh Ravichander, Dhanush',
    album: '3 (Original Motion Picture Soundtrack)',
    dateAdded: 'Dec 15, 2023',
    duration: '2:03',
    image: './assets/love-song-02.png'
  },

  {
    title: 'Kadhalippoma (From "Oh My Kadavule")',
    artist: 'Leon James, Sid Sriram, Ko Se...',
    album: 'Kadhalippoma (From "Oh My Kadavule")',
    dateAdded: 'Aug 31, 2023',
    duration: '2:09',
    image: './assets/love-song-03.png'
  },

  {
    title: 'do you think you could love me?',
    artist: 'yung kai',
    album: 'do you think you could love me?',
    dateAdded: 'Nov 18, 2025',
    duration: '3:01',
    image: './assets/love-song-04.png'
  },

  {
    title: 'neeyum naanum',
    artist: 'Keethan, Kavin Lavari, Vignesh...',
    album: 'neeyum naanum',
    dateAdded: 'Aug 13, 2026',
    duration: '2:05',
    image: './assets/love-song-05.png'
  },

  {
    title: 'Love Story (Taylor’s Version)',
    artist: 'Taylor Swift',
    album: "Fearless (Taylor's Version)",
    dateAdded: 'Aug 31, 2023',
    duration: '2:12',
    image: './assets/love-song-06.png'
  }
];

/* =========================================================
   LOVE PLAYLIST PASSCODE
   ========================================================= */

const lovePasscode = {
  answer: 'KADHAL',

  wrongResponses: [
    "I thought you were smart",
    "Come on ,you can do better",
    "I thought you were a 9 pointer?!",
    "sighh what dis breh"
  ],

  correctResponse: 'Mhm right answer my love'
};

/* =========================================================
   MIDNIGHT SUN PUZZLE
   ========================================================= */

const midnightSunPuzzle = {
  scrambledWords: [
    'UASRERASNEA',
    'SIPENHAPS',
    'YETARFAIL',
    'TBEAERHAT',
    'YIMTANIC',
    'NACOEMR'
  ],

  answers: [
    'REASSURANCE',
    'HAPPINESS',
    'FAIRYTALE',
    'HEARTBEAT',
    'INTIMACY',
    'ROMANCE'
  ],

  finalQuestion:
    'What matters most is where it begins.',

  finalAnswer: 'RHFHIR',

  successResponse:
    'Mhm right answer my love'
};

let midnightSunWordsSolved = false;
let midnightSunFinalSolved = false;

let midnightSunWordsWrongAttempts = 0;
let midnightSunFinalWrongAttempts = 0;

let midnightSunWordValues = Array(6).fill('');
let midnightSunWordsResponse = '';
let midnightSunWordsResponseType = '';

let midnightSunFinalValue = '';
let midnightSunFinalResponse = '';
let midnightSunFinalResponseType = '';

/* =========================================================
   MIDNIGHT SUN PUZZLE 3 + CODEWORD
   ========================================================= */

const midnightSunShadowPuzzle = {
  question: 'Find the shadow of every letter.',
  answer: 'ISUSRI',

  correctResponse:
    'Damnnn, smarty pants',

  wrongResponses: [
    'Try Karact 90 degrees',
    'Hmmm what dis breh',
    'ahaha u better crack this to crack me'
  ]
};


const midnightSunCodeword = {
  answer: 'Sirius',

  correctResponse:
    'Yep you got that right, the brightest star in the night sky',

  wrongResponses: [
    'Think about it carefully',
    'What is the album name hmmm??',
    'GOOD JOBBBB ur wrong-'
  ]
};


let midnightSunShadowSolved = false;
let midnightSunCodewordSolved = false;

let midnightSunShadowWrongAttempts = 0;
let midnightSunCodewordWrongAttempts = 0;

let midnightSunShadowValue = '';
let midnightSunShadowResponse = '';
let midnightSunShadowResponseType = '';
let midnightSunCodewordValue = '';
let midnightSunCodewordResponse = '';
let midnightSunCodewordResponseType = '';

/* =========================================================
   BLR ALBUM PUZZLES
   ========================================================= */

const blrMathPuzzle = {
  answer: '80085',

  correctResponse:
    'Mhmm i love them...hehe',

  letterResponse:
    'Bro how the fuck did you get letters as the answer?!',

  wrongResponses: [
    'brehh how do you not know math',
    'it actually aint that hard bro',
    'no way bro fumbled this',
    'bro lemme squeeze your mmmm'
  ]
};


const blrKeyPuzzle = {
  answer: '4',

  correctResponse:
    'Lowk surprised you got it',

  wrongResponses: [
    'Sighh-',
    'I think we will be here for a while',
    'Alexa play "this is the end"'
  ]
};


/* =========================================================
   BLR CIPHER PUZZLE
   ========================================================= */

const blrCipherPuzzle = {
  clue: 'M HSRI CSQ FWFU M TNSIMOI',

  // Change this one value if the intended plaintext changes.
  answer: 'I LOVE YOU BABY I PROMISE',

  correctResponse:
    'Mhmm i love you too <3',

  wrongResponses: [
    'Lowk not that hard, easy to crack',
    "you get it wrong once more , you're getting fucked hard...",
    'broo oh ma gawd WRONG'
  ]
};


let blrMathSolved = false;
let blrMathWrongAttempts = 0;
let blrMathValue = '';
let blrMathResponse = '';
let blrMathResponseType = '';


let blrKeySolved = false;
let blrKeyWrongAttempts = 0;
let blrKeyValue = '';
let blrKeyResponse = '';
let blrKeyResponseType = '';

/* =========================================================
   <3 ALBUM PUZZLE
   ========================================================= */

const heartPuzzle = {
  answer: 'PLAY',

  binaryWords: [
    '00011100',
    '11101110',
    '01110110',
    '11001110'
  ],

  instruction:
    'Eight small parts can become many different symbols.',

  correctResponse:
    'Good girl..',

  wrongResponses: [
    'Thinkkk',
    'FLASHBANGGGGGG',
    'sighh imma wait till you get it right'
  ]
};

let heartPuzzleSolved = false;
let heartPuzzleWrongAttempts = 0;
let heartPuzzleValue = '';
let heartPuzzleResponse = '';
let heartPuzzleResponseType = '';

/* =========================================================
   <3 FINAL QUESTION
   ========================================================= */

let heartFinalQuestionActive = false;

let heartNoClickCount = 0;

let heartFinalResponse = '';
let heartFinalResponseType = '';

let blrCipherSolved = false;
let blrCipherWrongAttempts = 0;
let blrCipherValue = '';
let blrCipherResponse = '';
let blrCipherResponseType = '';

/* =========================================================
   PUZZLE STATE
   ========================================================= */

const STORAGE_KEY = 'spotifia-puzzle-state';

const defaultPuzzleState = {
  puzzle01Completed: false,
  unlockedAlbums: [],
  lockedLibraryItems: [],

  /*
   * Albums the user has actually opened.
   *
   * This is separate from unlockedAlbums because an album
   * can later become locked again after its puzzle stage ends.
   */
  visitedAlbums: [],

  /*
   * Albums that have ever been unlocked.
   *
   * This is cumulative and is used for the Albums discovered
   * progress counter.
   */
  discoveredAlbums: [],
};

let puzzleState = loadPuzzleState();


function loadPuzzleState() {
  try {
    const saved =
      localStorage.getItem(
        STORAGE_KEY
      );

    if (!saved) {
      return {
        ...defaultPuzzleState,
      };
    }

    const parsed =
      JSON.parse(saved);

    const unlockedAlbums =
      Array.isArray(
        parsed.unlockedAlbums
      )
        ? parsed.unlockedAlbums
        : [];

    const visitedAlbums =
      Array.isArray(
        parsed.visitedAlbums
      )
        ? parsed.visitedAlbums
        : [];

    /*
     * Older saved states did not have discoveredAlbums.
     *
     * Start the new cumulative list with anything we already
     * know about from the old state.
     */
    let discoveredAlbums =
      Array.isArray(
        parsed.discoveredAlbums
      )
        ? parsed.discoveredAlbums
        : [];

    discoveredAlbums = [
      ...new Set([
        ...discoveredAlbums,
        ...unlockedAlbums,
        ...visitedAlbums,
      ]),
    ];

    return {
      ...defaultPuzzleState,
      ...parsed,

      unlockedAlbums,

      lockedLibraryItems:
        Array.isArray(
          parsed.lockedLibraryItems
        )
          ? parsed.lockedLibraryItems
          : [],

      visitedAlbums,

      discoveredAlbums,
    };

  } catch (error) {

    console.warn(
      'Could not load Spotifia puzzle state:',
      error
    );

    return {
      ...defaultPuzzleState,
    };
  }
}


function savePuzzleState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(
      puzzleState
    )
  );
}


/*
 * Unlock an album and permanently count it
 * as discovered.
 */
function unlockAlbum(albumId) {

  if (
    !puzzleState.unlockedAlbums.includes(
      albumId
    )
  ) {
    puzzleState.unlockedAlbums.push(
      albumId
    );
  }

  if (
    !puzzleState.discoveredAlbums.includes(
      albumId
    )
  ) {
    puzzleState.discoveredAlbums.push(
      albumId
    );
  }

  savePuzzleState();
}


/*
 * Mark an album as visited.
 *
 * This is intentionally separate from unlocking because
 * an album can be unlocked without necessarily being opened.
 */
function markAlbumVisited(albumId) {

  if (
    !puzzleState.visitedAlbums.includes(
      albumId
    )
  ) {
    puzzleState.visitedAlbums.push(
      albumId
    );

    savePuzzleState();
  }
}


/*
 * Check whether the album was previously visited.
 */
function isAlbumVisited(albumId) {
  return puzzleState.visitedAlbums.includes(
    albumId
  );
}


function lockLibraryItem(itemId) {

  if (
    !puzzleState.lockedLibraryItems.includes(
      itemId
    )
  ) {
    puzzleState.lockedLibraryItems.push(
      itemId
    );
  }

  savePuzzleState();
}


function isAlbumUnlocked(albumId) {
  return puzzleState.unlockedAlbums.includes(
    albumId
  );
}


function isLibraryItemLocked(itemId) {
  return puzzleState.lockedLibraryItems.includes(
    itemId
  );
}





/* =========================================================
   PUZZLE 01
   ========================================================= */

const puzzle01 = {
  correctAnswer: 'my voice note',

  wrongResponses: [
    'I thought you knew me better',
    'brehh thats wronggg',
    'oh ma gawd use ur breinnn',
  ],

  successResponse: 'Woah..damn you got it oof',

  unlocks: [
    'album-love-name',
  ],

  locks: [
    'liked-songs',
  ],
};


function completePuzzle01() {
  puzzleState.puzzle01Completed = true;

  puzzle01.unlocks.forEach((albumId) => {
    unlockAlbum(albumId);
  });

  puzzle01.locks.forEach((itemId) => {
    lockLibraryItem(itemId);
  });

  savePuzzleState();
}


/* =========================================================
   NAVIGATION
   ========================================================= */

let currentView = 'profile';
let currentAlbumId = null;
let historyInitialized = false;


function navigateTo(
  view,
  albumId = null,
  pushHistory = true
) {

  currentView =
    view;

  currentAlbumId =
    albumId;


  /*
   * Opening an unlocked album means the player has
   * actually visited it.
   *
   * This allows us to later distinguish:
   *
   * never visited + locked
   *
   * from:
   *
   * previously visited + now locked
   */
  if (
    view === 'album' &&
    albumId &&
    isAlbumUnlocked(albumId)
  ) {
    markAlbumVisited(
      albumId
    );
  }


  if (pushHistory) {

    window.history.pushState(
      {
        view,
        albumId,
      },
      '',
      window.location.href
    );

  }


  render();
}


/* =========================================================
   ICON SYSTEM
   ========================================================= */

const icon = (
  name,
  size = 18
) => `
  <svg
    class="icon"
    width="${size}"
    height="${size}"
    aria-hidden="true"
  >
    <use href="#i-${name}"></use>
  </svg>
`;


function renderSvgSprite() {

  return `
    <svg
      class="sprite"
      xmlns="http://www.w3.org/2000/svg"
    >

      <defs>

        <symbol id="i-more" viewBox="0 0 24 24">
          <circle cx="5" cy="12" r="1.7"/>
          <circle cx="12" cy="12" r="1.7"/>
          <circle cx="19" cy="12" r="1.7"/>
        </symbol>

        <symbol id="i-back" viewBox="0 0 24 24">
          <path d="m15 18-6-6 6-6"/>
        </symbol>

        <symbol id="i-forward" viewBox="0 0 24 24">
          <path d="m9 18 6-6-6-6"/>
        </symbol>

        <symbol id="i-home" viewBox="0 0 24 24">
          <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>
        </symbol>

        <symbol id="i-search" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="6.5"/>
          <path d="m16 16 4.5 4.5"/>
        </symbol>

        <symbol id="i-bell" viewBox="0 0 24 24">
          <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>
        </symbol>

        <symbol id="i-users" viewBox="0 0 24 24">
          <circle cx="9" cy="8" r="3"/>
          <path d="M3 20c0-4 2-6 6-6s6 2 6 6M17 11a3 3 0 1 0-1.5-5.6M18 14c2.2.4 3 2.5 3 5"/>
        </symbol>

        <symbol id="i-expand" viewBox="0 0 24 24">
          <path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5"/>
        </symbol>

        <symbol id="i-list" viewBox="0 0 24 24">
          <path d="M8 6h13M8 12h13M8 18h13"/>
          <circle cx="4" cy="6" r="1"/>
          <circle cx="4" cy="12" r="1"/>
          <circle cx="4" cy="18" r="1"/>
        </symbol>

        <symbol id="i-music" viewBox="0 0 24 24">
          <path d="M9 18V5l10-2v13"/>
          <circle cx="6" cy="18" r="3"/>
          <circle cx="16" cy="16" r="3"/>
        </symbol>

        <symbol id="i-mic" viewBox="0 0 24 24">
          <rect x="9" y="3" width="6" height="11" rx="3"/>
          <path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8"/>
        </symbol>

        <symbol id="i-play" viewBox="0 0 24 24">
          <path d="m8 5 11 7-11 7z"/>
        </symbol>

        <symbol id="i-pause" viewBox="0 0 24 24">
          <path d="M8 5v14M16 5v14"/>
        </symbol>

        <symbol id="i-prev" viewBox="0 0 24 24">
          <path d="M7 6v12M18 6l-8 6 8 6z"/>
        </symbol>

        <symbol id="i-next" viewBox="0 0 24 24">
          <path d="M17 6v12M6 6l8 6-8 6z"/>
        </symbol>

        <symbol id="i-shuffle" viewBox="0 0 24 24">
          <path d="M3 6h3c5 0 10 12 15 12h1M18 15l3 3-3 3M3 18h3c2.1 0 4-2.1 6-4.6M15 8.6C17 6.7 19 6 21 6h1M18 3l3 3-3 3"/>
        </symbol>

        <symbol id="i-repeat" viewBox="0 0 24 24">
          <path d="M17 2l4 4-4 4M3 11V7a1 1 0 0 1 1-1h17M7 22l-4-4 4-4M21 13v4a1 1 0 0 1-1 1H3"/>
        </symbol>

        <symbol id="i-heart" viewBox="0 0 24 24">
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/>
        </symbol>

        <symbol id="i-queue" viewBox="0 0 24 24">
          <path d="M4 6h10M4 12h10M4 18h10M18 14v6M15 17h6"/>
        </symbol>

        <symbol id="i-device" viewBox="0 0 24 24">
          <rect x="3" y="5" width="18" height="12" rx="1"/>
          <path d="M8 21h8M12 17v4"/>
        </symbol>

        <symbol id="i-volume" viewBox="0 0 24 24">
          <path d="M4 10v4h4l5 4V6l-5 4zM17 9a5 5 0 0 1 0 6M19.5 6.5a8.5 8.5 0 0 1 0 11"/>
        </symbol>

        <symbol id="i-full" viewBox="0 0 24 24">
          <path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5"/>
        </symbol>

        <symbol id="i-lock" viewBox="0 0 24 24">
          <rect x="5" y="10" width="14" height="11" rx="2"/>
          <path d="M8 10V7a4 4 0 0 1 8 0v3"/>
        </symbol>

        <symbol id="i-download" viewBox="0 0 24 24">
          <path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>
        </symbol>

        <symbol id="i-plus" viewBox="0 0 24 24">
          <path d="M12 5v14M5 12h14"/>
        </symbol>

      </defs>

    </svg>
  `;
}


/* =========================================================
   TOP BAR
   ========================================================= */

function renderTopbar() {

  return `
    <header class="topbar">

      <button class="dots">
        ${icon('more')}
      </button>

      <div class="navigation">

        <button id="nav-back">
          ${icon('back')}
        </button>

        <button id="nav-forward">
          ${icon('forward')}
        </button>

      </div>

      <button class="home">
        ${icon('home', 20)}
      </button>

      <label class="search">

        ${icon('search')}

        <input
          aria-label="Search"
          placeholder="What do you want to play?"
        />

        <span class="search-end">
          ${icon('list')}
        </span>

      </label>

      <div class="top-actions">

        <button>
          ${icon('bell')}
        </button>

        <button>
          ${icon('users')}
        </button>

        <button class="avatar">
          A
        </button>

      </div>

    </header>
  `;
}


/* =========================================================
   SIDEBAR
   ========================================================= */

function libraryItem(
  title,
  subtitle,
  artwork,
  itemId,
  locked
) {

  return `
    <button
      class="library-item ${locked ? 'library-item-locked' : ''}"
      data-library-item="${itemId}"
      ${locked ? 'aria-disabled="true"' : ''}
    >

      ${artwork}

      <span class="library-copy">
        <b>${title}</b>
        <small>${subtitle}</small>
      </span>

      ${
        locked
          ? `
            <span class="library-lock">
              ${icon('lock', 15)}
            </span>
          `
          : ''
      }

    </button>
  `;
}


function renderLibrary() {

  const likedSongsLocked =
    isLibraryItemLocked('liked-songs');


  const likedSongs = libraryItem(
    'Liked Songs',
    'Playlist • Akshaya',
    `<div class="liked-art">${icon('heart', 17)}</div>`,
    'liked-songs',
    likedSongsLocked
  );


  const albums =
    siteData.albums
      .map((album) => {

        const unlocked =
          isAlbumUnlocked(album.id);

        return libraryItem(
          album.name,
          album.subtitle,
          `
            <div class="album-art">
              ${
                album.image
                  ? `
                    <img
                      src="${album.image}"
                      alt="${album.name}"
                    />
                  `
                  : icon('music', 18)
              }
            </div>
          `,
          album.id,
          !unlocked
        );

      })
      .join('');


  return `
    ${likedSongs}
    ${albums}
  `;
}


function renderSidebar() {

  return `
    <aside class="library panel">

      <div class="library-head">

        <strong>
          ${icon('music', 22)}
          Your Library
        </strong>

        <div>

          <button class="create">
            + <span>Create</span>
          </button>

          <button>
            ${icon('expand')}
          </button>

        </div>

      </div>


      <div class="filters">
        <button>Playlists</button>
        <button>Podcasts</button>
        <button>Albums</button>
        <button>Artists</button>
      </div>


      <div class="library-tools">

        <button>
          ${icon('search')}
        </button>

        <button>
          Recents ${icon('list', 15)}
        </button>

      </div>


      <nav>
        ${renderLibrary()}
      </nav>

    </aside>
  `;
}


/* =========================================================
   PROFILE
   ========================================================= */

function renderProfile() {

  const s =
    siteData.profileStats;

  return `
    <main class="main panel">

      <section class="profile">

        <div class="profile-art">
          <span>A</span>
        </div>

        <div class="profile-info">

          <small>Profile</small>

          <h1>
            ${siteData.profileName}
          </h1>

          <p>
            <b>${s.playlists} Public Playlists</b>
            <i>•</i>
            ${s.followers} Followers
            <i>•</i>
            ${s.following} Following
          </p>

        </div>

      </section>


      <section class="artists-section">

        <div class="section-heading">

          <h2>
            Top artists this month
          </h2>

          <button id="show-all">
            Show all
          </button>

        </div>


        <div class="artist-grid">

          ${siteData.artists.map((artist) => `

            <button
              class="artist-card"
              data-artist="${artist.name}"
            >

              <div
                class="artist-art"
                style="
                  --artist-image-scale:${artist.imageScale};
                  --artist-image-position:${artist.imagePosition};
                "
              >

                <img
                  src="${artist.image}"
                  alt="${artist.name}"
                />

              </div>

              <b>${artist.name}</b>
              <small>Artist</small>

            </button>

          `).join('')}

        </div>

      </section>

    </main>
  `;
}


/* =========================================================
   LIKED SONGS
   ========================================================= */

/* =========================================================
   LIKED SONGS
   ========================================================= */

function renderLikedSongs() {
  const completed =
    puzzleState.puzzle01Completed;

  return `
    <main class="main panel">

      <section class="liked-page">

        <!-- =========================
             LIKED SONGS HEADER
        ========================== -->

        <div class="liked-header">

          <div class="liked-playlist-art">
            ${icon('heart', 52)}
          </div>

          <div class="liked-header-info">

            <small>
              Playlist
            </small>

            <h1>
              Liked Songs
            </h1>

            <p>
              <b>Playlist • Akshaya</b>
            </p>

          </div>

        </div>


        <div class="liked-divider"></div>


        <!-- =========================
             PUZZLE DISCOVERY CARD
        ========================== -->

        <section
          class="discovery-card ${completed ? 'is-complete' : ''}"
        >

          <div class="discovery-meta">

            <span class="discovery-dot"></span>

            <span>
              Liked Songs
            </span>

          </div>


          ${
            completed
              ? `
                <div class="liked-completed-state">

                  <div class="liked-completed-line">

                    ${icon('lock', 18)}

                    <span>
                      You've already been here.
                    </span>

                  </div>

                </div>
              `
              : `
                <p class="discovery-question">
                  500 rupee notes look bland ngl but insane value, 100 rupee notes look better but lesser in value compared to the 500 rupee note, which note would i choose?
                </p>


                <form
                  id="puzzle01-form"
                  class="answer-form"
                >

                  <input
                    id="puzzle01-answer"
                    type="text"
                    autocomplete="off"
                    spellcheck="false"
                    placeholder="Type your answer..."
                  />

                  <button type="submit">
                    Submit
                  </button>

                </form>


                <div
                  id="puzzle01-response"
                  class="puzzle-response"
                  aria-live="polite"
                ></div>
              `
          }

        </section>

      </section>

    </main>
  `;
}

/* =========================================================
   LOVE [NAME] PLAYLIST
   ========================================================= */

function renderLoveAlbum() {

  const album =
    siteData.albums.find(
      (item) =>
        item.id === 'album-love-name'
    );


  if (!album) {
    return renderProfile();
  }


  const songs =
    loveAlbumSongs
      .map((song, index) => {

        const artwork =
          song.image
            ? `
              <img
                src="${song.image}"
                alt=""
                class="love-song-image"
              />
            `
            : `
              <div class="love-song-placeholder">
                ${icon('music', 17)}
              </div>
            `;


        return `
          <div
            class="love-song-row"
            data-song-index="${index}"
          >

            <div class="love-song-number">
              <span class="song-number">
                ${index + 1}
              </span>

              <span class="song-hover-play">
                ${icon('play', 15)}
              </span>
            </div>


            <div class="love-song-main">

              ${artwork}

              <div class="love-song-title">

                <strong>
                  ${song.title}
                </strong>

                <span>
                  ${song.artist}
                </span>

              </div>

            </div>


            <div class="love-song-album">
              ${song.album}
            </div>


            <div class="love-song-date">
              ${song.dateAdded}
            </div>


            <div class="love-song-duration">
              ${song.duration}
            </div>

          </div>
        `;
      })
      .join('');


  return `
    <main class="main panel">

      <section class="love-album-page">


        <!-- =========================
             PLAYLIST HEADER
        ========================== -->

        <div class="love-album-header">

          <div class="love-album-art">

            ${
              album.image
                ? `
                  <img
                    src="${album.image}"
                    alt="love"
                  />
                `
                : icon('music', 48)
            }

          </div>


          <div class="love-album-info">

            <small>
              Public Playlist
            </small>

            <h1>
              love
            </h1>

            <p class="love-description">
              and suddenly, all the love songs
              were about you ❤️
            </p>


            <div class="love-meta">

              <div class="love-avatar">
                A
              </div>

              <strong>
                akshaya
              </strong>

              <span>•</span>

              <span>
                1 save
              </span>

              <span>•</span>

              <span>
                6 songs
              </span>

            </div>

          </div>

        </div>


        <!-- =========================
             CONTROLS
        ========================== -->

        <div class="love-controls">

          <button class="love-play-button">
            ${icon('play', 22)}
          </button>

          <button class="love-control">
            ${icon('shuffle', 25)}
          </button>

          <button class="love-control">
            ${icon('plus', 25)}
          </button>

          <button class="love-control">
            ${icon('download', 25)}
          </button>

          <button class="love-control">
            ${icon('more', 25)}
          </button>


          <div class="love-controls-spacer"></div>


          <button class="love-control">
            ${icon('search', 23)}
          </button>

          <button class="custom-order">
            Custom order
          </button>

          <button class="love-control">
            ${icon('list', 23)}
          </button>

        </div>


        <!-- =========================
             SONG TABLE HEADER
        ========================== -->

        <div class="love-song-header">

          <div class="love-header-number">
            #
          </div>

          <div class="love-header-title">
            Title
          </div>

          <div class="love-header-album">
            Album
          </div>

          <div class="love-header-date">
            Date added
          </div>

          <div class="love-header-duration">
            ${icon('repeat', 20)}
          </div>

        </div>


        <!-- =========================
             SIX SONGS
        ========================== -->

        <div class="love-song-list">

          ${songs}

        </div>


        <!-- =========================
             PASSCODE
        ========================== -->

        <div class="love-passcode">

          <label for="love-passcode-input">
            Enter Passcode:
          </label>

          <input
            id="love-passcode-input"
            type="text"
            autocomplete="off"
            placeholder="Type your answer..."
          />

          <div
            id="love-passcode-response"
            class="puzzle-response"
            aria-live="polite"
          ></div>

        </div>


      </section>

    </main>
  `;
}


/* =========================================================
   <3 ALBUM PAGE
   ========================================================= */

/* =========================================================
   <3 ALBUM PAGE
   ========================================================= */

/* =========================================================
   <3 ALBUM PAGE
   ========================================================= */

/* =========================================================
   <3 ALBUM PAGE
   ========================================================= */

/* =========================================================
   <3 ALBUM PAGE
   ========================================================= */

function renderHeartAlbum() {

  /*
   * The answer control remains the existing input
   * until PLAY has been solved.
   */
  const answerControl =
    heartPuzzleSolved
      ? `
        <button
          id="heart-play-button"
          class="heart-answer-button heart-answer-button-complete"
          type="button"
          aria-label="Play"
        >
          PLAY
        </button>
      `
      : `
        <input
          id="heart-answer-input"
          class="heart-answer-input"
          type="text"
          autocomplete="off"
          spellcheck="false"
          placeholder="Type your answer..."
          value="${heartPuzzleValue.replace(
            /"/g,
            '&quot;'
          )}"
          aria-label="Enter word"
        />
      `;


  const answerTargetId =
    heartPuzzleSolved
      ? 'heart-play-button'
      : 'heart-answer-input';


  const checkButton =
    heartPuzzleSolved
      ? ''
      : `
        <button
          id="heart-check-button"
          class="heart-check-button"
          type="button"
        >
          Check
        </button>
      `;


  /*
   * =====================================================
   * FINAL QUESTION
   * =====================================================
   */

  const finalQuestion =
    heartFinalQuestionActive
      ? `
        <section
          class="heart-final-question"
          aria-live="polite"
        >

          <div class="heart-final-question-content">

            <h2>
              Would you like me to be your boyfriend?
            </h2>


            <div class="heart-final-buttons">

              <button
                id="heart-final-yes"
                class="heart-final-button heart-final-yes"
                type="button"
              >
                Yes
              </button>


              <button
                id="heart-final-no"
                class="heart-final-button heart-final-no"
                type="button"
              >
                No
              </button>

            </div>


            <div
              id="heart-final-response"
              class="heart-final-response ${heartFinalResponseType}"
              aria-live="polite"
            >
              ${heartFinalResponse}
            </div>

          </div>

        </section>
      `
      : `
        <section class="heart-album-puzzle">

          <div class="heart-puzzle-content">

            <div
              class="heart-binary-grid"
              aria-label="Binary puzzle"
            >

              <div class="heart-binary-box">
                00011100
              </div>

              <div class="heart-binary-box">
                11101110
              </div>

              <div class="heart-binary-box">
                01110110
              </div>

              <div class="heart-binary-box">
                11001110
              </div>

            </div>


            <div class="heart-instruction">
              Eight small parts can become many different symbols.
            </div>


            <div class="heart-answer-row">

              <label
                for="${answerTargetId}"
                class="heart-answer-label"
              >
                Enter word:
              </label>

              ${answerControl}

            </div>


            ${checkButton}


            <div
              id="heart-puzzle-response"
              class="puzzle-response ${heartPuzzleResponseType}"
              aria-live="polite"
            >
              ${heartPuzzleResponse}
            </div>

          </div>

        </section>
      `;


  return `
    <main class="main panel">

      <section class="heart-album-page">

        <!-- =========================================
             <3 PLAYLIST HEADER
        ========================================== -->

        <header class="heart-album-hero">

          <div class="heart-album-cover">

            <img
              src="${albumHeart}"
              alt="<3 playlist cover"
            />

          </div>


          <div class="heart-album-meta">

            <div class="heart-album-type">
              Public Playlist
            </div>


            <h1>
              &lt;3
            </h1>


            <div class="heart-album-creator">

              <div
                class="heart-album-add"
                aria-hidden="true"
              >
                ${icon('plus', 20)}
              </div>

              <strong>
                Faaz
              </strong>

              <span class="heart-album-dot">
                •
              </span>

              <span>
                164 songs, 8 hr 32 min
              </span>

            </div>

          </div>

        </header>


        <!-- =========================================
             SPOTIFY ACTION BAR
        ========================================== -->

        <div class="heart-album-actions">

          <div class="heart-album-actions-left">

            <button
              class="heart-album-play"
              type="button"
              aria-label="Play playlist"
            >
              ${icon('play', 25)}
            </button>


            <button
              class="heart-album-control heart-album-art-button"
              type="button"
              aria-label="Playlist artwork"
            >

              <img
                src="${albumHeart}"
                alt=""
              />

            </button>


            <button
              class="heart-album-control"
              type="button"
              aria-label="Shuffle"
            >
              ${icon('shuffle', 30)}
            </button>


            <button
              class="heart-album-control"
              type="button"
              aria-label="Download"
            >
              ${icon('download', 31)}
            </button>


            <button
              class="heart-album-control"
              type="button"
              aria-label="Add person"
            >
              ${icon('users', 34)}
            </button>


            <button
              class="heart-album-control"
              type="button"
              aria-label="More"
            >
              ${icon('more', 30)}
            </button>

          </div>


          <div class="heart-album-actions-right">

            <button
              class="heart-album-control"
              type="button"
              aria-label="Search playlist"
            >
              ${icon('search', 27)}
            </button>


            <span class="heart-album-custom-order">
              Custom order
            </span>


            <button
              class="heart-album-control"
              type="button"
              aria-label="List"
            >
              ${icon('list', 28)}
            </button>

          </div>

        </div>


        <!-- =========================================
             MIDDLE CONTENT
        ========================================== -->

        ${finalQuestion}

      </section>

    </main>
  `;
}
/* =========================================================
   BLR ALBUM PAGE
   ========================================================= */

function renderBlrAlbum() {

  const mathPuzzle = `
    <section
      class="blr-puzzle-section"
      aria-live="polite"
    >

      <div class="blr-puzzle-question">
        Solve for A, B and C:
      </div>


      <div
        class="blr-equations"
        aria-label="Solve for A, B and C equations"
      >

        <div class="blr-equation">

          <span class="blr-fraction">
            <span>2A - 3</span>
            <span>5</span>
          </span>

          <span>+</span>

          <span class="blr-fraction">
            <span>A + 2</span>
            <span>3</span>
          </span>

          <span>= 7</span>

        </div>


        <div class="blr-equation">

          <span>
            3(B - 2) -
          </span>

          <span class="blr-fraction">
            <span>B + 4</span>
            <span>2</span>
          </span>

          <span>= 17</span>

        </div>


        <div class="blr-equation">

          <span class="blr-fraction">
            <span>
              C<sup>2</sup> - 9
            </span>
            <span>4</span>
          </span>

          <span>= 16</span>

        </div>

      </div>


      <div class="blr-calculation">
        Calculate:
        A<sup>(C-1)</sup> - B
      </div>


      <input
        id="blr-math-input"
        class="midnight-final-input${
          blrMathSolved
            ? ' midnight-input-locked'
            : ''
        }"
        type="text"
        inputmode="text"
        autocomplete="off"
        spellcheck="false"
        placeholder="Type your answer..."
        value="${blrMathValue}"
        ${
          blrMathSolved
            ? 'disabled'
            : ''
        }
      />


      ${
        blrMathSolved
          ? ''
          : `
            <button
              id="blr-math-check"
              class="midnight-check-button"
              type="button"
            >
              Check
            </button>
          `
      }


      <div
        id="blr-math-response"
        class="puzzle-response ${blrMathResponseType}"
        aria-live="polite"
      >${blrMathResponse}</div>

    </section>
  `;


  const keyPuzzle =
    blrMathSolved
      ? `
        <section
          class="blr-puzzle-section blr-key-section"
          aria-live="polite"
        >

          <div class="blr-key-intro">
            Just kidding that ain't the actual puzzle lol
          </div>


          <div class="blr-clues">

            <div>
              A - OLOFS
            </div>

            <div>
              B - YRIBZMR
            </div>

            <div class="blr-riddle-label">
              C -
            </div>

            <div class="blr-riddle">

              <div>
                I begin with something that can drown you.
              </div>

              <div>
                I end with something that can grow without being a tree.
              </div>

              <div>
                Remove the beginning and the end,
              </div>

              <div>
                and what remains is not my name.
              </div>

              <div>
                I am usually opened without a door,
              </div>

              <div>
                and what is inside is very different from what is outside.
              </div>

              <div>
                what am i?
              </div>

            </div>

          </div>


          <div class="blr-calculation">

            Key -->

            <span
              class="blr-fraction blr-inline-fraction"
            >

              <span>
                A * B
              </span>

              <span>
                C
              </span>

            </span>

          </div>


          <input
            id="blr-key-input"
            class="midnight-final-input${
              blrKeySolved
                ? ' midnight-input-locked'
                : ''
            }"
            type="text"
            inputmode="text"
            autocomplete="off"
            spellcheck="false"
            placeholder="Type your answer..."
            value="${blrKeyValue}"
            ${
              blrKeySolved
                ? 'disabled'
                : ''
            }
          />


          ${
            blrKeySolved
              ? ''
              : `
                <button
                  id="blr-key-check"
                  class="midnight-check-button"
                  type="button"
                >
                  Check
                </button>
              `
          }


          <div
            id="blr-key-response"
            class="puzzle-response ${blrKeyResponseType}"
            aria-live="polite"
          >${blrKeyResponse}</div>

        </section>
      `
      : '';


  const cipherPuzzle =
    blrKeySolved
      ? `
        <section
          class="blr-puzzle-section blr-cipher-section"
          aria-live="polite"
        >

          <div class="blr-puzzle-question">
            ${blrCipherPuzzle.clue}
          </div>


          <input
            id="blr-cipher-input"
            class="midnight-final-input${
              blrCipherSolved
                ? ' midnight-input-locked'
                : ''
            }"
            type="text"
            inputmode="text"
            autocomplete="off"
            spellcheck="false"
            placeholder="Type your answer..."
            value="${blrCipherValue}"
            ${
              blrCipherSolved
                ? 'disabled'
                : ''
            }
          />


          ${
            blrCipherSolved
              ? ''
              : `
                <button
                  id="blr-cipher-check"
                  class="midnight-check-button"
                  type="button"
                >
                  Check
                </button>
              `
          }


          <div
            id="blr-cipher-response"
            class="puzzle-response ${blrCipherResponseType}"
            aria-live="polite"
          >${blrCipherResponse}</div>

        </section>
      `
      : '';


  return `
    <main class="main panel">

      <section
        class="midnight-sun-page blr-page"
      >

        <!-- =========================================
             BLR PLAYLIST HEADER
        ========================================== -->

        <header class="midnight-sun-hero">

          <div class="midnight-sun-cover">

            <img
              src="${albumBlr}"
              alt="BLR"
            />

          </div>


          <div class="midnight-sun-meta">

            <div class="midnight-sun-type">
              Public Playlist
            </div>


            <h1>
              BLR
            </h1>


            <p class="midnight-sun-description">
              A little something to figure out.
            </p>


            <div class="midnight-sun-creator">

              <div class="midnight-sun-avatar">
                A
              </div>

              <strong>
                akshaya
              </strong>

              <span>•</span>

              <span>
                6 saves
              </span>

              <span>•</span>

              <span>
                Playlist
              </span>

            </div>

          </div>

        </header>


        <!-- =========================================
             SPOTIFY ACTION BAR
        ========================================== -->

        <div class="midnight-sun-actions">

          <div class="midnight-sun-actions-left">

            <button
              class="midnight-sun-play"
              type="button"
              aria-label="Play"
            >
              ${icon('play', 25)}
            </button>


            <button
              class="midnight-sun-control midnight-sun-art-button"
              type="button"
              aria-label="Playlist artwork"
            >

              <img
                src="${albumBlr}"
                alt=""
              />

            </button>


            <button
              class="midnight-sun-control"
              type="button"
              aria-label="Shuffle"
            >
              ${icon('shuffle', 30)}
            </button>


            <button
              class="midnight-sun-control"
              type="button"
              aria-label="Add"
            >
              ${icon('plus', 34)}
            </button>


            <button
              class="midnight-sun-control"
              type="button"
              aria-label="Download"
            >
              ${icon('download', 31)}
            </button>


            <button
              class="midnight-sun-control"
              type="button"
              aria-label="More"
            >
              ${icon('more', 30)}
            </button>

          </div>


          <div class="midnight-sun-actions-right">

            <button
              class="midnight-sun-control"
              type="button"
              aria-label="Search playlist"
            >
              ${icon('search', 27)}
            </button>


            <span class="midnight-custom-order">
              Custom order
            </span>


            <button
              class="midnight-sun-control"
              type="button"
              aria-label="List"
            >
              ${icon('list', 28)}
            </button>

          </div>

        </div>


        <!-- =========================================
             BLR PUZZLES
        ========================================== -->

        <section class="midnight-sun-puzzle blr-puzzle">

          ${mathPuzzle}

          ${keyPuzzle}

          ${cipherPuzzle}

        </section>

      </section>

    </main>
  `;
}

/* =========================================================
   MIDNIGHT SUN PUZZLE
   ========================================================= */

function renderMidnightSun() {
  const scrambledWords =
    midnightSunPuzzle.scrambledWords
      .map((word, index) => `
        <div
          class="midnight-word-card"
          data-word-index="${index}"
        >
          <span>${word}</span>
        </div>
      `)
      .join('');


  const answerInputs =
    midnightSunPuzzle.answers
      .map((_, index) => `
        <input
          class="midnight-answer-input${
            midnightSunWordsSolved
              ? ' midnight-input-locked'
              : ''
          }"
          data-answer-index="${index}"
          type="text"
          autocomplete="off"
          spellcheck="false"
          aria-label="Answer ${index + 1}"
          value="${midnightSunWordValues[index] || ''}"
          ${
            midnightSunWordsSolved
              ? 'disabled'
              : ''
          }
        />
      `)
      .join('');


  const wordCheckButton =
    midnightSunWordsSolved
      ? ''
      : `
        <button
          id="midnight-check"
          class="midnight-check-button"
          type="button"
        >
          Check
        </button>
      `;


  const wordResponse = `
    <div
      id="midnight-response"
      class="puzzle-response ${midnightSunWordsResponseType}"
      aria-live="polite"
    >${midnightSunWordsResponse}</div>
  `;


  /*
   * PUZZLE 2
   *
   * What matters most is where it begins.
   *
   * Answer:
   * RHFHIR
   */
  const finalPuzzle =
    midnightSunWordsSolved
      ? `
        <section
          class="midnight-final-puzzle"
          aria-live="polite"
        >

          <div class="midnight-final-question">
            ${midnightSunPuzzle.finalQuestion}
          </div>


          <input
            id="midnight-final-input"
            class="midnight-final-input${
              midnightSunFinalSolved
                ? ' midnight-input-locked'
                : ''
            }"
            type="text"
            autocomplete="off"
            spellcheck="false"
            placeholder="Type your answer..."
            value="${midnightSunFinalValue}"
            ${
              midnightSunFinalSolved
                ? 'disabled'
                : ''
            }
          />


          ${
            midnightSunFinalSolved
              ? ''
              : `
                <button
                  id="midnight-final-check"
                  class="midnight-check-button"
                  type="button"
                >
                  Check
                </button>
              `
          }


          <div
            id="midnight-final-response"
            class="puzzle-response ${midnightSunFinalResponseType}"
            aria-live="polite"
          >${midnightSunFinalResponse}</div>

        </section>
      `
      : '';


  /*
   * PUZZLE 3
   *
   * Find the shadow of every letter.
   *
   * Answer:
   * ISUSRI
   *
   * Only appears after RHFHIR is solved.
   */
  const shadowPuzzle =
    midnightSunFinalSolved
      ? `
        <section
          class="midnight-final-puzzle midnight-shadow-puzzle"
          aria-live="polite"
        >

          <div class="midnight-final-question">
            ${midnightSunShadowPuzzle.question}
          </div>


          <input
            id="midnight-shadow-input"
            class="midnight-final-input${
              midnightSunShadowSolved
                ? ' midnight-input-locked'
                : ''
            }"
            type="text"
            autocomplete="off"
            spellcheck="false"
            placeholder="Type your answer..."
            value="${midnightSunShadowValue}"
            ${
              midnightSunShadowSolved
                ? 'disabled'
                : ''
            }
          />


          ${
            midnightSunShadowSolved
              ? ''
              : `
                <button
                  id="midnight-shadow-check"
                  class="midnight-check-button"
                  type="button"
                >
                  Check
                </button>
              `
          }


          <div
            id="midnight-shadow-response"
            class="puzzle-response ${midnightSunShadowResponseType}"
            aria-live="polite"
          >${midnightSunShadowResponse}</div>

        </section>
      `
      : '';


  /*
   * PUZZLE 4
   *
   * Enter the codeword:
   *
   * Answer:
   * Sirius
   *
   * Only appears after ISUSRI is solved.
   */
  const codewordPuzzle =
    midnightSunShadowSolved
      ? `
        <section
          class="midnight-final-puzzle midnight-codeword-puzzle"
          aria-live="polite"
        >

          <div class="midnight-final-question">
            Enter the codeword:
          </div>


          <input
            id="midnight-codeword-input"
            class="midnight-final-input${
              midnightSunCodewordSolved
                ? ' midnight-input-locked'
                : ''
            }"
            type="text"
            autocomplete="off"
            spellcheck="false"
            placeholder="Type your answer..."
            value="${midnightSunCodewordValue}"
            ${
              midnightSunCodewordSolved
                ? 'disabled'
                : ''
            }
          />


          ${
            midnightSunCodewordSolved
              ? ''
              : `
                <button
                  id="midnight-codeword-check"
                  class="midnight-check-button"
                  type="button"
                >
                  Check
                </button>
              `
          }


          <div
            id="midnight-codeword-response"
            class="puzzle-response ${midnightSunCodewordResponseType}"
            aria-live="polite"
          >${midnightSunCodewordResponse}</div>

        </section>
      `
      : '';


  return `
    <main class="main panel">

      <section class="midnight-sun-page">

        <!-- =========================================
             SPOTIFY-STYLE PLAYLIST HEADER
        ========================================== -->

        <header class="midnight-sun-hero">

          <div class="midnight-sun-cover">

            <img
              src="${albumMidnightSun}"
              alt="midnight sun"
            />

          </div>


          <div class="midnight-sun-meta">

            <div class="midnight-sun-type">
              Public Playlist
            </div>


            <h1>
              midnight sun
            </h1>


            <p class="midnight-sun-description">
              happiness will stop feeling strange if we see it everyday
            </p>


            <div class="midnight-sun-creator">

              <div class="midnight-sun-avatar">
                A
              </div>

              <strong>
                akshaya
              </strong>

              <span>•</span>

              <span>
                6 saves
              </span>

              <span>•</span>

              <span>
                205 songs, 12 hr 16 min
              </span>

            </div>

          </div>

        </header>


        <!-- =========================================
             SPOTIFY ACTION BAR
        ========================================== -->

        <div class="midnight-sun-actions">

          <div class="midnight-sun-actions-left">

            <button
              class="midnight-sun-play"
              type="button"
              aria-label="Play"
            >
              ${icon('play', 25)}
            </button>


            <button
              class="midnight-sun-control midnight-sun-art-button"
              type="button"
              aria-label="Playlist artwork"
            >
              <img
                src="${albumMidnightSun}"
                alt=""
              />
            </button>


            <button
              class="midnight-sun-control"
              type="button"
              aria-label="Shuffle"
            >
              ${icon('shuffle', 30)}
            </button>


            <button
              class="midnight-sun-control"
              type="button"
              aria-label="Add"
            >
              ${icon('plus', 34)}
            </button>


            <button
              class="midnight-sun-control"
              type="button"
              aria-label="Download"
            >
              ${icon('download', 31)}
            </button>


            <button
              class="midnight-sun-control"
              type="button"
              aria-label="More"
            >
              ${icon('more', 30)}
            </button>

          </div>


          <div class="midnight-sun-actions-right">

            <button
              class="midnight-sun-control"
              type="button"
              aria-label="Search playlist"
            >
              ${icon('search', 27)}
            </button>


            <span class="midnight-custom-order">
              Custom order
            </span>


            <button
              class="midnight-sun-control"
              type="button"
              aria-label="List"
            >
              ${icon('list', 28)}
            </button>

          </div>

        </div>


        <!-- =========================================
             MIDNIGHT SUN PUZZLE
        ========================================== -->

        <section class="midnight-sun-puzzle">

          <div class="midnight-word-grid">
            ${scrambledWords}
          </div>


          <div class="midnight-unscramble-section">

            <div class="midnight-section-title">
              Unscramble the words
            </div>


            <div class="midnight-answer-grid">
              ${answerInputs}
            </div>


            ${wordCheckButton}


            ${wordResponse}

          </div>


          ${finalPuzzle}


          ${shadowPuzzle}


          ${codewordPuzzle}

        </section>

      </section>

    </main>
  `;
}

/* =========================================================
   BLR MATH PUZZLE
   ========================================================= */

function setupBlrMathPuzzle() {

  const input =
    document.querySelector(
      '#blr-math-input'
    );


  const checkButton =
    document.querySelector(
      '#blr-math-check'
    );


  const response =
    document.querySelector(
      '#blr-math-response'
    );


  if (
    !input ||
    !response ||
    blrMathSolved
  ) {
    return;
  }


  const validateBlrMath = () => {

    if (blrMathSolved) {
      return;
    }


    blrMathValue =
      input.value;


    const submitted =
      blrMathValue.trim();


    /* =========================
       CORRECT ANSWER
    ========================== */

    if (
      submitted ===
      blrMathPuzzle.answer
    ) {

      blrMathSolved =
        true;


      blrMathValue =
        blrMathPuzzle.answer;


      blrMathResponse =
        blrMathPuzzle.correctResponse;


      blrMathResponseType =
        'success';


      /*
       * Lock answer.
       */

      input.value =
        blrMathValue;


      input.disabled =
        true;


      input.classList.add(
        'midnight-input-locked'
      );


      /*
       * Remove Check.
       */

      if (checkButton) {
        checkButton.remove();
      }


      /*
       * Show success response.
       */

      response.textContent =
        blrMathResponse;


      response.className =
        'puzzle-response success';


      /*
       * Re-render after a short delay
       * so the second puzzle appears.
       */

      setTimeout(() => {

        if (
          currentView === 'album' &&
          currentAlbumId === 'album-blr'
        ) {

          render();

        }

      }, 700);


      return;
    }


    /* =========================
       LETTER ANSWER
    ========================== */

    if (
      /[A-Za-z]/.test(
        submitted
      )
    ) {

      blrMathResponse =
        blrMathPuzzle.letterResponse;

    }


    /* =========================
       NUMBER ANSWER
    ========================== */

    else {

      const index =
        blrMathWrongAttempts %
        blrMathPuzzle.wrongResponses.length;


      blrMathResponse =
        blrMathPuzzle.wrongResponses[
          index
        ];


      blrMathWrongAttempts +=
        1;

    }


    blrMathResponseType =
      'wrong';


    response.textContent =
      blrMathResponse;


    response.className =
      'puzzle-response wrong';


    void response.offsetWidth;


    response.classList.add(
      'wrong'
    );


    input.focus();

  };


  /*
   * Check button.
   */

  if (checkButton) {

    checkButton.addEventListener(
      'click',
      validateBlrMath
    );

  }


  /*
   * Enter key uses the SAME
   * validation function.
   */

  input.addEventListener(
    'keydown',
    (event) => {

      if (
        event.key === 'Enter'
      ) {

        event.preventDefault();

        validateBlrMath();

      }

    }
  );

}


/* =========================================================
   BLR KEY PUZZLE
   ========================================================= */

function setupBlrKeyPuzzle() {

  if (
    !blrMathSolved ||
    blrKeySolved
  ) {
    return;
  }


  const input =
    document.querySelector(
      '#blr-key-input'
    );


  const checkButton =
    document.querySelector(
      '#blr-key-check'
    );


  const response =
    document.querySelector(
      '#blr-key-response'
    );


  if (
    !input ||
    !response
  ) {
    return;
  }


  const validateBlrKey = () => {

    if (blrKeySolved) {
      return;
    }


    blrKeyValue =
      input.value;


    const submitted =
      blrKeyValue.trim();


    /* =========================
       CORRECT ANSWER
    ========================== */

    if (
      submitted ===
      blrKeyPuzzle.answer
    ) {

      blrKeySolved =
        true;


      blrKeyValue =
        blrKeyPuzzle.answer;


      blrKeyResponse =
        blrKeyPuzzle.correctResponse;


      blrKeyResponseType =
        'success';


      /*
       * Lock answer.
       */

      input.value =
        blrKeyValue;


      input.disabled =
        true;


      input.classList.add(
        'midnight-input-locked'
      );


      /*
       * Remove Check.
       */

      if (checkButton) {
        checkButton.remove();
      }


      /*
       * Show success response.
       */

      response.textContent =
        blrKeyResponse;


      response.className =
        'puzzle-response success';


      /*
       * Re-render after a short delay
       * so the cipher puzzle appears
       * underneath the Key puzzle.
       */

      setTimeout(() => {

        if (
          currentView === 'album' &&
          currentAlbumId === 'album-blr'
        ) {
          render();
        }

      }, 700);


      return;
    }


    /* =========================
       WRONG ANSWER
    ========================== */

    const index =
      blrKeyWrongAttempts %
      blrKeyPuzzle.wrongResponses.length;


    blrKeyResponse =
      blrKeyPuzzle.wrongResponses[
        index
      ];


    blrKeyWrongAttempts +=
      1;


    blrKeyResponseType =
      'wrong';


    response.textContent =
      blrKeyResponse;


    response.className =
      'puzzle-response wrong';


    void response.offsetWidth;


    response.classList.add(
      'wrong'
    );


    input.focus();
  };


  /*
   * Check button.
   */

  if (checkButton) {

    checkButton.addEventListener(
      'click',
      validateBlrKey
    );

  }


  /*
   * Enter key uses the SAME
   * validation function.
   */

  input.addEventListener(
    'keydown',
    (event) => {

      if (
        event.key === 'Enter'
      ) {

        event.preventDefault();

        validateBlrKey();

      }

    }
  );

}

/* =========================================================
   BLR CIPHER PUZZLE
   ========================================================= */

function setupBlrCipherPuzzle() {

  if (
    !blrKeySolved ||
    blrCipherSolved
  ) {
    return;
  }


  const input =
    document.querySelector(
      '#blr-cipher-input'
    );


  const checkButton =
    document.querySelector(
      '#blr-cipher-check'
    );


  const response =
    document.querySelector(
      '#blr-cipher-response'
    );


  if (
    !input ||
    !response
  ) {
    return;
  }


  const validateBlrCipher = () => {

    if (blrCipherSolved) {
      return;
    }


    blrCipherValue =
      input.value;


    const submitted =
      blrCipherValue
        .trim()
        .toLowerCase();


    const expected =
      blrCipherPuzzle.answer
        .trim()
        .toLowerCase();


    /* =========================
       CORRECT ANSWER
    ========================== */

    if (
      submitted ===
      expected
    ) {

      blrCipherSolved =
        true;


      blrCipherValue =
        blrCipherPuzzle.answer;


      blrCipherResponse =
        blrCipherPuzzle.correctResponse;


      blrCipherResponseType =
        'success';


      /*
       * Lock answer.
       */

      input.value =
        blrCipherValue;


      input.disabled =
        true;


      input.classList.add(
        'midnight-input-locked'
      );


      /*
       * Remove Check.
       */

      if (checkButton) {
        checkButton.remove();
      }


      /*
       * Show success response.
       */

      response.textContent =
        blrCipherResponse;


      response.className =
        'puzzle-response success';


      /*
       * COMPLETE BLR STAGE
       *
       * BLR becomes locked.
       * <3 becomes unlocked.
       */

      puzzleState.unlockedAlbums =
        puzzleState.unlockedAlbums
          .filter(
            (albumId) =>
              albumId !== 'album-blr'
          );


      if (
        !puzzleState.unlockedAlbums.includes(
          'album-heart'
        )
      ) {
        puzzleState.unlockedAlbums.push(
          'album-heart'
        );
      }


      if (
        !puzzleState.lockedLibraryItems.includes(
          'album-blr'
        )
      ) {
        puzzleState.lockedLibraryItems.push(
          'album-blr'
        );
      }


      savePuzzleState();


      /*
       * Re-render after the success
       * response has been visible briefly.
       *
       * Because BLR has now been removed
       * from unlockedAlbums, render() will
       * prevent stale history from reopening it.
       */

      setTimeout(() => {

        render();

      }, 700);


      return;
    }


    /* =========================
       WRONG ANSWER
    ========================== */

    const responseIndex =
      blrCipherWrongAttempts %
      blrCipherPuzzle.wrongResponses.length;


    blrCipherResponse =
      blrCipherPuzzle.wrongResponses[
        responseIndex
      ];


    blrCipherWrongAttempts +=
      1;


    blrCipherResponseType =
      'wrong';


    response.textContent =
      blrCipherResponse;


    response.className =
      'puzzle-response wrong';


    void response.offsetWidth;


    response.classList.add(
      'wrong'
    );


    input.focus();
  };


  /*
   * Check button.
   */

  if (checkButton) {

    checkButton.addEventListener(
      'click',
      validateBlrCipher
    );

  }


  /*
   * Enter key uses the SAME
   * validation function.
   */

  input.addEventListener(
    'keydown',
    (event) => {

      if (
        event.key === 'Enter'
      ) {

        event.preventDefault();

        validateBlrCipher();

      }

    }
  );

}
/* =========================================================
   MIDNIGHT SUN PUZZLE EVENTS
   ========================================================= */

function setupMidnightSunPuzzle() {
  const answerInputs =
    document.querySelectorAll(
      '.midnight-answer-input'
    );

  const checkButton =
    document.querySelector(
      '#midnight-check'
    );

  const response =
    document.querySelector(
      '#midnight-response'
    );

  if (
    !answerInputs.length ||
    !response ||
    midnightSunWordsSolved
  ) {
    return;
  }

  const wrongResponses = [
    "It's not that hard broski",
    "Come on use that brain of yours",
    "Oh ma gawd massive forehead but no brein?!"
  ];

  const validateMidnightSunWords = () => {

    if (midnightSunWordsSolved) {
      return;
    }

    /*
     * Save whatever the user currently has typed.
     * This means incorrect attempts never wipe their answers.
     */
    midnightSunWordValues =
      Array.from(answerInputs).map(
        (input) => input.value
      );


    const correct =
      midnightSunPuzzle.answers.every(
        (expectedAnswer, index) =>
          midnightSunWordValues[index]
            .trim()
            .toLowerCase() ===
          expectedAnswer.toLowerCase()
      );


    /* =========================
       WRONG ANSWER
    ========================== */

    if (!correct) {

      midnightSunWordsWrongAttempts += 1;

      midnightSunWordsResponse =
        wrongResponses[
          (
            midnightSunWordsWrongAttempts - 1
          ) % wrongResponses.length
        ];

      midnightSunWordsResponseType =
        'wrong';


      response.textContent =
        midnightSunWordsResponse;

      response.className =
        'puzzle-response wrong';

      void response.offsetWidth;

      response.classList.add(
        'wrong'
      );

      return;
    }


    /* =========================
       ALL SIX CORRECT
    ========================== */

    midnightSunWordsSolved =
      true;

    midnightSunWordValues =
      midnightSunPuzzle.answers.slice();

    midnightSunWordsResponse =
      'Good job , i knew you were smart';

    midnightSunWordsResponseType =
      'success';


    /*
     * Lock every answer box.
     */
    answerInputs.forEach(
      (input, index) => {

        input.value =
          midnightSunWordValues[index];

        input.disabled =
          true;

        input.classList.add(
          'midnight-input-locked'
        );

      }
    );


    /*
     * Remove the word puzzle Check button.
     */
    if (checkButton) {
      checkButton.remove();
    }


    response.textContent =
      midnightSunWordsResponse;

    response.className =
      'puzzle-response success';


    /*
     * After the short existing delay,
     * render again so the final puzzle
     * appears.
     *
     * Only render if the user is still
     * inside Midnight Sun.
     */
    setTimeout(() => {

      if (
        currentView === 'album' &&
        currentAlbumId ===
          'album-midnight-sun'
      ) {
        render();
      }

    }, 700);

  };


  /*
   * Check button.
   */
  if (checkButton) {

    checkButton.addEventListener(
      'click',
      validateMidnightSunWords
    );

  }


  /*
   * Enter key works from any
   * of the six answer boxes.
   */
  answerInputs.forEach(
    (input) => {

      input.addEventListener(
        'keydown',
        (event) => {

          if (
            event.key === 'Enter'
          ) {

            event.preventDefault();

            validateMidnightSunWords();

          }

        }
      );

    }
  );
}


/* =========================================================
   MIDNIGHT SUN FINAL ANSWER
   ========================================================= */

function setupMidnightSunFinalPuzzle() {
  if (
    !midnightSunWordsSolved ||
    midnightSunFinalSolved
  ) {
    return;
  }


  const input =
    document.querySelector(
      '#midnight-final-input'
    );

  const checkButton =
    document.querySelector(
      '#midnight-final-check'
    );

  const response =
    document.querySelector(
      '#midnight-final-response'
    );


  if (
    !input ||
    !response
  ) {
    return;
  }


  const wrongResponses = [
    'Think hardd',
    'I thought you loved puzzles',
    'we have all the time in the world no worries'
  ];


  const validateFinalAnswer = () => {

    if (midnightSunFinalSolved) {
      return;
    }


    midnightSunFinalValue =
      input.value;


    /*
     * Correct answer:
     * RHFHIR
     *
     * Case-insensitive.
     * Surrounding whitespace ignored.
     */
    if (
      midnightSunFinalValue
        .trim()
        .toLowerCase() ===
      midnightSunPuzzle.finalAnswer
        .toLowerCase()
    ) {

      midnightSunFinalSolved =
        true;


      midnightSunFinalValue =
        midnightSunPuzzle.finalAnswer;


      midnightSunFinalResponse =
        'Woohoo you got it!!';


      midnightSunFinalResponseType =
        'success';


      /*
       * Lock RHFHIR.
       */
      input.value =
        midnightSunFinalValue;

      input.disabled =
        true;

      input.classList.add(
        'midnight-input-locked'
      );


      /*
       * Remove Check button.
       */
      if (checkButton) {
        checkButton.remove();
      }


      response.textContent =
        midnightSunFinalResponse;

      response.className =
        'puzzle-response success';


      /*
       * Re-render so Puzzle 3 appears.
       */
      setTimeout(() => {

        if (
          currentView === 'album' &&
          currentAlbumId ===
            'album-midnight-sun'
        ) {
          render();
        }

      }, 700);


      return;
    }


    /*
     * Wrong answer.
     */
    midnightSunFinalWrongAttempts += 1;


    midnightSunFinalResponse =
      wrongResponses[
        (
          midnightSunFinalWrongAttempts - 1
        ) %
          wrongResponses.length
      ];


    midnightSunFinalResponseType =
      'wrong';


    response.textContent =
      midnightSunFinalResponse;


    response.className =
      'puzzle-response wrong';


    void response.offsetWidth;


    response.classList.add(
      'wrong'
    );


    input.focus();
  };


  /*
   * Check button.
   */
  if (checkButton) {

    checkButton.addEventListener(
      'click',
      validateFinalAnswer
    );

  }


  /*
   * Enter key.
   */
  input.addEventListener(
    'keydown',
    (event) => {

      if (
        event.key === 'Enter'
      ) {

        event.preventDefault();

        validateFinalAnswer();

      }

    }
  );
}

/* =========================================================
   MIDNIGHT SUN SHADOW PUZZLE
   ========================================================= */

function setupMidnightSunShadowPuzzle() {

  if (
    !midnightSunFinalSolved ||
    midnightSunShadowSolved
  ) {
    return;
  }


  const input =
    document.querySelector(
      '#midnight-shadow-input'
    );

  const checkButton =
    document.querySelector(
      '#midnight-shadow-check'
    );

  const response =
    document.querySelector(
      '#midnight-shadow-response'
    );


  if (
    !input ||
    !response
  ) {
    return;
  }


  const validateShadowAnswer = () => {

    if (midnightSunShadowSolved) {
      return;
    }


    midnightSunShadowValue =
      input.value;


    /*
     * Correct answer:
     * ISUSRI
     */
    if (
      midnightSunShadowValue
        .trim()
        .toLowerCase() ===
      midnightSunShadowPuzzle.answer
        .toLowerCase()
    ) {

      midnightSunShadowSolved =
        true;


      midnightSunShadowValue =
        midnightSunShadowPuzzle.answer;


      midnightSunShadowResponse =
        midnightSunShadowPuzzle.correctResponse;


      midnightSunShadowResponseType =
        'success';


      /*
       * Lock ISUSRI.
       */
      input.value =
        midnightSunShadowValue;

      input.disabled =
        true;

      input.classList.add(
        'midnight-input-locked'
      );


      /*
       * Remove Check.
       */
      if (checkButton) {
        checkButton.remove();
      }


      response.textContent =
        midnightSunShadowResponse;

      response.className =
        'puzzle-response success';


      /*
       * Re-render so the Sirius
       * codeword puzzle appears.
       */
      setTimeout(() => {

        if (
          currentView === 'album' &&
          currentAlbumId ===
            'album-midnight-sun'
        ) {
          render();
        }

      }, 700);


      return;
    }


    /*
     * Wrong answers cycle in this exact order:
     *
     * 1. Try Karact 90 degrees
     * 2. Hmmm what dis breh
     * 3. ahaha u better crack this to crack me
     */
    midnightSunShadowWrongAttempts += 1;


    midnightSunShadowResponse =
      midnightSunShadowPuzzle
        .wrongResponses[
          (
            midnightSunShadowWrongAttempts - 1
          ) %
            midnightSunShadowPuzzle
              .wrongResponses.length
        ];


    midnightSunShadowResponseType =
      'wrong';


    response.textContent =
      midnightSunShadowResponse;


    response.className =
      'puzzle-response wrong';


    void response.offsetWidth;


    response.classList.add(
      'wrong'
    );


    input.focus();
  };


  /*
   * Check button.
   */
  if (checkButton) {

    checkButton.addEventListener(
      'click',
      validateShadowAnswer
    );

  }


  /*
   * Enter key.
   */
  input.addEventListener(
    'keydown',
    (event) => {

      if (
        event.key === 'Enter'
      ) {

        event.preventDefault();

        validateShadowAnswer();

      }

    }
  );
}

/* =========================================================
   MIDNIGHT SUN CODEWORD
   ========================================================= */

/* =========================================================
   MIDNIGHT SUN CODEWORD
   ========================================================= */

function setupMidnightSunCodewordPuzzle() {

  /*
   * Only show/setup the codeword puzzle after
   * the previous Midnight Sun puzzle is solved.
   */
  if (
    !midnightSunShadowSolved ||
    midnightSunCodewordSolved
  ) {
    return;
  }


  const input =
    document.querySelector(
      '#midnight-codeword-input'
    );

  const checkButton =
    document.querySelector(
      '#midnight-codeword-check'
    );

  const response =
    document.querySelector(
      '#midnight-codeword-response'
    );


  if (
    !input ||
    !response
  ) {
    return;
  }


  const validateCodeword = () => {

    /*
     * Do nothing if the puzzle has already
     * been solved.
     */
    if (
      midnightSunCodewordSolved
    ) {
      return;
    }


    midnightSunCodewordValue =
      input.value;


    /*
     * Correct answer:
     *
     * Sirius
     *
     * Case-insensitive.
     * Surrounding whitespace ignored.
     */
    if (
      midnightSunCodewordValue
        .trim()
        .toLowerCase() ===
      midnightSunCodeword.answer
        .toLowerCase()
    ) {

      midnightSunCodewordSolved =
        true;


      midnightSunCodewordValue =
        midnightSunCodeword.answer;


      midnightSunCodewordResponse =
        midnightSunCodeword.correctResponse;


      midnightSunCodewordResponseType =
        'success';


      /*
       * Lock Sirius input.
       */
      input.value =
        midnightSunCodewordValue;

      input.disabled =
        true;

      input.classList.add(
        'midnight-input-locked'
      );


      /*
       * Remove Check button.
       */
      if (checkButton) {
        checkButton.remove();
      }


      /*
       * Show existing success response.
       */
      response.textContent =
        midnightSunCodewordResponse;

      response.className =
        'puzzle-response success';


      /*
       * COMPLETE MIDNIGHT SUN
       *
       * Midnight Sun = LOCKED
       * BLR = UNLOCKED
       */
      puzzleState.unlockedAlbums = [
        'album-blr'
      ];


      puzzleState.lockedLibraryItems = [
        ...new Set([
          ...puzzleState.lockedLibraryItems,
          'liked-songs',
          'album-midnight-sun'
        ])
      ];


      savePuzzleState();


      /*
       * Keep the success response visible briefly.
       *
       * The existing render() logic will then
       * prevent stale history from reopening
       * Midnight Sun.
       */
      setTimeout(() => {
        render();
      }, 700);


      return;
    }


    /*
     * =====================================================
     * WRONG ANSWER
     * =====================================================
     *
     * Cycle sequentially:
     *
     * 1. Think about it carefully
     * 2. What is the album name hmmm??
     * 3. GOOD JOBBBB ur wrong-
     * 4. Repeat from #1
     */
    if (
      midnightSunCodeword.wrongResponses.length > 0
    ) {

      const responseIndex =
        midnightSunCodewordWrongAttempts %
        midnightSunCodeword.wrongResponses.length;


      midnightSunCodewordResponse =
        midnightSunCodeword.wrongResponses[
          responseIndex
        ];


      /*
       * Move to the next response for
       * the next wrong attempt.
       */
      midnightSunCodewordWrongAttempts += 1;


      midnightSunCodewordResponseType =
        'wrong';


      /*
       * Display the response.
       */
      response.textContent =
        midnightSunCodewordResponse;

      response.className =
        'puzzle-response wrong';


      /*
       * Restart the animation so each
       * wrong response gets the visual
       * feedback.
       */
      void response.offsetWidth;

      response.classList.add(
        'wrong'
      );
    }


    /*
     * Keep the input focused so the user
     * can immediately try again.
     */
    input.focus();
  };


  /*
   * =====================================================
   * CHECK BUTTON
   * =====================================================
   */

  if (checkButton) {

    checkButton.addEventListener(
      'click',
      validateCodeword
    );

  }


  /*
   * =====================================================
   * ENTER KEY
   * =====================================================
   *
   * Enter performs exactly the same
   * validation as clicking Check.
   */

  input.addEventListener(
    'keydown',
    (event) => {

      if (
        event.key === 'Enter'
      ) {

        event.preventDefault();

        validateCodeword();

      }

    }
  );

}


/* =========================================================
   PUZZLE PROGRESS
   ========================================================= */

/* =========================================================
   PUZZLE PROGRESS
   ========================================================= */

function renderPuzzlePanel() {

  const totalAlbums = 5;

  /*
   * Albums discovered is cumulative.
   *
   * This is intentionally NOT based only on unlockedAlbums,
   * because older albums can become locked again as the
   * player progresses.
   */
  const discoveredAlbums =
    Array.isArray(
      puzzleState.discoveredAlbums
    )
      ? puzzleState.discoveredAlbums
      : [];

  const discoveredCount =
    Math.min(
      discoveredAlbums.length,
      totalAlbums
    );

  return `
    <aside class="puzzle panel">

      <div class="puzzle-header">

        <h2>
          Puzzle Progress
        </h2>

        <button>
          ${icon('more')}
        </button>

      </div>


      <div class="puzzle-cover">

        <div class="puzzle-mark">
          ✦
        </div>

      </div>


      <div class="progress-block">

        <div>

          <span>
            Albums discovered
          </span>

          <b>
            ${discoveredCount}/${totalAlbums}
          </b>

        </div>


        <progress
          value="${discoveredCount}"
          max="${totalAlbums}"
        ></progress>

      </div>


      <p class="puzzle-note">
        Keep exploring to uncover the next clue.
      </p>

    </aside>
  `;
}


/* =========================================================
   BOTTOM PLAYER
   ========================================================= */

function renderPlayer() {

  const player =
    siteData.player;


  return `
    <footer class="player">

      <div class="now-playing">

        <div class="player-cover">

          <img
            src="${player.albumCover}"
            alt="${player.song}"
          />

        </div>

        <div>

          <b>
            ${player.song}
          </b>

          <small>
            ${player.artist}
          </small>

        </div>

        <button class="liked">
          ${icon('heart')}
        </button>

      </div>


      <div class="player-center">

        <div class="transport">

          <button>
            ${icon('shuffle')}
          </button>

          <button>
            ${icon('prev')}
          </button>

          <button
            id="play-toggle"
            class="play"
          >
            ${icon('pause', 19)}
          </button>

          <button>
            ${icon('next')}
          </button>

          <button>
            ${icon('repeat')}
          </button>

        </div>


        <div class="scrubber">

          <span id="current-time">
            1:24
          </span>

          <input
            id="progress"
            type="range"
            value="84"
            max="223"
          />

          <span>
            ${player.duration}
          </span>

        </div>

      </div>


      <div class="player-right">

        <button>
          ${icon('mic')}
        </button>

        <button>
          ${icon('queue')}
        </button>

        <button>
          ${icon('device')}
        </button>

        <button>
          ${icon('volume')}
        </button>

        <input
          id="volume"
          type="range"
          value="70"
        />

        <button>
          ${icon('full')}
        </button>

      </div>

    </footer>
  `;
}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message) {

  let toast =
    document.querySelector(
      '.spotifia-toast'
    );


  if (!toast) {

    toast =
      document.createElement('div');

    toast.className =
      'spotifia-toast';

    document.body.appendChild(toast);
  }


  toast.textContent =
    message;


  requestAnimationFrame(() => {
    toast.classList.add('show');
  });


  clearTimeout(
    toast._timer
  );


  toast._timer =
    setTimeout(() => {

      toast.classList.remove('show');

    }, 2200);
}


/* =========================================================
   PUZZLE 01 EVENT
   ========================================================= */

function setupPuzzle01() {

  const form =
    document.querySelector(
      '#puzzle01-form'
    );


  if (!form) {
    return;
  }


  const input =
    document.querySelector(
      '#puzzle01-answer'
    );


  const response =
    document.querySelector(
      '#puzzle01-response'
    );


  form.addEventListener(
    'submit',
    (event) => {

      event.preventDefault();


      const answer =
        input.value
          .trim()
          .toLowerCase();


      if (
        answer ===
        puzzle01.correctAnswer
      ) {

        response.textContent =
          puzzle01.successResponse;

        response.className =
          'puzzle-response success';


        completePuzzle01();


        /*
         * Keep the user on the Liked Songs page.
         * The sidebar updates after the short success
         * response animation.
         */

        setTimeout(() => {
          render();
        }, 700);


        return;
      }


      const randomResponse =
        puzzle01.wrongResponses[
          Math.floor(
            Math.random() *
            puzzle01.wrongResponses.length
          )
        ];


      response.textContent =
        randomResponse;

      response.className =
        'puzzle-response';


      void response.offsetWidth;


      response.classList.add(
        'wrong'
      );


      input.focus();

    }
  );
}

/* =========================================================
   LOVE PLAYLIST PASSCODE EVENT
   ========================================================= */

/* =========================================================
   LOVE PLAYLIST PASSCODE EVENT
   ========================================================= */

function setupLovePasscode() {
  const input =
    document.querySelector(
      '#love-passcode-input'
    );

  const response =
    document.querySelector(
      '#love-passcode-response'
    );

  if (!input || !response) {
    return;
  }

  const validateLovePasscode = () => {
    const enteredValue =
      input.value
        .trim()
        .toLowerCase();

    /* =========================
       CORRECT PASSCODE
    ========================== */

    if (
      enteredValue ===
      lovePasscode.answer.toLowerCase()
    ) {
      response.textContent =
        lovePasscode.correctResponse;

      response.className =
        'puzzle-response success';

      /*
       * KADHAL completes the current stage.
       *
       * After solving:
       *
       * Liked Songs     = LOCKED
       * love            = LOCKED
       * midnight sun    = UNLOCKED
       * BLR             = LOCKED
       * <3              = LOCKED
       *
       * Replace the unlocked album list completely
       * instead of simply adding midnight sun.
       */
      puzzleState.unlockedAlbums = [
        'album-midnight-sun'
      ];

      /*
       * Keep Liked Songs locked.
       */
      puzzleState.lockedLibraryItems = [
        'liked-songs'
      ];

      /*
       * Persist the new progression using
       * the existing Spotifia state system.
       */
      savePuzzleState();

      input.focus();

      /*
       * Keep the success message visible briefly.
       * Then re-render the application.
       *
       * The existing render() function will detect
       * that the current love album is now locked
       * and safely return the user to the profile.
       */
      setTimeout(() => {
        render();
      }, 700);

      return;
    }

    /* =========================
       INCORRECT PASSCODE
    ========================== */

    const randomResponse =
      lovePasscode.wrongResponses[
        Math.floor(
          Math.random() *
          lovePasscode.wrongResponses.length
        )
      ];

    response.textContent =
      randomResponse;

    response.className =
      'puzzle-response';

    void response.offsetWidth;

    response.classList.add(
      'wrong'
    );

    input.focus();
  };

  /* =========================
     ENTER KEY
  ========================== */

  input.addEventListener(
    'keydown',
    (event) => {
      if (
        event.key === 'Enter'
      ) {
        event.preventDefault();

        validateLovePasscode();
      }
    }
  );
}

/* =========================================================
   <3 PUZZLE EVENTS
   ========================================================= */

function setupHeartPuzzle() {

  /*
   * =====================================================
   * FINAL QUESTION ACTIVATION
   * =====================================================
   *
   * Both PLAY controls can activate the final question:
   *
   * 1. The large green Spotify Play button.
   * 2. The PLAY button that replaces the answer input.
   *
   * The puzzle must already be solved before either one
   * can reveal the final question.
   */
  const largePlayButton =
    document.querySelector(
      '.heart-album-play'
    );

  const solvedPlayButton =
    document.querySelector(
      '#heart-play-button'
    );


  const activateFinalQuestion =
    () => {

      if (
        !heartPuzzleSolved
      ) {
        return;
      }


      heartFinalQuestionActive =
        true;


      heartFinalResponse =
        '';

      heartFinalResponseType =
        '';


      render();
    };


  if (largePlayButton) {

    largePlayButton.addEventListener(
      'click',
      activateFinalQuestion
    );

  }


  if (solvedPlayButton) {

    solvedPlayButton.addEventListener(
      'click',
      activateFinalQuestion
    );

  }


  /*
   * If the final question is currently displayed,
   * bind Yes / No and stop here.
   */
  if (
    heartFinalQuestionActive
  ) {

    const yesButton =
      document.querySelector(
        '#heart-final-yes'
      );

    const noButton =
      document.querySelector(
        '#heart-final-no'
      );


  /*
 * YES
 */
if (yesButton) {
  yesButton.addEventListener(
    'click',
    () => {

      /*
       * <3 is the final album.
       *
       * Use the existing unlockAlbum() system so
       * discoveredAlbums, localStorage, and the
       * existing progress UI all stay synchronized.
       *
       * unlockAlbum() is already idempotent, so
       * album-heart can only be added once.
       */
      unlockAlbum(
        'album-heart'
      );

      /*
       * Keep the existing Yes response exactly
       * as it currently is.
       */
      heartFinalResponse =
        'Yayyy , ok lets fuck';

      heartFinalResponseType =
        'success';

      /*
       * Re-render immediately so the existing
       * Puzzle Progress panel updates from 4/5
       * to 5/5 without refreshing.
       */
      render();
    }
  );
}


    /*
     * NO
     */
    if (noButton) {

      noButton.addEventListener(
        'click',
        () => {

          const responses = [
            'Are you sure?!',
            'You really really sure?',
            'Are you pakka pakkka sure?!'
          ];


          const responseIndex =
            heartNoClickCount %
            responses.length;


          heartFinalResponse =
            responses[
              responseIndex
            ];


          heartFinalResponseType =
            'wrong';


          heartNoClickCount +=
            1;


          render();

        }
      );

    }


    return;
  }


  /*
   * =====================================================
   * ORIGINAL <3 BINARY PUZZLE
   * =====================================================
   */

  const input =
    document.querySelector(
      '#heart-answer-input'
    );


  const checkButton =
    document.querySelector(
      '#heart-check-button'
    );


  const response =
    document.querySelector(
      '#heart-puzzle-response'
    );


  /*
   * If the puzzle is already solved,
   * there is no input to validate.
   */
  if (
    heartPuzzleSolved ||
    !input ||
    !response
  ) {
    return;
  }


  const validateHeartPuzzle =
    () => {

      /*
       * Prevent accidental duplicate
       * submissions after solving.
       */
      if (
        heartPuzzleSolved
      ) {
        return;
      }


      /*
       * Remember what was entered.
       */
      heartPuzzleValue =
        input.value;


      /*
       * Normalize the answer.
       *
       * PLAY
       * play
       * Play
       *
       * are all accepted.
       */
      const submitted =
        heartPuzzleValue
          .trim()
          .toUpperCase();


      /*
       * =================================================
       * CORRECT ANSWER
       * =================================================
       */

      if (
        submitted ===
        heartPuzzle.answer
      ) {

        heartPuzzleSolved =
          true;


        heartPuzzleValue =
          heartPuzzle.answer;


        heartPuzzleResponse =
          heartPuzzle.correctResponse;


        heartPuzzleResponseType =
          'success';


        /*
         * Remove Check immediately.
         */
        if (checkButton) {

          checkButton.remove();

        }


        /*
         * Show the success message.
         */
        response.textContent =
          heartPuzzleResponse;


        response.className =
          'puzzle-response success';


        /*
         * Re-render so the input becomes
         * the clickable PLAY button.
         */
        setTimeout(
          () => {

            if (
              currentView === 'album' &&
              currentAlbumId === 'album-heart'
            ) {

              render();

            }

          },
          300
        );


        return;
      }


      /*
       * =================================================
       * WRONG ANSWER
       * =================================================
       */

      const responseIndex =
        heartPuzzleWrongAttempts %
        heartPuzzle
          .wrongResponses
          .length;


      heartPuzzleResponse =
        heartPuzzle
          .wrongResponses[
            responseIndex
          ];


      heartPuzzleWrongAttempts +=
        1;


      heartPuzzleResponseType =
        'wrong';


      response.textContent =
        heartPuzzleResponse;


      response.className =
        'puzzle-response wrong';


      /*
       * Restart animation.
       */
      void response.offsetWidth;

      response.classList.add(
        'wrong'
      );


      input.focus();
    };


  /*
   * Check button.
   */
  if (checkButton) {

    checkButton.addEventListener(
      'click',
      validateHeartPuzzle
    );

  }


  /*
   * Enter key.
   */
  input.addEventListener(
    'keydown',
    (event) => {

      if (
        event.key === 'Enter'
      ) {

        event.preventDefault();

        validateHeartPuzzle();

      }

    }
  );

}


/* =========================================================
   EVENTS
   ========================================================= */

function bindEvents() {


  /* -------------------------------
     Play button
  -------------------------------- */

  const playButton =
    document.querySelector(
      '#play-toggle'
    );


  if (playButton) {

    let playing = true;


    playButton.onclick =
      () => {

        playing =
          !playing;

        playButton.innerHTML =
          icon(
            playing
              ? 'pause'
              : 'play',
            19
          );
      };
  }


  /* -------------------------------
     Player progress
  -------------------------------- */

  const progress =
    document.querySelector(
      '#progress'
    );


  if (progress) {

    progress.oninput =
      (event) => {

        const n =
          Number(
            event.target.value
          );

        const currentTime =
          document.querySelector(
            '#current-time'
          );


        if (!currentTime) {
          return;
        }


        currentTime.textContent =
          `${Math.floor(n / 60)}:${String(
            n % 60
          ).padStart(2, '0')}`;
      };
  }


  /* -------------------------------
     Show all
  -------------------------------- */

  const showAll =
    document.querySelector(
      '#show-all'
    );


  if (showAll) {

    showAll.onclick =
      () => {

        document
          .querySelector(
            '.artists-section'
          )
          ?.classList.toggle(
            'showing-all'
          );
      };
  }


  /* -------------------------------
     Artist cards
  -------------------------------- */

  document
    .querySelectorAll(
      '.artist-card'
    )
    .forEach((button) => {

      button.onclick =
        () => {

          button.classList.toggle(
            'selected'
          );
        };

    });


  /* -------------------------------
     Library
  -------------------------------- */

  document
    .querySelectorAll(
      '[data-library-item]'
    )
    .forEach((button) => {

      const itemId =
        button.dataset.libraryItem;


      button.onclick =
        () => {


          /* =========================
             LIKED SONGS
          ========================== */

          if (
            itemId ===
            'liked-songs'
          ) {

            if (
              isLibraryItemLocked(
                'liked-songs'
              )
            ) {

              showToast(
                "You've already been here."
              );

              return;
            }


            navigateTo(
              'liked-songs'
            );

            return;
          }


          /* =========================
   ALBUM
========================== */

const album =
  siteData.albums.find(
    (item) =>
      item.id === itemId
  );


if (!album) {
  return;
}


/*
 * =====================================================
 * LOCKED ALBUM
 * =====================================================
 *
 * There are two different locked states.
 *
 * 1. Never visited:
 *    Keep the existing locked message.
 *
 * 2. Previously visited:
 *    Show "You've already been here."
 */
if (
  !isAlbumUnlocked(
    album.id
  )
) {

  if (
    isAlbumVisited(
      album.id
    )
  ) {

    showToast(
      "You've already been here."
    );

  } else {

    showToast(
      "Something tells me you haven't unlocked this yet."
    );

  }

  return;
}


/*
 * Currently unlocked.
 *
 * navigateTo() automatically records the album
 * as visited.
 */
        navigateTo(
          'album',
           album.id
          );

        };

    });


  /* -------------------------------
     Back
  -------------------------------- */

  const navBack =
    document.querySelector(
      '#nav-back'
    );


  if (navBack) {

    navBack.onclick =
      () => {

        if (
          currentView !==
          'profile'
        ) {

          navigateTo(
            'profile'
          );

        } else {

          window.history.back();

        }

      };
  }


  /* -------------------------------
     Forward
  -------------------------------- */

  const navForward =
    document.querySelector(
      '#nav-forward'
    );


  if (navForward) {

    navForward.onclick =
      () => {
        window.history.forward();
      };
  }


  /* -------------------------------
     Home
  -------------------------------- */

  const home =
    document.querySelector(
      '.home'
    );


  if (home) {

    home.onclick =
      () => {
        navigateTo(
          'profile'
        );
      };
  }


  /* -------------------------------
     Puzzle 01
  -------------------------------- */

  setupPuzzle01();

  /* -------------------------------
   Love playlist passcode
-------------------------------- */
  setupLovePasscode();

  setupMidnightSunPuzzle();

  setupMidnightSunFinalPuzzle();

  setupMidnightSunShadowPuzzle();

  setupMidnightSunCodewordPuzzle();

  setupBlrMathPuzzle();

  setupBlrKeyPuzzle();

  setupHeartPuzzle();

  setupBlrCipherPuzzle();

}



/* =========================================================
   CSS FOR LOVE PLAYLIST
   ========================================================= */

function injectLovePlaylistStyles() {

  if (
    document.querySelector(
      '#love-playlist-styles'
    )
  ) {
    return;
  }


  const style =
    document.createElement(
      'style'
    );


  style.id =
    'love-playlist-styles';


  style.textContent = `

    /* =================================================
       LOVE PLAYLIST PAGE
    ================================================= */

    .love-album-page {
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 0 34px 120px;
      background:
        linear-gradient(
          180deg,
          rgba(120, 72, 63, 0.88) 0%,
          rgba(62, 35, 32, 0.88) 32%,
          rgba(18, 18, 18, 1) 57%
        );
    }


    /* =================================================
       HEADER
    ================================================= */

    .love-album-header {
      display: flex;
      align-items: flex-end;
      gap: 32px;
      padding: 54px 0 38px;
      min-height: 335px;
    }


    .love-album-art {
      width: 290px;
      height: 290px;
      flex: 0 0 290px;
      overflow: hidden;
      border-radius: 7px;
      background: #282828;
      box-shadow:
        0 12px 32px rgba(0, 0, 0, 0.35);
    }


    .love-album-art img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }


    .love-album-info {
      padding-bottom: 7px;
      min-width: 0;
    }


    .love-album-info small {
      display: block;
      margin-bottom: 12px;
      color: rgba(255,255,255,0.88);
      font-size: 14px;
      font-weight: 600;
    }


    .love-album-info h1 {
      margin: 0 0 16px;
      color: white;
      font-size: clamp(64px, 7vw, 104px);
      line-height: 0.9;
      letter-spacing: -5px;
      font-weight: 800;
    }


    .love-description {
      margin: 0 0 20px;
      color: rgba(255,255,255,0.78);
      font-size: 17px;
      line-height: 1.4;
    }


    .love-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      color: rgba(255,255,255,0.72);
      font-size: 14px;
    }


    .love-meta strong {
      color: white;
    }


    .love-avatar {
      width: 27px;
      height: 27px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #111;
      color: white;
      font-size: 12px;
      font-weight: 700;
      margin-right: 1px;
    }


    /* =================================================
       CONTROLS
    ================================================= */

    .love-controls {
      display: flex;
      align-items: center;
      gap: 23px;
      min-height: 86px;
    }


    .love-play-button {
      width: 62px;
      height: 62px;
      border: 0;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #1ed760;
      color: #000;
      cursor: pointer;
      transition:
        transform 0.16s ease;
    }


    .love-play-button:hover {
      transform: scale(1.05);
    }


    .love-control {
      width: 28px;
      height: 38px;
      padding: 0;
      border: 0;
      background: transparent;
      color: rgba(255,255,255,0.68);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }


    .love-control:hover {
      color: white;
    }


    .love-control .icon,
    .love-play-button .icon {
      stroke: currentColor;
      fill: none;
    }


    .love-play-button .icon {
      fill: currentColor;
      stroke: none;
      margin-left: 3px;
    }


    .love-controls-spacer {
      flex: 1;
    }


    .custom-order {
      border: 0;
      background: transparent;
      color: rgba(255,255,255,0.68);
      font: inherit;
      font-size: 14px;
      cursor: pointer;
      white-space: nowrap;
    }


    .custom-order:hover {
      color: white;
    }


    /* =================================================
       SONG TABLE HEADER
    ================================================= */

    .love-song-header {
      display: grid;
      grid-template-columns:
        42px
        minmax(280px, 1.6fr)
        minmax(150px, 1fr)
        minmax(130px, 0.8fr)
        75px;

      align-items: center;

      height: 52px;

      border-bottom:
        1px solid rgba(255,255,255,0.1);

      color: rgba(255,255,255,0.65);
      font-size: 13px;
    }


    .love-header-number {
      text-align: center;
    }


    .love-header-title,
    .love-header-album,
    .love-header-date {
      padding-left: 14px;
    }


    .love-header-duration {
      display: flex;
      justify-content: center;
    }


    /* =================================================
       SONG ROW
    ================================================= */

    .love-song-row {
      display: grid;

      grid-template-columns:
        42px
        minmax(280px, 1.6fr)
        minmax(150px, 1fr)
        minmax(130px, 0.8fr)
        75px;

      align-items: center;

      min-height: 76px;

      border-radius: 5px;

      color: rgba(255,255,255,0.68);

      transition:
        background 0.15s ease,
        color 0.15s ease;
    }


    .love-song-row:hover {
      background: rgba(255,255,255,0.08);
      color: white;
    }


    .love-song-number {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }


    .song-hover-play {
      display: none;
      position: absolute;
    }


    .love-song-row:hover
    .song-number {
      display: none;
    }


    .love-song-row:hover
    .song-hover-play {
      display: flex;
    }


    .love-song-main {
      display: flex;
      align-items: center;
      gap: 14px;
      min-width: 0;
      padding-left: 14px;
    }


    .love-song-image,
    .love-song-placeholder {
      width: 48px;
      height: 48px;
      flex: 0 0 48px;
      border-radius: 4px;
    }


    .love-song-image {
      object-fit: cover;
      display: block;
    }


    .love-song-placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      background:
        linear-gradient(
          135deg,
          #333,
          #171717
        );
      color: rgba(255,255,255,0.4);
    }


    .love-song-placeholder .icon {
      stroke: currentColor;
      fill: none;
    }


    .love-song-title {
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }


    .love-song-title strong {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: rgba(255,255,255,0.95);
      font-size: 15px;
      font-weight: 500;
    }


    .love-song-title span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: rgba(255,255,255,0.58);
      font-size: 13px;
    }


    .love-song-album,
    .love-song-date {
      padding-left: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
    }


    .love-song-duration {
      text-align: center;
      font-size: 14px;
    }


    /* =================================================
       PASSCODE
    ================================================= */

    .love-passcode {
      width: min(620px, 100%);
      margin: 42px 0 20px;
      padding: 24px 0 12px;
      border-top:
        1px solid rgba(255,255,255,0.08);
    }


    .love-passcode label {
      display: block;
      margin-bottom: 11px;
      color: rgba(255,255,255,0.86);
      font-size: 14px;
      font-weight: 600;
    }


    .love-passcode input {
      width: 100%;
      height: 48px;
      box-sizing: border-box;
      padding: 0 15px;

      border:
        1px solid rgba(255,255,255,0.13);

      border-radius: 6px;

      outline: none;

      background:
        rgba(255,255,255,0.055);

      color: white;

      font: inherit;
      font-size: 14px;

      transition:
        border-color 0.18s ease,
        background 0.18s ease;
    }


    .love-passcode input::placeholder {
      color: rgba(255,255,255,0.38);
    }


    .love-passcode input:focus {
      border-color:
        rgba(139,92,246,0.75);

      background:
        rgba(255,255,255,0.075);
    }
    
    .love-passcode .puzzle-response {
      margin-top: 12px;
      color: rgba(190,175,220,0.72);
      font-size: 13px;
      line-height: 1.4;
      min-height: 18px;
    }

    .love-passcode .puzzle-response.success {
      color: rgba(190,175,220,0.78);
    }

    .love-passcode .puzzle-response.wrong {
      color: rgba(179,179,179,0.72);
    }


    /* =================================================
       LOCKED SIDEBAR
    ================================================= */

    .library-item-locked {
      opacity: 0.48;
      position: relative;
    }


    .library-item-locked:hover {
      opacity: 0.68;
    }


    .library-item-locked
    .library-lock {
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }


    .library-item-locked
    .library-lock .icon {
      stroke: currentColor;
      fill: none;
    }


    /* =================================================
       TOAST
    ================================================= */

    .spotifia-toast {
      position: fixed;
      left: 50%;
      bottom: 96px;
      z-index: 9999;

      transform:
        translate(-50%, 12px);

      opacity: 0;

      pointer-events: none;

      padding: 11px 16px;

      border-radius: 8px;

      background:
        rgba(32,32,38,0.96);

      border:
        1px solid rgba(255,255,255,0.09);

      color:
        rgba(255,255,255,0.9);

      font-size: 13px;

      box-shadow:
        0 12px 35px rgba(0,0,0,0.35);

      transition:
        opacity 0.2s ease,
        transform 0.2s ease;
    }


    .spotifia-toast.show {
      opacity: 1;
      transform:
        translate(-50%, 0);
    }


    /* =================================================
       PUZZLE ANIMATIONS
    ================================================= */

    .puzzle-response.wrong {
      animation:
        puzzle-wrong 0.28s ease both;
    }


    .puzzle-response.success {
      animation:
        puzzle-success 0.35s ease both;
    }


    @keyframes puzzle-wrong {

      from {
        opacity: 0;
        transform: translateY(6px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }

    }


    @keyframes puzzle-success {

      from {
        opacity: 0;
        transform: translateY(7px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }

    }


    /* =================================================
       MOBILE
    ================================================= */

    @media (max-width: 900px) {

      .love-album-page {
        padding-left: 22px;
        padding-right: 22px;
      }


      .love-album-header {
        min-height: auto;
        padding-top: 32px;
        flex-direction: column;
        align-items: flex-start;
      }


      .love-album-art {
        width: 220px;
        height: 220px;
        flex-basis: 220px;
      }


      .love-album-info h1 {
        font-size: 64px;
      }


      .love-song-header {
        grid-template-columns:
          35px
          minmax(220px, 1.5fr)
          minmax(120px, 1fr)
          70px;
      }


      .love-song-row {
        grid-template-columns:
          35px
          minmax(220px, 1.5fr)
          minmax(120px, 1fr)
          70px;
      }


      .love-header-date,
      .love-song-date {
        display: none;
      }

    }


    @media (max-width: 650px) {

      .love-album-header {
        gap: 20px;
      }


      .love-album-art {
        width: 170px;
        height: 170px;
        flex-basis: 170px;
      }


      .love-album-info h1 {
        font-size: 54px;
        letter-spacing: -3px;
      }


      .love-description {
        font-size: 14px;
      }


      .love-controls {
        gap: 15px;
      }


      .love-controls .love-control:nth-of-type(3),
      .love-controls .love-control:nth-of-type(4) {
        display: none;
      }


      .custom-order {
        display: none;
      }


      .love-song-header {
        grid-template-columns:
          30px
          minmax(210px, 1fr)
          70px;
      }


      .love-song-row {
        grid-template-columns:
          30px
          minmax(210px, 1fr)
          70px;
      }


      .love-header-album,
      .love-song-album {
        display: none;
      }

    }
    /* =================================================
   MIDNIGHT SUN PUZZLE
   ================================================= */
  /* =================================================
   MIDNIGHT SUN SPOTIFY PLAYLIST PAGE
================================================= */

.midnight-sun-page {
  width: 100%;
  min-height: 100%;
  padding: 0 0 100px;
  box-sizing: border-box;
  overflow-x: hidden;
}


/* =================================================
   HERO / PLAYLIST HEADER
================================================= */

/* =================================================
   MIDNIGHT SUN
   SPOTIFY-STYLE PLAYLIST PAGE
================================================= */

/* =================================================
   HERO / PLAYLIST HEADER
================================================= */

.midnight-sun-hero {
  width: 100%;
  min-height: 330px;

  padding:
    30px
    36px;

  box-sizing: border-box;

  display: flex;
  align-items: center;

  gap: 34px;

  background:
    linear-gradient(
      180deg,
      #273b91 0%,
      #24367d 58%,
      #202f6d 100%
    );

  overflow: hidden;
}


/* =================================================
   ALBUM COVER
================================================= */

.midnight-sun-cover {
  width: 300px;
  height: 300px;

  flex: 0 0 300px;

  overflow: hidden;

  border-radius: 6px;

  background: #181818;

  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.28);
}

.midnight-sun-cover img {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;
}


/* =================================================
   HERO TEXT
================================================= */

.midnight-sun-meta {
  min-width: 0;
  max-width: 100%;

  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0;
}

.midnight-sun-type {
  margin-bottom: 12px;

  color:
    rgba(255, 255, 255, 0.94);

  font-size: 16px;

  font-weight: 600;

  line-height: 1.2;
}


/* =================================================
   MIDNIGHT SUN TITLE
================================================= */

.midnight-sun-meta h1 {
  width: 100%;
  max-width: 100%;

  margin: 0;

  color: #ffffff;

  /*
   * Large enough to feel like Spotify,
   * but constrained so it can never escape
   * the available content width.
   */
  font-size:
    clamp(58px, 6vw, 82px);

  line-height: 0.95;

  letter-spacing: -3px;

  font-weight: 800;

  white-space: nowrap;

  overflow: hidden;

  text-overflow: clip;
}


/* =================================================
   DESCRIPTION
================================================= */

.midnight-sun-description {
  max-width: 760px;

  margin:
    18px
    0
    16px;

  color:
    rgba(210, 220, 255, 0.82);

  font-size: 17px;

  line-height: 1.35;

  font-weight: 500;
}


/* =================================================
   CREATOR / META ROW
================================================= */

.midnight-sun-creator {
  display: flex;

  align-items: center;

  flex-wrap: wrap;

  gap: 7px;

  color:
    rgba(255, 255, 255, 0.72);

  font-size: 14px;

  line-height: 1.2;
}

.midnight-sun-creator strong {
  color: #ffffff;

  font-weight: 700;
}

.midnight-sun-avatar {
  width: 30px;
  height: 30px;

  flex: 0 0 30px;

  display: flex;

  align-items: center;
  justify-content: center;

  margin-right: 2px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle at 35% 30%,
      #777 0%,
      #222 42%,
      #050505 100%
    );

  border:
    2px solid
    rgba(255, 255, 255, 0.18);

  color: #ffffff;

  font-size: 11px;

  font-weight: 700;
}


/* =================================================
   ACTION BAR
================================================= */

.midnight-sun-actions {
  min-height: 92px;

  padding:
    14px
    32px;

  box-sizing: border-box;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 20px;

  background:
    linear-gradient(
      180deg,
      rgba(29, 43, 95, 0.96) 0%,
      rgba(25, 31, 64, 0.96) 100%
    );
}

.midnight-sun-actions-left,
.midnight-sun-actions-right {
  display: flex;

  align-items: center;

  gap: 18px;
}

.midnight-sun-actions-right {
  gap: 16px;
}


/* =================================================
   PLAY BUTTON
================================================= */

.midnight-sun-play {
  width: 64px;
  height: 64px;

  flex: 0 0 64px;

  padding: 0;

  border: 0;

  border-radius: 50%;

  display: flex;

  align-items: center;
  justify-content: center;

  background:
    #1ed760;

  color: #000000;

  cursor: pointer;

  transition:
    transform 0.16s ease,
    background 0.16s ease;
}

.midnight-sun-play:hover {
  transform: scale(1.04);

  background:
    #2ee76d;
}

.midnight-sun-play .icon {
  margin-left: 3px;
}


/* =================================================
   ACTION BUTTONS
================================================= */

.midnight-sun-control {
  width: 34px;
  height: 40px;

  padding: 0;

  border: 0;

  background: transparent;

  color:
    rgba(255, 255, 255, 0.68);

  display: flex;

  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition:
    color 0.16s ease,
    transform 0.16s ease;
}

.midnight-sun-control:hover {
  color: #ffffff;

  transform: scale(1.04);
}


/* =================================================
   SMALL ARTWORK BUTTON
================================================= */

.midnight-sun-art-button {
  width: 64px;
  height: 64px;

  flex: 0 0 64px;

  overflow: hidden;

  border:
    3px solid
    rgba(255, 255, 255, 0.65);

  border-radius: 10px;

  background: transparent;
}

.midnight-sun-art-button img {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;
}

.midnight-sun-art-button:hover {
  border-color: #ffffff;

  transform: none;
}


/* =================================================
   CUSTOM ORDER
================================================= */

.midnight-custom-order {
  color:
    rgba(255, 255, 255, 0.72);

  font-size: 15px;

  font-weight: 600;

  white-space: nowrap;
}


/* =================================================
   PUZZLE AREA
================================================= */

.midnight-sun-puzzle {
  width: 100%;

  padding:
    34px
    36px
    80px;

  box-sizing: border-box;

  background:
    #121212;
}


/* =================================================
   SCRAMBLED WORDS
================================================= */

.midnight-word-grid {
  display: grid;

  grid-template-columns:
    repeat(6, minmax(0, 1fr));

  gap: 14px;

  width: 100%;
}

.midnight-word-card {
  min-height: 74px;

  display: flex;

  align-items: center;
  justify-content: center;

  padding: 12px;

  box-sizing: border-box;

  border:
    1px solid
    rgba(255, 255, 255, 0.09);

  border-radius: 10px;

  background:
    rgba(255, 255, 255, 0.035);

  color:
    rgba(255, 255, 255, 0.82);

  font-size: 13px;

  font-weight: 600;

  letter-spacing: 0.5px;

  text-align: center;

  transition:
    background 0.18s ease,
    border-color 0.18s ease,
    transform 0.18s ease;
}

.midnight-word-card:hover {
  background:
    rgba(255, 255, 255, 0.055);

  border-color:
    rgba(139, 92, 246, 0.35);

  transform:
    translateY(-1px);
}


/* =================================================
   UNSCRAMBLE SECTION
================================================= */

.midnight-unscramble-section {
  margin-top: 34px;
}

.midnight-section-title {
  margin-bottom: 14px;

  color:
    rgba(255, 255, 255, 0.72);

  font-size: 14px;

  font-weight: 600;
}


/* =================================================
   ANSWER GRID
================================================= */

.midnight-answer-grid {
  display: grid;

  grid-template-columns:
    repeat(6, minmax(0, 1fr));

  gap: 14px;
}

.midnight-answer-input {
  width: 100%;
  height: 48px;

  box-sizing: border-box;

  padding:
    0
    12px;

  border:
    1px solid
    rgba(255, 255, 255, 0.10);

  border-radius: 8px;

  outline: none;

  background:
    rgba(255, 255, 255, 0.035);

  color:
    rgba(255, 255, 255, 0.88);

  font-family: inherit;

  font-size: 13px;

  text-align: center;

  transition:
    border-color 0.18s ease,
    background 0.18s ease;
}

.midnight-answer-input:focus {
  border-color:
    rgba(139, 92, 246, 0.72);

  background:
    rgba(255, 255, 255, 0.065);
}


/* =================================================
   LOCKED INPUTS
================================================= */

.midnight-input-locked,
.midnight-answer-input:disabled,
.midnight-final-input:disabled {
  opacity: 0.62;

  cursor: default;

  border-color:
    rgba(255, 255, 255, 0.14);

  background:
    rgba(255, 255, 255, 0.045);

  color:
    rgba(255, 255, 255, 0.82);

  box-shadow:
    inset 0 0 0 1px
    rgba(139, 92, 246, 0.08);
}


/* =================================================
   CHECK BUTTON
================================================= */

.midnight-check-button {
  margin-top: 18px;

  min-width: 82px;
  height: 38px;

  padding:
    0
    18px;

  border:
    1px solid
    rgba(255, 255, 255, 0.12);

  border-radius: 7px;

  background:
    rgba(255, 255, 255, 0.055);

  color:
    rgba(255, 255, 255, 0.72);

  font-family: inherit;

  font-size: 13px;

  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.18s ease,
    border-color 0.18s ease,
    color 0.18s ease;
}

.midnight-check-button:hover {
  background:
    rgba(255, 255, 255, 0.085);

  border-color:
    rgba(139, 92, 246, 0.45);

  color:
    rgba(255, 255, 255, 0.90);
}

.midnight-unscramble-section
.puzzle-response {
  margin-top: 16px;
}


/* =================================================
   FINAL PUZZLE
================================================= */

.midnight-final-puzzle {
  width: min(680px, 100%);

  margin:
    50px
    auto
    0;

  padding: 28px;

  box-sizing: border-box;

  border:
    1px solid
    rgba(255, 255, 255, 0.09);

  border-radius: 10px;

  background:
    rgba(255, 255, 255, 0.025);

  animation:
    midnight-final-reveal
    0.4s ease both;
}

.midnight-final-question {
  margin-bottom: 18px;

  color:
    rgba(255, 255, 255, 0.78);

  font-size: 15px;

  line-height: 1.6;

  text-align: center;
}

.midnight-final-input {
  width: 100%;
  height: 46px;

  box-sizing: border-box;

  padding:
    0
    14px;

  border:
    1px solid
    rgba(255, 255, 255, 0.10);

  border-radius: 8px;

  outline: none;

  background:
    rgba(255, 255, 255, 0.035);

  color:
    rgba(255, 255, 255, 0.88);

  font-family: inherit;

  font-size: 13px;

  text-align: center;
}

.midnight-final-input:focus {
  border-color:
    rgba(139, 92, 246, 0.72);

  background:
    rgba(255, 255, 255, 0.065);
}

.midnight-final-puzzle
.midnight-check-button {
  display: block;

  margin:
    16px
    auto
    0;
}

.midnight-final-puzzle
.puzzle-response {
  text-align: center;

  margin-top: 16px;
}


/* =================================================
   REVEAL ANIMATION
================================================= */

@keyframes midnight-final-reveal {
  from {
    opacity: 0;

    transform:
      translateY(8px);
  }

  to {
    opacity: 1;

    transform:
      translateY(0);
  }
}


/* =================================================
   RESPONSIVE
================================================= */

@media (max-width: 1100px) {

  .midnight-sun-hero {
    min-height: 300px;

    padding:
      26px
      30px;

    gap: 28px;
  }

  .midnight-sun-cover {
    width: 250px;
    height: 250px;

    flex-basis: 250px;
  }

  .midnight-sun-meta h1 {
    font-size:
      clamp(52px, 6.5vw, 72px);

    letter-spacing: -3px;
  }

  .midnight-sun-description {
    font-size: 16px;
  }

  .midnight-sun-puzzle {
    padding-left: 30px;
    padding-right: 30px;
  }
}


@media (max-width: 900px) {

  .midnight-sun-hero {
    min-height: 280px;

    padding:
      24px
      26px;

    gap: 24px;
  }

  .midnight-sun-cover {
    width: 220px;
    height: 220px;

    flex-basis: 220px;
  }

  .midnight-sun-meta h1 {
    font-size: 56px;

    letter-spacing: -2.5px;
  }

  .midnight-word-grid,
  .midnight-answer-grid {
    grid-template-columns:
      repeat(3, minmax(0, 1fr));
  }

  .midnight-sun-actions {
    padding:
      14px 24px;
  }
}


@media (max-width: 700px) {

  .midnight-sun-hero {
    min-height: auto;

    padding:
      28px
      22px
      30px;

    flex-direction: column;

    align-items: flex-start;

    gap: 22px;
  }

  .midnight-sun-cover {
    width: 210px;
    height: 210px;

    flex-basis: 210px;
  }

  .midnight-sun-meta {
    width: 100%;
  }

  .midnight-sun-meta h1 {
    width: 100%;

    font-size:
      clamp(42px, 13vw, 58px);

    letter-spacing: -2px;

    white-space: normal;

    overflow: visible;
  }

  .midnight-sun-description {
    max-width: 100%;

    font-size: 15px;

    margin-top: 16px;
  }

  .midnight-sun-creator {
    line-height: 1.5;
  }

  .midnight-sun-actions {
    min-height: auto;

    padding:
      16px
      18px;

    flex-wrap: wrap;

    align-items: center;

    gap: 14px;
  }

  .midnight-sun-actions-left,
  .midnight-sun-actions-right {
    gap: 14px;
  }

  .midnight-sun-actions-right {
    margin-left: auto;
  }

  .midnight-custom-order {
    display: none;
  }

  .midnight-sun-puzzle {
    padding:
      30px
      20px
      60px;
  }
}


@media (max-width: 600px) {

  .midnight-word-grid,
  .midnight-answer-grid {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));

    gap: 10px;
  }

  .midnight-word-card {
    min-height: 64px;

    font-size: 12px;
  }

  .midnight-sun-actions-left {
    width: 100%;

    justify-content: space-between;
  }

  .midnight-sun-actions-right {
    width: 100%;

    justify-content: flex-end;
  }

  .midnight-sun-play {
    width: 58px;
    height: 58px;

    flex-basis: 58px;
  }

  .midnight-sun-art-button {
    width: 58px;
    height: 58px;

    flex-basis: 58px;
  }

  .midnight-final-puzzle {
    padding: 22px;

    margin-top: 40px;
  }
}

/* =================================================
   GLOBAL DARK BACKGROUND
   Keep the entire application background uniform.
================================================= */

html,
body {
  background: #121212 !important;
}

#app {
  background: #121212 !important;
}

.shell {
  background: #121212 !important;
}

.workspace {
  background: #121212 !important;
}

.main.panel {
  background: #121212 !important;
}

.midnight-sun-page {
  background: #121212 !important;
}

.midnight-sun-puzzle {
  background: #121212 !important;
}
  `;


  document.head.appendChild(style);
}


/* =========================================================
   MAIN RENDER
   ========================================================= */

/* =========================================================
   MAIN RENDER
   ========================================================= */

const app =
  document.querySelector('#app');


function render() {

  if (!historyInitialized) {

    window.history.replaceState(
      {
        view: 'profile',
        albumId: null,
      },
      '',
      window.location.href
    );

    historyInitialized = true;
  }


  let centerContent;


  /* ===============================
     PROFILE
  ================================ */

  if (
    currentView ===
    'profile'
  ) {

    centerContent =
      renderProfile();

  }


  /* ===============================
     LIKED SONGS
  ================================ */

  else if (
    currentView ===
    'liked-songs'
  ) {

    centerContent =
      renderLikedSongs();

  }


  /* ===============================
     ALBUM
  ================================ */

  else if (
    currentView ===
    'album'
  ) {

    /*
     * Security against stale history:
     * locked albums can never be opened.
     */

    if (
      !currentAlbumId ||
      !isAlbumUnlocked(
        currentAlbumId
      )
    ) {

      currentView =
        'profile';

      currentAlbumId =
        null;

      centerContent =
        renderProfile();

    }


    /*
     * love
     */

    else if (
      currentAlbumId ===
      'album-love-name'
    ) {

      centerContent =
        renderLoveAlbum();

    }


    /*
     * midnight sun
     */

    else if (
      currentAlbumId ===
      'album-midnight-sun'
    ) {

      centerContent =
        renderMidnightSun();

    }


    /*
     * BLR
     */

    else if (
      currentAlbumId ===
      'album-blr'
    ) {

      centerContent =
        renderBlrAlbum();

    }


    /*
     * <3
     */

    else if (
      currentAlbumId ===
      'album-heart'
    ) {

      centerContent =
        renderHeartAlbum();

    }


    /*
     * Unknown album fallback.
     */

    else {

      centerContent =
        renderProfile();

    }

  }


  else {

    centerContent =
      renderProfile();

  }


  /* ===============================
     FULL APPLICATION
  ================================ */

  app.innerHTML = `

    ${renderSvgSprite()}

    <div class="shell">

      ${renderTopbar()}

      <div class="workspace">

        ${renderSidebar()}

        ${centerContent}

        ${renderPuzzlePanel()}

      </div>

      ${renderPlayer()}

    </div>

  `;


  bindEvents();

}

/* =========================================================
   START
   ========================================================= */

injectLovePlaylistStyles();

render();