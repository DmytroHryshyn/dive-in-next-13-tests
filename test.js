// import * as ReactDOMServer from "react-dom/server";
import TestCompoment from "./components/TestCompoment.tsx";

 const render = async () => {
  const ReactDOMServer = (await import('react-dom/server')).default;
  return ReactDOMServer.renderToStaticMarkup(TestCompoment({ a: 1}))
 }

 const serverSide = () => ({data: 1})
 
 
 export default {
  render, 
  serverSide,
 }