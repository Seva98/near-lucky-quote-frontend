import Container from './container';
import Hr from './hr';

export default function Footer() {
  return (
    <>
      <Hr />
      <footer className="flex items-center justify-center w-full h-24">
        <Container className="text-center text-xs">
          <div>© {new Date().getFullYear()} Code Marketer s.r.o. All Rights Reserved.</div>
          <div>
            <span>Made by </span>
            <a href="https://resume.sevcik.dev" className="w-min hover:text-gray-500" style={{ margin: '0 auto' }}>
              sevcik.dev
            </a>
          </div>
        </Container>
      </footer>
    </>
  );
}
