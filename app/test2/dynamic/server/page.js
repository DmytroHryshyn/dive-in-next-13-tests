'use server'
import { serverSideTranslations } from "../../../i18n";
import InternalClientComponent from "./InternalClientComponent";

const getData = async () => {
  return await serverSideTranslations();
}

export default async function DynamicServer({ searchParams }) {
  const { locale, translation } = await getData();
 
  return (
    <div>
     <InternalClientComponent  locale={locale} translation={translation}/>
    </div>
  );
}
