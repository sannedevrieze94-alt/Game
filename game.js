const STORAGE_KEY = 'odp_v4_fixed_save';

const classes = [
  {
    id:'analist', icon:'🧠', name:'Analist',
    desc:'Sterk in patroonherkenning, dossieropbouw en het vinden van losse signalen.',
    perk:'Vindt makkelijker verborgen bewijs.',
    bonus:{ inzicht:2, samenwerking:1 }
  },
  {
    id:'verbinder', icon:'🤝', name:'Verbinder',
    desc:'Bouwt vertrouwen op, krijgt partners sneller mee en voorkomt ruis.',
    perk:'Krijgt extra voordeel bij overleg en multidisciplinair werken.',
    bonus:{ integriteit:1, samenwerking:2 }
  },
  {
    id:'handhaver', icon:'⚖️', name:'Handhaver',
    desc:'Pakt sneller door, durft lastige beslissingen te nemen en houdt tempo.',
    perk:'Krijgt extra slagkracht bij controles en bestuurlijke interventies.',
    bonus:{ daadkracht:3 }
  }
];

const dossiers = [
  {
    id:1,
    district:'Emmen Centrum',
    title:'Kapsalon met dichte gordijnen',
    npc:{ emoji:'🧥', name:'Naomi', role:'Wijkboa' },
    intro:'Een kapsalon valt op door dichte gordijnen, vreemde werktijden en wisselende medewerkers. Achter in het pand lijken slaapplaatsen te zijn ingericht.',
    stakes:'Arbeidsuitbuiting en onveilige huisvesting.',
    choices:[
      { text:'Start met stille observatie en dossierverrijking.', note:'+ inzicht, kans op verborgen bewijs', effects:{ inzicht:2, risk:1 }, items:['Observatierapport kapsalon'], log:'Je kiest voor een rustige maar sterke dossieropbouw.' },
      { text:'Plan direct een integrale controle met Arbeidsinspectie en brandweer.', note:'+ daadkracht, + samenwerking', effects:{ daadkracht:2, samenwerking:1, risk:2 }, items:['Controleplan kapsalon'], partners:['Arbeidsinspectie','Brandweer'], log:'Je trekt het dossier zichtbaar en stevig open.' },
      { text:'Zoek buiten werktijd contact met een medewerker.', note:'+ integriteit, + inzicht', effects:{ integriteit:2, inzicht:1, risk:1 }, items:['Vertrouwelijke verklaring medewerker'], log:'Een medewerker deelt voorzichtig signalen over druk en afhankelijkheid.' }
    ]
  },
  {
    id:2,
    district:'Bargermeer',
    title:'Garageboxen met nachtelijk verkeer',
    npc:{ emoji:'🚗', name:'Yassin', role:'RIEC-adviseur' },
    intro:'Bij een rij garageboxen rijden laat op de avond bestelbusjes af en aan. Omwonenden melden chemische geur en afgedekte kentekens.',
    stakes:'Ondermijning, opslag of witwasconstructies.',
    choices:[
      { text:'Breng eerst huurstromen, KvK-inschrijvingen en kentekens in kaart.', note:'+ inzicht, + samenwerking', effects:{ inzicht:2, samenwerking:1, risk:1 }, items:['Netwerkanalyse garageboxen'], partners:['RIEC'], log:'Je bouwt een stevig informatiebeeld op.' },
      { text:'Vraag politie voor een zware gezamenlijke controleactie.', note:'+ daadkracht, maar kans op stroevere informatiedeling', effects:{ daadkracht:2, samenwerking:-1, risk:2 }, items:['Briefing zware controle'], partners:['Politie'], log:'De actie is zichtbaar en stevig, maar de terugkoppeling blijft beperkt.' },
      { text:'Benader buurtbewoners zorgvuldig en waarborg hun anonimiteit.', note:'+ integriteit, + samenwerking', effects:{ integriteit:2, samenwerking:1, risk:1 }, items:['Buurtmeldingen garageboxen'], log:'Omwonenden durven meer te vertellen door jouw zorgvuldigheid.' }
    ]
  },
  {
    id:3,
    district:'Klazienaveen',
    title:'Logies boven een restaurant',
    npc:{ emoji:'🏠', name:'Heleen', role:'Jurist OOV' },
    intro:'Leveranciers melden veel bedden boven een restaurant. Mogelijk slapen medewerkers tussen gasflessen en tijdelijke schotten.',
    stakes:'Brandveiligheid, uitbuiting en bestuurlijke handhaving.',
    choices:[
      { text:'Zet brandveiligheid direct centraal en laat brandweer mee beoordelen.', note:'+ daadkracht, + integriteit', effects:{ daadkracht:1, integriteit:2, risk:2 }, items:['Brandveiligheidsrapport logies'], partners:['Brandweer'], log:'Je gebruikt directe veiligheid als ingang voor maatregelen.' },
      { text:'Werk eerst een bestuurlijke route uit met jurist en toezichthouders.', note:'+ inzicht, + samenwerking', effects:{ inzicht:1, samenwerking:2, risk:1 }, items:['Bestuurlijke interventielijn'], partners:['Juridische Zaken'], log:'Je kiest voor houdbaarheid en borging in de opvolging.' },
      { text:'Creëer een veilige meldroute voor werknemers.', note:'+ integriteit, + inzicht', effects:{ integriteit:2, inzicht:1, risk:1 }, items:['Meldroutekaart werknemers'], log:'Werknemers delen pas informatie zodra ze zich veilig voelen.' }
    ]
  },
  {
    id:4,
    district:'Nieuw-Amsterdam',
    title:'Massagepraktijk met schimmige agenda',
    npc:{ emoji:'📁', name:'Frans', role:'Sparringpartner' },
    intro:'Een massagepraktijk staat online met wisselende nummers, andere foto\'s en onduidelijke administratie. De signalen zijn subtiel maar stapelen zich op.',
    stakes:'Seksuele uitbuiting, vergunningkwesties en bestuurlijke gevoeligheid.',
    choices:[
      { text:'Maak eerst een risicoscorekaart en bespreek deze multidisciplinair.', note:'+ inzicht, + samenwerking', effects:{ inzicht:2, samenwerking:2, risk:2 }, items:['Risicoscorekaart massagepraktijk'], partners:['Zorg- en Veiligheidshuis'], log:'Je kiest voor een integrale afweging met breed draagvlak.' },
      { text:'Plan een gerichte bestuurlijke controle op korte termijn.', note:'+ daadkracht, + integriteit', effects:{ daadkracht:2, integriteit:1, risk:2 }, items:['Bestuurlijke controleaanzegging'], log:'De bestuurlijke lijn is duidelijk en snel.' },
      { text:'Verzamel eerst online advertenties en schijnconstructies.', note:'+ inzicht, kans op verborgen bewijs', effects:{ inzicht:2, risk:1 }, items:['Advertentieanalyse massagepraktijk'], log:'Digitale sporen laten terugkerende patronen zien.' }
    ]
  }
];

const sideQuests = [
  { threshold:2, title:'Zijmissie: Signalenoverleg', text:'Je organiseert een kort signalenoverleg waardoor lijnen korter worden.', reward:{ samenwerking:1 }, rewardText:'Samenwerking +1' },
  { threshold:3, title:'Zijmissie: Dashboardprototype', text:'Je laat een dashboardprototype zien, waardoor partners risico\'s sneller herkennen.', reward:{ inzicht:1, daadkracht:1 }, item:'Dashboardprototype', rewardText:'Inzicht +1, Daadkracht +1' }
];

function freshState(){
  return {
    selectedClass:null,
    classApplied:false,
    stats:{ inzicht:4, integriteit:4, samenwerking:4, daadkracht:4 },
    inventory:[],
    partners:['Gemeente Emmen'],
    completed:[],
    logs:['Nieuwe campagne gestart.'],
    risk:0,
    sideQuestClaimed:[]
  };
}

let state = loadState() || freshState();

const el = {
  classGrid:document.getElementById('classGrid'),
  startBtn:document.getElementById('startBtn'),
  saveBtn:document.getElementById('saveBtn'),
  resetBtn:document.getElementById('resetBtn'),
  exportBtn:document.getElementById('exportBtn'),
  backBtn:document.getElementById('backBtn'),
  restartBtn:document.getElementById('restartBtn'),
  screenStart:document.getElementById('screenStart'),
  screenMap:document.getElementById('screenMap'),
  screenCase:document.getElementById('screenCase'),
  screenFinal:document.getElementById('screenFinal'),
  profileCard:document.getElementById('profileCard'),
  stats:document.getElementById('stats'),
  progressLabel:document.getElementById('progressLabel'),
  reputationLabel:document.getElementById('reputationLabel'),
  riskLabel:document.getElementById('riskLabel'),
  inventory:document.getElementById('inventory'),
  partners:document.getElementById('partners'),
  logbook:document.getElementById('logbook'),
  mapGrid:document.getElementById('mapGrid'),
  sideQuest:document.getElementById('sideQuest'),
  caseEyebrow:document.getElementById('caseEyebrow'),
  caseTitle:document.getElementById('caseTitle'),
  npcCard:document.getElementById('npcCard'),
  caseStory:document.getElementById('caseStory'),
  caseChoices:document.getElementById('caseChoices'),
  caseExtra:document.getElementById('caseExtra'),
  finalText:document.getElementById('finalText')
};

function loadState(){
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)); } catch { return null; }
}
function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function clamp(v){ return Math.max(0, Math.min(12, v)); }
function uniquePush(arr, values=[]){ values.forEach(v => { if(v && !arr.includes(v)) arr.push(v); }); }
function totalStats(){ return Object.values(state.stats).reduce((a,b)=>a+b,0); }
function repText(){ const t = totalStats(); return t >= 30 ? 'Sterk' : t >= 24 ? 'Solide' : t >= 18 ? 'Neutraal' : 'Kwetsbaar'; }

function renderClasses(){
  el.classGrid.innerHTML = '';
  classes.forEach(cls => {
    const card = document.createElement('div');
    card.className = 'class-card' + (state.selectedClass === cls.id ? ' selected' : '');
    card.innerHTML = `<p class="eyebrow">${cls.icon} Klasse</p><h3>${cls.name}</h3><p>${cls.desc}</p><p><strong>Perk:</strong> ${cls.perk}</p>`;
    card.addEventListener('click', () => {
      state.selectedClass = cls.id;
      saveState();
      el.startBtn.disabled = false;
      renderClasses();
      renderSidebar();
    });
    el.classGrid.appendChild(card);
  });
  el.startBtn.disabled = !state.selectedClass;
}

function applyClassBonus(){
  if(!state.selectedClass || state.classApplied) return;
  const cls = classes.find(c => c.id === state.selectedClass);
  if(!cls) return;
  Object.entries(cls.bonus).forEach(([k,v]) => state.stats[k] = clamp(state.stats[k] + v));
  state.classApplied = true;
  state.logs.unshift(`Klasse gekozen: ${cls.name}. ${cls.perk}`);
  saveState();
}

function renderSidebar(){
  const cls = classes.find(c => c.id === state.selectedClass);
  el.profileCard.innerHTML = cls
    ? `<strong>${cls.icon} ${cls.name}</strong><div>${cls.perk}</div>`
    : `<strong>Nog geen klasse</strong><div>Kies eerst jouw speelstijl.</div>`;

  el.stats.innerHTML = '';
  Object.entries(state.stats).forEach(([key,val]) => {
    const nice = key.charAt(0).toUpperCase() + key.slice(1);
    const item = document.createElement('div');
    item.className = 'stat';
    item.innerHTML = `<div class="stat-head"><span>${nice}</span><strong>${val}/12</strong></div><div class="meter"><span style="width:${(val/12)*100}%"></span></div>`;
    el.stats.appendChild(item);
  });

  el.progressLabel.textContent = `${state.completed.length} / ${dossiers.length}`;
  el.reputationLabel.textContent = repText();
  el.riskLabel.textContent = String(state.risk);
  el.inventory.innerHTML = (state.inventory.length ? state.inventory : ['Leeg']).map(v => `<li>${v}</li>`).join('');
  el.partners.innerHTML = state.partners.map(v => `<li>${v}</li>`).join('');
  el.logbook.innerHTML = state.logs.slice(0,10).map(v => `<div class="log-entry"><strong>Update</strong>${v}</div>`).join('');
}

function show(screenName){
  ['screenStart','screenMap','screenCase','screenFinal'].forEach(name => el[name].classList.add('hidden'));
  el[screenName].classList.remove('hidden');
}

function renderMap(){
  show('screenMap');
  el.mapGrid.innerHTML = '';

  dossiers.forEach((dossier, index) => {
    const isDone = state.completed.includes(dossier.id);
    const isUnlocked = index === 0 || state.completed.includes(dossiers[index-1].id);
    const card = document.createElement('div');
    card.className = 'map-card' + (isDone ? ' done' : '') + (!isUnlocked ? ' locked' : '');
    card.innerHTML = `<div class="badge">${isDone ? 'Afgerond' : isUnlocked ? 'Beschikbaar' : 'Vergrendeld'}</div><p class="eyebrow">${dossier.district}</p><h3>${dossier.title}</h3><p>${dossier.stakes}</p>`;
    if(isUnlocked){
      card.addEventListener('click', () => openCase(dossier.id));
    }
    el.mapGrid.appendChild(card);
  });

  const availableQuest = sideQuests.find(q => state.completed.length >= q.threshold && !state.sideQuestClaimed.includes(q.title));
  if(availableQuest){
    el.sideQuest.innerHTML = `<p class="eyebrow">${availableQuest.title}</p><p>${availableQuest.text}</p><p><strong>Beloning:</strong> ${availableQuest.rewardText}</p><div class="actions"><button id="claimQuestBtn">Neem mee in aanpak</button></div>`;
    document.getElementById('claimQuestBtn').addEventListener('click', () => {
      Object.entries(availableQuest.reward).forEach(([k,v]) => state.stats[k] = clamp(state.stats[k] + v));
      if(availableQuest.item) uniquePush(state.inventory, [availableQuest.item]);
      state.sideQuestClaimed.push(availableQuest.title);
      state.logs.unshift(`${availableQuest.title} voltooid.`);
      saveState();
      renderAll();
    });
  } else {
    el.sideQuest.innerHTML = `<p class="eyebrow">Zijmissies</p><p>Rond dossiers af om extra hulpmiddelen en bonusmomenten vrij te spelen.</p>`;
  }

  if(state.completed.length === dossiers.length){ renderFinal(); }
}

function openCase(id){
  const dossier = dossiers.find(d => d.id === id);
  if(!dossier) return;
  show('screenCase');
  el.caseEyebrow.textContent = `${dossier.district} • Dossier ${dossier.id}`;
  el.caseTitle.textContent = dossier.title;
  el.npcCard.innerHTML = `<div class="npc-face">${dossier.npc.emoji}</div><div class="npc-meta"><h3>${dossier.npc.name}</h3><p>${dossier.npc.role} denkt mee in dit dossier.</p></div>`;
  el.caseStory.innerHTML = `<p>${dossier.intro}</p>`;
  el.caseExtra.innerHTML = `<strong>Inzet:</strong> ${dossier.stakes}`;
  el.caseChoices.innerHTML = '';

  if(state.completed.includes(dossier.id)){
    el.caseChoices.innerHTML = `<div class="choice"><strong>Dit dossier is al afgerond.</strong><small>Ga terug naar de kaart om verder te spelen.</small></div>`;
    return;
  }

  dossier.choices.forEach(choice => {
    const div = document.createElement('div');
    div.className = 'choice';
    div.innerHTML = `<strong>${choice.text}</strong><small>${choice.note}</small>`;
    div.addEventListener('click', () => resolveChoice(dossier, choice));
    el.caseChoices.appendChild(div);
  });
}

function resolveChoice(dossier, choice){
  Object.entries(choice.effects).forEach(([k,v]) => {
    if(k === 'risk') state.risk += v;
    else state.stats[k] = clamp((state.stats[k] || 0) + v);
  });

  const combinedText = `${choice.text} ${choice.note}`.toLowerCase();
  if(state.selectedClass === 'analist' && /(verborgen bewijs|analyse|observatie|online)/.test(combinedText)){
    uniquePush(state.inventory, ['Verborgen bewijsfragment']);
    state.logs.unshift('Analist-perk actief: extra bewijs gevonden.');
  }
  if(state.selectedClass === 'verbinder' && /(samenwerking|multidisciplinair|partner|overleg)/.test(combinedText)){
    state.stats.samenwerking = clamp(state.stats.samenwerking + 1);
    state.logs.unshift('Verbinder-perk actief: partnerafstemming verloopt soepeler.');
  }
  if(state.selectedClass === 'handhaver' && /(controle|bestuurlijke|brandweer|politie)/.test(combinedText)){
    state.stats.daadkracht = clamp(state.stats.daadkracht + 1);
    state.logs.unshift('Handhaver-perk actief: extra slagkracht tijdens interventie.');
  }

  uniquePush(state.inventory, choice.items || []);
  uniquePush(state.partners, choice.partners || []);
  if(!state.completed.includes(dossier.id)) state.completed.push(dossier.id);
  state.logs.unshift(choice.log);
  state.logs.unshift(`Dossier afgerond: ${dossier.title}.`);
  saveState();
  renderAll();
}

function renderFinal(){
  show('screenFinal');
  const s = state.stats;
  const total = totalStats();
  let verdict = 'Je aanpak laat potentie zien, maar kan nog sterker in structuur en borging.';
  if(total >= 30) verdict = 'Je zet een overtuigende integrale aanpak neer met sterke signalering, regie en opvolging.';
  else if(total >= 24) verdict = 'Je bouwt een degelijke en geloofwaardige aanpak op met zichtbare impact.';

  const acc = [];
  if(s.inzicht >= 7) acc.push('Je bent sterk in analyse en dossieropbouw.');
  if(s.integriteit >= 7) acc.push('Je houdt opvallend goed oog voor menselijkheid en proportionaliteit.');
  if(s.samenwerking >= 7) acc.push('Je weet partners zichtbaar beter mee te krijgen.');
  if(s.daadkracht >= 7) acc.push('Je durft op tijd door te pakken en bestuurlijk te handelen.');

  const pills = [`Inzicht ${s.inzicht}`, `Integriteit ${s.integriteit}`, `Samenwerking ${s.samenwerking}`, `Daadkracht ${s.daadkracht}`]
    .map(t => `<span class="score-pill">${t}</span>`).join('');

  el.finalText.innerHTML = `
    <p>${pills}</p>
    <p>${verdict}</p>
    <p>${acc.join(' ') || 'Je profiel is vrij evenwichtig opgebouwd.'}</p>
    <p>${state.risk >= 8 ? 'Je koos geregeld voor stevige interventies. Dat gaf tempo, maar vroeg meer nazorg en afstemming.' : 'Je bouwde relatief gecontroleerd op, waardoor jouw lijn bestuurlijk beter te borgen bleef.'}</p>
    <p><strong>Verzameld bewijs:</strong> ${state.inventory.join(', ') || 'beperkt'}</p>
    <p><strong>Betrokken partners:</strong> ${state.partners.join(', ')}</p>
  `;
}

function exportReport(){
  const cls = classes.find(c => c.id === state.selectedClass);
  const text = [
    'ONDER DE OPPERVLAKTE — SPEELRAPPORT',
    '',
    `Klasse: ${cls ? cls.name : '-'}`,
    '',
    'Stats',
    `- Inzicht: ${state.stats.inzicht}`,
    `- Integriteit: ${state.stats.integriteit}`,
    `- Samenwerking: ${state.stats.samenwerking}`,
    `- Daadkracht: ${state.stats.daadkracht}`,
    '',
    `Risicoscore: ${state.risk}`,
    `Reputatie: ${repText()}`,
    '',
    'Afgeronde dossiers:',
    ...state.completed.map(id => `- ${dossiers.find(d => d.id === id)?.title || id}`),
    '',
    'Inventory:',
    ...state.inventory.map(v => `- ${v}`),
    '',
    'Partners:',
    ...state.partners.map(v => `- ${v}`),
    '',
    'Laatste logboekregels:',
    ...state.logs.slice(0,10).map(v => `- ${v}`)
  ].join('\n');

  const blob = new Blob([text], { type:'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'onder_de_oppervlakte_rapportage.txt';
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function resetGame(){
  localStorage.removeItem(STORAGE_KEY);
  state = freshState();
  renderAll();
}

function renderAll(){
  renderClasses();
  renderSidebar();
  if(!state.selectedClass || !state.classApplied) show('screenStart');
  else if(state.completed.length === dossiers.length) renderFinal();
  else renderMap();
}

el.startBtn.addEventListener('click', () => {
  applyClassBonus();
  renderAll();
});
el.saveBtn.addEventListener('click', () => { saveState(); alert('Voortgang opgeslagen.'); });
el.resetBtn.addEventListener('click', resetGame);
el.restartBtn.addEventListener('click', resetGame);
el.exportBtn.addEventListener('click', exportReport);
el.backBtn.addEventListener('click', renderMap);

renderAll();
