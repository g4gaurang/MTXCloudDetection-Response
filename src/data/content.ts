export type DetailGroup = { label: string; items: string[] }

export const challenges = [
  {
    title: 'Fragmented cloud telemetry',
    challenge: 'Relevant information may be distributed across cloud platforms, identity systems, endpoint tools, SaaS audit logs, and security platforms.',
    response: 'Bring selected signals into a connected event timeline that helps analysts view related identities, assets, actions, and changes.',
    signals: ['Audit events', 'Identity activity', 'Endpoint findings'],
    questions: ['Which identity acted?', 'What changed?', 'Which assets are related?'],
    actions: ['Open investigation', 'Correlate evidence', 'Notify owner'],
    measures: ['Evidence coverage', 'Investigation age'],
  },
  {
    title: 'Excessive alert volume',
    challenge: 'Security teams may receive more alerts than they can investigate consistently.',
    response: 'Apply contextual enrichment and behavioral analysis to help analysts prioritize events for review.',
    signals: ['Alert metadata', 'Asset context', 'Behavior history'],
    questions: ['What is unusual?', 'How sensitive is the asset?', 'Is activity recurring?'],
    actions: ['Prioritize review', 'Group related signals', 'Tune detection'],
    measures: ['Open investigations', 'Time to triage'],
  },
  {
    title: 'Identity-based attacks',
    challenge: 'Valid credentials can be used in unexpected ways after an account or access token is compromised.',
    response: 'Analyze identity activity, access patterns, privilege changes, locations, resources, and related behavior for unusual combinations.',
    signals: ['Sign-ins', 'Sessions', 'Privilege changes'],
    questions: ['Is the session expected?', 'Why did privilege change?', 'Are resources typical?'],
    actions: ['Review session', 'Request approval', 'Revoke session'],
    measures: ['Identity findings', 'Approval time'],
  },
  {
    title: 'Quiet data movement',
    challenge: 'Data exfiltration may appear as a series of individually permissible actions.',
    response: 'Connect changes in identity behavior, data access, transfer volume, destinations, timing, and resource sensitivity to support investigation.',
    signals: ['Data access', 'Transfer volume', 'Destination context'],
    questions: ['Is volume expected?', 'Is the destination known?', 'What data is involved?'],
    actions: ['Continue monitoring', 'Restrict transfer', 'Escalate review'],
    measures: ['Transfer deviations', 'Escalation rate'],
  },
  {
    title: 'Cloud and SaaS misconfiguration',
    challenge: 'Configuration changes can create exposure or weaken security controls.',
    response: 'Monitor approved configuration signals, identify meaningful deviations, and route findings through a governed review and remediation process.',
    signals: ['Configuration events', 'Change owner', 'Exposure context'],
    questions: ['Was change approved?', 'What is exposed?', 'Can it be reversed?'],
    actions: ['Create ticket', 'Request review', 'Start rollback workflow'],
    measures: ['Configuration findings', 'Remediation status'],
  },
  {
    title: 'Slow or inconsistent containment',
    challenge: 'Analysts may need to coordinate across cloud, identity, endpoint, and application teams before containing an incident.',
    response: 'Provide configurable response playbooks with ownership, approvals, action status, evidence, and audit history.',
    signals: ['Case status', 'Approvals', 'Action history'],
    questions: ['Who owns the action?', 'What approval is required?', 'Was the result validated?'],
    actions: ['Assign owner', 'Request approval', 'Execute approved action'],
    measures: ['Time to authorized action', 'Playbook usage'],
  },
]

export const lifecycle = [
  { name: 'Observe', icon: '01', summary: 'Bring selected telemetry into a shared view.', items: ['Cloud activity', 'Identity events', 'Workload behavior', 'Data access', 'Configuration changes', 'SaaS activity', 'Security-tool findings'], note: 'Available visibility depends on configured integrations and permissions.' },
  { name: 'Detect', icon: '02', summary: 'Identify activity that may warrant review.', items: ['Behavioral deviation', 'Rule-based finding', 'Threat-intelligence match', 'Suspicious event sequence', 'Configuration risk', 'Related security alert', 'Confidence and severity indicators'], note: 'AI-supported analysis informs review; it does not independently confirm a breach.' },
  { name: 'Investigate', icon: '03', summary: 'Organize evidence around the event.', items: ['Event timeline', 'Related identities', 'Affected assets', 'Supporting signals', 'Baseline comparison', 'Potential impact', 'Analyst notes', 'Similar prior activity', 'Investigation status'], note: 'Analysts retain context and decision authority.' },
  { name: 'Respond', icon: '04', summary: 'Select a governed action path.', items: ['Continue monitoring', 'Notify an analyst', 'Create a ticket', 'Request approval', 'Revoke a session', 'Disable access', 'Isolate a workload', 'Restrict a network path', 'Execute a preapproved playbook'], note: 'Available actions depend on configured integrations, permissions, policy, and deployment design.' },
  { name: 'Learn', icon: '05', summary: 'Use outcomes to refine operations.', items: ['Analyst disposition', 'False-positive feedback', 'Rule tuning', 'Baseline adjustment', 'Playbook review', 'Incident lessons', 'Model-performance monitoring', 'Reporting'], note: 'Changes remain subject to review and configuration.' },
]

export const behaviorEvents = [
  { name: 'Normal sign-in', time: '08:42', level: 'normal', why: 'Matches the identity’s recent working pattern.', benign: 'Routine start of work.', concern: 'None on its own.', evidence: 'Authentication method, device, recent sign-in history.' },
  { name: 'New session', time: '09:03', level: 'normal', why: 'A second session begins from a less familiar context.', benign: 'Approved travel or replacement device.', concern: 'Session token misuse.', evidence: 'Device posture, location, session issuance, travel context.' },
  { name: 'Privilege change', time: '09:17', level: 'elevated', why: 'Access scope increases outside the identity’s recent pattern.', benign: 'Approved administrative work.', concern: 'Privilege escalation using a compromised identity.', evidence: 'Change request, approving identity, assigned role, duration.' },
  { name: 'Sensitive-resource access', time: '09:29', level: 'elevated', why: 'The new privilege is used on a sensitive resource.', benign: 'Authorized support activity.', concern: 'Unauthorized discovery or collection.', evidence: 'Resource classification, query history, peer activity, ticket.' },
  { name: 'Increased transfer activity', time: '09:41', level: 'high', why: 'Transfer volume differs from the identity and resource baseline.', benign: 'Planned reporting or backup.', concern: 'Potential data staging or movement.', evidence: 'Volume, objects, destination, prior transfer profile.' },
  { name: 'Unusual destination', time: '09:48', level: 'high', why: 'Activity reaches a destination not recently associated with this workflow.', benign: 'New approved business integration.', concern: 'Potential unauthorized transfer destination.', evidence: 'Destination ownership, route, approval, data sensitivity.' },
  { name: 'Response recommendation', time: '09:52', level: 'action', why: 'The connected sequence supports analyst review and a controlled response decision.', benign: 'Evidence may confirm an approved workflow.', concern: 'Continued access may increase potential impact.', evidence: 'Full timeline, baseline comparison, asset owner, policy and approvals.' },
]

export const scenarios = [
  { name: 'Ransomware-like activity', severity: 'High', signals: ['Unusual workload behavior', 'Rapid file changes', 'Privilege activity', 'Lateral-access indicators'], rationale: 'A connected sequence differs from expected workload and access behavior.', evidence: ['Process lineage', 'File-change pattern', 'Privilege history'], options: ['Isolate workload', 'Restrict network path', 'Continue monitoring'], approval: 'Workload owner + incident commander', audit: 'Evidence, approval, action result, rollback status' },
  { name: 'Suspicious data movement', severity: 'Elevated', signals: ['Sensitive-data access', 'Transfer-volume change', 'New destination', 'Identity context'], rationale: 'Transfer behavior and destination context differ from recent patterns.', evidence: ['Data classification', 'Volume baseline', 'Destination ownership'], options: ['Restrict transfer', 'Revoke session', 'Monitor'], approval: 'Data owner for restrictive action', audit: 'Decision, approver, transfer evidence, action status' },
  { name: 'Compromised cloud identity', severity: 'High', signals: ['Unusual sign-in context', 'Token or session activity', 'Privilege changes', 'New resource access'], rationale: 'Identity and resource activity form an unusual sequence.', evidence: ['Authentication events', 'Session history', 'Role changes'], options: ['Revoke session', 'Disable access', 'Request identity review'], approval: 'Identity security lead', audit: 'Session evidence, approval, revocation result' },
  { name: 'Risky SaaS configuration change', severity: 'Medium', signals: ['Security-setting change', 'Change initiator', 'Affected service', 'Exposure assessment'], rationale: 'A security-relevant setting changed outside the expected pattern.', evidence: ['Before/after values', 'Initiator context', 'Change ticket'], options: ['Review change', 'Start rollback workflow', 'Create ticket'], approval: 'Application owner', audit: 'Configuration diff, reviewer, disposition, rollback status' },
]

export const responseModes = [
  { name: 'Monitor', description: 'The platform records and tracks the event without initiating an external action.', authority: 'No external action' },
  { name: 'Recommend', description: 'The platform suggests a response and presents supporting evidence to an analyst.', authority: 'Analyst decision' },
  { name: 'Approval required', description: 'An authorized user reviews and approves the proposed action before execution.', authority: 'Named approver' },
  { name: 'Preapproved automation', description: 'A defined playbook may execute when specified conditions, confidence thresholds, permissions, and safeguards are satisfied.', authority: 'Policy and playbook' },
]

export const safeguards = ['Approved asset groups', 'Approved action types', 'Confidence threshold', 'Severity threshold', 'Maintenance exclusions', 'Protected-account exclusions', 'Maximum action scope', 'Rollback procedure', 'Notification requirements', 'Escalation path']

export const integrations = [
  { name: 'Cloud telemetry', items: ['Cloud audit events', 'Workload telemetry', 'Network events', 'Storage activity', 'Configuration information'] },
  { name: 'Identity', items: ['Identity provider', 'Privileged access', 'Authentication events', 'Session information', 'Access changes'] },
  { name: 'Existing security platforms', items: ['SIEM', 'EDR or XDR', 'CNAPP or CSPM', 'Threat intelligence', 'Vulnerability management', 'SOAR'] },
  { name: 'Operations', items: ['IT service management', 'Incident ticketing', 'Messaging', 'Email', 'On-call notification', 'Case management'] },
]

export const responsibilities = [
  ['Physical infrastructure', 'Primary', '—', '—', '—', '—'],
  ['Cloud-service configuration', 'Shared', 'Primary', 'Review', 'Signals', 'Support'],
  ['Identity and access', 'Platform controls', 'Primary', 'Governance', 'Detect / respond', 'Support'],
  ['Workload security', 'Shared', 'Primary', 'Oversight', 'Signals', 'Support'],
  ['Data protection', 'Shared', 'Primary', 'Oversight', 'Context', 'Support'],
  ['Telemetry configuration', 'Source', 'Primary', 'Requirements', 'Ingest / health', 'Support'],
  ['Detection review', '—', 'Context', 'Primary', 'Workspace', 'Per contract'],
  ['Response approval', '—', 'Owner input', 'Primary', 'Workflow', 'Per contract'],
  ['Incident containment', 'Shared', 'Primary', 'Coordinate', 'Approved action', 'Per contract'],
  ['Recovery', 'Shared', 'Primary', 'Coordinate', 'Evidence', 'Support'],
  ['Audit evidence', 'Provider records', 'Customer records', 'Review', 'Platform history', 'Per contract'],
]

export const governance = [
  { name: 'Access governance', items: ['Role-based access', 'Separation of duties', 'Privileged actions', 'Approval authority', 'Environment restrictions'], detail: 'Define who can view evidence, change configuration, approve actions, and administer response policy.' },
  { name: 'Response governance', items: ['Approved playbooks', 'Action boundaries', 'Human approval', 'Protected assets', 'Rollback procedures', 'Change history'], detail: 'Constrain response by asset, action type, scope, policy, and accountable owner.' },
  { name: 'AI governance', items: ['Model purpose', 'Model version', 'Input-source visibility', 'Confidence indicators', 'Analyst feedback', 'Performance monitoring', 'Review and override'], detail: 'Present AI-assisted findings as decision support with source visibility and analyst override.' },
  { name: 'Auditability', items: ['Detection history', 'Evidence accessed', 'Analyst decisions', 'Approvals', 'Actions executed', 'Outcome status', 'Configuration changes'], detail: 'Maintain a traceable record of investigation and response activity.' },
]

export const roadmap = [
  { phase: '01', name: 'Discover', items: ['Cloud environments', 'Security architecture', 'Priority threats', 'Existing tools', 'Response policies', 'Critical assets', 'Operational responsibilities'] },
  { phase: '02', name: 'Connect', items: ['Configure selected data sources', 'Establish permissions', 'Validate telemetry', 'Define retention', 'Test connector health'] },
  { phase: '03', name: 'Detect and investigate', items: ['Establish initial baselines', 'Configure detections', 'Tune priorities', 'Validate evidence', 'Train analysts'] },
  { phase: '04', name: 'Governed response', items: ['Define playbooks', 'Assign approvals', 'Establish action boundaries', 'Test response procedures', 'Validate rollback'] },
  { phase: '05', name: 'Operate and improve', items: ['Review detections', 'Tune baselines', 'Monitor model performance', 'Update playbooks', 'Add integrations', 'Report operational measures'] },
]

export const analyticsData = [
  { day: 'Mon', detections: 18, investigations: 8, authorized: 3 },
  { day: 'Tue', detections: 24, investigations: 11, authorized: 4 },
  { day: 'Wed', detections: 20, investigations: 7, authorized: 2 },
  { day: 'Thu', detections: 31, investigations: 13, authorized: 5 },
  { day: 'Fri', detections: 27, investigations: 10, authorized: 4 },
  { day: 'Sat', detections: 12, investigations: 4, authorized: 1 },
  { day: 'Sun', detections: 15, investigations: 5, authorized: 2 },
]
