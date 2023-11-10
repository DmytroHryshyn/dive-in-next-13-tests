import LegacyPage, { getServerSideProps } from "@/pages/test1/test";

export default async function Page() {

    const { props } = await getServerSideProps(); 
    console.log(props, '?')
    return <LegacyPage {...props} />
}