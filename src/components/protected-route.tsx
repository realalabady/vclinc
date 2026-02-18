import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/lib/auth-context";
import { useLocale } from "@/components/locale-provider";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: "patient" | "admin";
}

export function ProtectedRoute({
  children,
  requiredRole,
}: ProtectedRouteProps) {
  const { user, isAuthenticated, isLoading } = useAuth();
  const { locale, isArabic } = useLocale();
  const location = useLocation();

  console.log("[ProtectedRoute]", {
    path: location.pathname,
    requiredRole,
    isLoading,
    isAuthenticated,
    userRole: user?.role,
    userEmail: user?.email,
  });

  // عرض شاشة التحميل أثناء التحقق من الجلسة
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-offwhite">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-gold border-t-transparent" />
          <p className="text-charcoal">
            {isArabic ? "جارٍ التحميل..." : "Loading..."}
          </p>
        </div>
      </div>
    );
  }

  // إذا لم يكن المستخدم مسجل دخوله
  if (!isAuthenticated || !user) {
    // تحديد صفحة تسجيل الدخول المناسبة
    const loginPath =
      requiredRole === "admin"
        ? `/${locale}/login?role=admin`
        : `/${locale}/login`;

    return <Navigate to={loginPath} state={{ from: location }} replace />;
  }

  // التحقق من صلاحية الأدمن - نستخدم الـ role من Firestore
  if (requiredRole === "admin") {
    if (user.role !== "admin") {
      // توجيه غير المصرح لهم إلى داشبورد المريض
      return <Navigate to={`/${locale}/dashboard`} replace />;
    }
  }

  // التحقق من صلاحية المستخدم العادية
  if (requiredRole && user.role !== requiredRole) {
    // توجيه المستخدم للداشبورد المناسبة لدوره
    const redirectPath =
      user.role === "admin" ? `/${locale}/admin` : `/${locale}/dashboard`;

    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
}
