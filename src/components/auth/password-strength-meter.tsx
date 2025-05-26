import { cn } from "@/lib/utils";

/**
 * Password strength meter component that visually indicates password complexity
 * and requirements compliance.
 *
 * Features:
 * - Real-time strength evaluation based on multiple criteria
 * - Visual progress bar with color-coded segments
 * - Detailed feedback about missing requirements
 * - Aligns with common password security best practices
 *
 * @param {Object} props - Component props
 * @param {string} props.password - The password to evaluate
 */
export const PasswordStrengthMeter = ({ password }: { password: string }) => {
  /**
   * Calculates password strength based on defined requirements
   * @param {string} pass - Password to evaluate
   * @returns {number} Number of met requirements (0-5)
   */
  const getStrength = (pass: string): number => {
    if (!pass) return 0;

    // Define all password requirements from the Zod schema
    const requirements = [
      pass.length >= 8, // Minimum length requirement
      /[a-z]/.test(pass), // Contains lowercase letter
      /[A-Z]/.test(pass), // Contains uppercase letter
      /[0-9]/.test(pass), // Contains number
      /[^a-zA-Z0-9]/.test(pass), // Contains special character
    ];

    return requirements.filter(Boolean).length;
  };

  const strength = getStrength(password);
  const allRequirementsMet = strength === 5;

  /**
   * Determines the appropriate strength label based on met requirements
   */
  const strengthText = allRequirementsMet
    ? "Strong (meets all requirements)"
    : strength >= 4
      ? "Almost there"
      : strength >= 2
        ? "Weak"
        : "Very weak";

  return (
    <div className="mt-2 space-y-2">
      {/* Visual strength indicator bar */}
      <div className="flex h-1.5 gap-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-full flex-1 rounded-full",
              i < strength
                ? allRequirementsMet
                  ? "bg-green-500" // Full strength - all requirements met
                  : i < 3
                    ? "bg-red-500" // Low strength
                    : "bg-yellow-500" // Medium strength
                : "bg-gray-200", // Unmet requirements
            )}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Strength feedback and requirements list */}
      {password && (
        <div className="text-xs">
          {/* Strength level text */}
          <p
            className={cn(
              "font-medium",
              allRequirementsMet
                ? "text-green-600" // Full strength
                : strength >= 3
                  ? "text-yellow-500" // Medium strength
                  : "text-red-500", // Low strength
            )}
          >
            Password strength: {strengthText}
          </p>

          {/* List of missing requirements (only shown when not all are met) */}
          {!allRequirementsMet && (
            <ul className="mt-1 text-gray-600">
              {password.length < 8 && <li>• At least 8 characters</li>}
              {!/[a-z]/.test(password) && (
                <li>• At least one lowercase letter</li>
              )}
              {!/[A-Z]/.test(password) && (
                <li>• At least one uppercase letter</li>
              )}
              {!/[0-9]/.test(password) && <li>• At least one number</li>}
              {!/[^a-zA-Z0-9]/.test(password) && (
                <li>• At least one special character</li>
              )}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};
