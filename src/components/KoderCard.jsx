export default function KoderCard(props) {
  return (
    <article className="w-full border border-blue-300 rounded p-2 grid grid-cols-[6rem_1fr]">
      <img
        src={`https://github.com/${props.github}.png`}
        alt="koder-image"
        className="rounded-full p-2"
      />
      <div className="flex flex-col gap-1 p-2">
        <span>{props.name}</span>
        <span>{props.lastName}</span>
        <a target="_blank" href={`https://github.com/${props.github}`}>
          Github :{" "}
          <span className="text-blue-800 underline">{props.github}</span>
        </a>
      </div>
    </article>
  );
}
