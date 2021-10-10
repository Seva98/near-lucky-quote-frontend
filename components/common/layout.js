import Footer from './footer';
import Meta from './meta';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen max-w-screen-sm mx-auto">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
