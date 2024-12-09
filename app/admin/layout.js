// import localFont from "next/font/local";

// const geistSans = localFont({
//     // src: "./fonts/GeistVF.woff",
//     variable: "--font-geist-sans",
//     weight: "100 900",
// });
// const geistMono = localFont({
//     // src: "./fonts/GeistMonoVF.woff",
//     variable: "--font-geist-mono",
//     weight: "100 900",
// });
// * http://localhost:3000/admin/login
// import AdminNavbar from "./components/AdminNavbar";
import Sidebar from "./components/Sidebar";
export const metadata = {
    title: "Admin | OFDS",
    description: "Admin: Online Food Delivery System",
};

export default function AdminLayout({ children }) {
    return (
        <>
            <div className="flex gap-2">
                <Sidebar/>
                {children}
            </div>
        </>

    );
}
