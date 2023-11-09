'use client'

const heavyLibThatRendersSomethingStatic = () => {
  console.log('Thats me, heavyLibThatRendersSomethingStatic!')
  return <div>Result</div>
}

export default function StaticClient() {
  console.log('Test 2: rendering StaticClient');
  return (
    <div>
      <h2>Client component in a static route</h2>
      {heavyLibThatRendersSomethingStatic()}
    </div>
  );
}
