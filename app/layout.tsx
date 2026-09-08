import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from "@vercel/analytics/react"
import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/sonner"
import Navbar from './navbar/navbar';
import { SpeedInsights } from "@vercel/speed-insights/next"
import logo from '../public/logo.png';
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Little Dreamers at Cambridge | Best Preschool, Play School & Daycare',
  description: 'Little Dreamers at Cambridge is a nurturing preschool, play school and daycare for children aged 2 to 6 years, offering Playgroup, Nursery, LKG and UKG with Montessori, experiential and play-based learning.',
  keywords: [
    "Little Dreamers at Cambridge", "Little Dreamers preschool", "Little Dreamers school", "Little Dreamers daycare",
    "best preschool", "best preschool near me", "best play school", "best play school near me", "best preschool school",
    "best nursery school", "best kindergarten", "best kids school", "best school for kids", "best school for children",
    "best daycare", "best daycare near me", "best child care", "best childcare center", "preschool", "preschool school",
    "preschool near me", "preschool for kids", "preschool for children", "preschool admission", "preschool admissions 2026",
    "preschool education", "preschool learning", "preschool activities", "preschool programs", "preschool classes",
    "preschool curriculum", "preschool teachers", "preschool education center", "early childhood education",
    "early childhood learning", "early education", "early learning", "early years education", "early years learning",
    "child development", "child education", "child care", "childcare", "daycare", "daycare center", "daycare for kids",
    "daycare for children", "daycare services", "daycare school", "daycare near me", "play school", "play school near me",
    "play school admission", "play school for kids", "play school for children", "playgroup", "play group",
    "playgroup school", "playgroup admission", "playgroup for kids", "playgroup for toddlers", "nursery", "nursery school",
    "nursery class", "nursery admission", "nursery education", "nursery learning", "LKG", "LKG school", "LKG admission",
    "LKG classes", "LKG education", "lower kindergarten", "UKG", "UKG school", "UKG admission", "UKG classes",
    "UKG education", "upper kindergarten", "kindergarten", "kindergarten school", "kindergarten admission",
    "kindergarten classes", "Montessori", "Montessori preschool", "Montessori school", "Montessori education",
    "Montessori learning", "Montessori activities", "Montessori method", "experiential learning", "experiential education",
    "play based learning", "play-based education", "activity based learning", "creative learning", "creative education",
    "holistic education", "holistic child development", "holistic learning", "innovative learning", "innovative education",
    "early literacy", "phonics", "storytelling", "art and craft", "sensory activities", "sensory learning",
    "motor skills development", "social skills development", "communication skills", "imagination", "creativity",
    "confidence building", "life skills", "school readiness", "kindergarten readiness", "child friendly school",
    "safe preschool", "safe daycare", "safe school", "caring preschool", "nurturing preschool", "nurturing daycare",
    "quality preschool", "quality education", "expert educators", "trained teachers", "personalized attention",
    "parent partnership", "parent teacher communication", "parent engagement", "CCTV daycare", "secure daycare",
    "child safety", "school safety", "nutritious meals", "nutritious snacks", "structured daycare", "flexible daycare",
    "daycare activities", "supervised play", "toddler activities", "toddler learning", "toddler school",
    "school for toddlers", "preschool for toddlers", "school for 2 year old", "school for 3 year old",
    "school for 4 year old", "school for 5 year old", "school for 6 year old", "education for toddlers",
    "learning for toddlers", "kids activities", "children activities", "kids learning", "children learning",
    "foundation education", "foundation learning", "lifelong learning", "creative expression", "curiosity learning",
    "imagination based learning", "child centered education", "child centered learning", "best preschool in Delhi",
    "best play school in Delhi", "best daycare in Delhi", "preschool in Delhi", "play school in Delhi",
    "nursery school in Delhi", "kindergarten in Delhi", "Montessori school in Delhi", "preschool in Janakpuri",
    "play school in Janakpuri", "daycare in Janakpuri", "preschool near Janakpuri", "school near Janakpuri",
    "best preschool in Janakpuri", "best play school in Janakpuri", "best daycare in Janakpuri", "preschool in New Delhi",
    "play school in New Delhi", "daycare in New Delhi", "nursery school in New Delhi", "kindergarten in New Delhi",
    "best preschool in New Delhi", "best play school in New Delhi", "best daycare in New Delhi", "preschool in Vijayawada",
    "play school in Vijayawada", "daycare in Vijayawada", "nursery school in Vijayawada", "kindergarten in Vijayawada",
    "Montessori school in Vijayawada", "best preschool in Vijayawada", "best play school in Vijayawada",
    "best daycare in Vijayawada", "preschool in Andhra Pradesh", "play school in Andhra Pradesh", "daycare in Andhra Pradesh",
    "preschool in Kanuru", "play school in Kanuru", "daycare in Kanuru", "best preschool in Kanuru", "preschool in Indore",
    "play school in Indore", "daycare in Indore", "nursery school in Indore", "kindergarten in Indore",
    "Montessori school in Indore", "best preschool in Indore", "best play school in Indore", "best daycare in Indore",
    "preschool in Madhya Pradesh", "play school in Madhya Pradesh", "daycare in Madhya Pradesh",
    "preschool near Airport Road Indore", "preschool near Airport Road", "kids school in Indore",
    "early childhood education in Indore"
  ],
  authors: [{ name: 'Little Dreamers at Cambridge' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://www.littledreamersatcambridge.com/',
  },
  openGraph: {
    type: 'website',
    title: 'Little Dreamers at Cambridge | Best Preschool, Play School & Daycare',
    description: 'Nurturing preschool, play school and daycare programs for children aged 2–6 years with Playgroup, Nursery, LKG, UKG, Montessori and experiential learning.',
    url: 'https://www.littledreamersatcambridge.com/',
    siteName: 'Little Dreamers at Cambridge',
    images: [
      {
        url: logo.src,
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    description: 'Best preschool, play school and daycare programs for children aged 2–6 years with nurturing, creative and experiential learning.',
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"  suppressHydrationWarning>
      <head>
     {/* <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script> */}
     <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <Navbar/>

        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <main className=''>
              <Analytics/>
              <SpeedInsights/>
            </main>
          {children}
          </ThemeProvider>
          <Toaster />
          <Footer />
          {/* <Sessioprovider/> */}

      </body>
    </html>
  )
} 
