import { useContext, useEffect } from "react";
import { ApiContext } from "../context/ApiContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout, demoDocuments } = useContext(ApiContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);

  if (!user) return null;

  const total = demoDocuments.length;
  const approved = demoDocuments.filter((d) => d.status === "Approved").length;
  const pending = demoDocuments.filter((d) => d.status === "Pending").length;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button
          onClick={() => {
            logout();
            navigate("/");
          }}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-gray-500">Total Docs</h2>
            <p className="text-2xl font-bold">{total}</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-gray-500">Approved</h2>
            <p className="text-2xl font-bold text-green-600">{approved}</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-gray-500">Pending</h2>
            <p className="text-2xl font-bold text-yellow-600">{pending}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold mb-4">Documents</h2>

          <div className="space-y-3">
            {demoDocuments.map((doc) => (
              <div
                key={doc.id}
                className="flex justify-between items-center border p-3 rounded-lg hover:shadow"
              >
                <div>
                  <p className="font-medium">{doc.title}</p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    doc.status === "Approved"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {doc.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
