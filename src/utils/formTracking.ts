// Form submission tracking utility
export const trackFormSubmission = async (
  formType: string,
  formData: Record<string, any>,
  page: string = window.location.pathname
) => {
  try {
    const trackingData = {
      formType,
      formData,
      page,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      ipAddress: 'Unknown' // IP will be detected server-side
    };

    console.log(`📝 Tracking ${formType} form submission:`, trackingData);

    const response = await fetch('/api/form-submissions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(trackingData),
    });

    if (response.ok) {
      console.log(`✅ ${formType} form submission tracked successfully`);
    } else {
      console.error(`❌ Failed to track ${formType} form submission`);
    }
  } catch (error) {
    console.error(`❌ Error tracking ${formType} form submission:`, error);
  }
};

// Helper function to extract form data
export const extractFormData = (form: HTMLFormElement): Record<string, any> => {
  const formData = new FormData(form);
  const data: Record<string, any> = {};
  
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }
  
  return data;
};