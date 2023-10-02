'use client'
import { appWithTranslation } from "next-i18next";

const I18nextAdapter = appWithTranslation(({ children }) => <>{children}</>);

export default I18nextAdapter;