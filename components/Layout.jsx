import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// Layout.jsxは全てのコンポーネントをラップし共通のスタイルやレイアウトを適応させる
export default function Layout({
  children,
  title = "Blog and Todos by Nextjs",
}) {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-white bg-gray-800 font-mono">
      <Head>{title}</Head>

      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>

      <footer className="w-full h-6 flex justify-center items-center text-gray-500 text-sm">
        @t-riku 2023
      </footer>
    </div>
  );
}
