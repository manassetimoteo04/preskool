# 🎓 Preskool

**Preskool** is a modern and intuitive school management system built to streamline the administration of students, teachers, classes, grades (series), and courses for primary and secondary education.

---

## 🚀 Features

- Registration and management of:
  - Students
  - Teachers
  - Classes
  - Grades (Years/Series)
  - Courses
  - Subjects
- Linking classes to specific grades and courses
- Educational stage separation (Elementary and High School)
- Multilingual support (PT/EN)
- Friendly user interface for school staff

---

## 🛠️ Tech Stack

- **Frontend:** JavaScript, React.js
- **State/Data Management:** React Query
- **Forms:** React Hook Form
- **Styling:** Styled Components
- **Notifications:** React Toastify (or similar toast library)
- **Backend & Auth:** Firebase (Firestore + Auth)
- **Deployment:** Netlify

---

## 📁 Data Structure (Overview)

- `Courses` → contain multiple `Grades`
- `Grades` → linked to `Classes`
- `Classes` → contain students and assigned teachers
- `Subjects` → associated with courses and grades
- `Users` → roles include admin, teacher, and student

---

## 📦 Getting Started

```bash
# Clone the repository
git clone https://github.com/manassetimoteo04/preskool.git

# Navigate to the folder
cd preskool

# Install dependencies
npm install

# Run the development server
npm run dev
```
