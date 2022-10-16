import notFound from '../assets/images/not-found.svg'

export default function Error() {
  return (
    <main className="sc-bczRLJ kUbnRM full-page">
      <div>
        <img
          src={notFound}
          alt="not found"
        />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <a href="/">back home</a>
      </div>
    </main>
  );
}
