export default function Button({ text, white }) {
  return <button className={`btn ${white && "btn-white"}`}>{text}</button>;
}
