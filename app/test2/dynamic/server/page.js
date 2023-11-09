import './index.css';

const heavyLibThatRendersSomethingStatic = () => {
  console.log('Thats me, heavyLibThatRendersSomethingStatic!')
  return <div>Result</div>
}

export default function DynamicServer({ searchParams }) {
  console.log('Test 2: rendering DynamicServer');
  // trigger dynamic rendering
  const foobar = searchParams?.foobar;
  return (
    <div className='b'>
      {foobar}
      {heavyLibThatRendersSomethingStatic()}
      <h2>Server component in a dynamic route</h2>
    </div>
  );
}
