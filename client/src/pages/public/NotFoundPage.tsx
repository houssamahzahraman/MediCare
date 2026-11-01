import { Link } from "react-router";
import { Container } from "../../components/layout/Container";

export function NotFoundPage() {
  return (
    <Container className="py-24 text-center">
      <p className="text-sm font-semibold text-primary-700">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-800">Page not found</h1>
      <p className="mt-4 text-gray-600">The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="mt-8 inline-block font-semibold text-primary-700 underline-offset-4 hover:underline"
      >
        Back to home
      </Link>
    </Container>
  );
}
