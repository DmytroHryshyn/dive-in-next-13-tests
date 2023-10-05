
export default function Test1() {
  return (
        <button onClick={() => {
          fetch('/api/hello')
        }} >
        TEST
        </button>
  );
}
