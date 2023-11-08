import { useState } from 'react';
import * as test from 'test';

export default function Home() {
    useState();
   
    return (
      <div>
       Pages dir
      </div>
    );
  }
  
export const getServerSideProps = () => {
  test.func();

  return {}
}
