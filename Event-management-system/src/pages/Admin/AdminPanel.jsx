// AdminPanel.jsx
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
// import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";

const AdminPanel = () => {
  const [events, setEvents] = useState([]);
  // const navigate = useNavigate();

  const fetchEvents = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    // Check if user has admin role
    // const { data: profile } = await supabase
    //   .from("profiles")
    //   .select("role")
    //   .eq("id", user.id)
    //   .single();

    // if (!profile?.role) {
    //   toast.error("Access Denied. Admins only.");
    //   return navigate("/");
    // }

    // Fetch events
    const { data, error } = await supabase
      .from("events")
      .select("*, profiles(full_name)")
      .order("created_at", { ascending: false });

    if (error) toast.error(error.message);
    else setEvents(data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const updateStatus = async (id, status) => {
    const { error } = await supabase
      .from("events")
      .update({ status })
      .eq("id", id);

    if (error) toast.error("Update failed");
    else {
      toast.success(`Event ${status}`);
      fetchEvents();
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Admin Panel - Event Requests
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <Card key={event.id} className="shadow-md dark:bg-gray-800">
            <CardContent className="space-y-2">
              <p className="text-sm text-gray-500 dark:text-gray-300">
                Requested by: <strong>{event.profiles?.full_name}</strong>
              </p>
              <p className="text-gray-700 dark:text-white font-semibold">
                Event: {event.name}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Place: {event.place} | Category: {event.category}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Event Date: {new Date(event.date).toLocaleString()}
              </p>
              <p className="text-xs text-gray-400">
                Requested on: {new Date(event.created_at).toLocaleString()}
              </p>
              <p
                className={`text-sm font-bold ${
                  event.status === "approved"
                    ? "text-green-600"
                    : event.status === "rejected"
                      ? "text-red-600"
                      : "text-yellow-500"
                }`}
              >
                Status: {event.status}
              </p>
              <div className="flex gap-2 mt-2">
                <Button
                  variant="default"
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => updateStatus(event.id, "approved")}
                  disabled={event.status === "approved"}
                >
                  Approve
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => updateStatus(event.id, "rejected")}
                  disabled={event.status === "rejected"}
                >
                  Reject
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
