# Sunshine Valley School Website

A modern, responsive school website built with HTML5, CSS3, JavaScript, and Bootstrap 5.

## 📋 Features

- **Fully Responsive Design** - Works seamlessly on mobile, tablet, and desktop devices
- **Modern UI/UX** - Clean, professional design with blue and white color scheme
- **Interactive Elements** - Smooth animations, hover effects, and transitions
- **Image Gallery** - Lightbox functionality for viewing images
- **Contact Form** - Functional contact form with validation
- **Google Maps Integration** - Embedded map showing school location
- **SEO Friendly** - Semantic HTML structure

## 📁 Project Structure

```
school_site/
│
├── index.html              # Home page
├── about.html              # About school page
├── principal.html          # Principal's message page
├── faculty.html            # Faculty profiles page
├── gallery.html            # Photo gallery page
├── news.html               # News & achievements page
├── contact.html            # Contact page
│
├── css/
│   └── style.css          # Main stylesheet
│
├── js/
│   └── main.js            # JavaScript functionality
│
├── images/                # Image directory (for local images)
│
└── README.md              # Project documentation
```

## 🎨 Design Features

### Color Palette

- Primary Blue: #1e3a8a
- Secondary Blue: #3b82f6
- Light Blue: #dbeafe
- Accent Yellow: #fbbf24
- White: #ffffff

### Typography

- Font Family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- Responsive font sizes for different screen sizes

## 📄 Pages Overview

### 1. Home Page (index.html)

- Hero section with school name and tagline
- Quick about section
- Statistics showcase
- Principal message preview
- Latest news highlights
- Gallery preview
- Footer with contact information

### 2. About School (about.html)

- School history and background
- Vision and mission statements
- Core values
- Infrastructure details
- Accreditations and affiliations

### 3. Principal's Message (principal.html)

- Principal's profile with photo
- Detailed inspirational message
- Educational philosophy
- Vision for the future
- Principal's achievements

### 4. Faculty Profiles (faculty.html)

- Grid layout of faculty members
- Teacher photos, names, subjects, and qualifications
- Support staff information
- Join our team section

### 5. Gallery (gallery.html)

- Campus and infrastructure photos
- Sports and athletics images
- Events and celebrations
- Classroom activities
- Extra-curricular activities
- Lightbox functionality for image viewing

### 6. News & Achievements (news.html)

- Latest news updates
- Major achievements of 2025
- School recognitions and awards
- Upcoming events calendar

### 7. Contact Page (contact.html)

- Contact information cards
- Contact form with validation
- Google Maps integration
- Office hours
- Department contacts
- FAQ section

## 🚀 Getting Started

### Running Locally

1. **Download or Clone the Repository**

   ```bash
   cd /path/to/school_site
   ```

2. **Open in Browser**
   - Simply open `index.html` in your web browser
   - Or use a local development server:

     ```bash
     # Using Python 3
     python -m http.server 8000

     # Using Node.js http-server
     npx http-server
     ```

   - Then navigate to `http://localhost:8000`

### Deploying to GitHub Pages

1. **Create a GitHub Repository**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/school-website.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**

   - Go to repository Settings
   - Navigate to Pages section
   - Select source branch (main)
   - Select folder (root)
   - Save and wait for deployment

3. **Access Your Site**
   - Your site will be available at: `https://yourusername.github.io/school-website/`

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Interactive features
- **Bootstrap 5.3** - Responsive framework
- **Bootstrap Icons** - Icon library
- **Google Maps API** - Map integration
- **Unsplash** - Stock images (via URLs)

## ✨ Key Features Implementation

### Responsive Navigation

- Mobile-friendly hamburger menu
- Active page highlighting
- Smooth scroll behavior

### Interactive Gallery

- Click to enlarge images
- Lightbox overlay
- Keyboard navigation (ESC to close)

### Contact Form

- Client-side validation
- Required field checking
- Success message display

### Animations

- Scroll-triggered animations
- Counter animations for statistics
- Smooth transitions and hover effects

### Accessibility

- Semantic HTML structure
- Alt text for images
- Keyboard navigation support
- ARIA labels where appropriate

## 📱 Responsive Breakpoints

- **Mobile**: < 576px
- **Tablet**: 576px - 768px
- **Desktop**: 768px - 992px
- **Large Desktop**: > 992px

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Customization Guide

### Changing Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
	--primary-blue: #1e3a8a;
	--secondary-blue: #3b82f6;
	--accent-yellow: #fbbf24;
}
```

### Adding Images

1. Place images in the `images/` folder
2. Update image paths in HTML files:
   ```html
   <img src="images/your-image.jpg" alt="Description" />
   ```

### Modifying Content

- All content is in HTML files
- Text can be edited directly
- Maintain the existing HTML structure for consistent styling

### Google Maps Location

Update the iframe src in `contact.html` with your coordinates:

```html
<iframe src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"></iframe>
```

## 📧 Contact Information (Placeholder)

- **Address**: 123 Education Lane, Sunshine Valley, CA 90210
- **Phone**: +1 (555) 123-4567
- **Email**: info@sunshinevalley.edu
- **Website**: www.sunshinevalley.edu

## 📝 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Feel free to fork this project and customize it for your school's needs.

## 📞 Support

For questions or issues, please contact the development team.

---

**Built with ❤️ for Sunshine Valley School**

_Last Updated: December 2025_
# yashwanti_english_school
