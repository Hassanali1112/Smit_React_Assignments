import { useState } from "react";
import toast from "react-hot-toast";

const CreateEvent = () => {
  const [form, setForm] = useState({
    name: "",
    place: "",
    category: "",
    date: "",
    description: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  const categories = ["Conference", "Seminar", "Workshop", "Meetup", "Concert"];

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleChange("image", file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, place, category, date, description, image } = form;

    if (!name || !place || !category || !date || !description || !image) {
      toast.error("Please fill in all fields including image.");
      return;
    }

    // Here you'd handle uploading image to Supabase or server + form data
    console.log("Event Submitted:", form);
    toast.success("Event created successfully!");

    // Reset form
    setForm({
      name: "",
      place: "",
      category: "",
      date: "",
      description: "",
      image: null,
    });
    setImagePreview(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Create New Event
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Fields */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
              Event Name
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full border rounded px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
              Event Place
            </label>
            <input
              type="text"
              value={form.place}
              onChange={(e) => handleChange("place", e.target.value)}
              className="w-full border rounded px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              required
            />
          </div>
        </div>

        {/* Category and Date */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
              Event Category
            </label>
            <select
              value={form.category}
              onChange={(e) => handleChange("category", e.target.value)}
              className="w-full border rounded px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              required
            >
              <option value="">Select category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
              Event Date
            </label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => handleChange("date", e.target.value)}
              className="w-full border rounded px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              required
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
            Event Description
          </label>
          <textarea
            rows="4"
            value={form.description}
            onChange={(e) => handleChange("description", e.target.value)}
            className="w-full border rounded px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            required
          ></textarea>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
            Upload Event Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-white dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
            required
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Event Preview"
              className="mt-4 w-48 h-32 object-cover rounded border"
            />
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded transition"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
