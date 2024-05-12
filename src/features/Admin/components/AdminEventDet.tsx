import React, { useState } from "react";
import { Tile } from "./AdminAcc";
import { NavLink, RouterProvider, createBrowserRouter } from "react-router-dom";

export default function AdminEventDet() {
  // const routes = createBrowserRouter([
  //     {
  //       path: '/details',
  //       element : <div></div>
  //     },
  //     {
  //       path: '/Announcement',
  //       element : <div></div>
  //     },
  //     {
  //         path : '/Registration',
  //         element : <div></div>
  //     },
  //     {
  //         path : '/Entries',
  //         element : <div></div>
  //     }
  // ]);

  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-8">Event Details</h1>
      <div className="flex justify-center items-center space-evenly md:flex-row flex-col">
        <Tile number={0} title="Registrations" />
        <Tile number={1} title="Entries" />
        <Tile number={0} title="Events" />
      </div>
      <div className="w-[80%] mx-auto my-3">
        <div className=" flex justify-around  overflow-x-auto  border-2 border-purple-500 rounded-md p-3 my-3">
          <NavLink
            to="/admin/events"
            className="text-white md:text-3xl text-lg px-4 py-2 rounded-md mr-4 md:hover:text-4xl"
          >
            Details
          </NavLink>
          <NavLink
            to="/admin/events"
            className="text-white md:text-3xl text-lg px-4 py-2 rounded-md mr-4 md:hover:text-4xl"
          >
            Announcements
          </NavLink>
          <NavLink
            to="/admin/events"
            className="text-white md:text-3xl text-lg px-4 py-2 rounded-md mr-4 md:hover:text-4xl"
          >
            Registrations
          </NavLink>
          <NavLink
            to="/admin/events"
            className="text-white md:text-3xl text-lg px-4 py-2 rounded-md mr-4 md:hover:text-4xl"
          >
            Entries
          </NavLink>
        </div>
        <div className="dark">
          {/* Add your custom content here */}
          {/* <RouterProvider router={routes} /> */}
          {/* Details */}
          <div className="bg-gray-800">
            <div className="w-full">
              <img
                className="w-full"
                src="https://via.placeholder.com/1200x400"
                alt="Event"
              />
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="bg-gray-900 p-4 w-full sm:w-1/2 text-white text-xl">
                <h2 className="text-3xl font-bold mb-4 text-[#7848F4]">
                  Event Description
                </h2>
                <p>
                  Description of the event... Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Temporibus eum dolorum repellat
                  ad, beatae facilis obcaecati voluptatem asperiores illo
                  blanditiis velit aliquid magnam quo inventore nemo porro quae
                  impedit. Saepe, beatae nesciunt. Sed quia aperiam quod! Sint
                  sed odit, repellendus tenetur itaque quam magnam alias modi
                  quidem nisi animi nobis!
                </p>
                <p>
                  {" "}
                  <span className="text-2xl font-bold text-[#7848F4]">
                    {" "}
                    Date:
                  </span>{" "}
                  January 1, 2025
                </p>
                <p>
                  {" "}
                  <span className="text-2xl font-bold text-[#7848F4]">
                    {" "}
                    Time:
                  </span>{" "}
                  10:00 AM - 5:00 PM
                </p>
                <p>
                  {" "}
                  <span className="text-2xl font-bold text-[#7848F4]">
                    {" "}
                    Organizer:
                  </span>{" "}
                  John Doe
                </p>
              </div>
              <div className="bg-gray-900 p-4 w-full sm:w-1/2">
                {false && <div className="flex justify-evenly my-8">
                  <button className="p-3 bg-gray-500  w-32 text-2xl rounded-lg">
                    Edit
                  </button>
                  <button className="p-3 bg-red-500 w-32 text-2xl rounded-lg">
                    Delete
                  </button>
                </div>}
                <h2 className="text-3xl font-bold mb-4 text-[#7848F4]">
                  Venue
                </h2>
                <iframe
                  className="w-full h-64"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.553960435011!2d120.97850331427704!3d14.565603680615994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c92bd26e4f5d%3A0x29bf2c6027b2eb47!2sMall%20of%20Asia%20Arena!5e0!3m2!1sen!2sph!4v1641636560015!5m2!1sen!2sph"
                  loading="lazy"
                ></iframe>
                <div className="flex items-center mt-4">
                  <a href="#" target="_blank" className="text-white mr-4">
                    Facebook
                  </a>
                  <a href="#" className="text-white" target="_blank">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Announcements */}
          {/* <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Latest Blog Posts</h1>
            <BlogPost
              title="How to Build a Dark Theme Blog with React"
              description="Learn how to create a dark theme blog using React and Tailwind CSS."
              author="John Doe"
              time="3 hours ago"
            />
            <BlogPost
              title="Mastering Tailwind CSS: Tips and Tricks"
              description="Discover advanced tips and tricks for getting the most out of Tailwind CSS."
              author="Jane Smith"
              time="1 day ago"
            />
            <BlogPost
              title="Mastering Tailwind CSS: Tips and Tricks"
              description="Discover advanced tips and tricks for getting the most out of Tailwind CSS."
              author="Jane Smith"
              time="1 day ago"
            />
            <BlogPost
              title="Mastering Tailwind CSS: Tips and Tricks"
              description="Discover advanced tips and tricks for getting the most out of Tailwind CSS."
              author="Jane Smith"
              time="1 day ago"
            />
          </div> */}
          {/* Registrations */}
          {/* <div className="overflow-x-auto">
            <div className="flex justify-around my-8">
                <button className="p-3 bg-[#7848F4] text-2xl rounded-lg">Add Participant</button>
                <button className="p-3 bg-[#7848F4] text-2xl rounded-lg">Add File</button>
            </div>
            <table className="w-full bg-gray-800 text-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 text-xl">Name</th>
                  <th className="py-2 px-4 text-xl">Email</th>
                  <th className="py-2 px-4 text-xl">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700 text-center">
                  <td className="text-center py-2 text-lg px-4">John Doe</td>
                  <td className="text-center py-2 text-lg px-4">
                    john@example.com
                  </td>
                  <td className="text-center py-2 text-lg px-4 flex justify-center gap-x-3">
                    <button className="text-gray-400 hover:text-white mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M0 5a1 1 0 011-1h18a1 1 0 110 2H1a1 1 0 01-1-1zM1 9a1 1 0 011-1h8a1 1 0 110 2H2a1 1 0 01-1-1zM1 13a1 1 0 011-1h8a1 1 0 110 2H2a1 1 0 01-1-1zM18 3a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V4a1 1 0 011-1h16z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M13.293 4.293a1 1 0 011.414 1.414L7.414 12l7.293 7.293a1 1 0 01-1.414 1.414L6 13.414l-7.293 7.293a1 1 0 01-1.414-1.414L4.586 12 .293 7.707a1 1 0 011.414-1.414L6 10.586l5.293-5.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div> */}
        </div>
      </div>
    </div>
  );
}

interface BlogPostProps {
  title: string;
  description: string;
  author: string;
  time: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  description,
  author,
  time,
}) => {
  return (
    <div className="bg-gray-800 text-white p-6 mb-4 rounded-lg">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex items-center text-gray-400 text-sm">
        <span>{author}</span>
        <span className="mx-2">&bull;</span>
        <span>{time}</span>
      </div>
    </div>
  );
};

const AnnouncementForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-[#7848F4]">
        Announcement Form
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-[#7848F4] text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const EventForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [venue, setVenue] = useState("");
  const [timing, setTiming] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Event Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-[#7848F4] text-sm font-medium mb-1"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-[#7848F4] text-sm font-medium mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="startDate"
            className="block text-[#7848F4] text-sm font-medium mb-1"
          >
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="endDate"
            className="block text-[#7848F4] text-sm font-medium mb-1"
          >
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="venue"
            className="block text-[#7848F4] text-sm font-medium mb-1"
          >
            Venue
          </label>
          <input
            type="text"
            id="venue"
            className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="timing"
            className="block text-[#7848F4] text-sm font-medium mb-1"
          >
            Timing
          </label>
          <input
            type="datetime-local"
            id="timing"
            className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none"
            value={timing}
            onChange={(e) => setTiming(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="coverImage"
            className="block text-[#7848F4] text-sm font-medium mb-1"
          >
            Cover Image
          </label>
          <input
            type="file"
            id="coverImage"
            className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-[#7848F4] text-sm font-medium mb-1"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-[#7848F4] text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
