const whatsappFormatted = (numberWhatsapp: string): string | undefined => {
  if (numberWhatsapp.startsWith('0')) {
    return `62${numberWhatsapp.slice(1)}`;
  }
  if (numberWhatsapp.startsWith('62')) {
    return numberWhatsapp;
  }
  if (numberWhatsapp.startsWith('8')) {
    return `62${numberWhatsapp}`;
  }
  return undefined; // Return undefined if none of the conditions match
};

export default whatsappFormatted;
