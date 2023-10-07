export function focusNextElement(): void {
  const allFocusableElements = document.querySelectorAll(
    'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
  );
  const currentlyFocusedElement = document.activeElement as HTMLElement;

  // Encuentra el índice del elemento actualmente enfocado en la lista de elementos enfocables
  const currentIndex = Array.from(allFocusableElements).indexOf(
    currentlyFocusedElement,
  );

  // Si el elemento actualmente enfocado no se encuentra o es el último elemento, enfoque el primero
  if (currentIndex === -1 || currentIndex === allFocusableElements.length - 1) {
    (allFocusableElements[0] as HTMLElement).focus();
  } else {
    // En caso contrario, enfoque el siguiente elemento en la lista
    (allFocusableElements[currentIndex + 1] as HTMLElement).focus();
  }
}
