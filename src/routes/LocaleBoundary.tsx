import { Navigate, Outlet, useParams, useLocation } from "react-router-dom";
import { LocaleProvider } from "@/components/locale-provider";
import { SiteLayout } from "@/routes/SiteLayout";
import { isSupportedLocale } from "@/lib/locales";

// الصفحات التي لا تحتاج للـ Layout العادي (Navbar + Footer)
const STANDALONE_PAGES = ["login", "dashboard", "admin", "register"];

export function LocaleBoundary() {
  const { locale } = useParams<{ locale?: string }>();
  const location = useLocation();

  if (!locale || !isSupportedLocale(locale)) {
    return <Navigate to="/ar" replace />;
  }

  // التحقق من إذا كانت الصفحة تحتاج layout خاص
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const currentPage = pathSegments[1] || ""; // الجزء بعد اللغة
  const isStandalonePage = STANDALONE_PAGES.some((page) =>
    currentPage.startsWith(page),
  );

  console.log("[LocaleBoundary]", {
    locale,
    pathname: location.pathname,
    pathSegments,
    currentPage,
    isStandalonePage,
  });

  return (
    <LocaleProvider locale={locale}>
      {isStandalonePage ? <Outlet /> : <SiteLayout />}
    </LocaleProvider>
  );
}
