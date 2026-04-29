import Layout from "../components/layout/Layout";

function Home() {
  return (
    <Layout>
      <div className="text-center py-24">
        <h1 className="text-6xl font-bold mb-5">
          Welcome to ShopVerse
        </h1>
        <p className="text-xl text-gray-600">
          Amazon + Flipkart + Myntra experience
        </p>
      </div>
    </Layout>
  );
}

export default Home;