import Text from "./text.tsx"

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-center py-6 text-color-black">
      <p>© {new Date().getFullYear()} - Ação Saberes Indigenas</p>
    </footer>
  );
}