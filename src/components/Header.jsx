import Button from "./Button";

export default function Header() {
  return (
    <header className='header'>
      <img src='/logo.svg' alt='logo' className='logo' />

      <div className='right-container'>
        <Button text='Register' />
        <Button text='Login' white />
      </div>
    </header>
  );
}
