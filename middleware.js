import { NextResponse } from "next/server";

const getLocale = () => {
    return Math.random() > 0.5 ? 'en' : 'fr'
}

export default function(req) {
    const url = req.nextUrl;

    if(url.pathname.includes('localized-ssg-page')) {
        const locale = getLocale();
        const url = req.nextUrl.clone();
        url.pathname = `${locale}${url.pathname}/`;
        return NextResponse.rewrite(url);
    }
}