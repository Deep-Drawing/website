# Deep Drawing Website

This is a [Next.js](https://nextjs.org) project for the Deep Drawing research lab website.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to Update Website Content

### 1. About Section

The about section content can be updated in two ways:

#### Text Content
- **File**: `src/components/aboutSection.tsx`
- **What you can update**: 
  - Paragraph text content (the `<p>` tags)
  - Section descriptions
- **How to update**: 
  - Edit the text within the `<p>` tags directly in the component
  - The content is structured in two main sections with accompanying images

#### Subtitles
- **Current subtitles**: "Subtitle 1" and "Subtitle 2" (lines 11 and 35)
- **To update subtitles**: 
  - **Option 1**: Contact Alex to update in Figma
  - **Option 2**: Update directly in the code by editing the `<h3>` tags in `aboutSection.tsx`

#### Images
- Images are located in `/public/images/`
- Current images: `about-1.png` and `about-2.png`
- To update: Replace the image files or update the `src` paths in the component

### 2. Publications

Publications are managed through a JSON file for easy updates.

#### File Location
- **File**: `src/data/publications.json`

#### Structure
```json
{
  "publications": [
    {
      "id": 1,
      "title": "Publication Title",
      "authors": ["Author 1", "Author 2", "Author 3"],
      "conference": "Conference Name",
      "year": 2024,
      "links": {
        "pdf": "https://example.com/paper.pdf",
        "code": "https://github.com/example/repo",
        "demo": "https://example.com/demo"
      }
    }
  ]
}
```

#### Required Fields
- `id`: Unique identifier (number)
- `title`: Publication title (string)
- `authors`: Array of author names
- `conference`: Conference or venue name (string)
- `year`: Publication year (number)
- `links`: Object containing optional links

#### Optional Link Fields
The `links` object can contain any combination of:
- `pdf`: Link to the paper PDF
- `code`: Link to code repository
- `demo`: Link to live demo
- Any other custom link types

#### How to Update
1. Open `src/data/publications.json`
2. Add new publications to the array or modify existing ones
3. Ensure each publication has a unique `id`
4. Include all required fields
5. Add optional links as needed

### 3. Lab Members

Lab members are managed through a JSON file with support for different member types.

#### File Location
- **File**: `src/data/labMembers.json`

#### Structure
```json
{
  "labMembers": [
    {
      "id": 1,
      "profilePictureIndex": "01",
      "name": "Member Name",
      "position": "Position Title",
      "website": "https://example.com"
    }
  ],
  "metadata": {
    "profilePictureBasePath": "/profile-pictures/",
    "profilePictureExtension": ".jpg"
  }
}
```

#### Required Fields
- `id`: Unique identifier (number)
- `profilePictureIndex`: Two-digit string for image filename (e.g., "01", "02")
- `name`: Full name (string)
- `position`: Position or title (string)
- `website`: Personal website URL (string)

#### Student Types
For students, include the word "Student" in the position field:
- `"Undergraduate Student"`
- `"Master's Student"`
- `"PhD Student"`

#### Alumni and Other Members
- **Alumni**: Note where they are headed next in the position field, or leave it blank (all individuals who are not students or professors are automatically categorized as alumni)

#### Profile Pictures
- Images should be placed in `/public/profile-pictures/`
- Naming convention: `{profilePictureIndex}.jpg` (e.g., `01.jpg`, `02.jpg`)
- The system automatically constructs the full path using the metadata

#### How to Add New Members
1. Open `src/data/labMembers.json`
2. Add a new object to the `labMembers` array
3. Assign a unique `id` (increment from the last one)
4. Set `profilePictureIndex` to the next available number (zero-padded)
5. Fill in `name`, `position`, and `website`
6. For students, ensure "Student" is included in the position
7. Add the corresponding profile picture to `/public/profile-pictures/`

#### Example: Adding a New Student
```json
{
  "id": 9,
  "profilePictureIndex": "09",
  "name": "Jane Doe",
  "position": "Graduate Student",
  "website": "https://janedoe.com"
}
```

## Development Notes

- The website uses Next.js with TypeScript
- Styling is done with Tailwind CSS
- Images are optimized using Next.js Image component

## Deployment

Reach out to Alex
