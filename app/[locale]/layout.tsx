import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { QueryProvider } from "@/query/QueryClientProvider";
import "./globals.css";
import { LangContext } from "@/context/Context";
import Layout from "@/features";
import { ToastContainer } from 'react-toastify';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/Logo.svg" />
        <title>Ashyo</title>
      </head>
      <body>
        <NextIntlClientProvider>
          <QueryProvider>
            <LangContext>
              <Layout>{children}</Layout>
              <ToastContainer position="top-right" />
            </LangContext>
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
