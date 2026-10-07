import { useState } from 'react'
import { Plane, Building2, Binoculars, Gift, ArrowLeftRight, MapPin, CalendarDays, User, Search } from 'lucide-react'

const tabs = [
  ['Flights', Plane],
  ['Hotels', Building2],
  ['Tours', Binoculars],
  ['Packages', Gift],
]

export default function SearchBox({ initialTab = 'Flights' }) {
  const [tab, setTab] = useState(initialTab)
  const isFlight = tab === 'Flights'

  return (
    <div className="search">
      <div className="search__tabs">
        {tabs.map(([label, Icon]) => (
          <button key={label} className={tab === label ? 'active' : ''} onClick={() => setTab(label)}>
            <Icon size={16} /> {label}
          </button>
        ))}
      </div>
      <form className="search__fields" onSubmit={(e) => e.preventDefault()}>
        {isFlight && (
          <label className="field">
            <small>From</small>
            <span><input defaultValue="New York (NYC)" /><ArrowLeftRight size={16} /></span>
          </label>
        )}
        <label className="field">
          <small>{isFlight ? 'To' : 'Destination'}</small>
          <span><input placeholder="Where to?" /><MapPin size={16} /></span>
        </label>
        <label className="field">
          <small>{isFlight ? 'Depart' : 'Check in'}</small>
          <span><input type="date" defaultValue="2026-11-20" /><CalendarDays size={16} /></span>
        </label>
        <label className="field">
          <small>{isFlight ? 'Return' : 'Check out'}</small>
          <span><input type="date" defaultValue="2026-11-27" /><CalendarDays size={16} /></span>
        </label>
        <label className="field">
          <small>Travelers</small>
          <span><input defaultValue="2 Adults, 1 Child" /><User size={16} /></span>
        </label>
        <button className="btn btn--primary search__btn">Search <Search size={18} /></button>
      </form>
    </div>
  )
}
