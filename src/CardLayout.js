import { Card, CardBody, Center } from "@chakra-ui/react";

export default function CardLayout({ children }) {
  return (
    <Card variant="filled" size="lg">
      <CardBody>
        <Center h="90px">{children}</Center>
      </CardBody>
    </Card>
  );
}
