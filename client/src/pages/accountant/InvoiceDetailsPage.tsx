import { useParams } from "react-router";
import { Container } from "../../components/layout/Container";

export function InvoiceDetailsPage() {
  const { invoiceId } = useParams();

  return (
    <Container className="py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-800">
        Invoice details: {invoiceId}
      </h1>
    </Container>
  );
}
