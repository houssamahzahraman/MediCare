import { useParams } from "react-router";
import { Container } from "../../components/layout/Container";

export function DoctorProfilePage() {
  const { doctorId } = useParams();

  return (
    <Container className="py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-800">
        Doctor profile: {doctorId}
      </h1>
    </Container>
  );
}
