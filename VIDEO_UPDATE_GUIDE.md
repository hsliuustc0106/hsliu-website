# Video Update Guide for Publications

## Overview
Each publication now includes a video explanation feature. Videos are stored in the `/public/videos/` directory and this guide explains how to add videos when they become available.

## Video Storage Structure
```
/public/videos/
├── learnable-differentiable-solver.mp4
├── slotpi.mp4
├── conservation-informed.mp4
├── p2c-net.mp4
├── phympgn.mp4
├── pdeformer.mp4
├── mesh-transformation.mp4
├── quasi-sparsity.mp4
├── meta-auto-decoder.mp4
├── universal-pinns.mp4
└── convergence-ada.mp4
```

## How to Add Videos

### Step 1: Add Video Files
1. Place your video files in the `/public/videos/` directory
2. Use descriptive filenames (e.g., `paper-name.mp4`)
3. Supported formats: `.mp4`, `.webm`, `.mov`

### Step 2: Update the Publication Object
In `/src/app/publications/page.tsx`, find the specific publication and update the `videoUrl` field:

```javascript
{
  title: "Your Paper Title",
  // ... other fields
  videoUrl: "/videos/your-video-filename.mp4", // Local video path
  // ... rest of fields
}
```

### Step 3: Supported Video Sources
The system supports both local and external videos:
- **Local videos**: `/videos/filename.mp4` (stored in public/videos/)
- **YouTube**: `https://www.youtube.com/watch?v=VIDEO_ID`
- **Vimeo**: `https://vimeo.com/VIDEO_ID`
- **Other platforms**: Any accessible video URL

### Step 4: Example Updates
```javascript
// For local videos in /public/videos/
{
  title: "SlotPi: Physics-informed Object-centric Reasoning Models",
  // ... other fields
  videoUrl: "/videos/slotpi.mp4", // Local video
  // ... rest of fields
},

// For external videos (YouTube, Vimeo, etc.)
{
  title: "Conservation-informed Graph Learning",
  // ... other fields
  videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID", // External video
  // ... rest of fields
}
```

### Step 5: Button Behavior
- **With Video**: Shows red "Video Explanation" button that opens video in new tab
- **Without Video**: Shows gray "Video Coming Soon" button (disabled)
- **Local Videos**: Open directly in browser's native video player
- **External Videos**: Open on their respective platforms

### Step 6: Build and Deploy
After adding videos and updating URLs:
```bash
npm run build
git add .
git commit -m "Added video explanations for [paper names]"
git push origin main
```

## Current Status
All publications are configured with empty `videoUrl: ""` fields and will show "Video Coming Soon" buttons until videos are added.

## Recommended File Naming Convention
Based on your publications, suggested video filenames:
- `learnable-differentiable-solver.mp4`
- `slotpi.mp4`
- `conservation-informed.mp4`
- `p2c-net.mp4`
- `phympgn.mp4`
- `pdeformer.mp4`
- `mesh-transformation.mp4`
- `quasi-sparsity.mp4`
- `meta-auto-decoder.mp4`
- `universal-pinns.mp4`
- `convergence-ada.mp4`

## File Size Considerations
- Keep video files under 50MB for good web performance
- Use compressed formats (H.264 for MP4)
- Consider creating shorter highlight videos (3-5 minutes) for key concepts

## Notes
- Videos open in new tabs for better user experience
- The interface gracefully handles missing videos
- Local videos load faster than external links
- No code changes needed beyond updating the URL strings
- The system is ready for progressive video addition