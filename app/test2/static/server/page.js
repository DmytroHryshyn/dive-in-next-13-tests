import './index.css';

const heavyLibThatRendersSomethingStatic = () => {

  console.log('Thats me, heavyLibThatRendersSomethingStatic!')

  return <div>Result</div>
}

export default function StaticServer() {
  console.log('Test 2: rendering StaticServer');

  return (
    <div className="a">
      <h2>Server component in a static route</h2>
      {heavyLibThatRendersSomethingStatic()}
      {getData()}
    </div>
  );
}

const getData = () => {
  console.log('Test 2: executing getStaticProps');
  return '{ a: 1 }'
}