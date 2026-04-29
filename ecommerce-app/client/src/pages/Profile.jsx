import useAuth from "../hooks/useAuth";

function Profile() {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">
        Profile
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow">
        <p>Name: {user?.name}</p>
        <p>Email: {user?.email}</p>
        <p>Role: {user?.role}</p>
      </div>
    </div>
  );
}

export default Profile;