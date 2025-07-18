'use client';

import { toast as sonnerToast } from 'sonner';

interface ToastProps {
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive' | 'success' | 'warning';
  action?: {
    label: string;
    onClick: () => void;
  };
}

function toast({ title, description, variant = 'default', action }: ToastProps) {
  // For sonner, we'll use the title as the main message and description as the description
  const message = title || description || '';
  const toastDescription = title && description ? description : undefined;

  const options = {
    description: toastDescription,
    action: action ? {
      label: action.label,
      onClick: action.onClick,
    } : undefined,
  };

  switch (variant) {
    case 'destructive':
      return sonnerToast.error(message, options);
    case 'success':
      return sonnerToast.success(message, options);
    case 'warning':
      return sonnerToast.warning(message, options);
    default:
      return sonnerToast(message, options);
  }
}

// Create a simplified useToast hook that matches the expected interface
function useToast() {
  return {
    toast,
    dismiss: (toastId?: string | number) => {
      if (toastId) {
        sonnerToast.dismiss(toastId);
      } else {
        sonnerToast.dismiss();
      }
    },
  };
}

// Export additional toast methods for convenience
const toastMethods = {
  success: (message: string | React.ReactNode, options?: any) => sonnerToast.success(message, options),
  error: (message: string | React.ReactNode, options?: any) => sonnerToast.error(message, options),
  warning: (message: string | React.ReactNode, options?: any) => sonnerToast.warning(message, options),
  info: (message: string | React.ReactNode, options?: any) => sonnerToast.info(message, options),
  loading: (message: string | React.ReactNode, options?: any) => sonnerToast.loading(message, options),
  promise: sonnerToast.promise,
  dismiss: sonnerToast.dismiss,
  custom: sonnerToast.custom,
};

export { useToast, toast, toastMethods };
