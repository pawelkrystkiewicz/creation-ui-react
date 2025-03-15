import { useEffect, useState } from 'react'

/**
 * Use this hook to detect whether dark mode is active based on the presence of the 'dark' class on the body element.
 * @returns {boolean} - Returns true if dark mode is active, otherwise false.
 */
export function useDetectDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);  // Default to false to prevent SSR issues

  useEffect(() => {
    // Ensure the document is fully loaded and document.body is available
    if (typeof window !== 'undefined' && document.body) {
      // Initial check to set state correctly on client load
      setIsDarkMode(document.body.classList.contains('dark'));

      // Function to update state based on the presence of the 'dark' class
      const handleClassChange = () => {
        setIsDarkMode(document.body.classList.contains('dark'));
      };

      // Observe changes to the class attribute of the body element
      const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            handleClassChange();
          }
        });
      });

      observer.observe(document.body, {
        attributes: true, // Listen for attribute changes
        attributeFilter: ['class'], // Specifically for changes in the 'class' attribute
      });

      // Cleanup function to disconnect the observer
      return () => observer.disconnect();
    }
  }, []); // Empty dependency array ensures this effect only runs once

  return isDarkMode;
}
