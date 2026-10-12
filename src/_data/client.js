module.exports = {
    name: "The Blue Barn",
    email: "ayestormsrealtor@gmail.com",
    phoneForTel: " 845-532-5727",
    phoneFormatted: "(845) 532-5727",
    address: {
        lineOne: "7053 NY-28",
        city: "Shandaken",
        state: "NY",
        zip: "12480",
        country: "US",
        mapLink: "https://maps.app.goo.gl/tGN1Rm7fiT6GM2mC7",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
