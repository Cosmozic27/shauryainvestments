export const companyData = {
  name: "Shaurya Investments",
  tagline: "Your Financial Goals. Our Commitment.",
  owner: "Santosh D. Chavan",
  experienceYears: 25,
  phone: "+91 93225 15853",
  phoneRaw: "919322515853",
  email: "santosh4ul78@gmail.com",
  location: {
    address: "Kurar Village, Shivaji Nagar, Malad East",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    full: "Kurar Village, Shivaji Nagar, Malad East, Mumbai, Maharashtra, India"
  },
  whatsapp: {
    number: "+91 93225 15853",
    rawNumber: "919322515853",
    baseUrl: "https://wa.me/919322515853",
    messages: {
      homeLoans: "Hello, I would like to enquire about home loan assistance from Shaurya Investments.",
      personalLoans: "Hello, I would like to know more about personal loan options through Shaurya Investments.",
      businessLoans: "Hello, I would like to enquire about business loan assistance.",
      mutualFunds: "Hello, I would like to know more about mutual fund investment options.",
      sipInvestments: "Hello, I would like assistance in understanding SIP investments.",
      licInsurance: "Hello, I would like information about LIC insurance policies and assistance.",
      general: "Hello, I would like to enquire about the financial services offered by Shaurya Investments."
    }
  },
  navigation: [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Loans", path: "/loans" },
    { label: "Mutual Funds", path: "/mutual-funds" },
    { label: "SIP", path: "/sip-investments" },
    { label: "LIC Insurance", path: "/lic-insurance" },
  ]
};

/**
 * Returns a fully encoded WhatsApp link for the requested inquiry type.
 */
export function getWhatsAppUrl(type = 'general') {
  const message = companyData.whatsapp.messages[type] || companyData.whatsapp.messages.general;
  return `${companyData.whatsapp.baseUrl}?text=${encodeURIComponent(message)}`;
}
