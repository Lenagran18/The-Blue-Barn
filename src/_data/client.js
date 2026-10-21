module.exports = {
    name: "The Blue Barn",
    email: "Fayestormsrealtor@gmail.com",
    phoneForTel: "845-688-2161",
    phoneFormatted: "(845) 688-2161",
    address: {
        lineOne: "7053 NY-28",
        city: "Shandaken",
        state: "NY",
        zip: "12480",
        country: "US",
        mapLink: "https://maps.app.goo.gl/6Z4pakiuvh7ggjVL9",
    },
    // socials: {
    //     facebook: "https://www.facebook.com/",
    //     instagram: "https://www.instagram.com/",
    // },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
