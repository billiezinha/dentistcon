import Card from "@/app/components/Card";

export default function Home() {
  return (
    <div className="cards">
      <Card
        title="NOME"
        description="LOCALIZAÇÃO"
        imageUrl="https://via.placeholder.com/300"
      />
      <Card
        title="NOME 2"
        description="LOCALIZAÇÃO 2."
        imageUrl="https://via.placeholder.com/300"
      />
      <Card
        title="NOME 3"
        description="LOCALIZAÇÃO 3"
        imageUrl="https://via.placeholder.com/300"
      />
    </div>
  );
}
