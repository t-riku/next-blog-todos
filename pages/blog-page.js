import Layout from "components/Layout";
import Link from "next/link";
import { getAllPostsData } from "lib/posts";
import Post from "components/Post";

export default function BlogPage({ filteredPosts }) {
  return (
    <Layout title="Blog page">
      <ul>
        {filteredPosts &&
          filteredPosts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
      <Link href="/main-page">
        <div className="flex cursor-pointer mt-12 hover:bg-gray-600">
          <svg
            className="w-6 h-6 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
          <span>Back to main page</span>
        </div>
      </Link>
    </Layout>
  );

  // ビルド時に呼び出されてサーバーサイドで実行される
}
export async function getStaticProps() {
  const filteredPosts = await getAllPostsData();
  return {
    props: { filteredPosts },
    // インクリメンタルスタティックリジェネレーションにしたいときはrevalidateを追加するだけでOK
    // HTML再生成は3秒間に1度だけ。たくさんのユーザーが見にきた時にサーバーに負荷がかかるため。
    revalidate: 3,
  };
}
