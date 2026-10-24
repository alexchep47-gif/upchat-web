const modules = [
  {
    id: 'chat',
    title: 'Messagerie 1-à-1',
    subtitle: 'Style WhatsApp offline',
    icon: '💬',
    color: '#25D366',
    description: 'Envoie des messages texte aux téléphones UpChat à proximité. Accusés de réception et de lecture, indicateur « en train d\'écrire ».'
  },
  {
    id: 'nearby',
    title: 'Découverte automatique',
    subtitle: 'Bluetooth + WiFi Direct',
    icon: '📡',
    color: '#128C7E',
    description: 'Nearby Connections détecte automatiquement les appareils proches et établit une connexion P2P sans configuration.'
  },
  {
    id: 'media',
    title: 'Médias',
    subtitle: 'Photos & vidéos',
    icon: '📷',
    color: '#075E54',
    description: 'Envoie des images compressées et des vidéos. Transfert binaire via Nearby quand les appareils sont connectés.'
  },
  {
    id: 'stories',
    title: 'Stories',
    subtitle: '24 heures',
    icon: '📖',
    color: '#34B7F1',
    description: 'Publie une story (texte ou photo) visible par les contacts à portée. Expiration automatique après 24 h.'
  },
  {
    id: 'groups',
    title: 'Groupes offline',
    subtitle: 'Diffusion locale',
    icon: '👥',
    color: '#53BDEB',
    description: 'Crée un groupe avec les appareils à proximité. Les messages sont diffusés à tous les membres à portée.'
  },
  {
    id: 'mesh',
    title: 'Mode mesh',
    subtitle: 'Relais 1 hop',
    icon: '🔗',
    color: '#128C7E',
    description: 'Si le destinataire n\'est pas connecté, le message peut être relayé par des téléphones intermédiaires.'
  },
  {
    id: 'crypto',
    title: 'Chiffrement local',
    subtitle: 'Hive + AES',
    icon: '🔒',
    color: '#075E54',
    description: 'Les conversations sont stockées uniquement sur ton appareil, chiffrées avec une clé sécurisée.'
  },
  {
    id: 'hybrid',
    title: 'Mode internet optionnel',
    subtitle: 'Hybride',
    icon: '🌐',
    color: '#0EA5E9',
    description: 'Active le mode internet dans Réglages pour préparer Android ↔ iPhone et la longue distance (serveur de signalisation requis).'
  }
];

const grid = document.getElementById('modulesGrid');
const modal = document.getElementById('moduleModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

modules.forEach(m => {
  const card = document.createElement('div');
  card.className = 'module-card';
  card.innerHTML = `
    <div class="module-icon" style="background:${m.color}22;color:${m.color}">${m.icon}</div>
    <div>
      <h3>${m.title}</h3>
      <p>${m.subtitle}</p>
    </div>
  `;
  card.addEventListener('click', () => openModal(m));
  grid.appendChild(card);
});

function openModal(m) {
  modalBody.innerHTML = `
    <div style="font-size:2rem;margin-bottom:8px">${m.icon}</div>
    <h2 style="margin-bottom:4px">${m.title}</h2>
    <p style="color:#64748B;margin-bottom:16px">${m.subtitle}</p>
    <p style="line-height:1.6">${m.description}</p>
  `;
  modal.classList.add('open');
}

modalClose.addEventListener('click', () => modal.classList.remove('open'));
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('open');
});

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});
