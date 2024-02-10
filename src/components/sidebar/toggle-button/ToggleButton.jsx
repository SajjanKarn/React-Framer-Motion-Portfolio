export default function ToggleButton({ setOpen }) {
  return <button onClick={() => setOpen((prev) => !prev)}>Click</button>;
}
