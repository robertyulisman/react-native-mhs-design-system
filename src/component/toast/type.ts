export interface ToastProps {
  text?: string; // Optional property
  type?: 'success' | 'error' | 'warning' | 'default'; // Optional property
}

// Define the state for Toast
export interface ToastState {
  text: string; // text will always be a string
  modalShown: boolean; // whether the modal is shown
  type: 'success' | 'error' | 'warning' | 'default'; // Toast type
}
