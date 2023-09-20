'use client'
import { useTranslation } from "react-i18next";

export default async function InternalClientComponent({ locale, translation }) {
  const { t, i18n } = await useTranslation('translation');
  i18n?.addResources(locale, 'translation', translation);
 
  return (
    <div>
      <h2>{t('title')}</h2>
    </div>
  );
}