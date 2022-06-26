import Header from "./Header";
import Footer from "./Footer";

export default function Wrapper({ children }) {
  return (
    <div className='wrapper'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
