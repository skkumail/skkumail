// mockData.ts
export interface EmailProps {
  id: number;
  sender: string;
  receiver: string;
  title: string;
  email: string;
  content: string;
  date: string;
}

export interface KeywordProps {
  representKeyword: string
  keywords: string[]
}

export const mockEmails: EmailProps[] = [
  {
    id: 1,
    sender: "Jane Smith",
    receiver: "Sumin Lim",
    title: "Regarding Upcoming Business Meeting",
    email: "jane.smith@example.com",
    content: "Dear Sumin,\n\nI hope this email finds you well. We are reaching out to you regarding the upcoming business meeting scheduled for next week.\n\nDate: 2023.09.01\nTime: 9:00AM\nLocation: Online\n\nAgenda:\n1. Introduction and welcome\n2. Review of previous meeting minutes\n3. Project updates\n4. New business proposals\n5. Any other business\n\nPlease confirm your attendance by replying to this email. If you have any agenda items to add, please let us know in advance.\n\nWe look forward to your participation.\n\nBest regards,\nJane Smith\n[Your Company Name]\n",
    date: "2023.08.29"
  },
  {
    id: 2,
    sender: "John Williams",
    receiver: "Sumin Lim",
    title: "Action Required: Update Your Account Information",
    email: "john.williams@example.com",
    content: "Dear Sumin,\n\nWe hope you are doing well. Our records indicate that there is some missing or outdated information in your account. To provide you with the best service, we kindly request you to update your account information at your earliest convenience.\n\nPlease log in to your account using the following link: [Account Link]\n\nIf you have any questions or concerns, please reply to this email or contact our customer support.\n\nThank you for your prompt attention to this matter.\n\nSincerely,\nJohn Williams\n[Your Company Name]\n",
    date: "2023.08.29",
  },
  // Add more mock emails as needed
];


export const mockKeywords: KeywordProps[] = [
  {
    representKeyword: "Meeting and Schedule Related",
    keywords: [
      "Meeting",
      "Schedule",
      "Reservation",
      "Appointment",
      "Confirmation",
    ]
  },
  {
    representKeyword: "Work Progress and Collaboration",
    keywords: [
      "Progress",
      "Collaboration",
      "Status Update",
      "Project",
    ]
  }
]
