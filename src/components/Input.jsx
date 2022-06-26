export default function Input({ label, type, id }) {
  return (
    <div className='input-container'>
      <label className='input-label'>{label}</label>
      <input className='input' type={type} id={id} />
    </div>
  );
}
