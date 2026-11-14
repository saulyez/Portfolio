// All portfolio content lives here. Edit this file to update entries or skills.

const T = {
  fire: '#F08030', water: '#6890F0', grass: '#78C850', electric: '#F8D030', psychic: '#F85888',
  steel: '#B8B8D0', ghost: '#705898', ice: '#98D8D8', ground: '#E0C068', dragon: '#7038F8',
};
const DARK = new Set([T.ghost, T.dragon]);

export const TECH = {
  Python: T.water, JavaScript: T.electric, Java: T.fire, C: T.steel, 'C++': T.steel, Haskell: T.ghost,
  SQL: T.ground, HTML: T.fire, CSS: T.water, React: T.ice, TensorFlow: T.psychic, Keras: T.fire,
  PyTorch: T.fire, 'scikit-learn': T.grass, pandas: T.ghost, NumPy: T.ice, FastAPI: T.grass,
  PostgreSQL: T.water, MySQL: T.ground, SQLite: T.ground, Git: T.fire, GitHub: T.ghost,
  Docker: T.water, Jenkins: T.steel, GCP: T.electric, 'Vertex AI': T.psychic, Gemini: T.dragon,
  MCP: T.dragon, 'VS Code': T.water, IntelliJ: T.dragon, Vite: T.electric, AWS: T.electric,
  Azure: T.water, Cloudflare: T.fire, Linux: T.steel, macOS: T.steel, Windows: T.ice,
  AI: T.psychic, ML: T.psychic, NLP: T.psychic, 'Beautiful Soup': T.grass, Education: T.grass,
};

export const tagStyle = (name) => {
  const bg = TECH[name] ?? T.steel;
  return { background: bg, color: DARK.has(bg) ? '#FFFFFF' : '#283850' };
};

export const KIND_COLOR = { PLAYER: '#D83A2E', QUEST: T.electric, PROJECT: T.water, SCHOOL: T.grass };

export const LINKS = {
  email: 'mailto:saulye26@gmail.com',
  github: 'https://github.com/saulyez',
  linkedin: 'https://www.linkedin.com/in/saul-ye-zheng-7b6482254/',
};

const gh = LINKS.github;
const li = LINKS.linkedin;

export const ENTRIES = [
  { no: '001', cat: 'PLAYER', name: 'SAUL YE ZHENG', kind: 'AI & CS student · Software engineer', tags: ['Python', 'AI', 'ML'], meta: [['HOME', 'San José, Costa Rica'], ['BASE', 'Birmingham, UK'], ['GOAL', 'Be the very best']], text: 'Final-year AI & Computer Science student with a year of industry experience at Lloyds Banking Group, building ML tools, automation and AI integrations. Pura vida!', href: '#top' },
  { no: '002', cat: 'QUEST', name: 'LLOYDS PLACEMENT', kind: 'Software Engineer · Industrial placement', tags: ['Python', 'Jenkins', 'GCP', 'MCP'], meta: [['GUILD', 'Lloyds Banking Group'], ['WHERE', 'Edinburgh, UK'], ['WHEN', 'Jun 2025 – Jun 2026'], ['STATUS', '★ Complete']], text: 'Automated work for the Chief Security Office in Python, built a multi-stage Jenkins CI/CD pipeline, helped migrate legacy tooling to Google Cloud, and shipped in two-week Scrum sprints.', href: li },
  { no: '003', cat: 'QUEST', name: 'ANCOVA ML INTERN', kind: 'Machine Learning Intern · Pre-university', tags: ['Python', 'TensorFlow', 'SQL'], meta: [['GUILD', 'Ancova Capital Management'], ['WHERE', 'London, UK'], ['WHEN', 'May – Aug 2023'], ['STATUS', '★ Complete']], text: 'Scraped 16 years of market data, managed it in SQL with pandas, and helped build and tune an LSTM model for forecasting market trends.', href: li },
  { no: '004', cat: 'PROJECT', name: 'PENSION-LAND', kind: 'AI RPG game · LBG Hackathon', tags: ['Python', 'React', 'FastAPI', 'Vertex AI', 'Gemini'], meta: [['METHOD', 'RAG on Vertex AI + Gemini 2.0 Flash'], ['MEMORY', 'Per-NPC chat history in SQLite']], text: 'An RPG-style web game where players learn about workplace pensions by chatting with AI NPCs, each grounded in real pension documents instead of made-up answers.', href: gh },
  { no: '005', cat: 'PROJECT', name: 'THREAT-MODEL AI', kind: 'Proof of concept · Lead developer at Lloyds', tags: ['Python', 'MCP', 'AI'], meta: [['BUILT', 'MCP server for an IDE assistant'], ['DOES', 'Edits diagrams from plain language']], text: 'Exposed an enterprise threat-modelling platform as tools an IDE assistant can call, so engineers can create and edit architecture diagrams in plain language from their editor.', href: li },
  { no: '006', cat: 'PROJECT', name: 'ML SECURITY TRIAGE', kind: 'Internal tool at Lloyds', tags: ['Python', 'scikit-learn', 'NLP', 'GCP'], meta: [['METHOD', 'Random forest tuned for precision'], ['IMPACT', '~0.66 FTE of manual review saved']], text: 'Classifies security alerts with NLP and machine learning, replacing a manual review process and freeing the security team for higher-value work.', href: li },
  { no: '007', cat: 'PROJECT', name: 'MARKING CONSISTENCY', kind: 'Education tool', tags: ['JavaScript', 'React', 'Python', 'SQL'], meta: [['METHOD', 'k-nearest neighbours'], ['FOR', 'Module leaders']], text: 'Flags markers who grade too leniently or too harshly, with a React dashboard that surfaces the top outliers for follow-up.', href: gh },
  { no: '008', cat: 'PROJECT', name: 'LSTM FORECAST', kind: 'Time-series model · Ancova', tags: ['Python', 'TensorFlow', 'pandas'], meta: [['METHOD', 'LSTM neural network'], ['DATA', '16 years of market data']], text: 'An LSTM model for forecasting market trends, with tuning and performance optimisation.', href: gh },
  { no: '009', cat: 'PROJECT', name: 'MARKET SCRAPER', kind: 'Data collection · Ancova', tags: ['Python', 'Beautiful Soup', 'SQL'], meta: [['SOURCE', 'Forex Factory, Yahoo Finance'], ['STORE', 'SQL database']], text: 'Collected 16 years of market data with Beautiful Soup and stored it for analysis.', href: gh },
  { no: '010', cat: 'PROJECT', name: 'FIREWALL', kind: 'Networking', tags: ['C', 'Git'], meta: [['GUARDS', 'Multi-threaded TCP server'], ['RULES', 'IP allow-list']], text: 'Controls which IP addresses are allowed to connect to a multi-threaded TCP server.', href: gh },
  { no: '011', cat: 'PROJECT', name: 'INVENTORY MANAGER', kind: 'Business system', tags: ['Java', 'PostgreSQL'], meta: [['FOR', 'Multi-store records shop']], text: 'Inventory management system that tracks stock across a chain of record shops.', href: gh },
  { no: '012', cat: 'PROJECT', name: 'THIS PORTFOLIO', kind: 'Website', tags: ['React', 'CSS', 'Vite'], meta: [['STATUS', 'You are using it']], text: 'The device you are holding right now. Built to learn React and CSS, rebuilt for fun.', href: 'https://github.com/saulyez/Portfolio' },
  { no: '013', cat: 'SCHOOL', name: 'UNIV. OF BIRMINGHAM', kind: 'BSc AI & Computer Science', tags: ['AI', 'ML', 'Haskell'], meta: [['WHERE', 'Birmingham, UK'], ['WHEN', 'Sep 2023 – Jun 2027'], ['GRADE', 'Predicted First Class Honours']], text: 'Top modules: Object-Oriented Programming (86%), Data Structures & Algorithms (79%), Artificial Intelligence (73%).', href: '#top' },
  { no: '014', cat: 'SCHOOL', name: 'KAPLAN', kind: 'Foundation year', tags: ['Education'], meta: [['WHEN', '2023'], ['GRADE', 'First Class Honours with Distinction']], text: 'Foundation year before university. Graduated with First Class Honours and Distinction.', href: '#top' },
  { no: '015', cat: 'SCHOOL', name: 'SAINT MARY', kind: 'Primary to high school · IB Diploma', tags: ['Education'], meta: [['WHEN', '2008 – 2021'], ['PROGRAMME', 'International Baccalaureate'], ['RANK', 'Top IB marks in my cohort']], text: 'Primary through high school, finishing with the International Baccalaureate. Graduated with the highest IB marks in my cohort.', href: '#top' },
];

export const TABS = [
  { label: 'ALL', cat: null },
  { label: 'PROJECTS', cat: 'PROJECT' },
  { label: 'EXPERIENCE', cat: 'QUEST' },
  { label: 'SCHOOLS', cat: 'SCHOOL' },
];

export const SKILLS_A = [['Python', 'LANG'], ['Java', 'LANG'], ['C', 'LANG'], ['C++', 'LANG'], ['JavaScript', 'LANG'], ['Haskell', 'LANG'], ['SQL', 'LANG'], ['HTML', 'LANG'], ['CSS', 'LANG'], ['React', 'FRAMEWORK'], ['FastAPI', 'FRAMEWORK'], ['TensorFlow', 'ML'], ['Keras', 'ML'], ['PyTorch', 'ML'], ['scikit-learn', 'ML'], ['pandas', 'DATA'], ['NumPy', 'DATA']];
export const SKILLS_B = [['Git', 'TOOL'], ['GitHub', 'TOOL'], ['Docker', 'TOOL'], ['Jenkins', 'CI/CD'], ['GCP', 'CLOUD'], ['Vertex AI', 'CLOUD'], ['VS Code', 'EDITOR'], ['IntelliJ', 'EDITOR'], ['Vite', 'TOOL'], ['PostgreSQL', 'DB'], ['MySQL', 'DB'], ['SQLite', 'DB'], ['AWS', 'CLOUD'], ['Azure', 'CLOUD'], ['Cloudflare', 'CLOUD'], ['Linux', 'OS'], ['macOS', 'OS'], ['Windows', 'OS']];

// 16×20 pixel avatar. Each letter maps to a colour in AVATAR_PALETTE.
export const AVATAR = [
  '....KKKKKKKK....',
  '...KHHHHHGHHK...',
  '..KHHHHHGHHHhK..',
  '..KHHHHHHHHHhK..',
  '.KHHHHHHHHHHHhK.',
  '.KHHHGHHHHHHHhK.',
  '.KHHHHHHHHHHHHK.',
  '.KHhSSSSSSSShHK.',
  '.KHSSESSSSESShK.',
  '.KhSSESSSSESSsK.',
  '..KsSSSSSSSSsK..',
  '...KsSSrrSSsK...',
  '..KKWWWWWWWWKK..',
  '.KSKWRRRRRRWKSK.',
  '.KsKWWWWWWwwKsK.',
  '..KKwWWWWWWwKK..',
  '...KPPPPPPPPK...',
  '...KPPpKKpPPK...',
  '...KRRRK.KRRRK..',
  '...KKKKK.KKKKK..',
];

export const AVATAR_PALETTE = {
  '.': 'transparent', K: '#1E2438', H: '#2B2B33', h: '#16161C', G: '#5A5A6A', S: '#F2C79A',
  s: '#D29A6A', E: '#1E2438', W: '#FFFFFF', w: '#C8D0E0', R: '#D83A2E', r: '#A02020',
  P: '#586878', p: '#3A4458',
};
