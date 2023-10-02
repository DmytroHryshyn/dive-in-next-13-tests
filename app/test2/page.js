import Link from 'next/link';

import I18nextAdapter from '../../components/p';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const getProps = async () => {
  return await serverSideTranslations('en', ['en']);
}

export default async function Test2() {
  
  const props = await getProps();
  console.log(props);
  
  return (
    <I18nextAdapter {...props}>
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
    </I18nextAdapter>
  );
}
