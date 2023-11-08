export default function Page({ params: { lang }}) {
    return <div>{lang}</div>
}

export const generateStaticParams = () => {
    return [{ lang: 'en'}, { lang: 'fr' }];
}