
const classes = {
  analist: {
    key:'analist', name:'Analist', portrait:'portrait-analist',
    desc:'Je ziet patronen, legt verbanden en bouwt een sterke informatiepositie op.',
    bonus:{ inzicht:2, integriteit:1, samenwerking:0, daadkracht:0 }
  },
  verbinder: {
    key:'verbinder', name:'Verbinder', portrait:'portrait-verbinder',
    desc:'Je brengt partners samen, vergroot vertrouwen en krijgt informatie los.',
    bonus:{ inzicht:0, integriteit:1, samenwerking:2, daadkracht:0 }
  },
  handhaver: {
    key:'handhaver', name:'Handhaver', portrait:'portrait-handhaver',
    desc:'Je durft door te pakken, neemt regie en laat zichtbaar optreden.',
    bonus:{ inzicht:0, integriteit:0, samenwerking:1, daadkracht:2 }
  }
};

const dossiers = [
  {
    id:'salon', title:'Dossier I — De Gesloten Salon', short:'Kapsalon met wisselende medewerkers en afgeschermde ramen.',
    art:'scene_street', node:{left:'18%', top:'63%'}, reward:'Observatierapport',
    npcs:[
      {name:'Mila — wijkboa', role:'Ziet onregelmatigheden in openingstijden en aanloop.', art:'npc1'},
      {name:'Nadir — buurtbewoner', role:'Meldt nachtelijke activiteit en korte bezoekjes.', art:'npc2'}
    ],
    steps:[
      {
        title:'De eerste melding',
        text:'Een melding over een kapsalon lijkt klein, maar de signalen stapelen zich op: gesloten gordijnen, veel wisselende medewerkers en opvallend lange dagen. De wijk fluistert al langer dat er meer speelt dan knippen alleen.',
        choices:[
          {label:'Start met stille observatie', desc:'Je verzamelt eerst patronen en tijden.', effects:{ inzicht:2, daadkracht:-0, risk:1 }, add:['Observatiepunten salon'], log:'Je koos voor stille observatie en bouwde het dossier zorgvuldig op.'},
          {label:'Bel direct partners voor een integraal vooroverleg', desc:'Je betrekt Arbeidsinspectie en politie vroegtijdig.', effects:{ samenwerking:2, integriteit:1, risk:1 }, add:['Vooroverlegnotitie'], log:'Je zette vroeg in op samenwerking en gedeelde beeldvorming.'},
          {label:'Ga meteen zichtbaar langs', desc:'Snelle actie, maar kans op verplaatsing van activiteiten.', effects:{ daadkracht:2, samenwerking:-1, risk:2 }, add:['Eerste controlebevinding'], log:'Je koos voor een directe zichtbare actie bij de salon.'}
        ]
      },
      {
        title:'Het patroon achter de gevel',
        text:'Uit registraties blijkt dat meerdere medewerkers zich nauwelijks laten zien buiten werktijden. Een buurtonderzoek levert op dat sommige vrouwen mogelijk elders verblijven. Je merkt dat het dossier gevoelig wordt.',
        choices:[
          {label:'Koppel signalen aan BRP/BAG en leg verbanden', desc:'Data eerst, om bestuurlijk steviger te staan.', effects:{ inzicht:2, integriteit:1, risk:1 }, add:['Gegevensanalyse'], log:'Je versterkte de informatiepositie met bronkoppelingen.'},
          {label:'Plan een integrale controle met beschermingsdoel', desc:'Focus op veiligheid van mogelijke slachtoffers.', effects:{ daadkracht:1, integriteit:2, samenwerking:1, risk:2 }, add:['Controleplan'], log:'Je plande een controle met nadruk op bescherming.'},
          {label:'Laat politie eerst een veiligheidsinschatting doen', desc:'Voorzorg voor team en eventuele slachtoffers.', effects:{ samenwerking:1, inzicht:1, risk:1 }, add:['Veiligheidsinschatting'], log:'Je borgde eerst de veiligheid voor betrokken partners.'}
        ]
      }
    ]
  },
  {
    id:'loods', title:'Dossier II — De Stille Loods', short:'Een bedrijventerrein, vreemde aanvoer en wisselende kentekens.',
    art:'scene_industrial', node:{left:'46%', top:'54%'}, reward:'Risicoscorekaart',
    npcs:[
      {name:'Erik — toezichthouder bouwen', role:'Ziet afwijkende opslag en geblokkeerde nooduitgangen.', art:'npc3'},
      {name:'Sofia — OOV adviseur', role:'Waarschuwt voor bestuurlijke en politieke gevoeligheid.', art:'npc4'}
    ],
    steps:[
      {
        title:'Onrust op het terrein',
        text:'Een loods aan de rand van het industrieterrein krijgt onregelmatige leveringen. Overdag oogt alles rustig, maar ’s avonds brandt er licht en vertrekken bestelbusjes in korte intervallen.',
        choices:[
          {label:'Werk eerst met kenteken- en tijdlijnanalyse', desc:'Rustig bouwen aan een onderbouwd dossier.', effects:{ inzicht:2, risk:1 }, add:['Tijdlijn loods'], log:'Je bracht de bewegingen rond de loods in kaart.'},
          {label:'Voer samen met brandweer en bouwtoezicht een thematische controle uit', desc:'Breed bestuurlijk optreden met zichtbare normering.', effects:{ samenwerking:2, daadkracht:1, risk:2 }, add:['Thema-actieplan'], log:'Je organiseerde een thematische controle op het terrein.'},
          {label:'Dring aan op snelle bestuurlijke interventie', desc:'Hoog tempo, maar met beperkte informatiebasis.', effects:{ daadkracht:2, integriteit:-1, risk:2 }, add:['Spoedmemo'], log:'Je drong aan op snelle bestuurlijke interventie.'}
        ]
      },
      {
        title:'Binnen of buiten de lijntjes',
        text:'Partners verschillen van mening: de een wil meteen naar binnen, de ander vindt het dossier nog niet stevig genoeg. Jij moet kiezen tussen tempo en zorgvuldigheid.',
        choices:[
          {label:'Houd partners bij elkaar met een gedeeld briefingformat', desc:'Iedereen weet doel, rol en opvolging.', effects:{ samenwerking:2, integriteit:1, risk:1 }, add:['Briefingformat'], log:'Je maakte de samenwerking strakker met heldere rolafspraken.'},
          {label:'Kies voor een beperkte verkenning met duidelijke stopcriteria', desc:'Voorzichtig, maar niet stil blijven zitten.', effects:{ inzicht:1, integriteit:1, daadkracht:1, risk:1 }, add:['Stopcriteria verkenning'], log:'Je koos voor een afgebakende verkenning.'},
          {label:'Laat snelheid prevaleren', desc:'Maximale druk, minimale vertraging.', effects:{ daadkracht:2, samenwerking:-1, risk:3 }, add:['Escalatiebesluit'], log:'Je koos ervoor snelheid boven consensus te plaatsen.'}
        ]
      }
    ]
  },
  {
    id:'woning', title:'Dossier III — Het Huis zonder Post', short:'Een woning waar niemand officieel lijkt te wonen, maar altijd licht brandt.',
    art:'scene_house', node:{left:'74%', top:'66%'}, reward:'Slachtoffergerichte notitie',
    npcs:[
      {name:'Layla — zorgcoördinator', role:'Benadrukt kwetsbaarheid en nazorg.', art:'npc2'},
      {name:'Tom — wijkagent', role:'Kent de straat en ziet subtiele verschuivingen.', art:'npc1'}
    ],
    steps:[
      {
        title:'Een adres dat niet klopt',
        text:'De woning staat administratief stil, maar in de praktijk is er vrijwel altijd activiteit. Buren noemen korte wisselingen, onbekende bezoekers en stille spanning in de straat.',
        choices:[
          {label:'Werk buurtinformatie zorgvuldig uit', desc:'Leg de menselijke context vast zonder te forceren.', effects:{ integriteit:2, inzicht:1, risk:1 }, add:['Buurtbeeld woning'], log:'Je gaf de zachte signalen een duidelijke plek in het dossier.'},
          {label:'Zet in op bestuurlijke controle gecombineerd met zorg', desc:'Menselijke veiligheid en bestuurlijke druk tegelijk.', effects:{ samenwerking:2, integriteit:2, daadkracht:1, risk:2 }, add:['Zorg-veiligheidsplan'], log:'Je combineerde bestuurlijke actie met bescherming.'},
          {label:'Focus puur op handhaving', desc:'Strakke lijn, weinig ruimte voor nuance.', effects:{ daadkracht:2, integriteit:-1, risk:2 }, add:['Handhavingsrichting'], log:'Je koos voor een harde handhavingskoers.'}
        ]
      },
      {
        title:'De deur die net te laat opengaat',
        text:'Tijdens het vervolgtraject merk je dat iemand achter de voordeur hulp nodig kan hebben. De formele grondslag is niet volledig uitgekristalliseerd, maar uitstel voelt ook verkeerd.',
        choices:[
          {label:'Zoek juridische borging én snelle zorgroute', desc:'Vertragen waar nodig, versnellen waar het moet.', effects:{ integriteit:2, samenwerking:1, inzicht:1, risk:1 }, add:['Juridische borging'], log:'Je zocht balans tussen grondslag en menselijke urgentie.'},
          {label:'Neem moreel leiderschap en schakel meteen zorg op', desc:'Beschermen gaat voor, ook als het spannend is.', effects:{ integriteit:2, daadkracht:1, risk:2 }, add:['Opschaling zorg'], log:'Je koos voor directe bescherming van de betrokkene.'},
          {label:'Wacht op volledige formele zekerheid', desc:'Veilig voor het dossier, maar mogelijk te laat voor de persoon.', effects:{ inzicht:1, integriteit:1, risk:0, cooperationPenalty:true }, add:['Volledige toetsing'], log:'Je wachtte op volledige formele zekerheid voor de volgende stap.'}
        ]
      }
    ]
  },
  {
    id:'finale', title:'Dossier IV — Onder de Oppervlakte', short:'Alle lijnen komen samen in een complexe integrale operatie.',
    art:'scene_office', node:{left:'64%', top:'32%'}, reward:'Einddossier',
    npcs:[
      {name:'Heleen — teamleider', role:'Kijkt naar bestuurlijke haalbaarheid en regie.', art:'npc4'},
      {name:'Frans — stagebegeleider', role:'Daagt je uit om keuzes te onderbouwen.', art:'npc3'}
    ],
    lockedUntil:3,
    steps:[
      {
        title:'Het totaalbeeld',
        text:'De losse signalen blijken geen losse signalen. Mensen, locaties, vervoersstromen en administratie raken met elkaar verweven. Dit is het moment waarop jouw keuzes bepalen of er een stevig, mensgericht en uitvoerbaar totaalbeeld ontstaat.',
        choices:[
          {label:'Presenteer een integraal plan met duidelijke rollen en opvolging', desc:'Regie, samenwerking en informatie komen samen.', effects:{ samenwerking:2, inzicht:2, integriteit:1, daadkracht:1, risk:2 }, add:['Integraal actieplan'], log:'Je bracht alle lijnen samen in een gedragen totaalplan.'},
          {label:'Kies voor een slagvaardige operatie met beperkte kring', desc:'Snel en scherp, maar minder breed gedragen.', effects:{ daadkracht:2, inzicht:1, samenwerking:-1, risk:2 }, add:['Compact interventieplan'], log:'Je koos voor een compacte en snelle operatie.'},
          {label:'Neem tijd voor extra verdieping voordat je opschaalt', desc:'Meer zekerheid, maar risico op verlies van momentum.', effects:{ inzicht:2, integriteit:1, risk:1 }, add:['Verdiepingsnotitie'], log:'Je koos voor extra verdieping vóór opschaling.'}
        ]
      },
      {
        title:'De operatie',
        text:'De controle vindt plaats. Partners kijken naar jou voor regie, rust en morele richting. Wat voor type leider ben jij wanneer alles tegelijk gebeurt?',
        choices:[
          {label:'Mensgericht en rustig leidinggeven', desc:'Bescherming en samenwerking blijven zichtbaar leidend.', effects:{ integriteit:2, samenwerking:1, daadkracht:1, risk:1 }, add:['Operationele evaluatie'], log:'Je hield de operatie mensgericht en beheerst.'},
          {label:'Strak, besluitvaardig en direct', desc:'Veel vaart en duidelijkheid op het moment zelf.', effects:{ daadkracht:2, samenwerking:0, integriteit:1, risk:1 }, add:['Besluitvormingsverslag'], log:'Je gaf strak en zichtbaar leiding tijdens de operatie.'},
          {label:'Analytisch sturen op informatie en follow-up', desc:'Minder spektakel, meer duurzame opvolging.', effects:{ inzicht:2, samenwerking:1, risk:1 }, add:['Follow-up matrix'], log:'Je stuurde vooral op informatiepositie en vervolg.'}
        ]
      }
    ]
  }
];

const ambientNotes = ['♪', '♫', '♬', '♩'];
let ambientTimer = null;

function newState(){
  return {
    selectedClass:null,
    stats:{ inzicht:3, integriteit:3, samenwerking:3, daadkracht:3 },
    partners:{ politie:50, arbeidsinspectie:50, zorg:50, gemeente:50 },
    inventory:['Gemeentebadge'],
    log:['Campagne gestart. Kies een speelstijl.'],
    progress:{},
    completed:[],
    risk:0,
    currentScreen:'landing',
    currentDossier:null,
    totalChoices:0,
    soundtrackOn:false,
    version:6
  };
}

let state = loadState();

function loadState(){
  try{
    const raw = localStorage.getItem('odp_v6_save');
    if(!raw) return newState();
    const parsed = JSON.parse(raw);
    return Object.assign(newState(), parsed);
  }catch(e){ return newState(); }
}
function saveState(){ localStorage.setItem('odp_v6_save', JSON.stringify(state)); }
function hardReset(){ localStorage.removeItem('odp_v6_save'); state=newState(); renderAll(); }

const el = id => document.getElementById(id);
const screens = {
  landing: el('screen-landing'),
  map: el('screen-map'),
  dossier: el('screen-dossier'),
  report: el('screen-report')
};

function clamp(n,min,max){ return Math.max(min, Math.min(max, n)); }
function prettyStat(k){ return ({inzicht:'Inzicht', integriteit:'Integriteit', samenwerking:'Samenwerking', daadkracht:'Daadkracht'})[k] || k; }

function applyEffects(effects={}){
  Object.entries(effects).forEach(([k,v]) => {
    if(['inzicht','integriteit','samenwerking','daadkracht'].includes(k)) state.stats[k] = clamp(state.stats[k] + v, 0, 10);
    if(k==='risk') state.risk += v;
  });
  // soft partner impact based on style
  state.partners.politie = clamp(state.partners.politie + (effects.daadkracht||0)*2 + (effects.samenwerking||0), 0, 100);
  state.partners.arbeidsinspectie = clamp(state.partners.arbeidsinspectie + (effects.inzicht||0) + (effects.samenwerking||0)*2, 0, 100);
  state.partners.zorg = clamp(state.partners.zorg + (effects.integriteit||0)*2 + (effects.samenwerking||0), 0, 100);
  state.partners.gemeente = clamp(state.partners.gemeente + (effects.inzicht||0) + (effects.integriteit||0) + (effects.daadkracht||0), 0, 100);
  if(effects.cooperationPenalty) state.partners.zorg = clamp(state.partners.zorg - 4,0,100);
}

function setClass(key){
  state.selectedClass = key;
  state.stats = { inzicht:3, integriteit:3, samenwerking:3, daadkracht:3 };
  Object.entries(classes[key].bonus).forEach(([k,v]) => state.stats[k]+=v);
  state.log.unshift(`Klasse gekozen: ${classes[key].name}.`);
  saveState();
  renderAll();
}

function go(screen){
  Object.entries(screens).forEach(([k,node]) => node.classList.toggle('active', k===screen));
  state.currentScreen = screen;
  saveState();
}

function completedBaseCount(){
  return state.completed.filter(id => id !== 'finale').length;
}

function renderLanding(){
  const selected = state.selectedClass ? classes[state.selectedClass] : null;
  screens.landing.innerHTML = `
    <section class="hero">
      <div class="hero-copy">
        <div class="eyebrow">Cinematische campagne</div>
        <h2>Zie wat anderen missen.<br/>Beslis wanneer het erop aankomt.</h2>
        <p>
          In deze serious roleplay game ben jij toezichthouder / adviseur binnen een complex veiligheidsdomein.
          Meldingen lijken klein, maar achter gevels, loodsen en adressen ligt een netwerk van signalen, dilemma’s en menselijke verhalen.
          Jouw keuzes vormen de balans tussen informatie, samenwerking, daadkracht en rechtvaardigheid.
        </p>
        <div class="hero-actions">
          <button class="primary-btn" id="startCampaignBtn" ${selected ? '' : 'disabled'}>Start campagne</button>
          <button class="ghost-btn" id="openReportBtn">Bekijk eindrapport</button>
        </div>
        <div class="eyebrow">Kies je speelstijl</div>
        <div class="class-grid">
          ${Object.values(classes).map(c => `
            <button class="class-card ${state.selectedClass===c.key ? 'active':''}" data-class="${c.key}">
              <div class="eyebrow">Klasse</div>
              <h3>${c.name}</h3>
              <div class="muted">${c.desc}</div>
              <div class="small-stats">
                ${Object.entries(c.bonus).filter(([,v])=>v>0).map(([k,v]) => `<span>+${v} ${prettyStat(k)}</span>`).join('')}
              </div>
            </button>`).join('')}
        </div>
      </div>
      <div class="hero-art"></div>
    </section>
  `;
  screens.landing.querySelectorAll('[data-class]').forEach(btn => btn.onclick = () => setClass(btn.dataset.class));
  el('startCampaignBtn')?.addEventListener('click', () => {
    if(!state.selectedClass) return;
    state.log.unshift('De campagne begint. De wereldkaart opent.');
    saveState();
    renderMap();
    go('map');
  });
  el('openReportBtn')?.addEventListener('click', () => { renderReport(); go('report'); });
}

function renderMap(){
  const cards = dossiers.map((d, idx) => {
    const locked = d.lockedUntil && completedBaseCount() < d.lockedUntil;
    const done = state.completed.includes(d.id);
    const stepInfo = state.progress[d.id] || { step:0 };
    return `
      <div class="map-card ${done?'done':''}">
        <div class="eyebrow">${done ? 'Afgerond' : locked ? 'Vergrendeld' : 'Beschikbaar'}</div>
        <h3>${d.title}</h3>
        <div class="muted">${d.short}</div>
        <div class="small-stats" style="margin-top:10px"><span>${done ? '✔ gereed' : `stap ${Math.min(stepInfo.step+1, d.steps.length)} / ${d.steps.length}`}</span></div>
      </div>`;
  }).join('');

  screens.map.innerHTML = `
    <section class="map-wrap">
      <div class="map-scene">
        ${dossiers.map((d, i) => {
          const locked = d.lockedUntil && completedBaseCount() < d.lockedUntil;
          const done = state.completed.includes(d.id);
          return `<button class="map-node ${locked?'locked':''} ${done?'done':''}" data-dossier="${d.id}" style="left:${d.node.left}; top:${d.node.top}">${i+1}</button>`;
        }).join('')}
      </div>
      <aside class="map-panel">
        <div class="eyebrow">Wereldkaart</div>
        <div class="panel-title">Operationele kaart</div>
        <p class="muted">Open dossiers, verzamel bewijs, bouw vertrouwen op met partners en stuur op een veilige, uitvoerbare aanpak.</p>
        <div class="progress" style="margin:16px 0 10px"><div style="width:${(state.completed.length/4)*100}%"></div></div>
        <div class="muted">Voortgang: ${state.completed.length} van 4 dossiers afgerond</div>
        <div class="map-list">${cards}</div>
      </aside>
    </section>
  `;
  screens.map.querySelectorAll('[data-dossier]').forEach(btn => btn.onclick = () => openDossier(btn.dataset.dossier));
}

function getDossier(id){ return dossiers.find(d => d.id===id); }

function openDossier(id){
  const dossier = getDossier(id);
  if(!dossier) return;
  if(dossier.lockedUntil && completedBaseCount() < dossier.lockedUntil) return;
  state.currentDossier = id;
  renderDossier();
  go('dossier');
}

function choose(dossierId, choiceIndex){
  const dossier = getDossier(dossierId);
  const progress = state.progress[dossierId] || { step:0, history:[] };
  const step = dossier.steps[progress.step];
  const choice = step.choices[choiceIndex];
  if(!choice) return;
  applyEffects(choice.effects);
  (choice.add || []).forEach(item => { if(!state.inventory.includes(item)) state.inventory.push(item); });
  state.log.unshift(choice.log);
  progress.history.push({ step: progress.step, choice: choice.label });
  progress.step += 1;
  state.progress[dossierId] = progress;
  state.totalChoices += 1;
  if(progress.step >= dossier.steps.length){
    if(!state.completed.includes(dossierId)) state.completed.push(dossierId);
    if(!state.inventory.includes(dossier.reward)) state.inventory.push(dossier.reward);
    state.log.unshift(`${dossier.title} afgerond. Beloning ontvangen: ${dossier.reward}.`);
  }
  saveState();
  renderAll();
  if(progress.step >= dossier.steps.length){
    if(dossierId==='finale'){
      renderReport();
      go('report');
    } else {
      renderMap();
      go('map');
    }
  } else {
    renderDossier();
  }
}

function renderDossier(){
  const dossier = getDossier(state.currentDossier);
  if(!dossier){ renderMap(); go('map'); return; }
  const progress = state.progress[dossier.id] || { step:0, history:[] };
  if(progress.step >= dossier.steps.length){ renderMap(); go('map'); return; }
  const step = dossier.steps[progress.step];
  screens.dossier.innerHTML = `
    <section class="dossier-layout">
      <div>
        <div class="dossier-art" style="--art: var(--${dossier.art})"></div>
        <div class="npc-grid">
          ${dossier.npcs.map((n, idx) => `
            <div class="npc-card" style="--npcArt: var(--${['npc1','npc2','npc3','npc4'][idx%4]})">
              <div class="npc-art"></div>
              <strong>${n.name}</strong>
              <div class="muted">${n.role}</div>
            </div>`).join('')}
        </div>
      </div>
      <div>
        <div class="story-card">
          <div class="eyebrow">${dossier.title}</div>
          <div class="panel-title">${step.title}</div>
          <p class="muted">${step.text}</p>
          <div class="small-stats"><span>stap ${progress.step+1}/${dossier.steps.length}</span><span>risicoscore ${state.risk}</span></div>
        </div>
        <div class="choice-card" style="margin-top:16px">
          <div class="eyebrow">Kies je aanpak</div>
          <div class="choice-stack">
            ${step.choices.map((c, i) => `
              <button class="choice-btn" data-choice="${i}">
                <strong>${c.label}</strong>
                <span class="muted">${c.desc}</span>
              </button>`).join('')}
          </div>
        </div>
        <div class="report-actions">
          <button class="ghost-btn" id="backToMapBtn">Terug naar kaart</button>
          <button class="ghost-btn" id="viewReportBtn">Tussenrapport</button>
        </div>
      </div>
    </section>
  `;
  screens.dossier.querySelectorAll('[data-choice]').forEach(btn => btn.onclick = () => choose(dossier.id, Number(btn.dataset.choice)));
  el('backToMapBtn').onclick = () => { renderMap(); go('map'); };
  el('viewReportBtn').onclick = () => { renderReport(); go('report'); };
}

function scoreStyle(){
  const s = state.stats;
  const highest = Object.entries(s).sort((a,b)=>b[1]-a[1])[0]?.[0];
  return {
    inzicht:'informatiegedreven en analytisch',
    integriteit:'zorgvuldig en moreel bewust',
    samenwerking:'verbindend en partnergericht',
    daadkracht:'slagvaardig en zichtbaar'
  }[highest] || 'gebalanceerd';
}

function outcomeText(){
  const avgPartners = Object.values(state.partners).reduce((a,b)=>a+b,0)/4;
  if(state.completed.length < 4) return 'Je campagne is nog niet afgerond. Toch laat je dossieropbouw al duidelijk zien welke stijl jij als professional kiest.';
  if(state.risk >= 8 && avgPartners < 58) return 'Je bereikte resultaat met hoge druk en duidelijke interventies, maar het kostte partners vertrouwen. Het effect was zichtbaar, de nazorg kwetsbaar.';
  if(state.stats.integriteit >= 7 && state.partners.zorg >= 58) return 'Je aanpak combineerde bescherming, zorgvuldigheid en bestuurlijke stevigheid. Slachtoffergericht werken bleef zichtbaar in je keuzes.';
  if(state.stats.samenwerking >= 7 && avgPartners >= 60) return 'Je smeedde een sterke integrale aanpak. Door partners vroeg te verbinden ontstond een duurzaam en breed gedragen resultaat.';
  if(state.stats.inzicht >= 7) return 'Je bouwde een overtuigende informatiepositie op. Jouw kracht lag in het herkennen van patronen en het vertalen van signalen naar uitvoerbare keuzes.';
  if(state.stats.daadkracht >= 7) return 'Je leiderschap was duidelijk, stevig en actiegericht. Jij gaf richting op momenten waarop aarzeling het dossier had kunnen verzwakken.';
  return 'Je leverde een evenwichtige campagne af waarin geen enkele kwaliteit volledig domineerde, maar de combinatie van keuzes toch tot een geloofwaardig resultaat leidde.';
}

function renderReport(){
  const topInv = state.inventory.slice(-8).reverse();
  screens.report.innerHTML = `
    <section class="report-grid">
      <div class="report-card">
        <div class="eyebrow">Eindrapport</div>
        <div class="panel-title">Jouw profiel als speler</div>
        <p class="muted">Je stijl was overwegend <strong>${scoreStyle()}</strong>. ${outcomeText()}</p>
        <div class="small-stats">
          <span>Dossiers afgerond: ${state.completed.length}/4</span>
          <span>Keuzes gemaakt: ${state.totalChoices}</span>
          <span>Risicoscore: ${state.risk}</span>
        </div>
        <h3>Belangrijkste opbrengsten</h3>
        <div class="pill-list">${topInv.map(i => `<span class="pill">${i}</span>`).join('')}</div>
        <h3 style="margin-top:22px">Reflectie</h3>
        <p class="muted">In deze campagne werd zichtbaar hoe signalering, informatiepositie, samenwerking en morele afwegingen elkaar voortdurend beïnvloeden. Jouw keuzes laten zien welke balans jij maakt tussen snelheid, zorgvuldigheid, bescherming en bestuurlijke slagkracht.</p>
        <div class="report-actions">
          <button class="primary-btn" id="downloadReportBtn">Download rapportage</button>
          <button class="ghost-btn" id="backMapFromReportBtn">Terug naar kaart</button>
        </div>
      </div>
      <aside class="report-card">
        <div class="eyebrow">Partners & scores</div>
        <div id="reportStats"></div>
      </aside>
    </section>
  `;
  const wrap = el('reportStats');
  wrap.innerHTML = `
    <div class="section-title" style="margin-top:0">Statistieken</div>
    ${Object.entries(state.stats).map(([k,v]) => statTemplate(prettyStat(k), v, 10)).join('')}
    <div class="section-title">Partnervertrouwen</div>
    ${Object.entries(state.partners).map(([k,v]) => statTemplate(cap(k), v, 100)).join('')}
  `;
  el('downloadReportBtn').onclick = downloadReport;
  el('backMapFromReportBtn').onclick = () => { renderMap(); go('map'); };
}

function statTemplate(label, value, max){
  return `<div class="stat"><div class="stat-head"><span>${label}</span><strong>${value}/${max}</strong></div><div class="stat-bar"><div style="width:${(value/max)*100}%"></div></div></div>`;
}

function cap(s){ return s.charAt(0).toUpperCase()+s.slice(1); }

function renderSidebar(){
  const cls = state.selectedClass ? classes[state.selectedClass] : null;
  const portrait = el('classPortrait');
  portrait.className = `portrait ${cls ? cls.portrait : 'portrait-neutral'}`;
  el('className').textContent = cls ? cls.name : 'Nog niet gekozen';
  el('classDesc').textContent = cls ? cls.desc : 'Kies jouw stijl: analyseren, verbinden of daadkrachtig optreden.';
  el('stats').innerHTML = Object.entries(state.stats).map(([k,v]) => statTemplate(prettyStat(k), v, 10)).join('');
  el('partners').innerHTML = Object.entries(state.partners).map(([k,v]) => statTemplate(cap(k), v, 100)).join('');
  el('inventory').innerHTML = state.inventory.map(i => `<span class="pill">${i}</span>`).join('');
  el('logbook').innerHTML = state.log.slice(0,8).map(item => `<div class="log-entry">${item}</div>`).join('');
}

function renderAll(){
  renderLanding();
  renderMap();
  if(state.currentDossier) renderDossier();
  renderReport();
  renderSidebar();
  go(state.currentScreen || 'landing');
}

function downloadReport(){
  const text = [
    'ONDER DE OPPERVLAKTE — SPEELRAPPORT V6',
    '',
    `Klasse: ${state.selectedClass ? classes[state.selectedClass].name : 'Niet gekozen'}`,
    `Speelstijl: ${scoreStyle()}`,
    `Dossiers afgerond: ${state.completed.length}/4`,
    `Keuzes gemaakt: ${state.totalChoices}`,
    `Risicoscore: ${state.risk}`,
    '',
    'STATISTIEKEN',
    ...Object.entries(state.stats).map(([k,v]) => `- ${prettyStat(k)}: ${v}/10`),
    '',
    'PARTNERS',
    ...Object.entries(state.partners).map(([k,v]) => `- ${cap(k)}: ${v}/100`),
    '',
    'INVENTORY',
    ...state.inventory.map(i => `- ${i}`),
    '',
    'LOGB OEK',
    ...state.log.map(i => `- ${i}`)
  ].join('\n');
  const blob = new Blob([text], {type:'text/plain;charset=utf-8'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'onder_de_oppervlakte_rapport_v6.txt';
  a.click();
  URL.revokeObjectURL(a.href);
}

function toggleAmbient(){
  state.soundtrackOn = !state.soundtrackOn;
  el('musicBtn').textContent = `Ambient: ${state.soundtrackOn ? 'aan' : 'uit'}`;
  if(state.soundtrackOn){
    ambientTimer = setInterval(() => {
      const note = ambientNotes[Math.floor(Math.random()*ambientNotes.length)];
      const div = document.createElement('div');
      div.textContent = note;
      Object.assign(div.style, {
        position:'fixed', left:(10+Math.random()*80)+'vw', bottom:'8vh', color:'rgba(244,200,112,.35)',
        fontSize:(18+Math.random()*18)+'px', pointerEvents:'none', zIndex:999,
        transition:'transform 7s linear, opacity 7s linear', opacity:'0.9'
      });
      document.body.appendChild(div);
      requestAnimationFrame(() => {
        div.style.transform = `translateY(-${180+Math.random()*220}px)`;
        div.style.opacity = '0';
      });
      setTimeout(()=>div.remove(), 7200);
    }, 900);
  }else{
    clearInterval(ambientTimer);
    ambientTimer = null;
  }
  saveState();
}

document.addEventListener('click', (e) => {
  if(e.target.matches('#saveBtn')){ saveState(); state.log.unshift('Campagne handmatig opgeslagen.'); renderSidebar(); }
  if(e.target.matches('#resetBtn')){ if(confirm('Nieuwe campagne starten? Huidige voortgang wordt gewist.')) hardReset(); }
  if(e.target.matches('#musicBtn')) toggleAmbient();
});

renderAll();
el('musicBtn').textContent = `Ambient: ${state.soundtrackOn ? 'aan' : 'uit'}`;
if(state.soundtrackOn) toggleAmbient(), toggleAmbient(), toggleAmbient(); // restore timer cleanly
