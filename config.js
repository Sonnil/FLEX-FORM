// Auto-configuration for FLEX-FORM User Portal
// This file provides automatic database connection
window.FLEXFORM_CONFIG = {
    // These should be your PUBLIC/ANON keys, not service_role keys
    SUPABASE_URL: 'https://rctzljfqsafjmbljeyrb.supabase.co',
    SUPABASE_ANON_KEY: 'your-anon-key-here', // Replace with your anon key
    AUTO_CONNECT: true,
    DEFAULT_USER: {
        email: 'user@company.com',
        department: 'general'
    }
};
