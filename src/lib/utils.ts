// src/lib/utils.ts

// Example utility function to concatenate class names
export function cn(...classes: (string | undefined)[]) {
    return classes.filter(Boolean).join(' ');
}

// You can add more utility functions or constants here
