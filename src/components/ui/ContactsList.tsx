import Avatar from "boring-avatars";

const ContactsList = () => {
  const contacts = [
    {
      name: "Esther Howard",
      role: "Head Manager",
      bg: "bg-purple-800",
      img: "https://i.pravatar.cc/150?u=1",
    },
    {
      name: "Jenny Wilson",
      role: "Programmer",
      bg: "bg-yellow-400",
      img: "https://i.pravatar.cc/150?u=2",
    },
    {
      name: "Ronald Richards",
      role: "Software Engineer",
      bg: "bg-red-400",
      img: "https://i.pravatar.cc/150?u=3",
    },
    {
      name: "Guy Hawkins",
      role: "CEO",
      bg: "bg-pink-400",
      img: "https://i.pravatar.cc/150?u=4",
    },
    {
      name: "Jacob Jones",
      role: "Head Manager",
      bg: "bg-blue-300",
      img: "https://i.pravatar.cc/150?u=5",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg shadow-secondary/3 border border-gray-50 flex flex-col h-full">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="font-medium text-gray-800">Contacts</h3>
          <p className="text-sm text-gray-400 mt-1">You have 245 clients</p>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </div>

      <div className="flex flex-col gap-4 overflow-y-auto pr-1">
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-lg overflow-hidden`}>
                {/* Fallback to color if image fails (though standard img tag usually handles src) */}
                {/* <img
                  src={contact.img}
                  alt={contact.name}
                  className="w-full h-full object-cover"
                /> */}
                <Avatar size={50} name={contact.name} square />;
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-sm">
                  {contact.name}
                </h4>
                <p className="text-xs text-gray-400 font-medium">
                  {contact.role}
                </p>
              </div>
            </div>

            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactsList;
