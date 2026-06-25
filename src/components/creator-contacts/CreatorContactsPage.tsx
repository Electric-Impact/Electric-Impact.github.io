import React, { useState, useEffect, useMemo, useRef } from 'react';
import './CreatorContactsPage.css';

interface Contact {
  type: string;
  value: string;
}

interface Creator {
  id: number;
  platform: string;
  name: string;
  url: string | null;
  subscriber_count: number | null;
  viewer_count: number | null;
  collected_at: string;
  games: string[];
  contacts: Contact[];
}

type SortKey = 'name' | 'subscriber_count' | 'viewer_count';
type SortDir = 'asc' | 'desc';

const PASSWORD = process.env.REACT_APP_CONTACTS_PASSWORD ?? '';
const SESSION_KEY = 'ei-contacts-auth';

// ─── helpers ────────────────────────────────────────────────────────────────

function formatSubs(n: number | null): string {
  if (n == null) return '—';
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M subs`;
  if (n >= 1_000) return `${Math.round(n / 1_000)}K subs`;
  return `${n} subs`;
}

function formatViewers(n: number | null, platform: string): string {
  if (n == null) return '—';
  if (platform === 'twitch') return `${n.toLocaleString()} viewers`;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M views`;
  if (n >= 1_000) return `${Math.round(n / 1_000)}K views`;
  return `${n} views`;
}

function contactHref(contact: Contact): string {
  const { type, value } = contact;
  if (type === 'email' || type === 'business_email') return `mailto:${value}`;
  if (value.startsWith('http://') || value.startsWith('https://')) return value;
  const handle = value.startsWith('@') ? value.slice(1) : value;
  switch (type) {
    case 'twitter':   return `https://twitter.com/${handle}`;
    case 'instagram': return `https://instagram.com/${handle}`;
    case 'tiktok':    return `https://tiktok.com/@${handle}`;
    case 'youtube':   return `https://youtube.com/@${handle}`;
    case 'discord':   return `https://discord.gg/${handle}`;
    default:          return `https://${value}`;
  }
}

const CONTACT_LABELS: Record<string, string> = {
  email: '✉',
  business_email: '✉',
  twitter: '𝕏',
  instagram: 'IG',
  tiktok: 'TT',
  discord: 'DC',
  youtube: 'YT',
};

function contactLabel(contact: Contact): string {
  const prefix = CONTACT_LABELS[contact.type] ?? contact.type;
  return `${prefix} ${contact.value}`;
}

// ─── password gate ───────────────────────────────────────────────────────────

function PasswordGate({ onSuccess }: { onSuccess: () => void }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { inputRef.current?.focus(); }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!PASSWORD) {
      setError(true);
      return;
    }
    if (value === PASSWORD) {
      onSuccess();
    } else {
      setError(true);
      setValue('');
    }
  }

  return (
    <div className="cc-gate">
      <form className="cc-gate-form" onSubmit={handleSubmit}>
        <h2 className="cc-gate-title">Creator Contacts</h2>
        <p className="cc-gate-sub">This page is restricted.</p>
        <input
          ref={inputRef}
          className={`cc-gate-input${error ? ' cc-gate-input--error' : ''}`}
          type="password"
          placeholder="Enter password"
          value={value}
          onChange={e => { setValue(e.target.value); setError(false); }}
          autoComplete="current-password"
        />
        {error && (
          <p className="cc-gate-error">
            {!PASSWORD ? 'REACT_APP_CONTACTS_PASSWORD is not set.' : 'Incorrect password.'}
          </p>
        )}
        <button className="cc-gate-btn" type="submit">Enter</button>
      </form>
    </div>
  );
}

// ─── contacts viewer ─────────────────────────────────────────────────────────

function ContactsViewer() {
  const [data, setData] = useState<Creator[] | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const [sortKey, setSortKey] = useState<SortKey>('subscriber_count');
  const [sortDir, setSortDir] = useState<SortDir>('desc');
  const [platform, setPlatform] = useState<'all' | 'youtube' | 'twitch'>('all');
  const [selectedGames, setSelectedGames] = useState<Set<string>>(new Set());
  const [selectedContactTypes, setSelectedContactTypes] = useState<Set<string>>(new Set());
  const initialized = useRef(false);

  useEffect(() => {
    fetch('/contacts.json')
      .then(r => {
        if (!r.ok) throw new Error('not found');
        return r.json() as Promise<Creator[]>;
      })
      .then(setData)
      .catch(() => setFetchError('contacts.json not found — run export-json first'));
  }, []);

  const allGames = useMemo(() => {
    if (!data) return [];
    const set = new Set<string>();
    data.forEach(c => c.games.forEach(g => set.add(g)));
    return Array.from(set).sort();
  }, [data]);

  const allContactTypes = useMemo(() => {
    if (!data) return [];
    const set = new Set<string>();
    data.forEach(c => c.contacts.forEach(ct => set.add(ct.type)));
    return Array.from(set).sort();
  }, [data]);

  // Initialize filter sets once when data loads
  useEffect(() => {
    if (data && !initialized.current) {
      initialized.current = true;
      setSelectedGames(new Set(allGames));
      setSelectedContactTypes(new Set(allContactTypes));
    }
  }, [data, allGames, allContactTypes]);

  const filtered = useMemo(() => {
    if (!data) return [];
    return data.filter(c => {
      if (platform !== 'all' && c.platform !== platform) return false;
      if (selectedGames.size > 0 && !c.games.some(g => selectedGames.has(g))) return false;
      if (selectedContactTypes.size > 0 && !c.contacts.some(ct => selectedContactTypes.has(ct.type))) return false;
      return true;
    });
  }, [data, platform, selectedGames, selectedContactTypes]);

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      const aVal: string | number | null = sortKey === 'name' ? a.name.toLowerCase() : a[sortKey];
      const bVal: string | number | null = sortKey === 'name' ? b.name.toLowerCase() : b[sortKey];
      if (aVal == null && bVal == null) return 0;
      if (aVal == null) return 1;
      if (bVal == null) return -1;
      if (aVal < bVal) return sortDir === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortDir === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filtered, sortKey, sortDir]);

  function handleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir(d => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir('desc');
    }
  }

  function clearFilters() {
    setPlatform('all');
    setSelectedGames(new Set(allGames));
    setSelectedContactTypes(new Set(allContactTypes));
  }

  function toggleGame(game: string) {
    setSelectedGames(prev => {
      const next = new Set(prev);
      if (next.has(game)) next.delete(game); else next.add(game);
      return next;
    });
  }

  function toggleContactType(type: string) {
    setSelectedContactTypes(prev => {
      const next = new Set(prev);
      if (next.has(type)) next.delete(type); else next.add(type);
      return next;
    });
  }

  function sortArrow(key: SortKey) {
    if (sortKey !== key) return <span className="cc-arrow cc-arrow--inactive">↕</span>;
    return <span className="cc-arrow">{sortDir === 'asc' ? '↑' : '↓'}</span>;
  }

  if (fetchError) {
    return <div className="cc-fetch-error">{fetchError}</div>;
  }

  if (!data) {
    return <div className="cc-loading">Loading…</div>;
  }

  return (
    <div className="cc-page">
      <h1 className="cc-title">Creator Contacts</h1>

      <div className="cc-filters">
        <fieldset className="cc-fieldset">
          <legend>Platform</legend>
          {(['all', 'youtube', 'twitch'] as const).map(p => (
            <label key={p} className="cc-label">
              <input
                type="radio"
                name="platform"
                value={p}
                checked={platform === p}
                onChange={() => setPlatform(p)}
              />
              {p === 'all' ? 'All' : p.charAt(0).toUpperCase() + p.slice(1)}
            </label>
          ))}
        </fieldset>

        {allGames.length > 0 && (
          <fieldset className="cc-fieldset">
            <legend>Games</legend>
            {allGames.map(game => (
              <label key={game} className="cc-label">
                <input
                  type="checkbox"
                  checked={selectedGames.has(game)}
                  onChange={() => toggleGame(game)}
                />
                {game}
              </label>
            ))}
          </fieldset>
        )}

        {allContactTypes.length > 0 && (
          <fieldset className="cc-fieldset">
            <legend>Contact Types</legend>
            {allContactTypes.map(type => (
              <label key={type} className="cc-label">
                <input
                  type="checkbox"
                  checked={selectedContactTypes.has(type)}
                  onChange={() => toggleContactType(type)}
                />
                {type}
              </label>
            ))}
          </fieldset>
        )}

        <button className="cc-clear-btn" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>

      <p className="cc-count">
        {sorted.length} creator{sorted.length !== 1 ? 's' : ''}
      </p>

      <div className="cc-table-wrap">
        <table className="cc-table">
          <thead>
            <tr>
              <th className="cc-sortable" onClick={() => handleSort('name')}>
                Name {sortArrow('name')}
              </th>
              <th>Platform</th>
              <th className="cc-sortable" onClick={() => handleSort('subscriber_count')}>
                Subscribers {sortArrow('subscriber_count')}
              </th>
              <th className="cc-sortable" onClick={() => handleSort('viewer_count')}>
                Viewers / Views {sortArrow('viewer_count')}
              </th>
              <th>Games</th>
              <th>Contacts</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map(creator => (
              <tr key={creator.id}>
                <td>
                  {creator.url
                    ? <a href={creator.url} target="_blank" rel="noreferrer">{creator.name}</a>
                    : creator.name}
                </td>
                <td className="cc-cell-platform">{creator.platform}</td>
                <td className="cc-cell-num">{formatSubs(creator.subscriber_count)}</td>
                <td className="cc-cell-num">{formatViewers(creator.viewer_count, creator.platform)}</td>
                <td className="cc-cell-games">{creator.games.join(', ')}</td>
                <td className="cc-cell-contacts">
                  {creator.contacts.map((ct, i) => (
                    <a
                      key={i}
                      href={contactHref(ct)}
                      className={`cc-chip cc-chip--${ct.type.replace('_', '-')}`}
                      target={ct.type === 'email' || ct.type === 'business_email' ? undefined : '_blank'}
                      rel="noreferrer"
                      title={ct.value}
                    >
                      {contactLabel(ct)}
                    </a>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── page root ───────────────────────────────────────────────────────────────

const CreatorContactsPage: React.FC = () => {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem(SESSION_KEY) === '1');

  function handleSuccess() {
    sessionStorage.setItem(SESSION_KEY, '1');
    setAuthed(true);
  }

  if (!authed) return <PasswordGate onSuccess={handleSuccess} />;
  return <ContactsViewer />;
};

export default CreatorContactsPage;
