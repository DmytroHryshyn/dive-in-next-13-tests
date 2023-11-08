import Home from "@/pages/test1";
// import * as test from 'test';

const getData = async () => {
  // test.func();
}
export default async function Page() {
  
  await getData();
  return (
    <div>
     <Home />
    </div>
  );
}
