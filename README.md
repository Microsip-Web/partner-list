# Microsip Partners Directory

A dynamic directory system for Microsip's partners and regional offices across Mexico. This project provides a filterable interface to display partners based on location, certification level, and AS certification status.

## Features

- Filter partners by state
- Filter by certification level (Afiliado, Bronce, Plata, Oro, Elite)
- Filter by AS certification
- Display regional offices and partners with their respective badges
- Responsive card layout for partner information
- Interactive contact information (clickable phone numbers and email addresses)

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/microsip-partners.git
cd microsip-partners
```


2. Install dependencies:
```bash
npm install
or
yarn
```


3. Run development server:

```bash
npm run dev
or
yarn dev
```


## Building for Production

Before integrating with jsDelivr, you need to build the project:

```bash
npm run build
or
yarn build
```


This will create optimized files in the `dist` directory that can be used with jsDelivr CDN.

## jsDelivr Integration

After pushing to GitHub, your files can be accessed via jsDelivr using:

```bash
https://cdn.jsdelivr.net/gh/username/repo@version/dist/assets/filename
```	


## Project Structure

- `src/`
  - `data/` - Partner and office data organized by states
  - `typings/` - TypeScript type definitions
  - `main.ts` - Main application logic
  - `styles/` - CSS styles

## Data Structure

Partners and offices are organized by:
- Certification levels (NA = 0, Afiliado = 1, Bronce = 2, Plata = 3, Oro = 4, Elite = 5)
- Regional offices (Corporativo, Sureste, Noreste, Occidente, Golfo, Centro, Bajío, CDMX)
- States across Mexico

