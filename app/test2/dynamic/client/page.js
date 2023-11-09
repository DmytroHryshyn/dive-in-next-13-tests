'use client';

import ClientChild from "@/app/test3/_components/ClientChild";

const heavyLibThatRendersSomethingStatic = () => {

  console.log('Thats me, heavyLibThatRendersSomethingStatic!')

  return <div>Result</div>
}

export default function DynamicClient({ searchParams }) {
  console.log('Test 2: rendering DynamicClient');
  // trigger dynamic rendering
  const foobar = searchParams?.foobar;
  return (
    <div>
      {foobar}
      {heavyLibThatRendersSomethingStatic}
      <h2>Client component in a dynamic route</h2>
      <ClientChild />
    </div>
  );
}
