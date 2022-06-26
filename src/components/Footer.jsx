export default function Footer() {
  const links = ["Blog", "Send Feedback", "Contribute", "About us", "Help"];

  return (
    <footer>
      <div className='footer-logo-container'>
        {/* change alt text later */}
        <img src='/logo-footer.svg' alt='our-logo' />
        <p className='footer-copyright'>&copy;2022 Terms Privacy</p>
      </div>
      <div className='footer-links-container'>
        <ul>
          {links.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </div>

      <div className='footer-social-media'>
        <div className='footer-social-media-logo'>
          <img src='/logos/facebook.svg' alt='facebook-logo' />
        </div>
        <div className='footer-social-media-logo'>
          <img src='/logos/instagram.svg' alt='instagram-logo' />
        </div>
        <div className='footer-social-media-logo'>
          <img src='/logos/twitter.svg' alt='twitter-logo' />
        </div>
      </div>
    </footer>
  );
}
