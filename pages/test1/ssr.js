'use client'
import { getServerSideProps } from './test';

export default function ComponentSSR({ user }) {
  console.log('Rendering ComponentSSR');
  return (
    <div>
      <h2>Server-side rendering</h2>
      <div>user: {user?.name}</div>
    </div>
  );
}

export { getServerSideProps }