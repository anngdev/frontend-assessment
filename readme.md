Project Setup
---
This project uses **Vue 3** and **Tailwind CSS**. To get started, follow these steps:
1. Clone the repository:
```bash
git clone [https://github.com/anngdev/frontend-assessment.git
```
2. Navigate to the project directory
```bash
cd frontend-assessment
```
3. Install dependencies:
```bash
npm install
```
4. Run the development server:
```bash
npm run dev
```

Live Demos
---
Exercise 1: https://github.com/anngdev

Exercise 2: https://github.com/anngdev


The 🍌 Explained
---
`+ + 'a'` is a key part of this operation. Unary plus converts `+` converts `'a'` to a number, but since this is an invalid conversion, the result is `NaN`. Adding `NaN` to a string then turns the result into the string `'NaN'`

`('b' + 'a' + + 'a' + 'a').toLowerCase()`

`= ('b' + 'a' + NaN + 'a').toLowerCase()`

`= ('baNaNa').toLowerCase()`

`= 'banana'`