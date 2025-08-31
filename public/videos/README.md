# Videos Directory

This directory contains video explanations for research publications.

## File Structure
Each video file should be named according to the corresponding publication for easy identification.

## Recommended Filenames
Based on current publications:
- `learnable-differentiable-solver.mp4` - Learnable-Differentiable Finite Volume Solver
- `slotpi.mp4` - SlotPi: Physics-informed Object-centric Reasoning Models
- `conservation-informed.mp4` - Conservation-informed Graph Learning
- `p2c-net.mp4` - P²C Net: PDE-Preserved Coarse Correction Network
- `phympgn.mp4` - PhyMPGN: Physics-encoded Message Passing Graph Network
- `pdeformer.mp4` - PDEformer: Foundation Model for PDEs
- `mesh-transformation.mp4` - Deep learning-based reduced order model
- `quasi-sparsity.mp4` - Transportation origin-destination demand estimation
- `meta-auto-decoder.mp4` - Meta-auto-decoder for parametric PDEs
- `universal-pinns.mp4` - Universal PINNs Method
- `convergence-ada.mp4` - Convergence of augmented decomposition algorithm

## Usage
After adding video files here, update the corresponding `videoUrl` field in `/src/app/publications/page.tsx`:

```javascript
videoUrl: "/videos/filename.mp4"
```

## File Requirements
- Supported formats: .mp4, .webm, .mov
- Recommended: Keep files under 50MB for web performance
- Use H.264 encoding for MP4 files for best compatibility