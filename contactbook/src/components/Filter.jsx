export default function Filter({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  )
}
