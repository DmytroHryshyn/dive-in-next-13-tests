"use client";
import React, { useMemo } from "react";
import { I18nextProvider } from "react-i18next";
import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions } from "../../../i18n/settings";

const Layout = ({ children }) => {

  const i18n = useMemo(() => {
    const i18nInstance = createInstance();
    const defaultLocale = 'en'
    const defaultNs = 'translation';
    i18nInstance.use(initReactI18next).init(getOptions(defaultLocale, defaultNs));

    return i18nInstance;
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default Layout;
