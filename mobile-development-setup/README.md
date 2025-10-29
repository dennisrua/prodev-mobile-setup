# ProDev Mobile Development Setup

This repository contains multiple mini projects introducing mobile development using **React Native**, **TypeScript**, **NativeWindCSS**, and the **Expo Framework**.

The goal is to understand how to build cross-platform mobile applications efficiently, using one codebase for both Android and iOS.

---

## Technologies Used

| Technology    | Purpose                                                        |
| ------------- | -------------------------------------------------------------- |
| React Native  | Build cross-platform native apps using JavaScript/TypeScript   |
| Expo          | Simplifies setup, testing, and deployment of React Native apps |
| TypeScript    | Adds static typing and improves code maintainability           |
| NativeWindCSS | Tailwind-style utility classes for fast styling                |
| Expo Go       | Runs your app on a real device without compiling native code   |

---

## Why These Tools

### React Native

React Native allows developers to build real native apps using React components. The UI is rendered using actual native components, not a WebView.

### TypeScript

Improves reliability by catching errors during development instead of runtime. Useful for scalable projects.

### NativeWindCSS

Provides TailwindCSS utility-based styling directly inside JSX, reducing the need for repetitive StyleSheet code.

### Expo

Handles complex native configuration and provides:

- Quick setup
- Built-in APIs (camera, notifications, haptics, etc.)
- Expo Go for testing apps directly on a physical device
- OTA (over-the-air) update capability

---

## Repository Structure

prodev-mobile-setup/
│
├── mobile-development-setup/ (Task 0: Environment Setup)
│ └── README.md
│
├── prodev-mobile-app-0x00/ (Task 1: First App)
│ └── app/(tabs)/index.tsx
│
├── prodev-mobile-app-0x01/ (Task 2: Components and Styling)
│ └── app/index.tsx
│
├── prodev-mobile-app-0x02/ (Task 3: Images and Safe Areas)
│ └── app/index.tsx
│
└── prodev-mobile-app-0x03/ (Task 4: Login UI and Core Components)
├── app/index.tsx
├── app/\_layout.tsx
├── styles/index.tsx
└── assets/images/

yaml
Copy code

---

## Tasks Overview

### Task 0 — Environment Setup

- Install and configure Expo Go on your physical device.
- Install Node.js, VS Code, Git, and Expo CLI / Expo tooling.
- Document setup details and challenges in `mobile-development-setup/README.md`.

---

### Task 1 — First Mobile App (`prodev-mobile-app-0x00`)

- Scaffold a new Expo project using Expo Router.
- Modify content in `app/(tabs)/index.tsx`.
- Run using:  
  npx expo start

yaml
Copy code

- Test on Expo Go.
- Run `npm run reset-project` and document the result.

---

### Task 2 — Components and Styling (`prodev-mobile-app-0x01`)

- Use `View`, `Text`, and `StyleSheet`
- Display multiple text elements with different styles.

---

### Task 3 — Images, Buttons, Safe Areas (`prodev-mobile-app-0x02`)

- Use:
- `SafeAreaProvider`
- `SafeAreaView`
- `ImageBackground`
- `Image`
- `TouchableOpacity`
- Display a background image, a logo, and call-to-action buttons.

---

### Task 4 — Login UI & Core Components (`prodev-mobile-app-0x03`)

- Build a basic login UI using:
- `TextInput`
- `TouchableOpacity`
- Icons using `@expo/vector-icons`
- Store common styles inside `/styles/index.tsx`

---

## Running Any Project

Navigate to the project folder and run:

npx expo start

yaml
Copy code

Then scan the QR code using Expo Go on your mobile device.

---

## Notes on `npm run reset-project`

When running this command:

- Temporary folders (cache, `.expo`, etc.) are removed.
- The project structure returns to its initial clean state.
- Source code files you wrote remain untouched.

---

## License

This repository is for educational and personal learning use.
