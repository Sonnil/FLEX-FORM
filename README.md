# FLEX-FORM - Complete Form Management System

A comprehensive secure form builder and data management system with dual interfaces:

1. **Admin Panel** (`index.html`) - For creating, updating, and deleting form templates
2. **User Portal** (`user-forms.html`) - For submitting data and exporting records with PDF/Excel/CSV support

The system provides enterprise-grade security with AES-256 encryption, Row Level Security, and complete audit trails for your data.

## Features

### 🎯 Core Features
- **Dynamic Field Creation**: Add various field types including text, email, number, date, dropdown, radio buttons, checkboxes, textarea, and file uploads
- **Drag & Drop Interface**: Intuitive form building experience
- **Field Configuration**: Customize labels, names, placeholders, and validation rules
- **Template System**: Save and load form templates for reuse
- **Live Preview**: Preview forms before deployment
- **Export Functionality**: Export form configurations as JSON or HTML

### � Secure Database Integration
- **Supabase PostgreSQL**: Enterprise-grade secure database backend
- **Row Level Security**: Department-based access control
- **Data Encryption**: AES-256-GCM for sensitive fields (emails, PII)
- **Audit Logging**: Complete activity tracking for compliance

### 📊 User Portal Features
- **Dashboard**: Statistics and recent submissions view
- **Form Submission**: Dynamic form rendering based on admin templates
- **Data Export**: PDF, Excel, CSV with advanced filtering
- **Recent History**: View and manage submission history

### 📱 User Experience
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations
- **Accessibility**: WCAG compliant design
- **Cross-browser Support**: Works on all modern browsers

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Access to a Microsoft Dataverse environment (for database integration)

### Installation

1. **Clone or Download** the project files to your local machine or web server
2. **Open** `index.html` in your web browser
3. **Start Building** your forms immediately - no additional setup required!

### File Structure
```
FLEX-FORM/
├── index.html                    # Admin Panel - Template Management
├── user-forms.html              # User Portal - Data Submission & Export
├── styles.css                   # Admin panel styles
├── user-styles.css              # User portal styles  
├── script.js                    # Admin panel functionality
├── user-forms.js                # User portal functionality
├── secure-supabase-connector.js # Enterprise security layer
├── scripts/
│   ├── import-data.js           # Secure data import (6,220 Gemba records)
│   ├── demo-import.js           # Import analysis demo
│   └── setup-database.js        # Database initialization
├── Gemba Requests.csv           # Your existing data ready for import
├── package.json                 # Dependencies and scripts
└── Documentation/               # Comprehensive guides and setup instructions
```

## How to Use

### 1. Building Forms

#### Adding Fields
1. Click on any field type button in the control panel
2. Configure the field properties in the modal:
   - **Field Label**: Display name for the field
   - **Field Name**: Technical name (used for data submission)
   - **Placeholder**: Help text shown in the field
   - **Required**: Mark as mandatory field
   - **Options**: For dropdowns, radio buttons, and checkboxes

#### Managing Fields
- **Edit**: Click the edit button on any field to modify its properties
- **Delete**: Remove fields you no longer need
- **Reorder**: Use the move button to drag fields to new positions

### 2. Template Management

#### Saving Templates
1. Build your form with desired fields
2. Click "Save Template"
3. Enter a name for your template
4. Template is saved to local storage

#### Loading Templates
1. Select a template from the dropdown
2. Click "Load Template"
3. Current form will be replaced with template content

#### Default Templates
The application comes with two pre-built templates:
- **Contact Form**: Basic contact information form
- **Survey Form**: Customer satisfaction survey with various field types

### 3. Dataverse Connection

#### Setting Up Connection
1. Enter your Dataverse URL (e.g., `https://yourorg.crm.dynamics.com/`)
2. Enter the target Entity Name (e.g., `new_customform`)
3. Click "Connect"
4. Wait for connection confirmation

#### Deploying to Dataverse
1. Ensure you're connected to Dataverse
2. Build your form with required fields
3. Click "Submit to Dataverse"
4. The system will create the form structure in your Dataverse environment
5. A deployable HTML form will be generated and downloaded

### 4. Form Preview and Export

#### Preview
- Click "Preview" to see how your form will look to end users
- Test form interactions and validation
- No data is submitted during preview

#### Export Options
- **JSON Export**: Download form configuration for backup or sharing
- **HTML Export**: Get a standalone HTML form file
- **Dataverse Form**: Generate a form that submits to Dataverse

## Field Types

| Field Type | Description | Configuration Options |
|------------|-------------|----------------------|
| **Text Input** | Single-line text field | Label, Name, Placeholder, Required |
| **Email** | Email address with validation | Label, Name, Placeholder, Required |
| **Number** | Numeric input field | Label, Name, Placeholder, Required |
| **Date** | Date picker | Label, Name, Required |
| **Dropdown** | Select from options | Label, Name, Options, Required |
| **Radio Buttons** | Single choice from options | Label, Name, Options, Required |
| **Checkboxes** | Multiple choice options | Label, Name, Options |
| **Textarea** | Multi-line text input | Label, Name, Placeholder, Required |
| **File Upload** | File attachment field | Label, Name, Required |

## Dataverse Integration Details

### Connection Requirements
- Valid Dataverse environment URL
- Appropriate permissions to create entities and forms
- Entity must exist or be created in Dataverse

### Data Mapping
- Form field names map to Dataverse entity attributes
- Field types are automatically converted to appropriate Dataverse data types
- Required fields are enforced both client-side and server-side

### Generated Forms
- Include client-side validation
- Handle file uploads (if applicable)
- Submit data via Dataverse Web API
- Provide user feedback on submission success/failure

## Customization

### Styling
Modify `styles.css` to customize:
- Color schemes
- Typography
- Layout and spacing
- Animations and transitions

### Functionality
Extend `script.js` to add:
- New field types
- Custom validation rules
- Additional export formats
- Enhanced Dataverse integration

### Templates
Add custom templates by modifying the `defaultTemplates` object in `script.js`

## Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## Troubleshooting

### Common Issues

#### Connection to Dataverse Fails
- Verify the Dataverse URL is correct
- Check if you have appropriate permissions
- Ensure CORS is configured correctly

#### Fields Not Saving
- Check browser console for JavaScript errors
- Ensure all required field properties are filled
- Try refreshing the page and rebuilding the form

#### Templates Not Loading
- Check if local storage is enabled in your browser
- Clear browser cache and reload the page
- Verify template names don't contain special characters

#### Export Not Working
- Ensure pop-up blockers are disabled
- Check if browser allows file downloads
- Try using a different browser

## Security Considerations

- Form data is processed client-side until submission
- Templates are stored in browser's local storage
- Dataverse connections use standard authentication
- File uploads should be validated server-side
- Implement proper CORS policies for production use

## Development Roadmap

### Planned Features
- [ ] Advanced drag-and-drop field reordering
- [ ] Conditional field logic
- [ ] Multi-page forms
- [ ] Advanced validation rules
- [ ] Integration with other databases
- [ ] Form analytics and reporting
- [ ] Collaborative form building
- [ ] API for programmatic form creation

## Contributing

This is an open-source project. Feel free to:
1. Report bugs and issues
2. Suggest new features
3. Submit pull requests
4. Improve documentation

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## Support

For support and questions:
1. Check this README for common solutions
2. Review the browser console for error messages
3. Test with the provided default templates
4. Verify Dataverse connection settings

---

**FLEX-FORM** - Making dynamic form creation simple and powerful! 🚀
