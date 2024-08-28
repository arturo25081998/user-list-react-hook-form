import KoderCard from "./KoderCard";

export default function KodersWrapper(props) {
  return (
    <section className="flex flex-col w-full max-w-lg  gap-4">
      {props.koders.map((koder, index) => {
        return (
          <KoderCard
            key={`koder-${index}`}
            name={koder.name}
            lastName={koder.lastName}
            github={koder.github}
          />
        );
      })}
    </section>
  );
}
