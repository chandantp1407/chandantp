export const roomItems = [
    {
        name: "Room 1",
        price: "$100",
        star: "★★★",
        facilities: [
          { icon: "Icon1", quantity: 2, name: "Facility 1" },
          { icon: "Icon2", quantity: 1, name: "Facility 2" }
        ],
        description: "Description of Room 1",
        yellowbtn: "Book Now",
        darkbtn: "More Info",
        image: require("./Assests/images/Image2.jpg").default 
      },
    {
        name: "Room 2",
        price: "$150",
        star: "★★★★",
        facilities: [
          { icon: "Icon1", quantity: 2, name: "Facility 1" },
          { icon: "Icon2", quantity: 1, name: "Facility 2" }
        ],
        description: "Description of Room 2",
        yellowbtn: "Book Now",
        darkbtn: "More Info"
      },
      {
        name: "Room 3",
        price: "$200",
        star: "★★★★★",
        facilities: [
          { icon: "Icon1", quantity: 2, name: "Facility 1" },
          { icon: "Icon2", quantity: 1, name: "Facility 2" }
        ],
        description: "Description of Room 3",
        yellowbtn: "Book Now",
        darkbtn: "More Info"
      },
  ];
  
  export const facility = [
    { icon: "Icon1", quantity: 2, name: "Facility 1" },
    { icon: "Icon2", quantity: 1, name: "Facility 2" }
   
  ];
  
  export const team = [
    {
      image: "Person2.jpg",
      name: "Full Name",
      designation: "Designation",
    },
    {
      image: "../assets/img/team-2.jpg",
      name: "Full Name",
      designation: "Designation",
    },
    {
      image: "../assets/img/team-3.jpg",
      name: "Full Name",
      designation: "Designation",
    },
    {
      image: "../assets/img/team-3.jpg",
      name: "Full Name",
      designation: "Designation",
    },
  ];
  export const socialIcons = [
    {
      icon: <i className="fab fa-facebook-f"></i>,
    },
    {
      icon: <i className="fab fa-twitter"></i>,
    },
    {
      icon: <i className="fab fa-instagram"></i>,
    },
    {
      icon: <i className="fab fa-linkedin-in"></i>,
    },
    {
      icon: <i className="fab fa-youtube"></i>,
    },
  ];
  export const contact = [
    {
      icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
      title: "Booking",
      email: "book@example.com",
    },
    {
      icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
      title: "Technical",
      email: "tech@example.com",
    },
    {
      icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
      title: "General",
      email: "info@example.com",
    },
  ];
  export const footerContact = [
    {
      icon: <i className="fa fa-map-marker-alt me-3"></i>,
      name: "123 Street, New York, USA",
    },
    {
      icon: <i className="fa fa-phone-alt me-3"></i>,
      name: "+012 345 67890",
    },
    {
      icon: <i className="fa fa-envelope me-3"></i>,
      name: "info@example.com",
    },
  ];
  export const footerItem = [
    {
      id: 1,
      header: "Company",
      UnitItem: [
        {
          name: "About Us",
        },
        {
          name: "Contact Us",
        },
        {
          name: "Privacy Policy",
        },
        {
          name: "Terms & Condition",
        },
        {
          name: "Support",
        },
      ],
    },
    {
      id: 2,
      header: "Services",
      UnitItem: [
        {
          name: "Food & Restaurant",
        },
        {
          name: "Spa & Fitness",
        },
        {
          name: "Sports & Gaming",
        },
        {
          name: "Event & Party",
        },
        {
          name: "GYM & Yoga",
        },
      ],
    },
  ];
  