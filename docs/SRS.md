# Software Requirements Specification (SRS)
## AI-Enabled Dynamic Portfolio Website for Vineet Vishwakarma

**Document Version:** 1.0  
**Date:** May 18, 2026  
**Prepared for:** Vineet Vishwakarma  
**Status:** Draft - Ready for Review

---

## 1. EXECUTIVE SUMMARY

This document outlines the comprehensive requirements for building a dynamic, AI-enabled portfolio website that serves as an interactive showcase of Vineet Vishwakarma's professional background, projects, and technical expertise. The website combines modern web design principles with interactive features and artificial intelligence to create an engaging experience for recruiters, collaborators, and visitors.

**Key Objectives:**
- Showcase professional work and technical expertise to recruiters and employers
- Demonstrate advanced web development and AI integration capabilities
- Provide an interactive, dynamic platform for career growth and continuous updates
- Implement AI-powered features (chatbot, guide, smart recommendations) for enhanced user engagement
- Create a visually striking, memorable online presence

---

## 2. PROJECT SCOPE

### 2.1 In-Scope
- Dynamic portfolio website with responsive design
- Interactive UI with cursor tracking and animations (inspired by david-hckh.com & rkworks20.com)
- AI Chatbot for answering visitor questions
- AI-powered portfolio guide and navigation assistance
- Admin Dashboard for content management
- Resume showcase with dynamic presentation
- Projects portfolio with detailed descriptions
- Skills visualization and proficiency display
- Contact and social media integration
- Mobile-responsive design
- Dark/Light mode toggle

### 2.2 Out-of-Scope
- E-commerce functionality
- Advanced blog/CMS system
- User authentication for visitors (admin authentication only)
- Real-time collaboration features
- Video hosting (links to external platforms only)

---

## 3. OBJECTIVES & GOALS

### 3.1 Primary Goals (Priority Order)

| Goal | Description | Success Metric |
|------|-------------|-----------------|
| **Recruitment Impact** | Impress recruiters and employers with professionalism and technical depth | 10+ recruiter inquiries within 3 months |
| **Technical Showcase** | Demonstrate full-stack development and AI integration capabilities | Portfolio features functional AI and interactive elements |
| **Dynamic Content** | Enable easy, code-free updates to portfolio content | Admin dashboard allows updates in <2 minutes per change |
| **User Engagement** | Create memorable, interactive experience that stands out | AI guide helps 80%+ of visitors navigate effectively |
| **Career Growth** | Support career progression with easy content updates | Update portfolio in <10 minutes (new project/skill) |

### 3.2 Technical Goals
- Build scalable, maintainable codebase
- Implement modern web development best practices
- Demonstrate expertise in React/Next.js, Python, and AI integration
- Achieve >90 Lighthouse score
- Fast load times (<2 seconds initial load)

---

## 4. STAKEHOLDERS & USERS

### 4.1 Primary Users

| User Type | Description | Key Needs |
|-----------|-------------|-----------|
| **Recruiters/HR** | Evaluating Vineet for job opportunities | Quick access to skills, experience, projects; easy contact |
| **Employers** | Assessing technical capabilities | Working demonstrations, project details, GitHub links |
| **Collaborators** | Potential project partners | Contact information, portfolio quality, collaborative interests |
| **Vineet (Admin)** | Portfolio owner and maintainer | Easy content updates, analytics, control over presentation |
| **Casual Visitors** | Friends, colleagues, general interest | Engaging presentation, interesting interactive features |

### 4.2 Stakeholder Requirements
- **Vineet**: Full control, easy updates, professional appearance
- **Recruiters**: Clear skills showcase, project details, contact method
- **Users**: Interactive experience, fast loading, mobile compatibility

---

## 5. FUNCTIONAL REQUIREMENTS

### 5.1 Core Website Features

#### 5.1.1 Hero/Landing Section
- **Requirement ID:** FR-001
- **Description:** Animated landing page with intro statement and call-to-action
- **Features:**
  - Animated cursor tracking effect
  - Animated avatar/character (inspired by David Heckhoff's design)
  - Hero text with typewriter or fade-in animation
  - Quick intro (max 2-3 sentences)
  - CTA buttons: "Explore Portfolio", "Chat with AI", "View Resume"
  - Background with parallax or animated elements
- **Acceptance Criteria:**
  - Animations are smooth (60 FPS)
  - Responsive on mobile (buttons stack vertically)
  - Load time <1 second

#### 5.1.2 Portfolio/Projects Showcase
- **Requirement ID:** FR-002
- **Description:** Dynamic display of projects with filtering and detailed views
- **Features:**
  - Grid/card layout (inspired by rkworks20.com structure)
  - Projects with title, description, tech stack, images, links
  - Filtering by category/technology (ML, Web Dev, UI/UX, Automation)
  - Hover animations and interactive elements
  - Links to GitHub/live demo
  - AI-generated descriptions (optional enhancement)
  - Project details modal or dedicated page
- **Data Structure:**
  - Title, description, thumbnail, images, technologies, links, date, category
  - Editable via Admin Dashboard
- **Acceptance Criteria:**
  - Projects load dynamically from database/CMS
  - Filtering works smoothly
  - Mobile: Projects display in responsive grid (1-2 columns)

#### 5.1.3 Resume Showcase Section
- **Requirement ID:** FR-003
- **Description:** Professional resume presentation (not just PDF download)
- **Features:**
  - Interactive resume sections (Education, Experience, Skills, Certifications)
  - Timeline view for experience and education
  - Expandable/collapsible sections
  - Animated skill bars or proficiency visualization
  - Download PDF button
  - Auto-parsing of resume data (with AI if applicable)
- **Data Components:**
  - Professional Summary
  - Technical Skills (categorized: Languages, Web, Data/ML, Tools)
  - Work Experience (with achievements highlighted)
  - Education (ongoing courses, relevant coursework)
  - Certifications & Awards
  - Languages
- **Acceptance Criteria:**
  - All resume data displays correctly
  - Timeline is visually clear
  - Responsive on all devices

#### 5.1.4 Skills & Expertise Section
- **Requirement ID:** FR-004
- **Description:** Visual representation of technical and soft skills
- **Features:**
  - Categorized skills (Languages, Web Dev, ML/Data, Tools/Platforms, Other)
  - Proficiency levels (Beginner, Intermediate, Advanced, Expert)
  - Visual indicators (progress bars, badges, or skill clouds)
  - Interactive hover effects
  - Filterable by category
  - Animated on scroll
- **Acceptance Criteria:**
  - All skills from resume displayed and categorized
  - Visual hierarchy is clear
  - Animations enhance UX without being distracting

#### 5.1.5 Contact & Social Integration
- **Requirement ID:** FR-005
- **Description:** Multiple contact options and social media links
- **Features:**
  - Contact form (name, email, message)
  - Email link: rajnivishwakarma459@gmail.com
  - Phone link: +91 7982938667
  - Social media links:
    - LinkedIn: linkedin.com/in/vineet-vandiator
    - GitHub: github.com/Vandiator
  - Copy-to-clipboard buttons
  - Contact success notifications
- **Acceptance Criteria:**
  - All links functional and open in new tabs
  - Contact form validates input
  - Form submission triggers email or notification

---

### 5.2 Interactive Features

#### 5.2.1 Cursor Tracking & Effects
- **Requirement ID:** FR-006
- **Description:** Advanced cursor interaction for visual feedback
- **Features:**
  - Custom cursor design
  - Cursor following elements (subtle glow/trail effect)
  - Interactive response on hover over clickable elements
  - Smooth parallax based on cursor position
  - Scale/transform effects on hover
- **Acceptance Criteria:**
  - Smooth cursor tracking (no lag)
  - Works on desktop and tablet (disabled on mobile where not applicable)
  - Performance impact minimal

#### 5.2.2 Smooth Animations & Transitions
- **Requirement ID:** FR-007
- **Description:** Enhanced visual experience with animations
- **Features:**
  - Page load animations (staggered element reveals)
  - Smooth section transitions
  - Scroll-triggered animations
  - Hover state animations (buttons, cards, links)
  - Parallax scrolling effects
  - Animated backgrounds or decorative elements
- **Acceptance Criteria:**
  - All animations are GPU-accelerated (60 FPS)
  - Animations can be disabled in accessibility settings
  - No janky or stuttering animations

#### 5.2.3 Animated Avatar/Character
- **Requirement ID:** FR-008
- **Description:** Interactive animated character representing Vineet
- **Features:**
  - SVG or 3D character (inspired by David Heckhoff's design)
  - Animation states: idle, speaking, gesturing, thinking
  - Cursor tracking (eyes follow cursor)
  - Interactive on hover (responds to user interaction)
  - Can be toggled on/off in settings
  - Appears in hero section and potentially in chatbot interface
- **Acceptance Criteria:**
  - Avatar renders smoothly without lag
  - States change fluidly
  - Accessible (can be disabled)

#### 5.2.4 Dark/Light Mode Toggle
- **Requirement ID:** FR-009
- **Description:** Theme switching capability
- **Features:**
  - Toggle button in header/footer
  - Persistent preference (localStorage)
  - Smooth transitions between themes
  - System preference detection (prefers-color-scheme)
  - Optimized color palettes for both themes
- **Acceptance Criteria:**
  - Theme toggles smoothly
  - Preference persists across sessions
  - Accessible color contrast (WCAG AA minimum)

---

### 5.3 AI Features

#### 5.3.1 AI Chatbot Assistant
- **Requirement ID:** FR-010
- **Description:** Conversational AI to answer questions about Vineet and guide portfolio exploration
- **Features:**
  - Chat widget (floating button or sidebar)
  - Persistent chat history during session
  - AI can answer questions about:
    - Background, education, experience
    - Technical skills and expertise
    - Project details and achievements
    - Career interests and availability
  - Context-aware responses using portfolio data
  - Natural language understanding (NLU)
  - Suggestion chips for common questions
  - Typing indicators and response animations
  - Option to export chat transcript
- **Technical Approach:**
  - Integration with Claude API (or similar LLM)
  - System prompt includes Vineet's resume and portfolio data
  - Conversational memory (session-based)
  - Rate limiting for API costs
- **Acceptance Criteria:**
  - Chat widget loads quickly
  - Responses are contextual and accurate
  - Handles 100+ messages per session gracefully
  - Mobile-friendly chat interface

#### 5.3.2 AI Portfolio Guide
- **Requirement ID:** FR-011
- **Description:** Intelligent assistant that helps visitors explore the portfolio
- **Features:**
  - Smart recommendations based on user interest
  - Guided tours (e.g., "Show me ML projects" → filters and highlights relevant projects)
  - Interactive suggestions (e.g., "You might be interested in the Deepfake Detection project")
  - Context-aware help (explain what a particular tech stack is, suggest related projects)
  - Voice guide option (text-to-speech for navigation instructions)
  - "Why should I care?" feature (AI explains relevance of projects/skills)
- **AI Capabilities:**
  - Analyze visitor behavior to suggest content
  - Explain technical concepts in simple terms
  - Match visitor interests to relevant portfolio items
- **Acceptance Criteria:**
  - Guide provides useful suggestions
  - Recommendations are contextually relevant
  - Guide enhances discovery of portfolio depth

#### 5.3.3 AI Content Enhancement (Optional/Future)
- **Requirement ID:** FR-012
- **Description:** AI assistance for creating and updating portfolio content
- **Features:**
  - Auto-generation of project descriptions
  - SEO optimization suggestions
  - Content improvement recommendations
  - Bullet point generation for achievements
- **Implementation:** Phase 2 (can be deferred)

---

### 5.4 Admin Dashboard (Content Management)

#### 5.4.1 Authentication & Access Control
- **Requirement ID:** FR-013
- **Description:** Secure admin login and access control
- **Features:**
  - Email/password authentication
  - Session management
  - Role-based access (admin only)
  - "Remember me" functionality
  - Secure logout
  - Password reset via email
- **Acceptance Criteria:**
  - Only authenticated users can access dashboard
  - Session expires after 24 hours of inactivity
  - Password meets security requirements

#### 5.4.2 Project Management
- **Requirement ID:** FR-014
- **Description:** Create, update, delete, and manage portfolio projects
- **Features:**
  - Form to add/edit projects:
    - Title, description, long description
    - Technology stack (multi-select)
    - Category (ML, Web, UI/UX, Automation)
    - Images (thumbnail, gallery)
    - Links (GitHub, live demo, documentation)
    - Date, status (ongoing, completed)
  - Drag-to-reorder projects
  - Preview before publishing
  - Bulk delete functionality
  - Rich text editor for descriptions
- **Acceptance Criteria:**
  - Projects update immediately on live site
  - Image upload works (with optimization)
  - Validation prevents incomplete entries

#### 5.4.3 Resume & Experience Management
- **Requirement ID:** FR-015
- **Description:** Manage resume sections and professional details
- **Features:**
  - Edit summary/bio
  - Manage experience entries (title, company, duration, description, achievements)
  - Manage education entries
  - Add/edit certifications and awards
  - Add/edit language proficiencies
  - Manage technical skills with proficiency levels
  - PDF resume upload (auto-parse and populate fields)
- **Acceptance Criteria:**
  - Changes appear on portfolio immediately
  - Resume PDF auto-generates with latest data
  - Form validation ensures completeness

#### 5.4.4 Skills Management
- **Requirement ID:** FR-016
- **Description:** Manage technical and soft skills display
- **Features:**
  - Add/edit/delete skills
  - Set proficiency level (1-5 or Beginner-Expert)
  - Assign categories (Languages, Web, Data/ML, etc.)
  - Reorder skills
  - Set featured skills (appear at top)
- **Acceptance Criteria:**
  - Skill updates reflect on portfolio instantly
  - Skills display with correct proficiency
  - Featured skills appear prominently

#### 5.4.5 Content Management (General)
- **Requirement ID:** FR-017
- **Description:** Manage other portfolio content
- **Features:**
  - Edit hero section text and CTA buttons
  - Manage social links and contact info
  - Edit section titles and descriptions
  - Toggle features on/off (e.g., avatar, chatbot)
  - Manage theme colors and appearance settings
  - View analytics (visitor count, popular sections, chatbot usage)
- **Acceptance Criteria:**
  - Changes reflect immediately
  - Analytics dashboard shows key metrics
  - Intuitive forms with helpful labels

#### 5.4.6 Analytics & Monitoring
- **Requirement ID:** FR-018
- **Description:** Track portfolio performance and user interactions
- **Features:**
  - Visitor count (daily, weekly, monthly)
  - Top visited projects
  - Top chatbot questions
  - Traffic sources (referrer)
  - Device breakdown (desktop/mobile/tablet)
  - Popular sections/skills
  - Chatbot effectiveness metrics
- **Data Collection:**
  - Page views and session duration
  - Section scroll tracking
  - Chatbot interaction logs
  - Form submissions
- **Acceptance Criteria:**
  - Dashboard displays key metrics
  - Data updates in real-time or near-real-time
  - Historical data available for comparison

---

## 6. NON-FUNCTIONAL REQUIREMENTS

### 6.1 Performance
- **NFR-001: Page Load Time**
  - Initial load: <2 seconds
  - Time to Interactive: <3 seconds
  - Lighthouse score: >90

- **NFR-002: Animation Performance**
  - 60 FPS animations (GPU-accelerated)
  - No jank or stuttering
  - Smooth transitions on all devices

- **NFR-003: API Response Time**
  - Chatbot response: <2 seconds average
  - Content updates: <1 second
  - Analytics data: <3 seconds

### 6.2 Scalability
- **NFR-004: Concurrent Users**
  - Support 100+ concurrent visitors
  - Database queries optimized
  - Caching strategy for static content

- **NFR-005: Data Growth**
  - System supports 100+ projects without performance degradation
  - Database scalable to 10,000+ entries

### 6.3 Security
- **NFR-006: Authentication**
  - Passwords hashed (bcrypt or similar)
  - HTTPS/TLS encryption for all communications
  - CSRF protection
  - Rate limiting on login attempts

- **NFR-007: Data Protection**
  - No sensitive personal data stored
  - Contact forms protected from spam
  - API keys secured (environment variables)
  - SQL injection prevention (parameterized queries)

- **NFR-008: Privacy**
  - GDPR compliant (if applicable)
  - Privacy policy displayed
  - Cookie consent for analytics
  - No unnecessary data collection

### 6.4 Usability
- **NFR-009: Accessibility**
  - WCAG 2.1 AA compliance
  - Keyboard navigation support
  - Screen reader compatibility
  - Alt text for all images
  - Color contrast ratios meet standards

- **NFR-010: Responsiveness**
  - Mobile: 320px - 480px
  - Tablet: 481px - 1024px
  - Desktop: 1025px+
  - Adaptive layout and touch-friendly buttons
  - No horizontal scrolling

- **NFR-011: Browser Compatibility**
  - Chrome, Firefox, Safari, Edge (latest 2 versions)
  - Graceful degradation for older browsers
  - Mobile browsers: iOS Safari, Chrome Android

### 6.5 Maintainability
- **NFR-012: Code Quality**
  - Clean, modular, well-documented code
  - TypeScript for type safety
  - Unit tests for critical functions
  - README and setup documentation

- **NFR-013: Deployment**
  - One-click deployment (CI/CD pipeline)
  - Environment-based configuration
  - Easy rollback mechanism

### 6.6 Reliability
- **NFR-014: Uptime**
  - 99.5% availability target
  - Automated error monitoring and alerts
  - Graceful error handling and user feedback

- **NFR-015: Data Integrity**
  - Automatic backups
  - Transaction support for critical operations
  - Validation at input and database levels

---

## 7. TECHNOLOGY STACK & ARCHITECTURE

### 7.1 Recommended Tech Stack

#### Frontend
- **Framework:** Next.js 14+ (React)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS Modules for advanced effects
- **Animations:** Framer Motion (React animation library)
- **State Management:** React Context API or Zustand
- **API Client:** Fetch API or Axios
- **Character Animation:** Three.js (for 3D avatar) or SVG + GSAP

#### Backend
- **Runtime:** Node.js
- **Framework:** Express.js or Next.js API Routes
- **Database:** MongoDB (document-based, flexible schema)
  - Alternative: PostgreSQL for relational data
- **Authentication:** JWT tokens with secure refresh
- **ORM/Query:** Mongoose (MongoDB) or Prisma

#### AI Integration
- **LLM Provider:** Anthropic Claude API (via claude-sdk or REST API)
- **Alternative:** OpenAI GPT-4, Google Gemini
- **NLU:** Built-in with LLM, no separate NLU library needed
- **Vector Database:** Optional (Pinecone, Weaviate) for semantic search

#### Deployment
- **Hosting:** Vercel (Next.js optimized) or AWS (more control)
- **Database Hosting:** MongoDB Atlas (cloud) or AWS RDS
- **CDN:** Vercel's built-in CDN or Cloudflare
- **Environment Variables:** Vercel Secrets or AWS Secrets Manager

#### Admin Dashboard
- **Framework:** React (same as main site or separate)
- **Data Input:** React Hook Form + Zod validation
- **Rich Text Editor:** TiptapEditor or Slate
- **Image Upload:** AWS S3 or Cloudinary
- **Charts:** Recharts or Chart.js for analytics

#### DevOps & Tools
- **Version Control:** Git + GitHub
- **CI/CD:** GitHub Actions
- **Monitoring:** Sentry (error tracking), LogRocket (session replay)
- **Analytics:** Plausible or Posthog (privacy-friendly)
- **Code Quality:** ESLint, Prettier, TypeScript

### 7.2 Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                    Client Side (Next.js)                │
├─────────────────────────────────────────────────────────┤
│ ┌─────────────┬──────────────┬──────────────────────┐   │
│ │ Hero/Avatar │  Projects    │  Resume Showcase     │   │
│ │ Animations  │  Section     │  Skills Section      │   │
│ └─────────────┴──────────────┴──────────────────────┘   │
│ ┌───────────────────────────────────────────────────┐   │
│ │ AI Chatbot (Floating Widget)                      │   │
│ │ AI Portfolio Guide (Integrated)                   │   │
│ └───────────────────────────────────────────────────┘   │
│ ┌───────────────────────────────────────────────────┐   │
│ │ Admin Dashboard (Protected Routes)                │   │
│ │ - Project Management                             │   │
│ │ - Resume Management                              │   │
│ │ - Analytics Dashboard                            │   │
│ └───────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
              ↓         ↓         ↓
┌─────────────────────────────────────────────────────────┐
│              Backend (Node.js/Express)                  │
├─────────────────────────────────────────────────────────┤
│ ┌──────────────┬──────────────┬──────────────────────┐  │
│ │ API Routes   │ Auth Service │ AI Service           │  │
│ │ - Projects   │ - JWT Login  │ - Chatbot Endpoint  │  │
│ │ - Resume     │ - Sessions   │ - Guide Integration │  │
│ │ - Skills     │ - Password   │ - Claude API calls  │  │
│ │ - Analytics  │   Reset      │                      │  │
│ └──────────────┴──────────────┴──────────────────────┘  │
│ ┌──────────────────────────────────────────────────┐   │
│ │ Data Layer (Mongoose/Prisma)                     │   │
│ └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
              ↓         ↓
     ┌───────────────────────────┐
     │ MongoDB Atlas             │
     │ (Projects, Resume, Users) │
     └───────────────────────────┘
              ↓
     ┌───────────────────────────┐
     │ Claude API (Anthropic)    │
     │ (Chatbot & Guide)         │
     └───────────────────────────┘
```

### 7.3 Data Models

#### Project Model
```javascript
{
  _id: ObjectId,
  title: String,
  shortDescription: String,
  longDescription: String,
  technologies: [String],
  category: String, // ML, Web, UI/UX, Automation
  images: {
    thumbnail: String (URL),
    gallery: [String]
  },
  links: {
    github: String,
    liveDemo: String,
    documentation: String
  },
  startDate: Date,
  endDate: Date,
  status: String, // ongoing, completed
  order: Number, // for sorting
  createdAt: Date,
  updatedAt: Date
}
```

#### Experience Model
```javascript
{
  _id: ObjectId,
  title: String,
  company: String,
  duration: {
    startDate: Date,
    endDate: Date
  },
  description: String,
  achievements: [String],
  technologies: [String],
  order: Number,
  createdAt: Date,
  updatedAt: Date
}
```

#### Skill Model
```javascript
{
  _id: ObjectId,
  name: String,
  category: String,
  proficiencyLevel: Number, // 1-5 or enum
  featured: Boolean,
  order: Number,
  createdAt: Date,
  updatedAt: Date
}
```

#### Analytics Model
```javascript
{
  _id: ObjectId,
  sessionId: String,
  timestamp: Date,
  eventType: String, // pageview, section_view, click, etc.
  eventData: {
    page: String,
    section: String,
    projectId: ObjectId (optional),
    deviceType: String
  },
  userAgent: String
}
```

---

## 8. AI IMPLEMENTATION STRATEGY

### 8.1 Chatbot Architecture

#### Functionality
- Context: System prompt includes Vineet's resume, projects, and portfolio data
- Memory: Session-based conversation history
- Knowledge Base: Portfolio data (projects, skills, experience)
- Integration Point: Floating chat widget with real-time streaming responses

#### User Flow
1. Visitor clicks chat icon → Widget opens
2. Visitor types question → Request sent to backend
3. Backend calls Claude API with context
4. Response streams to client
5. Response displayed in chat UI
6. Conversation history maintained in session

#### Example Prompts Chatbot Should Handle
- "What are your main skills?"
- "Tell me about your ML projects"
- "What experience do you have with Python?"
- "Are you available for freelance work?"
- "Can you explain the deepfake detection project?"
- "What's your tech stack?"
- "How do I contact you?"

### 8.2 AI Portfolio Guide

#### Functionality
- Suggests relevant projects based on visitor interest
- Provides context-aware help
- Explains technical concepts
- Highlights portfolio strengths
- Can be triggered by explicit request or as proactive suggestions

#### Example Interactions
1. Visitor hovers over project → Guide suggests related projects
2. Visitor scrolls through skills → Guide explains proficiency levels
3. Visitor clicks "Help me explore" → Guide asks interests, suggests portfolio sections
4. Visitor opens chatbot → Guide offers topic suggestions

### 8.3 API Integration Details

#### Claude API Integration
```
Endpoint: https://api.anthropic.com/v1/messages
Method: POST
Headers: {
  "x-api-key": process.env.ANTHROPIC_API_KEY,
  "Content-Type": "application/json"
}
Body: {
  "model": "claude-opus-4-1",
  "max_tokens": 1024,
  "system": "[Portfolio context prompt]",
  "messages": [
    {"role": "user", "content": "[User question]"}
  ]
}
```

#### System Prompt Template
```
You are Vineet Vishwakarma's portfolio AI assistant. Your role is to help visitors learn about Vineet's professional background, projects, and expertise.

Vineet's Profile:
- Education: B.Tech CSE (ML), IIT Madras Data Science student
- Key Skills: Python, JavaScript, ML, ERP systems, UI/UX
- Experience: ERP & Automation internship, Smart India Hackathon semifinalist
- Interests: AI, Web Dev, Filmmaking, UI/UX

Portfolio Highlights:
[Auto-populated with projects, skills, experience]

Guidelines:
1. Be helpful and friendly
2. Provide accurate information from the portfolio
3. Highlight strengths and relevant experience
4. Suggest related projects/skills when relevant
5. Keep responses concise (2-3 sentences max)
6. For complex topics, offer to explain further

Do not:
- Make up information not in the portfolio
- Make promises on behalf of Vineet
- Share contact details unprompted (direct to contact section)
```

### 8.4 Cost Optimization
- Token usage monitoring and rate limiting
- Cache frequently accessed responses
- Limit message length to control costs
- Consider Claude API pricing model

---

## 9. USER INTERFACE & USER EXPERIENCE

### 9.1 Design Principles
- **Inspiration Sources:**
  - rkworks20.com: Professional layout, organized presentation, resume focus
  - david-hckh.com: Animated avatar, interactive cursor, personality
  - Hybrid approach: Professional structure + Interactive elements + AI features

- **Aesthetic Direction:** Modern, interactive, professional with personality
  - Clean typography and spacing
  - Smooth animations (not overwhelming)
  - Cohesive color scheme with accent colors
  - High-quality imagery and icons
  - Dark/light mode support

### 9.2 Page Structure

**Header/Navigation**
- Logo/Name
- Navigation menu (Projects, Resume, Skills, Contact)
- Dark/Light mode toggle
- Chat widget button

**Hero Section**
- Animated avatar/character
- Welcome message with typewriter effect
- Brief intro (2-3 sentences)
- CTA buttons: "Explore", "Chat", "Resume"

**Projects Section**
- Grid layout with hover effects
- Filters by category/tech
- Project cards with thumbnail, title, brief description
- Hover to reveal more info
- Click for full details

**Resume Section**
- Timeline view for experience
- Expandable sections for education, skills, etc.
- Interactive skill visualization
- Download PDF button

**Skills Section**
- Categorized skills display
- Proficiency indicators
- Search/filter capability
- Animated on scroll

**Contact Section**
- Contact form
- Email/phone links
- Social media links
- Map (optional)

**Footer**
- Copyright info
- Quick links
- Social links
- Back to top button

### 9.3 Responsive Design
- Mobile-first approach
- Touch-friendly buttons and interactions
- Simplified navigation on mobile
- Avatar/animations gracefully degrade on mobile
- Chatbot optimized for small screens

### 9.4 Accessibility
- High contrast color combinations
- Keyboard navigation throughout
- ARIA labels for interactive elements
- Alt text for images
- Skip navigation links
- Focus indicators visible
- Animations can be disabled (prefers-reduced-motion)
- Readable font sizes (minimum 16px)

---

## 10. IMPLEMENTATION ROADMAP

### Phase 1: Foundation (Weeks 1-3)
**Deliverables:** Core website structure and basic content

- [ ] Project setup (Next.js, TypeScript, Tailwind)
- [ ] Database setup (MongoDB connection)
- [ ] Basic page structure and navigation
- [ ] Hero section with basic animations
- [ ] Projects section with static data
- [ ] Resume showcase (static)
- [ ] Contact form (backend)
- [ ] Deploy to staging environment

**Definition of Done:**
- All components render correctly
- No console errors
- Mobile responsive
- Basic functionality works

---

### Phase 2: Interactive Features (Weeks 4-5)
**Deliverables:** Advanced animations and interactive elements

- [ ] Cursor tracking effects
- [ ] Smooth page animations (scroll, transitions)
- [ ] Animated avatar component (SVG or Three.js)
- [ ] Dark/light mode toggle
- [ ] Enhanced hover states
- [ ] Parallax effects
- [ ] Performance optimization (Lighthouse >90)

**Definition of Done:**
- All animations smooth (60 FPS)
- No performance degradation
- Accessibility maintained
- Mobile optimized

---

### Phase 3: Admin Dashboard (Weeks 6-7)
**Deliverables:** Content management system

- [ ] Authentication (login/password reset)
- [ ] Project management (CRUD operations)
- [ ] Resume management (experience, education, skills)
- [ ] Content management (hero text, section titles, etc.)
- [ ] Basic analytics dashboard
- [ ] Image upload and optimization
- [ ] Form validation and error handling

**Definition of Done:**
- Admin can fully manage all content
- Changes appear immediately on site
- No breaking of site functionality

---

### Phase 4: AI Integration (Weeks 8-10)
**Deliverables:** Chatbot and AI guide

- [ ] Claude API integration
- [ ] Chatbot widget (UI + backend)
- [ ] Chat context from portfolio data
- [ ] Streaming responses
- [ ] Session persistence
- [ ] AI guide suggestions
- [ ] Chatbot analytics
- [ ] Error handling and fallbacks

**Definition of Done:**
- Chatbot responds accurately to questions
- Responses feel natural
- No API errors
- Analytics tracked properly

---

### Phase 5: Polish & Launch (Weeks 11-12)
**Deliverables:** Final refinement and production launch

- [ ] Comprehensive testing (unit, integration, e2e)
- [ ] SEO optimization
- [ ] Analytics setup
- [ ] Security audit
- [ ] Performance profiling and optimization
- [ ] Documentation
- [ ] CI/CD pipeline setup
- [ ] Production deployment
- [ ] Monitoring and error tracking

**Definition of Done:**
- 99.5% uptime SLA met
- All security checks passed
- Lighthouse score >90
- No critical bugs
- Monitoring in place

---

## 11. TESTING STRATEGY

### 11.1 Testing Levels

#### Unit Tests
- Individual components (buttons, forms, cards)
- Utility functions (data formatting, validation)
- API handlers
- Target: 70%+ code coverage

#### Integration Tests
- Component interactions
- API endpoint testing
- Database operations
- Authentication flow

#### End-to-End Tests
- User journeys (explore portfolio, chat with bot, contact form)
- Admin workflows (add project, update resume)
- Cross-browser testing
- Mobile responsiveness

#### Performance Tests
- Load testing (100+ concurrent users)
- Animation frame rate analysis
- API response time analysis
- Image optimization

### 11.2 Testing Tools
- Jest (unit testing)
- React Testing Library (component testing)
- Cypress or Playwright (e2e testing)
- Lighthouse (performance)
- WAVE (accessibility)

---

## 12. RISK ANALYSIS & MITIGATION

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| Claude API rate limiting | Medium | Medium | Implement caching, user session limits, consider fallback responses |
| High data load time | Low | High | Database indexing, query optimization, caching strategy |
| Avatar/animation performance | Low | Medium | Test on various devices, implement performance monitoring, graceful degradation |
| Admin dashboard security issues | Low | High | Regular security audits, input validation, rate limiting, JWT security |
| Third-party API downtime | Low | Medium | Fallback error messages, local data caching, status page monitoring |
| Scope creep | Medium | Medium | Clear requirements, change control process, prioritization |
| Browser compatibility issues | Low | Medium | Regular testing, polyfills, graceful degradation |

---

## 13. SUCCESS METRICS & KPIs

### Business Metrics
- **Recruiter engagement:** 10+ inquiries within 3 months
- **Portfolio effectiveness:** Positive feedback on portfolio quality
- **Update frequency:** Updates made within 10 minutes of new accomplishment

### Technical Metrics
- **Performance:**
  - Page load time: <2 seconds (initial)
  - Lighthouse score: >90
  - Uptime: 99.5%
  - API response time: <2 seconds

### User Engagement Metrics
- **Traffic:**
  - Monthly unique visitors: 100+
  - Average session duration: >3 minutes
  - Bounce rate: <40%

- **Feature Usage:**
  - Chatbot usage: 20%+ of visitors
  - Projects viewed: >50% of visitors explore projects
  - Resume section: >30% view resume details

- **AI Features:**
  - Chatbot average satisfaction: >4/5 (if feedback collected)
  - Guide suggestions accepted: >25%
  - Chatbot completion rate: >70% (user gets answer to question)

### Quality Metrics
- **Code quality:**
  - Test coverage: >70%
  - TypeScript strict mode enabled
  - Zero critical security issues

- **Accessibility:**
  - WCAG 2.1 AA compliance
  - Lighthouse accessibility score: 90+

---

## 14. MAINTENANCE & SUPPORT

### 14.1 Post-Launch Maintenance
- **Weekly:** Monitor uptime, check error logs, respond to contact form submissions
- **Monthly:** Review analytics, update portfolio with new projects/achievements
- **Quarterly:** Security audit, performance review, dependency updates
- **Annually:** Major review and feature enhancements

### 14.2 Support Plan
- **User Support:** Email-based support for contact form inquiries
- **Technical Support:** Monitor Sentry for errors, fix critical issues within 24 hours
- **Chatbot Improvement:** Analyze common questions, update system prompt as needed

### 14.3 Monitoring
- Sentry for error tracking
- LogRocket for session replay (optional)
- Vercel Analytics for performance
- Plausible for privacy-friendly analytics
- Custom dashboards for chatbot metrics

---

## 15. BUDGET & RESOURCE ESTIMATION

### 15.1 Time Estimation
- **Development:** 12 weeks (280-320 hours)
  - Frontend: 120 hours
  - Backend: 100 hours
  - Admin Dashboard: 60 hours
  - AI Integration: 40 hours
  - Testing & Deployment: 40 hours

- **Design/Prototyping:** 2-3 weeks (included in development)

### 15.2 Resource Requirements
- **Development:** 1 Full-Stack Developer (you)
- **Design:** Figma mockups (self-created or contractor)
- **AI/NLP Expertise:** Basic knowledge (use Claude API)

### 15.3 Cost Estimation

| Item | Estimated Cost (Monthly) | Notes |
|------|--------------------------|-------|
| **Hosting (Vercel Pro)** | $20 | Auto-scaling, custom domains |
| **Database (MongoDB Atlas)** | $0-57 | Free tier available, paid for scale |
| **Claude API** | $10-50 | Depends on chatbot usage (pay-as-you-go) |
| **CDN/Image Hosting** | $0-20 | Optional: Cloudinary for image optimization |
| **Domain** | $10-15 | Annual, varies by registrar |
| **Monitoring (Sentry)** | $0-29 | Free plan available |
| **Email Service** | $0-10 | SendGrid or similar for contact form |
| **Total** | **$40-181** | Rough estimate, varies with usage |

**First-time setup costs:** Domain (~$12/year), initial setup time (free if self-done)

---

## 16. APPROVAL & SIGN-OFF

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Project Owner | Vineet Vishwakarma | _________________ | _____ |
| Technical Lead | - | _________________ | _____ |
| Stakeholder | - | _________________ | _____ |

---

## APPENDIX A: DETAILED USER STORIES

### US-001: Hero Section with Animated Avatar
**As a** visitor  
**I want to** see an engaging hero section with an animated character  
**So that** I'm immediately impressed and interested in the portfolio

**Acceptance Criteria:**
- Avatar is smoothly animated and interactive
- Cursor affects avatar (eyes follow)
- Hero text has typewriter or fade-in effect
- CTA buttons are prominent and clickable
- Mobile: Avatar scaled appropriately

### US-002: Explore and Filter Projects
**As a** recruiter  
**I want to** easily browse and filter projects by technology or category  
**So that** I can quickly find relevant work examples

**Acceptance Criteria:**
- Projects display in responsive grid
- Filter buttons work smoothly
- Filtered results update instantly
- Project details accessible via modal or dedicated page
- Search by technology works

### US-003: Chat with AI Assistant
**As a** visitor  
**I want to** ask questions about Vineet and the portfolio  
**So that** I can learn more without leaving the site

**Acceptance Criteria:**
- Chat widget is easy to access
- AI responds to questions about skills, projects, experience
- Responses are accurate and contextual
- Chat history persists during session
- Mobile-friendly chat interface

### US-004: Admin Project Management
**As a** portfolio owner  
**I want to** add, edit, and delete projects without touching code  
**So that** I can keep my portfolio up-to-date easily

**Acceptance Criteria:**
- Admin dashboard is intuitive
- Forms have validation
- Changes appear immediately on live site
- Image upload works smoothly
- Can preview changes before publishing

### US-005: Resume Timeline View
**As a** recruiter  
**I want to** see a clear timeline of experience and education  
**So that** I can quickly understand career progression

**Acceptance Criteria:**
- Timeline displays in chronological order
- Sections are expandable for more detail
- Mobile: Timeline is readable on small screens
- Download PDF option available

---

## APPENDIX B: GLOSSARY

| Term | Definition |
|------|-----------|
| **SRS** | Software Requirements Specification - detailed document of project requirements |
| **Chatbot** | AI-powered conversational interface that answers user questions |
| **Portfolio Guide** | AI feature that helps visitors explore and discover portfolio content |
| **Admin Dashboard** | Backend interface for managing portfolio content |
| **Cursor Tracking** | Interactive effect where page elements follow mouse movement |
| **Parallax** | Visual effect where background moves slower than foreground during scroll |
| **Token** | Unit of text processed by LLM (roughly 4 characters) |
| **Streaming** | Sending responses progressively (word by word) rather than all at once |
| **WCAG** | Web Content Accessibility Guidelines - standards for accessible web design |

---

**Document End**

---

### Next Steps:
1. **Review & Feedback:** Share this SRS with stakeholders for review and feedback
2. **Refinement:** Update requirements based on feedback
3. **Design Phase:** Create Figma wireframes/mockups based on SRS
4. **Development:** Begin Phase 1 implementation using roadmap
5. **Version Control:** Maintain this document in GitHub for future reference
