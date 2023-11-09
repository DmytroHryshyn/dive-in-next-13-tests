import ClientChild from '../../_components/ClientChild';

const heavyLibThatRendersSomethingStatic = () => {

  console.log('Thats me, heavyLibThatRendersSomethingStatic!')

  return <div>Result</div>
}

export default function Page() {
  return <div>
    {heavyLibThatRendersSomethingStatic()}
    <ClientChild />
  </div>
}
