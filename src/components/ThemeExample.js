import { useTheme } from "@/pages/_app";

export default function ThemeExample() {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Theme Context Example
      </h3>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600 dark:text-gray-300">
            Current Theme:
          </span>
          <span className="font-medium text-gray-900 dark:text-white capitalize">
            {theme}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600 dark:text-gray-300">
            Is Dark Mode:
          </span>
          <span
            className={`font-medium ${
              isDark ? "text-green-600" : "text-red-600"
            }`}
          >
            {isDark ? "Yes" : "No"}
          </span>
        </div>

        <button onClick={toggleTheme} className="btn-primary w-full">
          Toggle Theme
        </button>

        <div className="text-sm text-gray-500 dark:text-gray-400">
          This component demonstrates how to use the theme context from _app.js
        </div>
      </div>
    </div>
  );
}
