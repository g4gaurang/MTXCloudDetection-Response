import { useState } from 'react'
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Blocks,
  Check,
  ChevronDown,
  ChevronRight,
  CircleDot,
  Cloud,
  Database,
  FileCheck2,
  Fingerprint,
  GitBranch,
  Layers3,
  LockKeyhole,
  Menu,
  Network,
  Play,
  Radar,
  Search,
  Send,
  ServerCog,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
  Users,
  X,
  Zap,
} from 'lucide-react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import {
  analyticsData,
  behaviorEvents,
  challenges,
  governance,
  integrations,
  lifecycle,
  responseModes,
  responsibilities,
  roadmap,
  safeguards,
  scenarios,
} from './data/content'
import './App.css'

const navItems = [
  { label: 'Overview', href: '#overview' },
  { label: 'Detection', href: '#detection' },
  { label: 'Investigation', href: '#investigation' },
  { label: 'Response', href: '#response' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Governance', href: '#governance' },
  { label: 'Analytics', href: '#analytics' },
]

const scopeItems = [
  { icon: Cloud, title: 'Cloud activity', text: 'Audit, workload, network, storage, and configuration signals.' },
  { icon: Fingerprint, title: 'Identity context', text: 'Authentication, session, privilege, and access-change activity.' },
  { icon: Database, title: 'Data movement', text: 'Resource sensitivity, access patterns, destinations, and volume.' },
  { icon: Blocks, title: 'Security ecosystem', text: 'Context from connected security and operations platforms.' },
]

const whyItems = [
  ['Behavior viewed in context', 'Connect activity across identities, assets, configurations, and data events to support analyst review.'],
  ['Investigation-ready evidence', 'Organize related activity into a timeline with the context analysts need to assess a finding.'],
  ['Policy-controlled response', 'Apply monitoring, recommendations, approvals, or preapproved playbooks according to organizational policy.'],
  ['Works with the security ecosystem', 'Connect selected cloud and security tools through configured integrations and permissions.'],
]

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Atom Detect home">
      <span className="brand-mark" aria-hidden="true"><span /></span>
      <span>ATOM <b>DETECT</b></span>
    </a>
  )
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [challenge, setChallenge] = useState(0)
  const [lifecycleStage, setLifecycleStage] = useState(0)
  const [event, setEvent] = useState(4)
  const [scenario, setScenario] = useState(1)
  const [responseMode, setResponseMode] = useState(1)
  const [integration, setIntegration] = useState(0)
  const [matrixActor, setMatrixActor] = useState(1)
  const [governanceTab, setGovernanceTab] = useState(0)
  const [roadmapPhase, setRoadmapPhase] = useState(0)
  const [caseStatus, setCaseStatus] = useState('Investigating')
  const [disposition, setDisposition] = useState('Undetermined')
  const [note, setNote] = useState('')
  const [notes, setNotes] = useState<string[]>([])
  const [evidenceOpen, setEvidenceOpen] = useState(true)
  const [actionState, setActionState] = useState('Not started')
  const [playbookStep, setPlaybookStep] = useState(0)
  const [simulator, setSimulator] = useState({
    scenario: 'Compromised cloud identity',
    criticality: 'High',
    confidence: '78%',
    hours: 'Business hours',
    mode: 'Approval required',
    approval: 'Identity security lead',
  })
  const [formSent, setFormSent] = useState(false)

  const currentChallenge = challenges[challenge]
  const currentEvent = behaviorEvents[event]
  const currentScenario = scenarios[scenario]

  function addNote() {
    if (!note.trim()) return
    setNotes((items) => [note.trim(), ...items])
    setNote('')
  }

  return (
    <div id="top">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="site-header">
        <div className="nav-shell">
          <Brand />
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav id="site-nav" className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
            ))}
            <a className="button button-small" href="#contact" onClick={() => setMenuOpen(false)}>Request a Demo <ArrowRight /></a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero section-dark" id="overview">
          <div className="hero-grid page-shell">
            <div className="hero-copy">
              <div className="eyebrow light"><span className="live-dot" /> Cloud Detection &amp; Response</div>
              <h1>Detect unusual cloud activity and <span>respond with control</span></h1>
              <p className="hero-lede">Atom Detect uses behavioral analytics and AI-assisted threat hunting to help security teams identify suspicious activity, understand the supporting evidence, and apply policy-controlled response actions.</p>
              <p className="hero-description">Atom Detect brings cloud, identity, workload, data, and SaaS activity into a connected investigation experience. Analysts can review why an event was flagged, assess potential impact, and select a response based on established organizational policies.</p>
              <div className="hero-actions">
                <a className="button" href="#detection">Explore Detection Workflow <ArrowRight /></a>
                <a className="text-link" href="#investigation">Open Investigation Console <ChevronRight /></a>
                <a className="text-link" href="#contact">Request Product Demonstration <ChevronRight /></a>
              </div>
              <p className="hero-note"><ShieldCheck /> AI-assisted analysis supports review. Analysts retain decision authority.</p>
            </div>

            <div className="hero-console" aria-label="Illustrative Atom Detect investigation console">
              <div className="console-topbar">
                <div><span /><span /><span /></div>
                <p><Radar /> ATOM / INVESTIGATION</p>
                <span className="console-live">LIVE VIEW</span>
              </div>
              <div className="console-body">
                <aside className="console-side" aria-hidden="true">
                  <Activity /><Search /><Layers3 /><Network /><ServerCog />
                </aside>
                <div className="console-main">
                  <div className="console-heading">
                    <div>
                      <span className="micro-label">ACTIVE DETECTION · INV-2048</span>
                      <h3>Behavioral risk: unusual access sequence</h3>
                    </div>
                    <span className="risk-badge"><AlertTriangle /> ELEVATED</span>
                  </div>
                  <div className="signal-map">
                    <small className="map-label">EVENT TIMELINE</small>
                    <div className="map-grid" />
                    <div className="signal-path" />
                    {[
                      ['Identity', '18%', '50%'],
                      ['Privilege', '40%', '26%'],
                      ['Resource', '66%', '56%'],
                      ['Transfer', '82%', '30%'],
                    ].map(([name, left, top], index) => (
                      <div key={name} className={`signal-node node-${index}`} style={{ left, top }}>
                        <span>{index + 1}</span><small>{name}</small>
                      </div>
                    ))}
                  </div>
                  <div className="console-metrics">
                    <div><small>Affected identities</small><strong>1</strong><span>Illustrative</span></div>
                    <div><small>Cloud assets</small><strong>3</strong><span>Illustrative</span></div>
                    <div><small>Investigation status</small><strong>Open</strong><span>Analyst review</span></div>
                  </div>
                  <div className="recommendation">
                    <Sparkles />
                    <div><small>RECOMMENDED RESPONSE · MODE: APPROVAL REQUIRED</small><p>Review the event timeline, then request session revocation if evidence supports it.</p></div>
                    <ChevronRight />
                  </div>
                </div>
              </div>
              <p className="illustrative-label">Illustrative Atom Detect interface</p>
            </div>
          </div>
          <div className="hero-band page-shell">
            <span>Designed for complex, shared environments</span>
            <div><span>CLOUD ACTIVITY</span><span>IDENTITY</span><span>WORKLOADS</span><span>DATA</span><span>BUSINESS APPS</span><span>SECURITY OPS</span></div>
          </div>
        </section>

        <section className="section platform-section">
          <div className="page-shell">
            <SectionHeading
              eyebrow="Platform scope"
              title="A connected view of relevant activity"
              copy="Atom Detect organizes selected telemetry and context around identities, assets, activity, and change—subject to configured integrations and permissions."
            />
            <div className="scope-indicators" aria-label="Platform scope indicators">
              <div><strong>5</strong><span>Connected security stages</span><small>{lifecycle.map((item) => item.name).join(' · ')}</small></div>
              <div><strong>4</strong><span>Response-control modes</span><small>{responseModes.map((item) => item.name).join(' · ')}</small></div>
              <div><strong>1</strong><span>Investigation timeline</span><small>Connected evidence and analyst history</small></div>
              <div><ShieldCheck /><span>Policy-controlled response</span><small>Permissions, boundaries, approvals, and audit</small></div>
            </div>
            <div className="scope-grid">
              {scopeItems.map(({ icon: Icon, title, text }, index) => (
                <article className="scope-card" key={title}>
                  <div className="card-number">0{index + 1}</div>
                  <Icon />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="page-shell">
            <SectionHeading
              eyebrow="Operational challenges"
              title="Start with the problem your team needs to solve"
              copy="Select a challenge to see how signals, investigation questions, governed actions, and operational measures connect."
            />
            <div className="challenge-layout">
              <div className="selector-list" role="list" aria-label="Security challenges">
                {challenges.map((item, index) => (
                  <button className={challenge === index ? 'selector-item active' : 'selector-item'} type="button" key={item.title} onClick={() => setChallenge(index)}>
                    <span>0{index + 1}</span>{item.title}<ChevronRight />
                  </button>
                ))}
              </div>
              <article className="challenge-detail">
                <span className="detail-kicker">CHALLENGE / 0{challenge + 1}</span>
                <h3>{currentChallenge.title}</h3>
                <p className="detail-lede">{currentChallenge.challenge}</p>
                <div className="response-callout"><Sparkles /><p>{currentChallenge.response}</p></div>
                <div className="detail-columns">
                  {[
                    ['Signals', currentChallenge.signals],
                    ['Questions', currentChallenge.questions],
                    ['Actions', currentChallenge.actions],
                    ['Measures', currentChallenge.measures],
                  ].map(([label, items]) => (
                    <div key={label as string}>
                      <h4>{label as string}</h4>
                      {(items as string[]).map((item) => <p key={item}><Check />{item}</p>)}
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section lifecycle-section" id="detection">
          <div className="page-shell">
            <SectionHeading
              eyebrow="Operating lifecycle"
              title="One governed path from signal to learning"
              copy="Each stage preserves context, ownership, and review history across the detection and response workflow."
            />
            <div className="lifecycle-selector" role="tablist" aria-label="Security lifecycle stages">
              {lifecycle.map((stage, index) => (
                <button
                  className={lifecycleStage === index ? 'active' : ''}
                  type="button"
                  role="tab"
                  aria-selected={lifecycleStage === index}
                  key={stage.name}
                  onClick={() => setLifecycleStage(index)}
                >
                  <span>{stage.icon}</span><strong>{stage.name}</strong>{index < lifecycle.length - 1 && <ArrowRight />}
                </button>
              ))}
            </div>
            <article className="lifecycle-interface" role="tabpanel">
              <div>
                <span className="detail-kicker">STAGE {lifecycle[lifecycleStage].icon} / SELECTED</span>
                <h3>{lifecycle[lifecycleStage].name}</h3>
                <p>{lifecycle[lifecycleStage].summary}</p>
                <small>{lifecycle[lifecycleStage].note}</small>
              </div>
              <div className="lifecycle-signals">
                {lifecycle[lifecycleStage].items.map((item, index) => <span key={item}><b>{String(index + 1).padStart(2, '0')}</b>{item}<Check /></span>)}
              </div>
              <div className="lifecycle-preview">
                <small>SUPPORTING INTERFACE</small>
                <strong>{['Telemetry health and source coverage', 'Prioritized finding and signal rationale', 'Evidence timeline and related entities', 'Policy checks and accountable action path', 'Disposition feedback and tuning history'][lifecycleStage]}</strong>
                <p>Interface content updates with the selected lifecycle stage.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="section section-dark behavior-section">
          <div className="page-shell">
            <SectionHeading
              eyebrow="Behavioral context"
              title="A sequence can matter more than a single event"
              copy="Explore an illustrative identity sequence. Each event includes benign explanations, possible concerns, and evidence for analyst review."
            />
            <div className="timeline-panel">
              <div className="timeline" role="list" aria-label="Behavior event timeline">
                {behaviorEvents.map((item, index) => (
                  <button key={item.name} className={`timeline-event ${item.level} ${event === index ? 'active' : ''}`} type="button" onClick={() => setEvent(index)}>
                    <span className="event-time">{item.time}</span>
                    <span className="event-dot" />
                    <span className="event-name">{item.name}</span>
                  </button>
                ))}
              </div>
              <article className="event-detail">
                <div className="event-title"><span className={`status-dot ${currentEvent.level}`} /><div><small>{currentEvent.time} / SELECTED EVENT</small><h3>{currentEvent.name}</h3></div></div>
                <p className="event-why">{currentEvent.why}</p>
                <div className="event-interpretation">
                  <div><BadgeCheck /><span><small>POSSIBLE BENIGN CONTEXT</small>{currentEvent.benign}</span></div>
                  <div><AlertTriangle /><span><small>POSSIBLE CONCERN</small>{currentEvent.concern}</span></div>
                  <div><Search /><span><small>EVIDENCE TO REVIEW</small>{currentEvent.evidence}</span></div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="page-shell">
            <SectionHeading eyebrow="Scenario explorer" title="Different risks, the same evidence-led discipline" copy="Review example detection scenarios and the context that may inform an accountable response decision." />
            <div className="scenario-tabs" role="tablist" aria-label="Detection scenarios">
              {scenarios.map((item, index) => (
                <button role="tab" aria-selected={scenario === index} className={scenario === index ? 'active' : ''} key={item.name} type="button" onClick={() => setScenario(index)}>{item.name}</button>
              ))}
            </div>
            <article className="scenario-card">
              <div className="scenario-summary">
                <span className={`severity severity-${currentScenario.severity.toLowerCase()}`}>{currentScenario.severity} priority</span>
                <h3>{currentScenario.name}</h3>
                <p>{currentScenario.rationale}</p>
                <div className="signal-tags">{currentScenario.signals.map((item) => <span key={item}><CircleDot />{item}</span>)}</div>
              </div>
              <div className="scenario-grid">
                <div><h4>Evidence to review</h4>{currentScenario.evidence.map((item) => <p key={item}><Search />{item}</p>)}</div>
                <div><h4>Response options</h4>{currentScenario.options.map((item) => <p key={item}><Zap />{item}</p>)}</div>
                <div><h4>Approval path</h4><p><UserRoundCheck />{currentScenario.approval}</p><h4>Audit record</h4><p><FileCheck2 />{currentScenario.audit}</p></div>
              </div>
            </article>
          </div>
        </section>

        <section className="section section-soft console-section" id="investigation">
          <div className="page-shell">
            <SectionHeading eyebrow="Investigation workspace" title="Keep evidence, decisions, and action state together" copy="Use the illustrative console below to explore an analyst-led review. Values and records are fictional." />
            <div className="investigation-console">
              <div className="investigation-bar">
                <div><span className="status-pulse" /><span><small>INVESTIGATION</small><strong>INV-2048</strong></span></div>
                <div className="console-controls">
                  <label>Status<select value={caseStatus} onChange={(e) => setCaseStatus(e.target.value)}><option>Open</option><option>Investigating</option><option>Pending approval</option><option>Closed</option></select></label>
                  <label>Disposition<select value={disposition} onChange={(e) => setDisposition(e.target.value)}><option>Undetermined</option><option>Expected activity</option><option>Policy violation</option><option>Confirmed incident</option></select></label>
                </div>
              </div>
              <div className="investigation-grid">
                <div className="case-overview">
                  <div className="case-title"><span className="severity severity-elevated">Elevated</span><h3>Unusual identity and transfer sequence</h3><p>12 related signals across identity, cloud audit, and storage telemetry.</p></div>
                  <div className="case-facts">
                    <div><small>IDENTITY</small><strong>svc-analytics-02</strong></div>
                    <div><small>RESOURCE</small><strong>customer-archive</strong></div>
                    <div><small>FIRST SEEN</small><strong>09:03 UTC</strong></div>
                    <div><small>OWNER</small><strong>Data Platform</strong></div>
                  </div>
                  <div className="evidence-card">
                    <button type="button" onClick={() => setEvidenceOpen(!evidenceOpen)} aria-expanded={evidenceOpen}>
                      <span><Search /> Evidence summary <b>4</b></span><ChevronDown className={evidenceOpen ? 'rotate' : ''} />
                    </button>
                    {evidenceOpen && <div className="evidence-list">
                      {['Session issued from a new device context', 'Privilege assigned for 60-minute duration', 'Sensitive archive queried after privilege change', 'Transfer destination not present in recent history'].map((item, index) => <p key={item}><span>0{index + 1}</span>{item}<FileCheck2 /></p>)}
                    </div>}
                  </div>
                  <div className="note-panel">
                    <label htmlFor="analyst-note">Analyst note</label>
                    <div><textarea id="analyst-note" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Record context or a decision…" rows={3} /><button className="icon-button" type="button" onClick={addNote} aria-label="Add analyst note"><Send /></button></div>
                    {notes.map((item, index) => <p className="saved-note" key={`${item}-${index}`}><UserRoundCheck />{item}</p>)}
                  </div>
                </div>
                <aside className="response-panel">
                  <span className="detail-kicker">RESPONSE DECISION</span>
                  <h3>Request session revocation</h3>
                  <p>Restrict the active session while preserving evidence and notifying the identity owner.</p>
                  <div className="response-requirements">
                    <p><Check /> Identity security lead approval</p>
                    <p><Check /> Protected accounts exclusion checked</p>
                    <p><Check /> Session evidence attached</p>
                  </div>
                  <div className="action-status"><small>ACTION STATUS</small><strong>{actionState}</strong></div>
                  <button className="button full-button" type="button" disabled={actionState !== 'Not started'} onClick={() => setActionState('Approval requested')}>
                    {actionState === 'Not started' ? 'Request approval' : actionState}<ArrowRight />
                  </button>
                  <small className="fictional-note">Illustrative workflow. No external action is performed.</small>
                </aside>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="response">
          <div className="page-shell">
            <SectionHeading eyebrow="Response controls" title="Automate within defined boundaries" copy="Select a response mode to review its authority model. Permissions, policy, and deployment design determine what the platform can do." />
            <div className="response-mode-selector" role="tablist" aria-label="Response control modes">
              {responseModes.map((mode, index) => (
                <button type="button" role="tab" aria-selected={responseMode === index} className={responseMode === index ? 'active' : ''} onClick={() => setResponseMode(index)} key={mode.name}><span>0{index + 1}</span><strong>{mode.name}</strong></button>
              ))}
            </div>
            <article className="response-mode-detail" role="tabpanel">
              <div><span className="detail-kicker">SELECTED RESPONSE MODE</span><h3>{responseModes[responseMode].name}</h3><p>{responseModes[responseMode].description}</p></div>
              <div><LockKeyhole /><small>DECISION AUTHORITY</small><strong>{responseModes[responseMode].authority}</strong></div>
              <div><ShieldCheck /><small>BOUNDARY CHECK</small><strong>{responseMode < 2 ? 'Analyst workflow' : 'Policy, scope, and permissions'}</strong></div>
            </article>
            <div className="safeguard-panel">
              <div><span className="eyebrow">Policy guardrails</span><h3>Safeguards travel with the action</h3><p>Define boundaries before restrictive response is available.</p></div>
              <div className="safeguard-list">{safeguards.map((item) => <span key={item}><ShieldCheck />{item}</span>)}</div>
            </div>
          </div>
        </section>

        <section className="section section-dark simulator-section">
          <div className="page-shell simulator-grid">
            <div>
              <SectionHeading eyebrow="Playbook simulator" title="Preview the decision path before execution" copy="Walk through an illustrative playbook. Simulation does not connect to or change an external system." />
              <div className="simulator-inputs">
                {[
                  ['Scenario', 'scenario', ['Compromised cloud identity', 'Suspicious data movement', 'Risky configuration change']],
                  ['Asset criticality', 'criticality', ['Low', 'Medium', 'High', 'Critical']],
                  ['Detection confidence', 'confidence', ['55%', '78%', '92%']],
                  ['Business-hours status', 'hours', ['Business hours', 'Outside business hours']],
                  ['Response mode', 'mode', responseModes.map((item) => item.name)],
                  ['Approval policy', 'approval', ['Identity security lead', 'Asset owner', 'Incident commander']],
                ].map(([label, key, options]) => (
                  <label key={key as string}>{label as string}
                    <select value={simulator[key as keyof typeof simulator]} onChange={(e) => { setSimulator({ ...simulator, [key as string]: e.target.value }); setPlaybookStep(0) }}>
                      {(options as string[]).map((option) => <option key={option}>{option}</option>)}
                    </select>
                  </label>
                ))}
              </div>
              <div className="simulator-actions">
                <button className="button" type="button" onClick={() => setPlaybookStep(Math.min(8, playbookStep + 1))} disabled={playbookStep === 8}><Play />{playbookStep === 0 ? 'Run simulation' : 'Advance event'}</button>
                <button className="text-button" type="button" onClick={() => setPlaybookStep(0)}>Reset</button>
              </div>
              <p className="simulation-label">Illustrative simulation — no external action</p>
            </div>
            <div>
              <div className="playbook">
              {[
                ['Ingest finding', `${simulator.scenario} enters review.`],
                ['Validate confidence', `${simulator.confidence} confidence is evaluated against policy.`],
                ['Assess asset context', `${simulator.criticality} criticality changes the required review path.`],
                ['Check operating context', `${simulator.hours} workflow is selected.`],
                ['Apply response mode', `${simulator.mode} authority boundary is applied.`],
                ['Check exclusions', 'Protected identities, maintenance windows, and scope are checked.'],
                ['Route approval', `Decision routes to ${simulator.approval}.`],
                ['Record simulated result', 'No external action; decision and evidence are added to the event log.'],
              ].map(([title, text], index) => (
                <div className={`${index < playbookStep ? 'complete' : ''} ${index === playbookStep ? 'current' : ''}`} key={title}>
                  <span>{index < playbookStep ? <Check /> : index + 1}</span><div><h3>{title}</h3><p>{text}</p></div>{index === playbookStep && <small>{playbookStep === 0 ? 'READY' : 'CURRENT'}</small>}
                </div>
              ))}
              </div>
              <div className="simulation-log" aria-live="polite">
                <strong>SIMULATION EVENT LOG</strong>
                {playbookStep === 0 ? <p>Ready. Configure inputs and run the simulation.</p> : Array.from({ length: playbookStep }, (_, index) => <p key={index}><span>{String(index + 1).padStart(2, '0')}</span> Path event completed and recorded locally.</p>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="integrations">
          <div className="page-shell">
            <SectionHeading eyebrow="Integration architecture" title="Connect the controls you already operate" copy="Integration scope is selected by environment. Availability depends on source APIs, permissions, product editions, and implementation." />
            <div className="architecture">
              <div className="integration-columns" role="tablist" aria-label="Integration categories">
                {integrations.map((group, index) => (
                  <button role="tab" aria-selected={integration === index} className={integration === index ? 'active' : ''} type="button" onClick={() => setIntegration(index)} key={group.name}><span>0{index + 1}</span><strong>{group.name}</strong><ChevronRight /></button>
                ))}
              </div>
              <article className="integration-detail" role="tabpanel">
                <div><span className="detail-kicker">SELECTED CATEGORY</span><h3>{integrations[integration].name}</h3><p>Connector details depend on source interfaces, permissions, deployment configuration, and product editions.</p></div>
                <div>{integrations[integration].items.map((item) => <span key={item}><Check />{item}</span>)}</div>
              </article>
              <div className="architecture-core"><div><Radar /><span>ATOM DETECT</span><small>Observe · Detect · Investigate · Respond · Learn</small></div></div>
              <div className="architecture-outcomes">
                <span><Search /> Analyst workspace</span><span><GitBranch /> Governed playbooks</span><span><FileCheck2 /> Audit history</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-soft matrix-section">
          <div className="page-shell">
            <SectionHeading eyebrow="Shared responsibility" title="Technology supports accountability; it does not replace it" copy="This example matrix is a planning aid. Final responsibilities depend on the cloud service, deployment, operating model, and contract." />
            <div className="actor-selector" role="group" aria-label="Highlight responsibility actor">
              <span>Highlight actor</span>
              {['Cloud provider', 'Customer', 'Security team', 'Atom Detect', 'Service partner'].map((actor, index) => <button className={matrixActor === index + 1 ? 'active' : ''} type="button" aria-pressed={matrixActor === index + 1} onClick={() => setMatrixActor(index + 1)} key={actor}>{actor}</button>)}
            </div>
            <div className="table-wrap" tabIndex={0} aria-label="Shared responsibility matrix, horizontally scrollable">
              <table>
                <thead><tr>{['Activity', 'Cloud provider', 'Customer', 'Security team', 'Atom Detect', 'Service partner'].map((actor, index) => <th className={matrixActor === index ? 'highlight' : ''} key={actor}>{actor}</th>)}</tr></thead>
                <tbody>{responsibilities.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th scope="row" key={cell}>{cell}</th> : <td className={matrixActor === index ? 'highlight' : ''} key={`${cell}-${index}`}>{cell}</td>)}</tr>)}</tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section analytics-section" id="analytics">
          <div className="page-shell">
            <div className="analytics-grid">
              <div>
              <SectionHeading eyebrow="Operational analytics" title="Measures that support review and tuning" copy="Example analytics show workflow volume and progression. Values are fictional and illustrative, not product benchmarks." />
              <div className="metric-row">
                <div><strong>147</strong><span>Detections reviewed</span><small>Illustrative product data</small></div>
                <div><strong>58</strong><span>Investigations opened</span><small>Illustrative product data</small></div>
                <div><strong>21</strong><span>Authorized actions</span><small>Illustrative product data</small></div>
              </div>
            </div>
            <div className="chart-card" aria-label="Illustrative weekly workflow chart">
              <div className="chart-title"><span>WORKFLOW ACTIVITY</span><small>ILLUSTRATIVE PRODUCT DATA — APPLIES TO EVERY FIGURE</small></div>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={analyticsData} margin={{ top: 18, right: 8, bottom: 0, left: -22 }}>
                  <defs>
                    <linearGradient id="detections" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#30d6ba" stopOpacity={0.35}/><stop offset="95%" stopColor="#30d6ba" stopOpacity={0}/></linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#dce4e8" />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#657681', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#657681', fontSize: 12 }} />
                  <Tooltip contentStyle={{ borderRadius: 4, border: '1px solid #dce4e8', fontSize: 12 }} />
                  <Legend iconType="line" wrapperStyle={{ fontSize: 12 }} />
                  <Area type="monotone" dataKey="detections" stroke="#0f927e" fill="url(#detections)" strokeWidth={2} />
                  <Area type="monotone" dataKey="investigations" stroke="#315c75" fill="transparent" strokeWidth={2} />
                  <Area type="monotone" dataKey="authorized" stroke="#da8f38" fill="transparent" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            </div>
            <div className="analytics-categories">
              {[
                ['Detection operations', '147', 'Findings reviewed'],
                ['Investigation', '58', 'Cases opened'],
                ['Response', '21', 'Authorized actions'],
                ['Platform health', '4 / 5', 'Telemetry sources reporting'],
                ['Detection quality', '34', 'Analyst feedback items'],
              ].map(([name, value, label]) => <article key={name}><span>{name}</span><strong>{value}</strong><p>{label}</p><small>Illustrative product data</small></article>)}
            </div>
          </div>
        </section>

        <section className="section governance-section" id="governance">
          <div className="page-shell">
            <SectionHeading eyebrow="Governance" title="Make authority, boundaries, and history visible" copy="Governance controls help teams define who can act, under what conditions, and how decisions are reviewed." />
            <div className="governance-layout">
              <div className="governance-tabs" role="tablist" aria-orientation="vertical" aria-label="Governance topics">
                {governance.map((item, index) => <button key={item.name} type="button" role="tab" aria-selected={governanceTab === index} className={governanceTab === index ? 'active' : ''} onClick={() => setGovernanceTab(index)}><span>0{index + 1}</span>{item.name}<ChevronRight /></button>)}
              </div>
              <article className="governance-detail" role="tabpanel">
                <ShieldCheck /><span className="detail-kicker">CONTROL AREA / 0{governanceTab + 1}</span>
                <h3>{governance[governanceTab].name}</h3>
                <p>{governance[governanceTab].detail}</p>
                <div>{governance[governanceTab].items.map((item) => <span key={item}><Check />{item}</span>)}</div>
              </article>
            </div>
          </div>
        </section>

        <section className="section roadmap-section" id="delivery">
          <div className="page-shell">
            <SectionHeading eyebrow="Deployment roadmap" title="Build capability in controlled stages" copy="Select a phase to review the activities associated with discovery, connectivity, validation, governance, and operating improvement." />
            <div className="roadmap-selector" role="tablist" aria-label="Deployment roadmap phases">
              {roadmap.map((phase, index) => <button role="tab" aria-selected={roadmapPhase === index} className={roadmapPhase === index ? 'active' : ''} type="button" onClick={() => setRoadmapPhase(index)} key={phase.phase}><span>{phase.phase}</span><strong>{phase.name}</strong></button>)}
            </div>
            <article className="roadmap-detail" role="tabpanel"><div><span className="detail-kicker">SELECTED DEPLOYMENT PHASE</span><h3>{roadmap[roadmapPhase].phase} / {roadmap[roadmapPhase].name}</h3><p>Activities are adapted to the deployment scope and operating responsibilities.</p></div><div>{roadmap[roadmapPhase].items.map((item) => <span key={item}><Check />{item}</span>)}</div></article>
          </div>
        </section>

        <section className="section section-soft offering-section">
          <div className="page-shell">
            <SectionHeading eyebrow="Product and services" title="A platform supported by practical delivery" copy="Select product capability and service support according to your operating model and internal capacity." />
            <div className="offering-grid">
              <article><div className="offering-icon"><Radar /></div><span>PRODUCT</span><h3>Atom Detect platform</h3><p>Connected detection, investigation, controlled response, operational analytics, and governance workflows.</p><div className="component-chips">{['Signal connectors', 'Behavior timeline', 'Investigation workspace', 'Response policy', 'Playbooks', 'Analytics', 'Audit history'].map((item) => <span key={item}>{item}</span>)}</div><a href="#contact">Discuss platform scope <ArrowRight /></a></article>
              <article><div className="offering-icon"><Users /></div><span>SERVICES</span><h3>Advisory and implementation</h3><p>Architecture discovery, integration planning, use-case design, workflow configuration, validation, and enablement.</p><div className="component-chips">{['Architecture review', 'Connector planning', 'Detection design', 'Policy workshops', 'Playbook testing', 'Team enablement'].map((item) => <span key={item}>{item}</span>)}</div><div className="validation-service"><strong>Managed Detection and Response</strong><span>Requires validation</span><p>Service availability, scope, staffing, and operating terms have not been established by this demonstration.</p></div><a href="#contact">Discuss delivery support <ArrowRight /></a></article>
            </div>
            <div className="maturity-model">
              <div><span className="eyebrow">Capability status</span><h3>Product maturity and operating evidence</h3></div>
              {[
                ['Investigation workspace', 'Available'],
                ['Connectors and response policies', 'Configured per deployment'],
                ['Additional detection packages', 'Planned'],
                ['Operating outcomes and service scope', 'Requires validation'],
              ].map(([item, status], index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong><small className="maturity-status">{status}</small></div>)}
            </div>
          </div>
        </section>

        <section className="section why-section">
          <div className="page-shell why-grid">
            <div><span className="eyebrow">Why Atom Detect</span><h2>Built for careful decisions in complex environments</h2><p>Security operations need useful context and clear authority—not another isolated stream of alerts.</p></div>
            <div className="why-list">{whyItems.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
          </div>
        </section>

        <section className="contact-section section-dark" id="contact">
          <div className="page-shell contact-grid">
            <div>
              <span className="eyebrow light">Start a conversation</span>
              <h2>Map Atom Detect to your environment</h2>
              <p>Tell us which cloud, identity, and security workflows matter most. We’ll use that context to structure a focused discussion.</p>
              <div className="contact-points"><span><Check /> No product claims without validation</span><span><Check /> Scope integrations and permissions</span><span><Check /> Define governance before response</span></div>
            </div>
            {formSent ? (
              <div className="confirmation" role="status"><div><Check /></div><span className="eyebrow">Message recorded locally</span><h3>Thank you.</h3><p>This demonstration does not transmit form data. In a deployed site, connect this form to an approved contact workflow.</p><button type="button" className="text-button" onClick={() => setFormSent(false)}>Return to form</button></div>
            ) : (
              <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setFormSent(true) }}>
                <div className="form-row"><label>Name<input required name="name" autoComplete="name" placeholder="Your name" /></label><label>Organization<input required name="organization" autoComplete="organization" placeholder="Organization" /></label></div>
                <div className="form-row"><label>Role<input required name="role" autoComplete="organization-title" placeholder="Your role" /></label><label>Email<input required type="email" name="email" autoComplete="email" placeholder="you@company.com" /></label></div>
                <label>Cloud environment<input required name="cloud-environment" placeholder="Environment types, accounts, or operating model" /></label>
                <label>Existing security tools<input name="security-tools" placeholder="Security operations, endpoint, identity, or ticketing tools" /></label>
                <label>Primary concern<select required name="concern" defaultValue=""><option value="" disabled>Select a concern</option><option>Cloud activity</option><option>Identity-based attacks</option><option>Data movement</option><option>Governed response</option><option>Implementation planning</option></select></label>
                <label>Message<textarea required name="message" rows={4} placeholder="Describe the workflow or outcome you want to discuss" /></label>
                <button className="button full-button" type="submit">Request a discussion <ArrowRight /></button>
                <small>Demo form: submission is confirmed locally and no data is transmitted.</small>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer>
        <div className="page-shell footer-top">
          <div><Brand /><p>Cloud detection, investigation, and policy-controlled response.</p></div>
          <div><strong>Explore</strong>{navItems.slice(0, 3).map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</div>
          <div><strong>Operate</strong>{navItems.slice(3).map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}<a href="#contact">Contact</a></div>
          <a className="back-top" href="#top">Back to top <ArrowRight /></a>
        </div>
        <div className="page-shell footer-bottom"><span>© 2026 Atom Detect. Demonstration site.</span><span>Product availability and capabilities depend on configuration and deployment.</span></div>
      </footer>
      <a className="floating-back-top" href="#top" aria-label="Back to top"><ArrowRight /></a>
    </div>
  )
}

export default App
