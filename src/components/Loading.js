export default function Loading({message}) {
  return (
<div className="flex items-center justify-center flex-col h-full">

    <div
      style={{ borderTopColor: "transparent" }}
      className="mt-3 w-16 h-16 border-4 border-red-400 border-solid rounded-full animate-spin"
    />
    <p>{message}</p>
</div>
  );
}
