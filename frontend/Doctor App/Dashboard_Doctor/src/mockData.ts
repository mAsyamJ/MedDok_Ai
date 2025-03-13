export const revenueData = [
  { month: 'January 2024', amount: 154873 },
  { month: 'December 2023', amount: 142650 },
  { month: 'November 2023', amount: 138920 },
  { month: 'October 2023', amount: 145670 },
  { month: 'September 2023', amount: 149800 },
  { month: 'August 2023', amount: 136540 },
];

export const doctorStats = {
  rank: 3,
  rating: 4.8,
  consultations: 145,
};

export const programMetrics = [
  {
    title: 'Challenge Completion',
    value: 85,
    subtitle: 'Monthly Goals Achieved',
  },
  {
    title: 'Doctor Ranking',
    value: 3,
    subtitle: 'Among 50 Specialists',
  },
  {
    title: 'Personal Monitoring',
    value: 128,
    subtitle: 'Active Patients',
  },
];

export const dailyActivity = {
  steps: 550,
  calories: 500,
  distance: 50,
  activeMinutes: 75,
};

export const ccmBilling = {
  nonComplex: [
    { code: '99490', amount: 64.02 },
    { code: '99439', amount: 48.45 },
    { code: '99491', amount: 86.17 },
    { code: '99437', amount: 61.25 },
  ],
  complex: [
    { code: '99487', amount: 134.27 },
    { code: '99489', amount: 70.60 },
  ],
};

export const todaysTasks = [
  {
    id: 1,
    patientName: 'Hanna Westervelt',
    task: 'Reach out to patient',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    patientName: 'Cooper Franci',
    task: 'Review Check-Ins',
    avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    patientName: 'Jocelyn Vetrovs',
    task: 'Assign new CCM devices',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 4,
    patientName: 'Ryan Westervelt',
    task: 'Reach out to patient',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    patientName: 'John Rhiel Madsen',
    task: 'Check Alerts',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export const patients = [
  {
    id: 'P1234',
    name: 'Alex Smith',
    age: 74,
    conditions: ['Diabetes', 'Heart Failure'],
    category: 'Complex',
    status: 'Enrolled',
    enrollDate: '29-04-2022',
    program: 'CCM, PCM',
    provider: 'Adalberto Hope',
    monthlyMins: 30,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 'P1235',
    name: 'Emma Johnson',
    age: 68,
    conditions: ['Hypertension'],
    category: 'Non-Complex',
    status: 'Enrolled',
    enrollDate: '15-05-2022',
    program: 'CCM',
    provider: 'Maria Garcia',
    monthlyMins: 25,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 'P1236',
    name: 'Michael Brown',
    age: 71,
    conditions: ['COPD', 'Anxiety'],
    category: 'Complex',
    status: 'Enrolled',
    enrollDate: '03-06-2022',
    program: 'CCM, PCM',
    provider: 'James Wilson',
    monthlyMins: 35,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 'P1237',
    name: 'Sarah Davis',
    age: 65,
    conditions: ['Arthritis'],
    category: 'Non-Complex',
    status: 'Enrolled',
    enrollDate: '22-06-2022',
    program: 'CCM',
    provider: 'Emily Martinez',
    monthlyMins: 20,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 'P1238',
    name: 'Robert Wilson',
    age: 70,
    conditions: ['Depression', 'Chronic Pain'],
    category: 'Complex',
    status: 'Enrolled',
    enrollDate: '10-07-2022',
    program: 'CCM, PCM',
    provider: 'David Thompson',
    monthlyMins: 40,
    avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 'P1239',
    name: 'Patricia Moore',
    age: 69,
    conditions: ['Diabetes'],
    category: 'Non-Complex',
    status: 'Enrolled',
    enrollDate: '28-07-2022',
    program: 'CCM',
    provider: 'Lisa Anderson',
    monthlyMins: 25,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];