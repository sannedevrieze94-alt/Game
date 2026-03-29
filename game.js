const STORAGE_KEY = 'onder_de_oppervlakte_v3_save';

const archetypes = [
  {
    id: 'analist',
    name: 'Analist',
    icon: '🧠',
    desc: 'Sterk in patroonherkenning, dossieropbouw en het verbinden van losse signalen.',
    bonus: { inzicht: 2, integriteit: 0, samenwerking: 1, daadkracht: 0 },
    perk: 'Extra kans op verborgen bewijs.'
  },
  {
    id: 'verbinder',
    name: 'Verbinder',
    icon: '🤝',
    desc: 'Haalt partners aan tafel, voorkomt ruis en bouwt snel vertrouwen op.',
    bonus: { inzicht: 0, integriteit: 1, samenwerking: 2, daadkracht: 0 },
    perk: 'Betere uitkomst bij partnerafstemming.'
  },
  {
    id: 'handhaver',
    name: 'Handhaver',
    icon: '⚖️',
    desc: 'Durft door te pakken, neemt besluiten en zet druk wanneer het nodig is.',
    bonus: { inzicht: 0, integriteit: 0, samenwerking: 0, daadkracht: 3 },
    perk: 'Meer slagkracht tijdens controles.'
  }
];

const cases = [
  {
    id: 1,
    title: 'Kapsalon met dichte gordijnen',
    district: 'Emmen Centrum',
    npc: { name: 'Naomi', role: 'Wijkboa', emoji: '🧥' },
    intro: 'Een ogenschijnlijk gewone kapsalon trekt al weken de aandacht. Wisselende medewerkers, late openingstijden en een eigenaar die nauwelijks vragen wil beantwoorden. Een collega meldt daarnaast dat er achter in het pand slaapplaatsen lijken te zijn.',
    stakes: 'Mogelijke arbeidsuitbuiting en onveilige huisvesting.',
    choices: [
      {
        text: 'Begin met stille observatie en dossierverrijking.',
        note: '+ inzicht, kans op verborgen bewijs',
        effects: { inzicht: 2, risk: 1 },
        addInventory: ['Observatierapport kapsalon'],
        log: 'Je kiest voor zorgvuldige voorbereiding en legt patronen vast.',
        hiddenIf: null
      },
      {
        text: 'Plan direct een integrale controle met Arbeidsinspectie en brandweer.',
        note: '+ daadkracht, + samenwerking, maar zichtbaar optreden',
        effects: { samenwerking: 1, daadkracht: 2, risk: 2 },
        addPartners: ['Arbeidsinspectie', 'Brandweer'],
        addInventory: ['Controleplan kapsalon'],
        log: 'Je schaalt snel op en zet een zichtbare actie uit.',
        hiddenIf: null
      },
      {
        text: 'Ga zelf in gesprek met een medewerker buiten werktijd.',
        note: '+ integriteit, + inzicht',
        effects: { inzicht: 1, integriteit: 2, risk: 1 },
        addInventory: ['Vertrouwelijke getuigenverklaring'],
        log: 'Een medewerker bevestigt druk, lange dagen en afhankelijkheid van de eigenaar.',
        hiddenIf: null
      }
    ]
  },
  {
    id: 2,
    title: 'Garageboxen aan de rand van de wijk',
    district: 'Bargermeer',
    npc: { name: 'Yassin', role: 'RIEC-adviseur', emoji: '🚗' },
    intro: 'Rond een cluster garageboxen rijden op vreemde tijden bestelbusjes af en aan. Huurcontracten wisselen snel, kentekens zijn deels afgedekt en omwonenden melden een chemische geur. Tegelijk zijn harde feiten schaars.',
    stakes: 'Mogelijke ondermijning, opslag van verboden goederen of witwasconstructies.',
    choices: [
      {
        text: 'Check eerst huurstromen, KvK-inschrijvingen en kentekens.',
        note: '+ inzicht, + samenwerking',
        effects: { inzicht: 2, samenwerking: 1, risk: 1 },
        addInventory: ['Netwerkanalyse garageboxen'],
        addPartners: ['RIEC'],
        log: 'Je bouwt een informatiebeeld op en legt verbanden tussen huurders en voertuigen.',
        hiddenIf: null
      },
      {
        text: 'Vraag politie om mee te draaien in een zware controleactie.',
        note: '+ daadkracht, risico op beperkte informatiedeling',
        effects: { daadkracht: 2, samenwerking: -1, risk: 2 },
        addPartners: ['Politie'],
        addInventory: ['Briefing zware controle'],
        log: 'De actie levert zichtbare impact op, maar de terugkoppeling blijft beperkt.',
        hiddenIf: null
      },
      {
        text: 'Benader buurtbewoners zorgvuldig en bescherm hun anonimiteit.',
        note: '+ integriteit, + samenwerking',
        effects: { integriteit: 2, samenwerking: 1, risk: 1 },
        addInventory: ['Buurtmeldingen garageboxen'],
        log: 'Omwonenden delen details over tijdstippen, geuren en intimidatie.',
        hiddenIf: null
      }
    ]
  },
  {
    id: 3,
    title: 'Logies boven het restaurant',
    district: 'Klazienaveen',
    npc: { name: 'Heleen', role: 'Gemeentelijk jurist OOV', emoji: '🏠' },
    intro: 'Bij een restaurant zijn signalen binnengekomen van overbewoning boven het pand. Leveranciers zien veel bedden, medewerkers slapen mogelijk tussen gasflessen en tijdelijke schotten. De exploitant houdt vol dat alles “familie” is.',
    stakes: 'Brandveiligheid, uitbuiting en bestuurlijke handhaving lopen hier door elkaar.',
    choices: [
      {
        text: 'Zet brandveiligheid centraal en laat de brandweer mee beoordelen.',
        note: '+ daadkracht, + integriteit',
        effects: { daadkracht: 1, integriteit: 2, risk: 2 },
        addPartners: ['Brandweer'],
        addInventory: ['Brandveiligheidsrapport logies'],
        log: 'Je gebruikt een direct veiligheidskader om snel maatregelen te kunnen nemen.',
        hiddenIf: null
      },
      {
        text: 'Werk eerst een bestuurlijke route uit met jurist en toezichthouders.',
        note: '+ inzicht, + samenwerking',
        effects: { inzicht: 1, samenwerking: 2, risk: 1 },
        addPartners: ['Juridische Zaken'],
        addInventory: ['Bestuurlijke interventielijn'],
        log: 'Je bereidt een juridisch houdbare opvolging voor.',
        hiddenIf: null
      },
      {
        text: 'Focus op de medewerkers en bied direct een veilige meldroute.',
        note: '+ integriteit, kans op sterk menselijk perspectief',
        effects: { integriteit: 2, inzicht: 1, risk: 1 },
        addInventory: ['Meldroutekaart werknemers'],
        log: 'Enkele medewerkers durven pas te praten nadat ze veiligheid ervaren.',
        hiddenIf: null
      }
    ]
  },
  {
    id: 4,
    title: 'Massagepraktijk met schimmige agenda',
    district: 'Nieuw-Amsterdam',
    npc: { name: 'Frans', role: 'Stagebegeleider / sparringpartner', emoji: '📁' },
    intro: 'Een kleine massagepraktijk staat op meerdere platformen met afwijkende contactgegevens en wisselende foto’s. De agenda is vol, maar er is nauwelijks zicht op personeel of administratie. Signalen zijn subtiel maar stapelen zich op.',
    stakes: 'Mogelijke seksuele uitbuiting, vergunningkwesties en bestuurlijke gevoeligheid.',
    choices: [
      {
        text: 'Maak een risicoscorekaart en bespreek deze multidisciplinair.',
        note: '+ inzicht, + samenwerking, unlock finale bonus',
        effects: { inzicht: 2, samenwerking: 2, risk: 2 },
        addInventory: ['Risicoscorekaart massagepraktijk'],
        addPartners: ['Zorg- en Veiligheidshuis'],
        log: 'Je kiest voor een integrale afweging met breed draagvlak.',
        hiddenIf: null
      },
      {
        text: 'Plan een gerichte bestuurlijke controle op korte termijn.',
        note: '+ daadkracht, maar politieke gevoeligheid',
        effects: { daadkracht: 2, integriteit: 1, risk: 2 },
        addInventory: ['Bestuurlijke controleaanzegging'],
        log: 'De bestuurlijke lijn is duidelijk, maar vraagt om zorgvuldige opvolging.',
        hiddenIf: null
      },
      {
        text: 'Verzamel eerst online sporen, advertenties en schijnconstructies.',
        note: '+ inzicht, kans op verborgen bewijs',
        effects: { inzicht: 2, risk: 1 },
        addInventory: ['Advertentieanalyse massagepraktijk'],
        log: 'Digitale sporen tonen opvallende patronen in locaties, nummers en teksten.',
        hiddenIf: null
      }
    ]
  }
];

const sideQuests = [
  { threshold: 3, title: 'Zijmissie: Signalenoverleg', text: 'Je organiseert een compact signalenoverleg. Door korte lijnen stijgt de kans op betere opvolging.', reward: { samenwerking: 1, insightNote: 'Korte lijnen versterken je dossier.' } },
  { threshold: 6, title: 'Zijmissie: Dashboard prototype', text: 'Je prototype voor een dashboard krijgt aandacht. Partners zien voor het eerst een gedeeld beeld van risico’s.', reward: { inzicht: 1, daadkracht: 1, item: 'Dashboard prototype' } }
];

let state = loadState() || {
  selectedClass: null,
  stats: { inzicht: 4, integriteit: 4, samenwerking: 4, daadkracht: 4 },
  inventory: [],
  partners: ['Gemeente Emmen'],
  completedCases: [],
  logs: ['Nieuwe campagne gestart.'],
  risk: 0,
  sideQuestIndex: 0
};

const els = {
  classGrid: document.getElementById('classGrid'),
  startGameBtn: document.getElementById('startGameBtn'),
  screenStart: document.getElementById('screenStart'),
  screenMap: document.getElementById('screenMap'),
  screenCase: document.getElementById('screenCase'),
  screenFinal: document.getElementById('screenFinal'),
  mapGrid: document.getElementById('mapGrid'),
  storyText: document.getElementById('storyText'),
  choiceList: document.getElementById('choiceList'),
  caseTitle: document.getElementById('caseTitle'),
  caseEyebrow: document.getElementById('caseEyebrow'),
  caseMeta: document.getElementById('caseMeta'),
  npcCard: document.getElementById('npcCard'),
  stats: document.getElementById('stats'),
  inventory: document.getElementById('inventory'),
  partners: document.getElementById('partners'),
  logbook: document.getElementById('logbook'),
  profileCard: document.getElementById('profileCard'),
  caseLabel: document.getElementById('caseLabel'),
  reputationLabel: document.getElementById('reputationLabel'),
  riskLabel: document.getElementById('riskLabel'),
  sideQuestBox: document.getElementById('sideQuestBox'),
  finalSummary: document.getElementById('finalSummary'),
  saveBtn: document.getElementById('saveBtn'),
  resetBtn: document.getElementById('resetBtn'),
  exportBtn: document.getElementById('exportBtn'),
  restartBtn: document.getElementById('restartBtn'),
  backToMapBtn: document.getElementById('backToMapBtn')
};

function loadState(){
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)); } catch(e){ return null; }
}
function saveState(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
function addUnique(list, items=[]){
  items.forEach(item => { if(item && !list.includes(item)) list.push(item); });
}
function clamp(v){ return Math.max(0, Math.min(12, v)); }
function reputationLabel(){
  const total = Object.values(state.stats).reduce((a,b)=>a+b,0);
  if(total >= 28) return 'Sterk';
  if(total >= 22) return 'Solide';
  if(total >= 16) return 'Neutraal';
  return 'Kwetsbaar';
}

function renderClasses(){
  els.classGrid.innerHTML = '';
  archetypes.forEach(a => {
    const div = document.createElement('div');
    div.className = 'class-card' + (state.selectedClass === a.id ? ' selected' : '');
    div.innerHTML = `<div class="eyebrow">${a.icon} Klasse</div><h3>${a.name}</h3><p>${a.desc}</p><p><strong>Perk:</strong> ${a.perk}</p>`;
    div.onclick = () => {
      state.selectedClass = a.id;
      renderClasses();
      els.startGameBtn.disabled = false;
      saveState();
    };
    els.classGrid.appendChild(div);
  });
}

function applyClassBonus(){
  const chosen = archetypes.find(a => a.id === state.selectedClass);
  if(!chosen || state.classApplied) return;
  Object.entries(chosen.bonus).forEach(([k,v]) => state.stats[k] = clamp(state.stats[k] + v));
  state.classApplied = true;
  state.logs.unshift(`Klasse gekozen: ${chosen.name}. ${chosen.perk}`);
  saveState();
}

function renderSidebar(){
  const chosen = archetypes.find(a => a.id === state.selectedClass);
  els.profileCard.innerHTML = chosen
    ? `<strong>${chosen.icon} ${chosen.name}</strong><span>${chosen.perk}</span>`
    : `<strong>Geen klasse</strong><span>Kies eerst een speelstijl.</span>`;

  els.stats.innerHTML = '';
  Object.entries(state.stats).forEach(([key,val]) => {
    const stat = document.createElement('div');
    stat.className = 'stat';
    const label = key[0].toUpperCase()+key.slice(1);
    stat.innerHTML = `<div class="stat-line"><span>${label}</span><strong>${val}/12</strong></div><div class="bar"><span style="width:${(val/12)*100}%"></span></div>`;
    els.stats.appendChild(stat);
  });

  els.inventory.innerHTML = state.inventory.length ? state.inventory.map(i=>`<li>${i}</li>`).join('') : '<li>Leeg</li>';
  els.partners.innerHTML = state.partners.map(i=>`<li>${i}</li>`).join('');
  els.logbook.innerHTML = state.logs.slice(0,10).map(l=>`<div class="log-entry"><strong>Update</strong>${l}</div>`).join('');
  els.caseLabel.textContent = `${state.completedCases.length} / 4`;
  els.reputationLabel.textContent = reputationLabel();
  els.riskLabel.textContent = String(state.risk);
}

function renderMap(){
  showScreen('map');
  els.mapGrid.innerHTML = '';
  cases.forEach((c, index) => {
    const unlocked = index === 0 || state.completedCases.includes(cases[index-1].id);
    const done = state.completedCases.includes(c.id);
    const div = document.createElement('div');
    div.className = 'map-card' + (done ? ' done' : '') + (!unlocked ? ' locked' : '');
    div.innerHTML = `
      <div class="status">${done ? 'Afgerond' : unlocked ? 'Beschikbaar' : 'Vergrendeld'}</div>
      <span class="eyebrow">${c.district}</span>
      <h3>${c.title}</h3>
      <p>${c.stakes}</p>
    `;
    if(unlocked && !done){ div.onclick = () => renderCase(c.id); }
    else if(done){ div.onclick = () => renderCase(c.id, true); }
    els.mapGrid.appendChild(div);
  });

  const sq = sideQuests[state.sideQuestIndex];
  if(sq && state.completedCases.length >= Math.min(2 + state.sideQuestIndex, 3 + state.sideQuestIndex)){
    els.sideQuestBox.innerHTML = `<span class="eyebrow">${sq.title}</span><p>${sq.text}</p><button id="sqBtn">Neem mee in aanpak</button>`;
    document.getElementById('sqBtn').onclick = () => {
      if(sq.reward.samenwerking) state.stats.samenwerking = clamp(state.stats.samenwerking + sq.reward.samenwerking);
      if(sq.reward.inzicht) state.stats.inzicht = clamp(state.stats.inzicht + sq.reward.inzicht);
      if(sq.reward.daadkracht) state.stats.daadkracht = clamp(state.stats.daadkracht + sq.reward.daadkracht);
      if(sq.reward.item) addUnique(state.inventory,[sq.reward.item]);
      state.logs.unshift(`${sq.title} voltooid. ${sq.reward.insightNote || 'Je aanpak wordt sterker.'}`);
      state.sideQuestIndex += 1;
      saveState();
      renderAll();
    };
  } else {
    els.sideQuestBox.innerHTML = `<span class="eyebrow">Zijmissies</span><p>Speel dossiers vrij om extra missies en tools te ontgrendelen.</p>`;
  }

  if(state.completedCases.length === cases.length){ renderFinal(); }
}

function renderCase(id, replay=false){
  const c = cases.find(x=>x.id===id);
  showScreen('case');
  els.caseEyebrow.textContent = `${c.district} • Dossier ${c.id}`;
  els.caseTitle.textContent = c.title;
  els.storyText.innerHTML = `<p>${c.intro}</p>`;
  els.caseMeta.innerHTML = `<strong>Inzet:</strong> ${c.stakes}`;
  els.npcCard.innerHTML = `<div class="npc-portrait">${c.npc.emoji}</div><div><h3>${c.npc.name}</h3><p>${c.npc.role} denkt met je mee bij dit dossier.</p></div>`;
  els.choiceList.innerHTML = '';

  if(replay || state.completedCases.includes(id)){
    els.choiceList.innerHTML = `<div class="choice"><strong>Dit dossier is al afgerond.</strong><small>Gebruik de kaart om door te gaan naar je volgende opdracht.</small></div>`;
    return;
  }

  c.choices.forEach(choice => {
    const div = document.createElement('div');
    div.className = 'choice';
    div.innerHTML = `<strong>${choice.text}</strong><small>${choice.note}</small>`;
    div.onclick = () => completeCase(c, choice);
    els.choiceList.appendChild(div);
  });
}

function completeCase(c, choice){
  Object.entries(choice.effects).forEach(([k,v]) => {
    if(k === 'risk') state.risk += v;
    else state.stats[k] = clamp(state.stats[k] + v);
  });

  // class perks
  if(state.selectedClass === 'analist' && /verborgen bewijs|analyse|observatie|online sporen/i.test(choice.note + ' ' + choice.text)){
    addUnique(state.inventory, ['Verborgen bewijsfragment']);
    state.logs.unshift('Analist-perk actief: extra bewijs gevonden.');
  }
  if(state.selectedClass === 'verbinder' && /samenwerking|partner|multidisciplinair|overleg/i.test(choice.note + ' ' + choice.text)){
    state.stats.samenwerking = clamp(state.stats.samenwerking + 1);
    state.logs.unshift('Verbinder-perk actief: partnerafstemming verloopt soepeler.');
  }
  if(state.selectedClass === 'handhaver' && /controle|bestuurlijke|brandveiligheid|politie/i.test(choice.text)){
    state.stats.daadkracht = clamp(state.stats.daadkracht + 1);
    state.logs.unshift('Handhaver-perk actief: je interventie krijgt extra slagkracht.');
  }

  addUnique(state.inventory, choice.addInventory || []);
  addUnique(state.partners, choice.addPartners || []);
  state.completedCases.push(c.id);
  state.logs.unshift(choice.log);
  state.logs.unshift(`Dossier afgerond: ${c.title}.`);
  saveState();
  renderAll();
}

function finalText(){
  const s = state.stats;
  const total = s.inzicht + s.integriteit + s.samenwerking + s.daadkracht;
  let verdict = 'Je aanpak laat potentie zien, maar vraagt op onderdelen nog om meer structuur en borging.';
  if(total >= 30) verdict = 'Je levert een sterke, integrale aanpak neer waarbij signalering, samenwerking en opvolging overtuigend samenkomen.';
  else if(total >= 24) verdict = 'Je bouwt een degelijke aanpak op met zichtbare impact en een geloofwaardige informatiepositie.';

  const accents = [];
  if(s.inzicht >= 7) accents.push('Je bent sterk in signalering en dossieropbouw.');
  if(s.integriteit >= 7) accents.push('Je houdt oog voor slachtoffers, proportionaliteit en zorgvuldigheid.');
  if(s.samenwerking >= 7) accents.push('Partners sluiten sneller aan door jouw regie en vertrouwen.');
  if(s.daadkracht >= 7) accents.push('Je durft tijdig door te pakken en bestuurlijk te interveniëren.');

  const riskTone = state.risk >= 8
    ? 'Je koos regelmatig voor stevige interventies; dat gaf tempo, maar vergde extra afstemming achteraf.'
    : 'Je bouwde relatief gecontroleerd op, waardoor de aanpak bestuurlijk beter te borgen bleef.';

  return `
    <p><span class="score">Inzicht ${s.inzicht}</span><span class="score">Integriteit ${s.integriteit}</span><span class="score">Samenwerking ${s.samenwerking}</span><span class="score">Daadkracht ${s.daadkracht}</span></p>
    <p>${verdict}</p>
    <p>${accents.join(' ') || 'Je profiel is evenwichtig opgebouwd.'}</p>
    <p>${riskTone}</p>
    <p><strong>Verzameld bewijs:</strong> ${state.inventory.join(', ') || 'beperkt'}</p>
    <p><strong>Betrokken partners:</strong> ${state.partners.join(', ')}</p>
  `;
}

function renderFinal(){
  showScreen('final');
  els.finalSummary.innerHTML = finalText();
}

function showScreen(which){
  els.screenStart.classList.add('hidden');
  els.screenMap.classList.add('hidden');
  els.screenCase.classList.add('hidden');
  els.screenFinal.classList.add('hidden');
  if(which==='start') els.screenStart.classList.remove('hidden');
  if(which==='map') els.screenMap.classList.remove('hidden');
  if(which==='case') els.screenCase.classList.remove('hidden');
  if(which==='final') els.screenFinal.classList.remove('hidden');
}

function renderAll(){
  renderClasses();
  renderSidebar();
  if(!state.selectedClass || !state.classApplied) showScreen('start');
  else if(state.completedCases.length === cases.length) renderFinal();
  else renderMap();
}

function exportReport(){
  const chosen = archetypes.find(a=>a.id===state.selectedClass);
  const content = `ONDER DE OPPERVLAKTE — SPEELRAPPORT\n\nKlasse: ${chosen ? chosen.name : '-'}\n\nStats\n- Inzicht: ${state.stats.inzicht}\n- Integriteit: ${state.stats.integriteit}\n- Samenwerking: ${state.stats.samenwerking}\n- Daadkracht: ${state.stats.daadkracht}\n\nRisicoscore: ${state.risk}\nReputatie: ${reputationLabel()}\n\nAfgeronde dossiers:\n${state.completedCases.map(id => '- ' + cases.find(c=>c.id===id).title).join('\n')}\n\nInventory:\n${state.inventory.map(i => '- ' + i).join('\n')}\n\nPartners:\n${state.partners.map(i => '- ' + i).join('\n')}\n\nLaatste logboek:\n${state.logs.slice(0,10).map(i => '- ' + i).join('\n')}\n`;
  const blob = new Blob([content], {type:'text/plain;charset=utf-8'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'onder_de_oppervlakte_rapportage.txt';
  a.click();
  URL.revokeObjectURL(a.href);
}

els.startGameBtn.onclick = () => { applyClassBonus(); renderAll(); };
els.backToMapBtn.onclick = () => renderMap();
els.exportBtn.onclick = exportReport;
els.saveBtn.onclick = () => { saveState(); alert('Voortgang opgeslagen.'); };
els.resetBtn.onclick = els.restartBtn.onclick = () => {
  localStorage.removeItem(STORAGE_KEY);
  state = {
    selectedClass: null,
    stats: { inzicht: 4, integriteit: 4, samenwerking: 4, daadkracht: 4 },
    inventory: [],
    partners: ['Gemeente Emmen'],
    completedCases: [],
    logs: ['Nieuwe campagne gestart.'],
    risk: 0,
    sideQuestIndex: 0
  };
  renderAll();
};

renderAll();
