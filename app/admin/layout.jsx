import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "SalePoint - Admin",
    description: "SalePoint - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
