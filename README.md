# Profile Card - HNG Internship Stage 0 & 1

A multi-page responsive web application built with HTML, CSS, and vanilla JavaScript for the HNG Internship.

## 🚀 Features

### Stage 0: Profile Card
- ✅ Responsive profile card with real-time timestamp
- ✅ Semantic HTML5 with accessibility features
- ✅ Social media integration
- ✅ Mobile-first responsive design

### Stage 1: Multi-Page Application
- ✅ **Contact Us Page** - Form with client-side validation
- ✅ **About Me Page** - Personal reflection and goals
- ✅ Navigation system across all pages
- ✅ Keyboard accessible with ARIA attributes
- ✅ Real-time form validation with error messages
- ✅ Success feedback on form submission

## 📁 Project Structure

```
Hng-Profile-Card/
│
├── index.html          # Profile card (Stage 0)
├── contact.html        # Contact form with validation (Stage 1)
├── about.html          # About me page (Stage 1)
├── style.css           # All styling (responsive & accessible)
├── script.js           # Time updates & form validation
├── image.peng.jpg      # Profile avatar
└── README.md           # Documentation
```

## 💻 Running Locally

### Option 1: Direct File
Simply open `index.html` in your browser.

### Option 2: Local Server
```bash
# Clone the repository
git clone https://github.com/john124code/Hng-Profile-Card.git

# Navigate to project folder
cd Hng-Profile-Card

# Using Python 3
python -m http.server 5500

# OR using Node.js
npx http-server
```

Then visit `http://localhost:5500` in your browser.

## 🎯 Pages Overview

### 1. Home (index.html)
- Profile card with personal information
- Real-time millisecond timestamp
- Social media links (Twitter, GitHub, LinkedIn)
- Hobbies and dislikes sections
- Fully responsive layout

### 2. Contact (contact.html)
Interactive contact form with validation:
- **Required Fields**: Name, Email, Subject, Message
- **Validation Rules**:
  - All fields are required
  - Email must be valid format (name@example.com)
  - Message must be at least 10 characters
- **Features**:
  - Real-time error feedback
  - Success message on valid submission
  - Form reset after successful submission
  - Accessible error messages with ARIA

### 3. About (about.html)
Personal reflection page featuring:
- Who I Am (Bio)
- My Goals in This Program
- Areas I'm Working to Improve
- Note to My Future Self
- Beyond Coding (Extra thoughts)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup with accessibility
- **CSS3** - Grid, Flexbox, Media Queries
- **Vanilla JavaScript** - DOM manipulation, form validation
- **GitHub Pages** - Deployment and hosting

## ✅ Technical Highlights

### Accessibility
- Semantic HTML elements (`<main>`, `<section>`, `<nav>`, `<article>`)
- ARIA attributes for screen readers
- Proper form labels with `for` attributes
- Error messages linked with `aria-describedby`
- Keyboard navigation support
- Visible focus states

### Responsive Design
- Mobile-first approach
- Three breakpoints:
  - Mobile: < 768px (single column)
  - Tablet: 768px - 1023px (optimized spacing)
  - Desktop: 1024px+ (multi-column layout)

### Form Validation
- Client-side validation with JavaScript
- Real-time feedback on blur events
- Clear error messages
- Success confirmation
- Input sanitization

## 🎨 Design Features

- Modern gradient background
- Card-based layout with shadows
- Smooth transitions and hover effects
- Professional color scheme (purple/violet theme)
- Clean typography with proper hierarchy
- Responsive images

## 🌐 Live Demo

**[View Live Site](https://john124code.github.io/Hng-Profile-Card/)**

### Direct Links:
- Home: https://john124code.github.io/Hng-Profile-Card/index.html
- Contact: https://john124code.github.io/Hng-Profile-Card/contact.html
- About: https://john124code.github.io/Hng-Profile-Card/about.html

## 🧪 Testing

All pages include `data-testid` attributes for automated testing:

**Stage 0 Tests:**
- `test-profile-card`
- `test-user-name`
- `test-user-bio`
- `test-user-time`
- `test-user-avatar`
- `test-user-social-links`
- `test-user-hobbies`
- `test-user-dislikes`

**Stage 1 Tests:**
- `test-contact-name`, `test-contact-email`, `test-contact-subject`, `test-contact-message`
- `test-contact-error-name`, `test-contact-error-email`, etc.
- `test-contact-success`
- `test-about-page`, `test-about-bio`, `test-about-goals`, `test-about-confidence`, `test-about-future-note`, `test-about-extra`

## 👨‍💻 Author

**John Olawoye**
- Twitter: [@JohnOnStack](https://twitter.com/JohnOnStack)
- GitHub: [@john124code](https://github.com/john124code)
- LinkedIn: [John Olawoye](https://www.linkedin.com/in/john-olawoye-b16657361/)

## 📝 License

This project is open source and available for educational purposes.

## 🙏 Acknowledgments

Built as part of the HNG Internship program.
- [HNG Internship](https://hng.tech/internship)
- [HNG Hire](https://hng.tech/hire)

---

## 📊 Project Status

- ✅ Stage 0: Complete
- ✅ Stage 1: Complete
- 🚀 Deployed on GitHub Pages
- 🎯 Ready for submission

---

**Last Updated:** October 22, 2025