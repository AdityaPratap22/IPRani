/* ── Requirements data for IP services ─────────────────────────────── */

export interface RequirementCategory {
  heading: string;
  items: string[];
  note?: string;
}

export interface ServiceRequirements {
  title: string;
  intro?: string;
  categories: RequirementCategory[];
}

export const serviceRequirements: Record<string, ServiceRequirements> = {
  /* ─────────────────── TRADEMARK ─────────────────── */
  trademark: {
    title: "Requirements for Trademark Registration",
    intro:
      "To file a trademark application, we need the following information based on the type of applicant and brand details.",
    categories: [
      {
        heading: "Individual / Sole Proprietorship Firm",
        items: [
          "Name of Applicant",
          "Name of Firm (Optional)",
          "Address of Applicant",
        ],
      },
      {
        heading: "Small Enterprise",
        items: [
          "Name of Applicant",
          "Address of Applicant",
          "MSME Certificate (to avail the status of Small Enterprise)",
        ],
      },
      {
        heading: "Startup Enterprise",
        items: [
          "Name of Applicant",
          "Address of Applicant",
          "Startup Certificate (to avail the status of Startup Enterprise)",
        ],
      },
      {
        heading: "Others",
        items: ["Name of the Applicant", "Address of the Applicant"],
      },
      {
        heading: "Details of Brand",
        items: ["Name of Brand", "Logo of Brand (if available)"],
      },
      {
        heading: "Description of Business",
        items: [
          "Describe your products and services in detail (to select the correct class for the trademark application)",
        ],
      },
    ],
  },

  /* ─────────────────── PATENT ─────────────────── */
  patent: {
    title: "Requirements for Patent Filing",
    intro:
      "To draft and file a patent application, the following applicant details and technical information are required.",
    categories: [
      {
        heading: "Applicant & Inventor Details",
        items: [
          "Name of the Applicant(s)",
          "Address of Applicant(s)",
          "Name of the Inventor(s)",
          "Address of Inventor(s)",
        ],
      },
      {
        heading: "Information Required to Draft the Patent Application",
        items: [
          "Title",
          "Field of Invention",
          "Background of Invention (Prior Arts)",
          "Problem to be Solved",
          "Aim / Object of Invention",
          "Summary of Invention",
          "Brief Description of Drawings (if any)",
          "Detailed Description of Invention",
          "Drawings (if any)",
        ],
      },
    ],
  },

  /* ─────────────────── DESIGN ─────────────────── */
  design: {
    title: "Requirements for Industrial Design Registration",
    intro:
      "To file a design registration application, we need the following information.",
    categories: [
      {
        heading: "Applicant Details",
        items: [
          "Name of the Applicant(s)",
          "Address of Applicant(s)",
        ],
      },
      {
        heading: "Description of the Product",
        items: [
          "Description of the product you want to get registered (in a few lines) to find the correct classification as per the Designs Act",
        ],
      },
      {
        heading: "Representations",
        items: [
          "Views from all 6 sides (Front, Back, Top, Bottom, Left, Right)",
          "One perspective view",
        ],
        note: "We need views from all 6 sides and one perspective view to protect your product.",
      },
    ],
  },

  /* ─────────────────── COPYRIGHT ─────────────────── */
  copyright: {
    title: "Requirements for Copyright Registration",
    intro:
      "To file a copyright registration application, we need the following information.",
    categories: [
      {
        heading: "Applicant & Author Details",
        items: [
          "Name of the Applicant(s)",
          "Address of Applicant(s)",
          "Name of the Author(s)",
          "Address of Author(s)",
        ],
        note: "There can be multiple Applicants and Authors.",
      },
      {
        heading: "Categories of Copyright",
        items: [
          "Literary (Books, Software, etc.)",
          "Artistic (Paintings, Photographs, etc.)",
          "Sound Recording (Music, Podcasts, etc.)",
          "Cinematography (Films, Videos, etc.)",
        ],
        note: "To file any copyright, we need the work which you want to copyright (Book, Software, Music or Video).",
      },
    ],
  },
};
