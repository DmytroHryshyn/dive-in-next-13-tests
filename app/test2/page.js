import Link from 'next/link';
import methods from '../../test';

export const getData = async () => {
  const data = methods.serverSide();
  
  const componentString = await methods.render();
  return {
    props: data, 
    html: componentString, 
  }
}

export default async function Test2() {
  const data = await getData();
  console.log(data)
  return (
    <div>
      <h1>Test 2</h1>
      <ul>
        <li>
          <Link href='/test2/static/server'>/test2/static/server</Link>
        </li>
        <li>
          <Link href='/test2/static/client'>/test2/static/client</Link>
        </li>
        <li>
          <Link href='/test2/dynamic/server'>/test2/dynamic/server</Link>
        </li>
        <li>
          <Link href='/test2/dynamic/client'>/test2/dynamic/client</Link>
        </li>
      </ul>
    </div>
  );
}
